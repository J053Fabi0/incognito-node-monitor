export interface ITableReducer {
    currentPage: number;
    limitRowPerPage: number;
    limitPage: number;
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
