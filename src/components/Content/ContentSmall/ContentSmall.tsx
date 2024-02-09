import React from 'react';

import './ContentSmall.css';

import { Row, Col, Typography, Button, Menu, List, Card, Avatar, Space } from 'antd';
import {
    CalendarFilled,
    HeartFilled,
    ProfileFilled,
    StarFilled,
    UserOutlined,
} from '@ant-design/icons';

export const ContentSmall = () => {
    const items = [
        {
            key: '1',
            icon: <CalendarFilled />,
            label: 'Рассписание тренеровки',
            link: '',
            linkTitle: 'Тренировки',
        },
        {
            key: '2',
            icon: <HeartFilled />,
            label: 'Назначить календарь',
            link: '',
            linkTitle: 'Календарь',
        },
        {
            key: '3',
            icon: <StarFilled />,
            label: 'Заполнить профиль',
            link: '',
            linkTitle: 'Профиль',
        },
    ];

    const cardItems = items.map((card, index) => (
        <Col key={index} span={8}>
            <Card title={card.label} bordered={false}>
                <Space>
                    {card.icon}
                    <span style={{ marginLeft: '5px' }}>{card.linkTitle}</span>
                </Space>
            </Card>
        </Col>
    ));
    return (
        <div className='site-card-wrapper'>
            <Row gutter={16}>{cardItems}</Row>
        </div>
    );
};
