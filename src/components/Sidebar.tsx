// import { Button, Layout, Menu } from 'antd';
// import Sider from 'antd/lib/layout/Sider';
// import Title from 'antd/lib/typography/Title';

// import React from 'react';

// export const Sidebar = () => {
//     const { Header, Footer, Sider, Content } = Layout;
//     return (
//         <Sider className='sidebar'>
//             <div>
//                 <Title level={1}>Clever</Title>
//             </div>
//             <Menu theme='dark' mode='inline'>
//                 <Menu.Item key='1'>Календарь</Menu.Item>
//                 <Menu.Item key='2'>Тренировки</Menu.Item>
//                 <Menu.Item key='3'>Достижения</Menu.Item>
//                 <Menu.Item key='4'>Профиль</Menu.Item>
//             </Menu>
//         </Sider>
//     );
// };

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
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
