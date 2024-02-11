import './header.css';

import { Button, Layout, Typography } from 'antd';

import { SettingFilled } from '@ant-design/icons';

export const HeaderMain = () => {
    return (
        <>
            <Button style={{ backgroundColor: 'inherit', color: "#262626", outline: "none", border: "none" }} type='link' >Главная</Button>

            <Layout className='header'>
                <div className='header-content'>
                    <Typography.Title
                        type='secondary'
                        style={{ maxWidth: '81%', color: 'black' }}
                        level={1}
                    >
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </Typography.Title>
                    <Button type='link' style={{ backgroundColor: 'inherit', color: "#262626", outline: "none", border: "none" }} icon={<SettingFilled />} >
                        Настройки
                    </Button>
                </div>
            </Layout >
        </>
    );
};
