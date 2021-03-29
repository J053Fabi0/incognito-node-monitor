import React, { memo } from 'react';
import { BeaconList, CommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/components';
import { Styled } from './MonitorDetail.styled';
import ColumnText from '../ColumnText';

const MonitorDetail = () => {
    return (
        <Styled>
            <ColumnText title="Public key" content="1UstkmsXmN2rb6mgwefg1h8megM526TewwgPkAk1WXtoebfd3c" />
            <ColumnText title="Status" content="Pending Shard 1" />
            <ColumnText title="Endpoint" content="1.1.1.1:8746" />
            <BeaconList />
            <CommitteeActivity />
        </Styled>
    );
};

export default memo(MonitorDetail);
