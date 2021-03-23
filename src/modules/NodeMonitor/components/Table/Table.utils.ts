import { ITableData } from './Table.interface';

export const makeData = (page: number): ITableData[] => {
    const start: number = page * 15;
    const data = [];
    for (let index = start; index < start + 15; index += 1) {
        data.push({
            id: `${index}`,
            name: `LienMinh${index}`,
            publicKey: '123-123',
            status: 'Waiting',
            committeeChainId: '1',
            syncState: 'Beacon Synced',
            voteStats: '100',
        });
    }
    return data;
};
