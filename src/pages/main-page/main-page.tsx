import React, { useState } from 'react';

import './main-page.css';
import { Button, Layout, Menu } from 'antd';

import { SidebarTst } from '@components/Sidebar/SidebarTst';
import { HeaderMain } from '@components/Header/Header';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export const MainPage: React.FC = () => {
    const { Header, Footer, Sider, Content } = Layout;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='container'>
            <Sider
                breakpoint='md'
                collapsedWidth='0'
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='sider'
            >
                <SidebarTst />

                <Button
                    style={{
                        color: 'red',
                        position: 'absolute',
                        top: '50%',
                        left: 0,
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
                {/* <ContentMain /> */}
            </Layout>
        </Layout>
    );
};
