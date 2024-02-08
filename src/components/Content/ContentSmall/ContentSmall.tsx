import React from 'react';

import './ContentSmall.css';

import { Row, Col, Typography, Button, Menu, List, Card, Avatar } from 'antd';
import {
    CalendarFilled,
    HeartFilled,
    ProfileFilled,
    StarFilled,
    UserOutlined,
} from '@ant-design/icons';

const { Paragraph, Link } = Typography;

export const ContentSmall = () => {
    const items = [
        {
            key: '1',
            icon: <CalendarFilled />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <StarFilled />,
            label: 'Достижения',
        },
    ];
    return (
        // <Row className='content__main-block--small'>
        //     <Col span={8}>
        //         <div className='block--small__box'>
        //             <Paragraph className='block--small__text'>Расписать тренировки</Paragraph>
        //             <Link href='#'>Расписать тренировки</Link>
        //         </div>
        //     </Col>
        //     <Col span={18}>
        //         <div className='block--small__box'>
        //             <Paragraph className='block--small__text'>Назначить календарь</Paragraph>
        //             <Link href='#'>Назначить календарь</Link>
        //         </div>
        //     </Col>
        //     <Col span={8}>
        //         <div className='block--small__box'>
        //             <Paragraph className='block--small__text'>Заполнить профиль</Paragraph>
        //             <Link href='#'>Профиль </Link>
        //         </div>
        //     </Col>
        // </Row>

        <List
            itemLayout='horizontal'
            dataSource={items}
            renderItem={(item) => (
                <List.Item >
                    <List.Item.Meta
                         
                        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                        title={<a href='https://ant.design'>{item.label}</a>}
                        description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                    />
                </List.Item>
            )}
        />
    );
};
