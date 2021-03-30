import { isEmpty, isArray } from 'lodash';
import moment from 'moment';
import { INodeName, ITableData } from './Table.interface';
import { ICommittee, ISyncStat } from '../MonitorDetail/MonitorDetail.interface';
import { getVoteStat } from './Table.utils';

export const NodesListBuilder = (data: any, dataMapper: INodeName[]): ITableData[] => {
    if (isEmpty(data)) return [];
    return data.map((node: any) => {
        const { name: nodeName, publicKey } = dataMapper.find((value) => value.publicKey === node.MiningPubkey) || {};
        return {
            name: nodeName,
            publicKey,
            status: node?.Status,
            committeeChain: node?.CommitteeChain,
            syncState: node?.SyncState,
            voteStats: getVoteStat(node?.VoteStat),
        };
    });
};

export const NodesInfoBuilder = (data: any): ITableData | undefined => {
    if (isEmpty(data) || !isArray(data)) return;
    const node = data[0];
    return {
        publicKey: node?.MiningPubkey,
        status: node?.Status,
        committeeChain: node?.CommitteeChain,
        syncState: node?.SyncState,
        voteStats: getVoteStat(node?.VoteStat),
    };
};

export const NodesSyncStatBuilder = (data: any): ISyncStat | undefined => {
    if (isEmpty(data)) return undefined;
    const { Shard, Beacon } = data;
    let beaconMessage = '';
    if (Beacon?.BlockTime) {
        beaconMessage += `${moment(Beacon?.BlockTime).fromNow()} `;
    }
    if (isEmpty(beaconMessage)) {
        beaconMessage += Beacon.IsSync ? 'syncing' : 'not syncing';
    } else {
        beaconMessage += `(${Beacon.IsSync ? 'syncing' : 'not syncing'})`;
    }
    let result: any;
    result = {
        beacon: {
            name: 'Beacon',
            isSync: Beacon.IsSync,
            lastInsert: Beacon?.LastInsert,
            blockHeight: Beacon?.BlockHeight,
            blockTime: Beacon?.BlockTime,
            blockHash: Beacon?.BlockHash,
            message: beaconMessage,
        },
    };
    result = {
        ...result,
        shards: Object.keys(Shard).map((key: string) => {
            const item = Shard[key];
            let shardMessage = '';
            if (item?.BlockTime) {
                shardMessage += `${moment(item?.BlockTime).fromNow()} `;
            }
            if (isEmpty(shardMessage)) {
                shardMessage += item.IsSync ? 'syncing' : 'not syncing';
            } else {
                shardMessage += `(${item.IsSync ? 'syncing' : 'not syncing'})`;
            }
            return {
                name: `Shard ${key}`,
                isSync: item?.IsSync,
                lastInsert: item?.LastInsert,
                blockHeight: item?.BlockHeight,
                blockTime: item?.BlockTime,
                blockHash: item?.BlockHash,
                chainId: item?.ChainId,
                message: shardMessage,
            };
        }),
    };
    return result;
};

export const NodesCommitteeInfoBuilder = (data: any): ICommittee[] | undefined => {
    if (isEmpty(data)) return undefined;
    return data.map((item: any) => {
        return {
            epoch: item?.Epoch,
            reward: item?.Reward,
            time: item?.Time,
            totalPropose: item?.TotalPropose,
            totalVote: item?.TotalVote,
            voteCount: '',
        };
    });
};
