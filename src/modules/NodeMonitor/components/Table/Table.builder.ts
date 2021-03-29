import { isEmpty } from 'lodash';
import moment from 'moment';
import { INodeName, ITableData } from './Table.interface';
import { ISyncStat } from '../MonitorDetail/MonitorDetail.interface';

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

export const NodesSyncStatBuilder = (data: any): ISyncStat | undefined => {
    if (isEmpty(data) || isEmpty(data.SyncState)) return undefined;
    const { Shard, Beacon } = data.SyncState;
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
