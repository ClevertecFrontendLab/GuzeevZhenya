import {
    CalendarFilled,
    ExperimentFilled,
    HeartFilled,
    ProfileFilled,
    StarFilled,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './sidebar.css';

import React from 'react';

export const SidebarTst = () => {
    return (
        <Layout className='sidebar'>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
                <div className='logo'>CleverFit</div>
            </div>
            <Menu
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
            <Button
                icon={<ExperimentFilled />}
                type='primary'
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '10%',
                    transform: 'translateX(-50%,-50%)',
                }}
            >
                Выход
            </Button>
        </Layout>
    );
};

// export const SidebarTst = () => {
//     return (
//         <Sider style={{ height: '100vh', backgroundColor: '#fff' }}>
//             <div style={{ textAlign: 'center', padding: '20px' }}>
//                 <div className='logo'>Clever</div>
//             </div>
//             <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
//                 <Menu.Item key='1' icon={<CalendarFilled />}>
//                     Календарь
//                 </Menu.Item>
//                 <Menu.Item key='2' icon={<HeartFilled />}>
//                     Тренировки
//                 </Menu.Item>
//                 <Menu.Item key='3' icon={<StarFilled />}>
//                     Достижения
//                 </Menu.Item>
//                 <Menu.Item key='4' icon={<ProfileFilled />}>
//                     Профиль
//                 </Menu.Item>
//             </Menu>
//             <Button
//                 type='primary'
//                 style={{
//                     position: 'absolute',
//                     bottom: '20px',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                 }}
//             >
//                 Выход
//             </Button>
//         </Sider>
//     );
// };
