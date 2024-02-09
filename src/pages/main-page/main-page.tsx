import React, { useState } from 'react';

import './main-page.css';
import { Button, Layout, Menu } from 'antd';

import { SidebarTst } from '@components/Sidebar/SidebarTst';
import { HeaderMain } from '@components/Header/Header';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ContentMain } from '@components/Content/Content';
import MyFooter from '@components/Footer/Footer';

export const MainPage: React.FC = () => {
    const { Header, Footer, Sider, Content } = Layout;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='container'>
            <Sider style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <SidebarTst />
                <Button
                    style={{
                        color: 'red',
                        position: 'absolute',
                        top: '50%',
                    }}
                    className='trigger'
                    type='text'
                    onClick={() => setCollapsed(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                />
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderMain />
                </Header>
                <ContentMain />
                <MyFooter />
            </Layout>
        </Layout>
    );
};
