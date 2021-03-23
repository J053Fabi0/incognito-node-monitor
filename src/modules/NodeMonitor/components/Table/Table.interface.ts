export interface ITableReducer {
    currentPage: number;
    rowsPerPage: number;
    limitPage: number;
    data: ITableData[];
    fetching: boolean;
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
