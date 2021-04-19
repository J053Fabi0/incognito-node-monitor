import React from 'react';
import { Button } from 'antd';
import { TrashIcon } from 'src/components/Icons';
import { isEmpty } from 'lodash';
import { getNodeRoleStatus } from './components/Table/Table.utils';
import { TextRegular } from '../../components';
import { ellipsisRight } from '../../utils/ellipsis';

export const TableMonitorKey = {
    name: {
        key: 'name',
        title: 'Name',
    },
    shortMpk: {
        key: 'ellipsisMpk',
        title: 'Validator Public key',
    },
    role: {
        key: 'role',
        title: 'Role',
    },
    committeeChain: {
        key: 'committeeChain',
        title: 'Committee shard',
    },
    status: {
        key: 'status',
        title: 'Status',
    },
    syncState: {
        key: 'syncState',
        title: 'Sync State',
    },
    voteStats: {
        key: 'voteStats',
        title: 'Vote Stats (%)',
    },
    delete: {
        key: 'delete',
        title: 'Delete',
    },
    epoch: {
        key: 'epoch',
        title: 'Epoch',
    },
    chainId: {
        key: 'chainId',
        title: 'Chain Id',
    },
    reward: {
        key: 'reward',
        title: 'Reward',
    },
    voteCount: {
        key: 'voteCount',
        title: 'Vote Count (%)',
    },
    shardName: {
        key: 'name',
        title: 'Shard',
    },
    blockHeight: {
        key: 'blockHeight',
        title: 'Block Height',
    },
    lastInsert: {
        key: 'message',
        title: 'Last Insert',
    },
};

const DEFAULT_COLUMN_TABLE_MONITOR: any = [
    {
        dataIndex: TableMonitorKey.name.key,
        title: TableMonitorKey.name.title,
        key: TableMonitorKey.name.key,
        render: (text: string) => {
            return <TextRegular>{ellipsisRight({ str: text, limit: 15 })}</TextRegular>;
        },
    },
    {
        dataIndex: TableMonitorKey.shortMpk.key,
        title: TableMonitorKey.shortMpk.title,
        key: TableMonitorKey.shortMpk.key,
    },
    {
        dataIndex: TableMonitorKey.role.key,
        title: TableMonitorKey.role.title,
        key: TableMonitorKey.role.key,
        render: (text: string, record: any) => {
            const { colorRole, nodeRole, committee } = getNodeRoleStatus(record) as any;
            return (
                <div style={{ color: colorRole }}>{`${nodeRole} ${!isEmpty(committee) ? `\n${committee}` : ''}`}</div>
            );
        },
    },
    {
        dataIndex: TableMonitorKey.status.key,
        title: TableMonitorKey.status.title,
        key: TableMonitorKey.status.key,
    },
    {
        dataIndex: TableMonitorKey.syncState.key,
        title: TableMonitorKey.syncState.title,
        key: TableMonitorKey.syncState.key,
    },
    {
        dataIndex: TableMonitorKey.voteStats.key,
        title: TableMonitorKey.voteStats.title,
        key: TableMonitorKey.voteStats.key,
        render: (text: string) => <div style={{ whiteSpace: 'pre' }}>{text}</div>,
    },
];

export const getColumnsNodeMonitor = ({ deleteCell }: { deleteCell: (item: any) => void }) =>
    DEFAULT_COLUMN_TABLE_MONITOR.concat([
        {
            dataIndex: TableMonitorKey.delete.key,
            key: TableMonitorKey.delete.key,
            render: (text: any, record: any) => (
                <Button
                    onClick={(e: any) => {
                        e.stopPropagation();
                        deleteCell && deleteCell(record);
                    }}
                >
                    <TrashIcon />
                </Button>
            ),
        },
    ]);

export const getColumnsRedList = () => DEFAULT_COLUMN_TABLE_MONITOR;

export const COLUMN_TABLE_BEACON = [
    {
        dataIndex: TableMonitorKey.shardName.key,
        title: TableMonitorKey.shardName.title,
        key: TableMonitorKey.shardName.key,
    },
    {
        dataIndex: TableMonitorKey.blockHeight.key,
        title: TableMonitorKey.blockHeight.title,
        key: TableMonitorKey.blockHeight.key,
    },
    {
        dataIndex: TableMonitorKey.lastInsert.key,
        title: TableMonitorKey.lastInsert.title,
        key: TableMonitorKey.lastInsert.key,
        render: (text: string, record: any) => {
            const { color } = record;
            return <TextRegular color={color}>{text}</TextRegular>;
        },
    },
];

export const COLUMN_TABLE_COMMITTEE_ACTIVITY = [
    {
        dataIndex: TableMonitorKey.epoch.key,
        title: TableMonitorKey.epoch.title,
        key: TableMonitorKey.epoch.key,
    },
    {
        dataIndex: TableMonitorKey.chainId.key,
        title: TableMonitorKey.chainId.title,
        key: TableMonitorKey.chainId.key,
    },
    {
        dataIndex: TableMonitorKey.reward.key,
        title: TableMonitorKey.reward.title,
        key: TableMonitorKey.reward.key,
    },
    {
        dataIndex: TableMonitorKey.voteCount.key,
        title: TableMonitorKey.voteCount.title,
        key: TableMonitorKey.voteCount.key,
    },
];
