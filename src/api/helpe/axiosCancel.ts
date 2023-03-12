import axios, { AxiosRequestConfig, Canceler } from "axios";
import { isFunction } from "@/utils/is";
import qs from "querystring";

let pendingMap = new Map<string, Canceler>(); // 保存请求的标识和取消函数

export const getPendingUrl = (config: AxiosRequestConfig) =>
  [
    config.method,
    config.url,
    qs.stringify(config.data),
    qs.stringify(config.params),
  ].join("&");

export class AxiosCanceler {
  // 添加请求
  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);

    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }
  //   清除请求
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel();
      pendingMap.delete(url);
    }
  }

  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
