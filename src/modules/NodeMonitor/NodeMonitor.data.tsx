import React from 'react';
import { Button } from 'antd';
import { TrashIcon } from 'src/components/Icons';

const TableMonitorKey = {
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
        title: 'Committee Chain',
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
        title: 'Vote Stats',
    },
    delete: {
        key: 'delete',
        title: 'Delete',
    },
};

const DEFAULT_COLUMN_TABLE_MONITOR: any = [
    {
        dataIndex: TableMonitorKey.name.key,
        title: TableMonitorKey.name.title,
        key: TableMonitorKey.name.key,
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
