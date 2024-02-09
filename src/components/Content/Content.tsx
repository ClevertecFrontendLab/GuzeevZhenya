import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import './Content.css';
import { ContentBig } from './ContentBig/ContentBig';
import { ContentMiddle } from './ContentMiddle/ContentMiddle';
import { ContentSmall } from './ContentSmall/ContentSmall';

export const ContentMain = () => {
    return (
        <Content className='content'>
            <ContentBig />
            <ContentMiddle />
            <ContentSmall />
        </Content>
    );
};
