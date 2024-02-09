import React from 'react';
import { Layout, Typography } from 'antd';
import './ContentBig.css';

const { Title, Paragraph } = Typography;

export const ContentBig = () => {
    return (
        <Layout className='content__main-block--big'>
            <Typography>
                <Title level={3}>С CleverFit вы сможете:</Title>
                <Paragraph>
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                </Paragraph>
                <Paragraph>
                    — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
                    нормами и рекордами;
                </Paragraph>
                <Paragraph>
                    — создавать свой профиль, где вы можете загружать свои фото, видео и отзывы о
                    тренировках;
                </Paragraph>
                <Paragraph>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </Paragraph>
            </Typography>
        </Layout>
    );
};

 
