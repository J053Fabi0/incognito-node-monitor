import { trim, uniqBy, isEmpty } from 'lodash';
import { INodeName } from './Table.interface';

export const getURLPathname = () => {
    if (typeof window === 'undefined') {
        return '';
    }
    return window.location.pathname;
};

export const getURLSearchParams = (search?: string) => {
    if (typeof window === 'undefined') {
        return {};
    }
    return new URLSearchParams(search || window.location.search);
};

export const splitLines = (t: string) => {
    return t.split(/\r\n|\r|\n/);
};

export const getParamsNodesInfo = (nodes: INodeName[], currentPage: number, rowPerPage: number) => {
    const startIndex = currentPage * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    let listNodes = nodes || [];
    const totalRows = listNodes.length;
    listNodes = listNodes.slice(startIndex, endIndex);
    const result = listNodes.reduce(
        (prevValue: any, element: any, index) => {
            let { strKeys, mapper } = prevValue;
            const { name, publicKey } = element;
            strKeys += publicKey + (index === listNodes.length - 1 ? '' : ',');
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

export const getMiningPublicKey = () => {
    let mpk = '';
    try {
        const urlParams: any = getURLSearchParams();
        mpk = urlParams.get('mpk');
    } catch (e) {
        console.debug('Cant get mpk');
    }
    return mpk;
};

export const getVoteStat = (votes: any) => (votes || []).join('\n');
