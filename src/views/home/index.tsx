import { useState, useEffect, useMemo, useCallback } from "react";
import { Tabs, Form } from "antd";
// import { store } from "@/store/store";
import { connect } from "react-redux";
import "./index.scss";
import Pie from "../dashboard/pie";
import BookSum from "./img/book-sum.png";
import AddPerson from "./img/add_person.png";
import AddTeam from "./img/add_team.png";
import Today from "./img/today.png";
import sum from "./img/book_sum.png";
import {  DXFormFilter, DXSelect } from "duxin-design"

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


const Home = () => {
  const [pieData, setPieData] = useState<any>(defaultPieData);
  const [date, setDate] = useState(1);
  const [total, setTotal] = useState(0);
  const [form] = Form.useForm()
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
    // console.log("store",store.getState())
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
    window.addEventListener("online", () => {
      console.log("联网")
    })

    window.addEventListener("offline", () => {
      console.log("网络不可用")
    })
  }, [date]);
  const renderPie = useMemo(() => <Pie data={pieData} />, [date]);
  const formItemList = [
    {
      position: "tab",
      key: "aa",
      placeholder: "今天"
    },
    {
      position: "tab",
      key: "aad",
      placeholder: "明天"
    },
    {
      position: "show",
      placeholder: "姓名",
      type: "input",
      key: "username",
      initialValue: "90",
      rules: [{ required: true, message: '姓名为必填项' }],
    },
    {
      position: "hidden",
      placeholder: "年龄",
      type: "input",
      key: "age",
      initialValue: "90",
      // rules: [{ required: true, message: '年龄为必填项'}],
    }
  ]
  const handleFinish = () => {
    console.log("表单", form)
    form.validateFields().then(values => {
      console.log("表单字段", values)
    }).catch(err => {
      console.log("err：", err)
    })
  }
  const defaultConfig = {
    options: [
      { itemKey: "123", itemValue: "test" },
      { itemKey: "124", itemValue: "test4" }
    ],
    styles: {
      width: "100px"
    },
    otherProps: {
      allowClear: true,
      onChange: (value: string, option: any,) => {
        console.log("value", value, option)
      }
    }
  }
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
        <div className="charts-box">
          <DXFormFilter formItemList={formItemList}
            form={form} handleFinish={() => handleFinish()} />
          <DXSelect config={defaultConfig} />
        </div>

      </div>
    </div>
  );
};

export default connect()(Home);
