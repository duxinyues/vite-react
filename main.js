// main.js
'use strict'
//  首先获取相应的元素
var recvideo = document.querySelector('video#recplayer');
var video = document.querySelector('video#player');
var btnRecord = document.querySelector('button#record');
var btnPlay = document.querySelector('button#recplay');
var btnDownload = document.querySelector('button#download');

// 用来存储数据
var buffer;

var mediaRecorder;

// 处理可行数据的函数
function handleDataAvailable(e) {
    //  用来判断 数据是否存在
    if (e && e.data && e.data.size > 0) {
        buffer.push(e.data);
    }
}

function stopRecord() {
    mediaRecorder.stop();
}

// 处理流的函数
function gotMediaStream(stream) {
    window.stream = stream;
    video.srcObject = stream;
}
// 处理错误的函数
function handleError(err) {
    console.log("getUserMedia:", err);
}
// 录制函数
function startRecord() {
    // 点击开始创建一个字符
    buffer = [];
    // 创建配置和 流
    var options = {
        mimeType: 'video/webm;codecs=vp8'
    }
    var constrants = {
        video: true,
        audio: true
    };

    // 判断一下传入的是否支持 当前的编码格式
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        //  输出错误信息
        console.error(`${options.mimeType} is not support`);
        return;
    }
    try {
        mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
        console.error('Failed to create MediaRecorder');
        return;
    }
    // 定义一个事件 ，当录制时执行该事件
    mediaRecorder.ondataavailable = handleDataAvailable;

    // 全部的检查操作执行完成后，开始录制视频
    mediaRecorder.start(10); // 10代表每10秒存储一次
}

function start() {
    // 检查设备的可行性
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia is not supported');
    } else {
        //  视频的格式
        var constraints = {
            video: {
                width: 640,
                height: 480,
                frameRate: 15
            },
            audio: true
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(gotMediaStream)
            .catch(handleError);
    }
}

// 进入首先创建一个视频
start();

// 录制事件
btnRecord.onclick = () => {
    // 点击一下开始录制，再点击一下停止录制
    //  textContent 的方法是获得 按钮的值
    if (btnRecord.textContent === 'Start Record') {
        startRecord();
        // 修改按钮内容
        btnRecord.textContent = 'Stop Record';
        // 修改其他按钮的可见性
        btnPlay.disabled = true;
        btnDownload.disabled = true;
    } else {
        // 首先停止录制
        stopRecord();
        //修改按钮内容
        btnRecord.textContent = 'Start Record';
        // 设置可见性
        btnPlay.disabled = false;
        btnDownload.disabled = false;
    }
}

//  添加视频播放功能
btnPlay.onclick = () => {
    // 创建一个blob ，blob 作用是用来存放数据的
    // 第一个参数是数据，第二个参数是指的参数的类型
    var blob = new Blob(buffer, { type: 'video/webm' });
    //  src 对应的是一个url串，er srcObject 对应的是一个流
    recvideo.src = window.URL.createObjectURL(blob);
    recvideo.srcObject = null;
    // 播放的控制标签
    recvideo.controls = true;
    //  使视频播放
    recvideo.play();
}
// 下载功能的实现
btnDownload.onclick = () => {
    var blob = new Blob(buffer, { type: 'video/webm' });
    // 创建一个url 
    var url = window.URL.createObjectURL(blob);
    // 创建一个a标签用来当做下载标签
    var a = document.createElement('a');
    // 给a标签赋值 下载连接
    a.href = url;
    // 不想让a标签显示出来
    a.style.display = 'none';
    // 指定下载的文件名称
    a.download = 'aaa.webm';
    // 点击a标签
    a.click();
} 