export interface ITableReducer {
    currentPage: number;
    rowsPerPage: number;
    limitPage: number;
    data: ITableData[];
    fetching: boolean;
    isSearching: boolean;
    search: string;
    visibleModal: boolean;
    role?: string;
}

export interface ITableData {
    name: string;
    publicKey: string;
    status: string;
    committeeChain: string;
    syncState: string;
    voteStats: string;
}

export interface INodeName {
    name: string;
    publicKey: string;
}
