import React, { useState } from 'react';

import './main-page.css';
import { Button, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { SidebarTst } from '@components/Sidebar/SidebarTst';
import { HeaderMain } from '@components/Header/Header';
import { ContentMain } from '@components/Content/Content';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export const MainPage: React.FC = () => {
    const { Header, Footer, Sider, Content } = Layout;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='container'>
            <Sider breakpoint="md" collapsedWidth="0" theme='dark' trigger={null} collapsible collapsed={collapsed} className='sider'>
                <SidebarTst />

                <Button
                    type='text'
                    onClick={() => setCollapsed(!collapsed)}
                    className='triger-btn'
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                />
            </Sider>

            <Layout>
                <HeaderMain />
                <ContentMain />

                {/* <Header className='header'>
                    <Button>кнопка</Button>
                    <Layout className='header-content'>
                        <Title level={1}>
                            Приветствуем тебя в CleverFit — приложении,которое поможет тебе добиться
                            своей мечты!
                        </Title>
                        <Button>кнопка</Button>
                    </Layout>
                </Header>
                <Content>
                    <h2>Main Content</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Content>
                <Footer>
                    <p>Footer</p>
                </Footer> */}
            </Layout>
        </Layout>
    );
};
