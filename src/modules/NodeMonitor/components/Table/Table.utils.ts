import { trim } from 'lodash';
import { ITableData } from './Table.interface';
import { DEFAULT_LIMIT_ROWS } from './Table.constants';

export const makeData = (page: number): ITableData[] => {
    const start: number = page * DEFAULT_LIMIT_ROWS;
    const data = [];
    for (let index = start; index < 120; index += 1) {
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

export const getURLPathname = () => {
    if (typeof window === 'undefined') {
        return '';
    }
    return window.location.pathname;
};

export const splitLines = (t: string) => {
    return t.split(/\r\n|\r|\n/);
};

export const getParamsNodesInfo = (search: string) => {
    const array = splitLines(search);
    const formatData: any = [];
    const publicKeys = array.reduce((prevValue: string, item: string) => {
        let result = prevValue;
        const rawValue = trim(item);
        let subString = '';
        let name = '';
        const arrayRaw = rawValue.split(' ');
        if (arrayRaw.length === 1) {
            subString = `${arrayRaw[0]}`;
        }
        if (arrayRaw.length === 2) {
            subString = `${arrayRaw[1]}`;
            name = `${arrayRaw[0]}`;
        }
        result += `${subString},`;
        formatData.push({ name, publicKey: subString });
        return result;
    }, '');
    return {
        publicKeys,
        formatData,
    };
};
