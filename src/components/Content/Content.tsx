import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import './Content.css';
import CleverFitFeatures from './CleverFitFeatures/CleverFitFeatures';
import { ContentMiddle } from './ContentMiddle/ContentMiddle';
import { ContentSmall } from './ContentSmall/ContentSmall';

export const ContentMain = () => {
    return (
        <Content className='content'>
            <CleverFitFeatures />
            <ContentMiddle />
            <ContentSmall />
        </Content>
    );
};
