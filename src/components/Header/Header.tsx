import { Header } from 'antd/lib/layout/layout';
import './header.css';
import React from 'react';
import { Button, Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { SettingFilled } from '@ant-design/icons';

export const HeaderMain = () => {
    return (
        <Header className='header'>
            <Button className='header-button__options' type='primary'>
                Главная
            </Button>
            <Layout className='header-content'>
                <Title style={{ maxWidth: '75%' }} level={1}>
                    Приветствуем тебя в CleverFit — приложении,которое поможет тебе добиться своей
                    мечты!
                </Title>
                <Button icon={<SettingFilled />} className='header-button__options' type='primary'>
                    Настройки
                </Button>
            </Layout>
        </Header>
    );
};
