import React, { memo } from 'react';
import { BeaconList, CommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/components';
import { useSelector } from 'react-redux';
import { Styled } from './MonitorDetail.styled';
import ColumnText from '../ColumnText';
import { monitorDetailSelector } from './MonitorDetail.selector';

const MonitorDetail = () => {
    const { node } = useSelector(monitorDetailSelector);
    return (
        <Styled>
            {!!node && (
                <>
                    <ColumnText title="Public key" content={node.publicKey} />
                    <ColumnText
                        title="Status"
                        content={`${node.role ? `${node.role} ` : ''} Shard ${node.committeeChain}`}
                    />
                </>
            )}
            <BeaconList />
            <CommitteeActivity />
        </Styled>
    );
};

export default memo(MonitorDetail);
