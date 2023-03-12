import { useState, useEffect, useMemo, useCallback } from "react";
import { Tabs } from "antd";
import { useEcharts } from "@/hooks/useEcharts";
import "./index.scss";
import Pie from "../dashboard/pie";
import Curve from "../dashboard/Curve";
import BookSum from "./img/book-sum.png";
import AddPerson from "./img/add_person.png";
import AddTeam from "./img/add_team.png";
import Today from "./img/today.png";
import sum from "./img/book_sum.png";

type BackendUser = {
  id: number;
  name: string;
  disabled: boolean;
};

type FrontendUser = {
  id: number;
  name: string;
};
const defaultPieData = [
  { value: 500, name: "GitHub 访问量" },
  { value: 1000, name: "官网 访问量" },
];
const formatDate = (str) => {
  const newTime = new Date(str);
  const year = newTime.getFullYear();
  const month = newTime.getMonth() + 1;
  let day = newTime.getDate();
  let hours = newTime.getHours();
  let min = newTime.getMinutes();
  let sec = newTime.getSeconds();

  day = day >= 10 ? day : "0" + day;
  hours = hours >= 10 ? hours : "0" + hours;
  min = min >= 10 ? min : "0" + min;
  sec = sec >= 10 ? sec : "0" + sec;

  return `${year}-${month}-${day} ${hours}:${min}:${sec}`;
};

const Home = () => {
  const [pieData, setPieData] = useState<any>(defaultPieData);
  const [date, setDate] = useState(1);
  const [total, setTotal] = useState(0);
  const tabsDate = [
    {
      key: "1",
      label: `近一周`,
      //   children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `近一月`,
      //   children: `Content of Tab Pane 1`,
    },
    {
      key: "3",
      label: `近三月`,
      //   children: `Content of Tab Pane 1`,
    },
    {
      key: "4",
      label: `近半年`,
      //   children: `Content of Tab Pane 1`,
    },
    {
      key: "5",
      label: `近一年`,
      //   children: `Content of Tab Pane 1`,
    },
  ];
  const changeTabs = useCallback(
    (e: any) => {
      setDate(e);
    },
    [date]
  );
  useEffect(() => {
    const newData = defaultPieData.map((item) => {
      item.value = Number((item.value * date * Math.random()).toFixed(0));
      return item;
    });
    const newTotal = newData.reduce((prev, curr) => {
      return prev + curr.value;
    }, 0);
    setTotal(() => newTotal);
    setPieData((data: any) => {
      return newData;
    });
  }, [date]);
  const renderPie = useMemo(() => <Pie data={pieData} />, [date]);
  return (
    <div className="home">
      <div className="top-box">
        <div className="top-title">数据统计</div>
        <Tabs defaultActiveKey="1" items={tabsDate} onChange={changeTabs} />
        <div className="top-content">
          <div className="item-left">
            <span className="left-title">访问总数</span>
            <div className="img-box">
              <img src={BookSum} alt="" />
            </div>
            <span className="left-number">{total}</span>
          </div>
          <div className="item-center">
            <div className="gitee-traffic traffic-box">
              <div className="traffic-img">
                <img src={AddPerson} alt="" />
              </div>
              <span className="item-value">{pieData[0].value}</span>
              <span className="traffic-name sle">Gitee 访问量</span>
            </div>
            <div className="gitHub-traffic traffic-box">
              <div className="traffic-img">
                <img src={AddTeam} alt="" />
              </div>
              <span className="item-value">{pieData[1].value}</span>
              <span className="traffic-name sle">GitHub 访问量</span>
            </div>
            <div className="today-traffic traffic-box">
              <div className="traffic-img">
                <img src={Today} alt="" />
              </div>
              <span className="item-value">...</span>
              <span className="traffic-name sle">今日访问量</span>
            </div>
            <div className="yesterday-traffic traffic-box">
              <div className="traffic-img">
                <img src={sum} alt="" />
              </div>
              <span className="item-value">...</span>
              <span className="traffic-name sle">昨日访问量</span>
            </div>
          </div>
          <div className="item-right">
            <div className="echarts-title">访问量占比</div>
            <div className="book-echarts">{renderPie}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
