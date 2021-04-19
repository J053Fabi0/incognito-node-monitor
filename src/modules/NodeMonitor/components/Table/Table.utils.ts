import { trim, uniqBy, isEmpty } from 'lodash';
import { INodeName, ITableData } from './Table.interface';
import { EMPTY_CELL } from './Table.constants';

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

export const getNodeRoleStatus = (node: ITableData) => {
    if (!node) return '';
    if (isEmpty(node?.role) || node?.role === '-' || node.role === 'Not stake' || node.committeeChain === 'Not stake')
        return {
            nodeRole: 'Not stake',
            committee: '',
            unStakeStatus: '',
        };

    const isBeacon = node.committeeChain === 'beacon';
    const nodeRole = node?.role;
    const committee = `${isBeacon ? '' : ' Shard'} ${node.committeeChain}`;
    const unStakeStatus = !node?.autoStake ? 'unstaking' : '';
    if (node.committeeChain === EMPTY_CELL)
        return {
            nodeRole,
            committee: '',
            unStakeStatus: '',
        };
    return {
        nodeRole,
        colorRole: nodeRole?.toLowerCase() === 'committee' ? '#34C759' : 'black',
        committee,
        unStakeStatus,
    };
};
