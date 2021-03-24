import { ITableData } from './Table.interface';
import { DEFAULT_LIMIT_ROWS } from './Table.constants';

export const makeData = (page: number): ITableData[] => {
    const start: number = page * DEFAULT_LIMIT_ROWS;
    const data = [];
    for (let index = start; index < start + DEFAULT_LIMIT_ROWS; index += 1) {
        data.push({
            id: `${index}`,
            name: `LienMinh${index}`,
            publicKey: '123-123-123-123-123-123-123-123',
            status: 'Waiting',
            committeeChainId: '1',
            syncState: 'Beacon Synced',
            voteStats: '100',
        });
    }
    return data;
};
