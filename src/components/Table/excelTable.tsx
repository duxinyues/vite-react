import React, { useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Button } from "antd";

interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}

const ExcelTable: React.FC = () => {
    const [form] = Form.useForm();
    const columns: any[] = [{
        title: 'name',
        dataIndex: 'name',
        width: "20%",
        render: (value: any, row: Item, index: number) => (<Form.Item name={`userInfo[${index}].name`} initialValue={value}>
            <Input />
        </Form.Item>)
    },
    {
        title: 'age',
        dataIndex: 'age',
        render: (value: any, row: Item, index: number) => (<Form.Item name={`userInfo[${index}].age`} initialValue={value}>
            <Input />
        </Form.Item>)
    },
    {
        title: 'address',
        dataIndex: 'address',
        render: (value: any, row: Item, index: number) => (<Form.Item name={`userInfo[${index}].address`} initialValue={value}>
            <Input />
        </Form.Item>)
    }];
    const data: Item[] = [
        {
            key: "12",
            name: "duxin",
            age: 12,
            address: "34345"
        }
    ]
    const onSave = async () => {
        form.validateFields().then(values => {
            console.log('表格字段', values)
        }).catch(err => {
            console.log("表格报错", err)
        })
    };
    return <Form form={form}>
        <Table columns={columns} dataSource={data} />
        <Button onClick={onSave}>保存</Button>
    </Form>
}


export default ExcelTable;