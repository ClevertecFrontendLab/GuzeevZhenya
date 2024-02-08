import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React, { useState } from 'react';

export const Sidebar: React.FC = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const items = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: <UploadOutlined />,
            label: 'Профиль',
        },
    ];

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Clever<span>fit</span>
                </Typography.Title>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={items.map((el) => ({
                        key: el.key,
                        label: el.label,
                    }))}
                />
            </Sider>
        </Layout>
    );
};
