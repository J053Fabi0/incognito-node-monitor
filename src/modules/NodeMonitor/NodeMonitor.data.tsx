import React from 'react';
import { Button } from 'antd';
import { TrashIcon } from 'src/components/Icons';

export const getColumnsNodeMonitor = ({ deleteCell }: { deleteCell: () => void }) => [
    {
        dataIndex: 'name',
        title: 'Name',
        key: 'name',
    },
    { dataIndex: 'ellipsisMpk', title: 'Validator Public key', key: 'ellipsisMpk' },
    { dataIndex: 'role', title: 'Role', key: 'role' },
    {
        dataIndex: 'committeeChain',
        title: 'Committee Chain',
        key: 'committeeChain',
    },
    {
        dataIndex: 'status',
        title: 'Status',
        key: 'status',
    },
    {
        dataIndex: 'syncState',
        title: 'Sync State',
        key: 'syncState',
    },
    {
        dataIndex: 'voteStats',
        title: 'Vote Stats',
        key: 'voteStats',
        render: (text: string) => <div style={{ whiteSpace: 'pre' }}>{text}</div>,
    },
    {
        dataIndex: 'delete',
        key: 'delete',
        render: (text: any, record: any) => (
            <Button
                onClick={(e: any) => {
                    e.stopPropagation();
                    console.log(record);
                }}
            >
                <TrashIcon />
            </Button>
        ),
    },
];
