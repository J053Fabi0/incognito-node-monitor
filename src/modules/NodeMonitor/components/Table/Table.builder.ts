import { isEmpty } from 'lodash';
import { INodeName, ITableData } from './Table.interface';

export const NodesListBuilder = (data: any, dataMapper: INodeName[]): ITableData[] => {
    if (isEmpty(data)) return [];
    return data.map((item: any) => {
        const { name: nodeName, publicKey } = dataMapper.find((value) => value.publicKey === item.MiningPubkey) || {};
        return {
            name: nodeName,
            publicKey,
            status: item?.Status,
            committeeChain: item?.CommitteeChain,
            syncState: item?.SyncState,
            voteStats: item?.VoteStat,
        };
    });
};
