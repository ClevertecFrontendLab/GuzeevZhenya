import React from 'react';
import { Layout, Typography } from 'antd';
import './ContentMiddle.css';

const { Title, Paragraph } = Typography;

export const ContentMiddle = () => {
    return (
        <Layout className='content__main-block--middle'>
            <Typography>
                <Paragraph>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                    Не откладывай на завтра — начни тренироваться уже сегодня!
                </Paragraph>
            </Typography>
        </Layout>
    );
};
