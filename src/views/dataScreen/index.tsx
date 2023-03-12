/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 23:23:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 17:19:31
 * @FilePath: \vite-react\src\views\dataScreen\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { randomNum } from "@/utils";
import DataTime from "./components/Time";
import titleImg from "./img/dataScreen-title.png";
import ChinaMap from "./components/ChinaMap";
import RealTimeStatistics from "./components/RealTimeStatistics";
import WeightRatioChart from "./components/WeightRatioChart";
import AgeRatioChart from "./components/AgeRatioChart";
import OverNext30Chart from "./components/OverNext30Chart";
import HotPlateChart from "./components/HotPlateChart";
import AnnualUseChart from "./components/AnnualPhysicalChart";
import PlatformSourceChart from "./components/PlatformSourceChart";

function DataScreen() {
  const navigate = useNavigate();
  const [data, setDate] = useState<any>(
    new Array(30).fill("").map((val) => {
      val = randomNum(1, 100);
      return val;
    })
  );
  const dataScreenRef = useRef<HTMLDivElement>(null);
  const getScale = (width = 1920, height = 1080) => {
    let w = window.innerWidth / width;
    let h = window.innerHeight / height;
    return w < h ? w : h;
  };
  const resize = () => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
    }
  };
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(() => {
        return new Array(30).fill("").map((val) => {
          val = randomNum(1, 100);
          return val;
        });
      });
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useLayoutEffect(() => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
      dataScreenRef.current.style.width = "1920px";
      dataScreenRef.current.style.height = "1080px";
    }
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="screen-container">
      <div className="dataScreen" ref={dataScreenRef}>
        <div className="header">
          <div className="left">
            <span
              className="screening"
              onClick={() => {
                navigate("/");
              }}
            >
              首页
            </span>
          </div>
          <div className="center">
            <div className="title">
              <span>物流平台</span>
              <div className="warning">平台预警信息(2)条</div>
            </div>
          </div>
          <div className="right">
            <span className="download">统计报告</span>
            <DataTime />
          </div>
        </div>
        <div className="main">
          <div className="main-left">
            <div className="top">
              <div className="title">
                <span>实时物流</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart">
                <RealTimeStatistics />
              </div>
            </div>
            <div className="center">
              <div className="title">
                <span>重量比例</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart">
                <WeightRatioChart />
              </div>
            </div>
            <div className="bottom">
              <div className="title">
                <span>物品类型</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart">
                <AgeRatioChart />
              </div>
            </div>
          </div>
          <div className="main-center">
            <div className="main-map">
              <div className="title">物流实时流向</div>
              <ChinaMap />
            </div>
            <div className="center-bottom">
              <div className="title">
                <span>未来30天物流趋势图</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart">
                <OverNext30Chart data={data} />
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="top">
              <div className="title">
                <span>热门区域排行</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart">
                <HotPlateChart />
              </div>
            </div>
            <div className="center">
              <div className="title">
                <span>年度物流量对比</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart"><AnnualUseChart /></div>
            </div>
            <div className="bottom">
              <div className="title">
                <span>渠道数据统计</span>
                <img src={titleImg} alt="" />
              </div>
              <div className="chart"><PlatformSourceChart /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataScreen;
