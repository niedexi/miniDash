// pages/orders.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import * as XLSX from 'xlsx';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://www.baofengagro.com/api-order/all')
            .then(response => {
                setOrders(response.data);
            });
    }, []);

    const downloadExcel = () => {
        const ws = XLSX.utils.json_to_sheet(orders.map(order => ({
            姓名: order.name,
            电话: order.phone,
            省份: order.province,
            地区: order.region,
            产品: order.product,
            数量: order.quantity,
            日期: new Date(order.time).toISOString().split('T')[0],
            备注: order.memo,
        })));

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, "orders.xlsx");
    };

    return (
        <Layout>
            <h1>订单</h1>
            <button onClick={downloadExcel}>下载 Excel</button>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>电话</th>
                        <th>省份</th>
                        <th>地区</th>
                        <th>产品</th>
                        <th>数量</th>
                        <th>日期</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.province}</td>
                            <td>{order.region}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{new Date(order.time).toISOString().split('T')[0]}</td>
                            <td>{order.memo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}
