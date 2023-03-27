/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 13:47:29
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-27 11:35:03
 * @FilePath: \vite-react\src\api\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import NProgress from "@/config/nprogress";
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ResultData } from "./interface";
import { ResultEnum } from "@/enums/http";
import { checkStatus } from "./help/checkStatus";
import { AxiosCanceler } from "./help/axiosCancel";
import { setToken } from "@/store/redux/global/action";
import { message } from "antd";
import { store } from "@/store/store";

const axiosCancel = new AxiosCanceler();

const config = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 10000,
  withCredentials: true, // 跨域允许携带token
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    // 请求拦截器
    this.service.interceptors.request.use(
      (config: any) => {
        NProgress.start();
        axiosCancel.addPending(config);
        config.headers!.noLoading;

        const token: string = store.getState().global.token;
        return {
          ...config,
          headers: {
            ...config.headers,
            "x-access-token": token, // token
          },
        };
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );

    // 响应拦截器,返回信息同意处理
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        NProgress.done();
        axiosCancel.removePending(config);
        console.log("code", data);
        if (data.code == ResultEnum.OVERDUE) {
          store.dispatch(setToken(""));
          message.error(data.message);
          window.location.hash = "/login";
          return Promise.reject(data);
        }

        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.message);
          return Promise.reject(data);
        }

        return data;
      },
      async (err: AxiosError) => {
        const { response } = err;
        NProgress.done();
        if (err.message.indexOf("timeout") !== -1) {
          return message.error("请求超时，请稍后再试");
        }

        if (response) checkStatus(response.status);

        if (!window.navigator.onLine) window.location.hash = "/500";

        return Promise.reject(err);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }

  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(config);
