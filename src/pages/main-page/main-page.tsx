import React, { useState } from 'react';

import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import tsLogo from '/ts.svg';
import './main-page.css';
import { Button, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Sidebar } from '@components/Sidebar';

export const MainPage: React.FC = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [count, setCount] = useState(0);

    return (
        // <Layout className='main-page__main-block'>
        //     <Sider>Sider</Sider>
        //     <Layout >
        //         <Header>Header</Header>
        //         <Content>Content</Content>
        //         <Footer>Footer</Footer>
        //     </Layout>
        // </Layout>
        <Layout className='container'>
            <Layout style={{ minHeight: '100vh', width: '600px' }}>
                <Sidebar />
            </Layout>

            <Layout>
                <Header className='header'>
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
                </Footer>
            </Layout>
        </Layout>
    );
};
