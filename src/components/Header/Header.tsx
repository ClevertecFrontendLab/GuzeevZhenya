import './header.css';

import { Button, Layout, Typography } from 'antd';

import { SettingFilled } from '@ant-design/icons';

export const HeaderMain = () => {
    return (
        <>
            <Button type='primary'>Главная</Button>

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
                    <Button icon={<SettingFilled />} type='primary'>
                        Настройки
                    </Button>
                </div>
            </Layout>
        </>
    );
};
