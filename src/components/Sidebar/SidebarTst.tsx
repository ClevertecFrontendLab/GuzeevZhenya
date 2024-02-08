import {
    CalendarFilled,
    CalendarOutlined,
    CarryOutFilled,
    CloudUploadOutlined,
    HeartFilled,
    HeartOutlined,
    OrderedListOutlined,
    ProfileFilled,
    ProfileOutlined,
    StarFilled,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './sidebar.css';

import React from 'react';

export const SidebarTst = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='logo'>Clever</div>
            </div>
            <Menu
                theme='dark'
                mode='inline'
                className='sidebar-menu__items'
                defaultSelectedKeys={['1']}
                items={[
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
                    {
                        key: '4',
                        icon: <ProfileFilled />,
                        label: 'Профиль',
                    },
                ]}
            />
        </>
    );
};
