import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';

export interface IMonitorDetailReducer {
    node?: ITableData;
    syncStat?: ISyncStat;
}

export interface IBeacon {
    isSync: boolean;
    lastInsert: Date;
    blockHeight: number;
    blockTime: Date;
    blockHash: string;
    name: string;
    message: string;
}

export interface IShard {
    isSync: boolean;
    lastInsert: Date;
    blockHeight: number;
    blockTime: Date;
    blockHash: string;
    chainId: string;
    name: string;
    message: string;
}

export interface ISyncStat {
    beacon: IBeacon;
    shards: IShard[];
}
