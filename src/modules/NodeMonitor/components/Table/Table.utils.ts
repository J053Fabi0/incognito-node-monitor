import { trim, uniqBy } from 'lodash';
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
            committeeChain: '1',
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

export const getParamsNodesInfo = (search: string, currentPage: number, rowPerPage: number) => {
    const startIndex = currentPage * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    let listNodes = uniqBy(
        splitLines(search).map((item: string) => {
            const rawValue = trim(item);
            const arrayRaw = rawValue.split(' ');
            let publicKey = '';
            let name = '';
            if (arrayRaw.length === 1) {
                publicKey = `${arrayRaw[0]}`;
            }
            if (arrayRaw.length === 2) {
                publicKey = `${arrayRaw[1]}`;
                name = `${arrayRaw[0]}`;
            }
            return { name, publicKey };
        }),
        (element) => {
            return element.publicKey;
        },
    );
    const totalRows = listNodes.length;
    listNodes = listNodes.slice(startIndex, endIndex);
    const result = listNodes.reduce(
        (prevValue: any, element: any) => {
            let { strKeys, mapper } = prevValue;
            const { name, publicKey } = element;
            strKeys += `${publicKey},`;
            mapper = mapper.concat([
                {
                    name,
                    publicKey,
                },
            ]);
            return { strKeys, mapper };
        },
        { strKeys: '', mapper: [] },
    );
    return {
        ...result,
        totalRows,
    };
};
