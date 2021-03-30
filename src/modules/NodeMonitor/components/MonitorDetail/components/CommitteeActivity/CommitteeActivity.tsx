import React from 'react';
import { useSelector } from 'react-redux';
import { MockupColumnsCommittee } from 'src/modules/NodeMonitor/NodeMonitor.mockupData';
import { monitorDetailSelector } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.selector';
import Table from 'src/components/Table';
import { Styled } from './styled';

const CommitteeActivity = React.memo(() => {
    const { committee } = useSelector(monitorDetailSelector);

    return (
        <Styled>
            <Table data={committee} columns={MockupColumnsCommittee} showHeader />
        </Styled>
    );
});

export default CommitteeActivity;
