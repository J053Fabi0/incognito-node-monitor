export interface ITableReducer {
    currentPage: number;
    rowsPerPage: number;
    limitPage: number;
    data: ITableData[];
    fetching: boolean;
    isSearching: boolean;
    search: ISearch[];
}

export interface ITableData {
    id: string;
    name: string;
    publicKey: string;
    status: string;
    committeeChainId: string;
    syncState: string;
    voteStats: string;
}

export interface ISearch {
    name?: string;
    publicKey?: string;
    ipPort?: string;
}
