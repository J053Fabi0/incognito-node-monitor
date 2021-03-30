import React, { memo } from 'react';
import { BeaconList, CommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/components';
import { useSelector } from 'react-redux';
import LoadingOverlay from 'src/components/LoadingOverlay';
import { Styled } from './MonitorDetail.styled';
import ColumnText from '../ColumnText';
import { monitorDetailSelector } from './MonitorDetail.selector';
import enhance from './MonitorDetail.enhance';

interface IProps {
    isWebview: boolean;
}

const MonitorDetail = React.memo(({ isWebview }: IProps & any) => {
    const { node, fetching } = useSelector(monitorDetailSelector);
    const renderContent = () => (
        <>
            <BeaconList />
            <CommitteeActivity />
        </>
    );
    return (
        <Styled isWebview={isWebview}>
            {!!node && (
                <>
                    <ColumnText title="Public key" content={node.publicKey} />
                    <ColumnText
                        title="Status"
                        content={`${node.role ? `${node.role} ` : ''} Shard ${node.committeeChain}`}
                    />
                </>
            )}
            {fetching ? <LoadingOverlay /> : renderContent()}
        </Styled>
    );
});

export default enhance(MonitorDetail);
