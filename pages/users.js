// pages/users.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://www.baofengagro.com/api-user/all')
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <Layout>
            <h1>用户</h1>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>电话</th>
                        <th>省份</th>
                        <th>地区</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.province}</td>
                            <td>{user.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}
