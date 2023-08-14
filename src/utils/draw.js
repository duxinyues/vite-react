/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-07-31 00:33:21
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-01 00:25:08
 * @FilePath: /vite-react/src/utils/draw.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
function Draw(canvas, degree, config = {}, isDraw) {
    if (!(this instanceof Draw)) {
        return new Draw(canvas, config);
    }
    if (!canvas) {
        return;
    }
    let { width, height } = window.getComputedStyle(canvas, null);
    width = width.replace('px', '');
    height = height.replace('px', '');

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.isDraw = isDraw;
    const context = this.context;

    // 根据设备像素比优化canvas绘图
    const devicePixelRatio = window.devicePixelRatio;
    if (devicePixelRatio) {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.height = height * devicePixelRatio;
        canvas.width = width * devicePixelRatio;
        context.scale(devicePixelRatio, devicePixelRatio);
    } else {
        canvas.width = width;
        canvas.height = height;
    }

    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    Object.assign(context, config);

    const { left, top } = canvas.getBoundingClientRect();
    const isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(
        navigator.userAgent
    );
    // 移动端性能太弱, 去掉模糊以提高手写渲染速度
    if (!isMobile) {
        context.shadowBlur = 1;
        context.shadowColor = 'black';
    }
    let pressed = false;
    let beginPoint = {};

    const getPos = e => {
        e = isMobile ? e.touches[0] : e;
        return {
            x: e.clientX - left + 0.5,
            y: e.clientY - top + 0.5,
        };
    };
    const start = e => {
        e.preventDefault();
        pressed = true;
        beginPoint = getPos(e);
        this.drawLine(beginPoint, beginPoint);
    };
    const move = e => {
        if (!pressed) return;
        const endPoint = getPos(e);
        this.drawLine(beginPoint, endPoint);
        beginPoint = endPoint;
    };
    const requestAnimationFrame = window.requestAnimationFrame;
    const optimizedMove = requestAnimationFrame
        ? e => {
            requestAnimationFrame(() => {
                move(e);
            });
        }
        : move;

    if (isMobile) {
        canvas.addEventListener('touchstart', start);
        canvas.addEventListener('touchmove', optimizedMove);
    } else {
        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', optimizedMove);
        ['mouseup', 'mouseleave'].forEach(event => {
            canvas.addEventListener(event, () => {
                pressed = false;
                beginPoint = {};
            });
        });
    }

    // 重置画布坐标系
    if (typeof degree === 'number') {
        this.degree = degree;
        context.rotate((degree * Math.PI) / 180);
        switch (degree) {
            case -90:
                context.translate(-height, 0);
                break;
            case 90:
                context.translate(0, -width);
                break;
            case -180:
            case 180:
                context.translate(-width, -height);
                break;
            default:
        }
    }
}
Draw.prototype = {
    drawLine(beginPoint, endPoint) {
        this.isDraw = true;
        this.context.beginPath();
        this.context.moveTo(beginPoint.x, beginPoint.y);
        this.context.lineTo(endPoint.x, endPoint.y);
        this.context.stroke();
        this.context.closePath();
    },
    scale(width, height, canvas = this.canvas) {
        const w = canvas.width;
        const h = canvas.height;
        width = width || w;
        height = height || h;
        if (width !== w || height !== h) {
            const tmpCanvas = document.createElement('canvas');
            const tmpContext = tmpCanvas.getContext('2d');
            tmpCanvas.width = width;
            tmpCanvas.height = height;
            tmpContext.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
            canvas = tmpCanvas;
        }
        return canvas;
    },
    rotate(degree, image = this.canvas) {
        degree = ~~degree;
        if (degree !== 0) {
            const maxDegree = 180;
            const minDegree = -90;
            if (degree > maxDegree) {
                degree = maxDegree;
            } else if (degree < minDegree) {
                degree = minDegree;
            }

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const height = image.height;
            const width = image.width;
            const degreePI = (degree * Math.PI) / 180;

            switch (degree) {
                // 逆时针旋转90°
                case -90:
                    canvas.width = height;
                    canvas.height = width;
                    context.rotate(degreePI);
                    context.drawImage(image, -width, 0);
                    break;
                // 顺时针旋转90°
                case 90:
                    canvas.width = height;
                    canvas.height = width;
                    context.rotate(degreePI);
                    context.drawImage(image, 0, -height);
                    break;
                // 顺时针旋转180°
                case 180:
                    canvas.width = width;
                    canvas.height = height;
                    context.rotate(degreePI);
                    context.drawImage(image, -width, -height);
                    break;
                default:
            }
            image = canvas;
        }
        return image;
    },
    getPNGImage(canvas = this.canvas) {
        return canvas.toDataURL('image/png');
    },
    getJPGImage(canvas = this.canvas) {
        return canvas.toDataURL('image/jpeg', 0.5);
    },
    downloadPNGImage(canvas = this.canvas) {
        let image = canvas.toDataURL('image/png');
        const url = image.replace(
            'image/png',
            'image/octet-stream;Content-Disposition:attachment;filename=test.png'
        );
        window.location.href = url;
    },
    dataURLtoBlob(dataURL) {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bStr = atob(arr[1]);
        let n = bStr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bStr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },
    clear() {
        let width;
        let height;
        this.isDraw = false;
        switch (this.degree) {
            case -90:
            case 90:
                width = this.height;
                height = this.width;
                break;
            default:
                width = this.width;
                height = this.height;
        }
        this.context.clearRect(0, 0, width, height);
    },
    upload(blob, url, success, failure) {
        const formData = new FormData();
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        formData.append('image', blob, 'sign');

        xhr.open('POST', url, true);
        xhr.onload = () => {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                success(xhr.responseText);
            } else {
                failure();
            }
        };
        xhr.onerror = e => {
            if (typeof failure === 'function') {
                failure(e);
            } else {
                console.log(`upload img error: ${e}`);
            }
        };
        xhr.send(formData);
    },
};
export default Draw;
