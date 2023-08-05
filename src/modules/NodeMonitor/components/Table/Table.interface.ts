export interface ITableReducer {
  currentPage: number;
  rowsPerPage: number;
  limitPage: number;
  data: ITableData[];
  fetching: boolean;
  isSearching: boolean;
  search: string;
  visibleModal: boolean;
  listNode: INodeName[];
}

export interface ITableData {
  key: string;
  name?: string;
  publicKey: string;
  status: string;
  committeeChain: string;
  syncState: string;
  voteStats: string;
  role: string;
  ellipsisMpk: string;
  autoStake: boolean;
  nextEventMsg: string;
  slashed: boolean;
  oldVersion: boolean;
  version: string;
}

export interface INodeName {
  name: string;
  publicKey: string;
}
