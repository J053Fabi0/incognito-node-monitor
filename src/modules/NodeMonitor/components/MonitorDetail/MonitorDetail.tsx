import React from 'react';
import { BeaconList, CommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/components';
import { useSelector } from 'react-redux';
import LoadingOverlay from 'src/components/LoadingOverlay';
import { isEmpty } from 'lodash';
import { Row } from 'antd';
import { CopyIcon } from 'src/components/Icons';
import copy from 'copy-to-clipboard';
import { TextRegular } from 'src/components';
import { Styled } from './MonitorDetail.styled';
import { monitorDetailSelector } from './MonitorDetail.selector';
import enhance from './MonitorDetail.enhance';
import RowText from '../RowText';
import { EMPTY_CELL } from '../Table/Table.constants';
import { getNodeRoleStatus } from '../Table/Table.utils';

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

    const renderRightMpk = () => {
        return (
            <Row>
                <TextRegular color="text4">{node?.ellipsisMpk}</TextRegular>
                <CopyIcon
                    onClick={() => {
                        copy(node?.publicKey || '');
                    }}
                />
            </Row>
        );
    };

    const renderRightStatus = () => {
        const { nodeRole, colorRole, committee, unStakeStatus } = getNodeRoleStatus(node!) as any;
        return (
            <Row>
                <TextRegular color={colorRole || 'text4'}>{nodeRole}</TextRegular>
                {!isEmpty(committee) && (
                    <TextRegular color="text4" ml="8px">
                        {committee}
                    </TextRegular>
                )}
                {!isEmpty(unStakeStatus) && (
                    <TextRegular color="text4" ml="8px">
                        {unStakeStatus}
                    </TextRegular>
                )}
            </Row>
        );
    };

    const renderRightSyncState = () => {
        const isOffline = node?.status === 'Offline';
        const status = isOffline ? 'Offline' : node?.syncState || EMPTY_CELL;
        return <TextRegular color={`${isOffline ? 'red1' : 'text4'}`}>{status}</TextRegular>;
    };

    return (
        <Styled isWebview={isWebview}>
            {!!node && (
                <div style={{ marginBottom: 25 }}>
                    <RowText title="Validator Public key" rightComponent={renderRightMpk()} />
                    <RowText title="Role" rightComponent={renderRightStatus()} />
                    <RowText title="Status" rightComponent={renderRightSyncState()} />
                </div>
            )}
            {fetching ? <LoadingOverlay /> : renderContent()}
        </Styled>
    );
});

export default enhance(MonitorDetail);
