import React, { memo } from 'react';
import { Styled } from './MonitorDetail.styled';

const MonitorDetail = () => {
    return (
        <Styled>
            <div style={{ width: '100%', height: 200 }} />
            <div style={{ width: '100%', height: 2000 }} />
        </Styled>
    );
};

export default memo(MonitorDetail);
