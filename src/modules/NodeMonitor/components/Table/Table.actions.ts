import { IRootState } from 'src/redux/interface';
import { Dispatch } from 'redux';
import { debounce } from 'lodash';
import {
    ACTION_CHANGE_LIMIT_PAGE,
    ACTION_CHANGE_ROWS_PER_PAGE,
    ACTION_CHANGE_PAGE,
    ACTION_UPDATE_TABLE_DATA,
    ACTION_FETCHING_TABLE_DATA,
    ACTION_UPDATE_SEARCH_VALUE,
    ACTION_CLEAR_SEARCH,
} from './Table.actionsName';
import { ISearch, ITableData } from './Table.interface';
import { makeData } from './Table.utils';

export const actionChangePage = (payload: { page: number }) => ({
    type: ACTION_CHANGE_PAGE,
    payload,
});

export const actionChangeRowsPerPage = (payload: { rowsPerPage: number }) => ({
    type: ACTION_CHANGE_ROWS_PER_PAGE,
    payload,
});

export const actionChangeLimitPage = (payload: { limitPage: number }) => ({
    type: ACTION_CHANGE_LIMIT_PAGE,
    payload,
});

export const actionFetchingTableData = (payload: { fetching: boolean }) => ({
    type: ACTION_FETCHING_TABLE_DATA,
    payload,
});

export const actionUpdateTableData = (payload: { data: ITableData[]; currentPage?: number; limitPage?: number }) => ({
    type: ACTION_UPDATE_TABLE_DATA,
    payload,
});

export const actionFetchTableData = (page: number) => async (dispatch: Dispatch, getState: IRootState) => {
    try {
        dispatch(actionFetchingTableData({ fetching: true }));
        setTimeout(() => {
            const data = makeData(page);
            dispatch(actionUpdateTableData({ data, currentPage: page, limitPage: 100 }));
            dispatch(actionFetchingTableData({ fetching: false }));
        }, 2000);
    } catch (e) {
        console.debug('Fetch table data with error: ', e);
    } finally {
        // dispatch(actionFetchingTableData({ fetching: false }));
    }
};

export const actionUpdateSearchValue = (payload: { search: ISearch[] }) => ({
    type: ACTION_UPDATE_SEARCH_VALUE,
    payload,
});

export const actionSearch = () => (dispatch: Dispatch, getState: IRootState) => {
    try {
        dispatch(actionFetchingTableData({ fetching: true }));
        setTimeout(() => {
            const data = makeData(1);
            dispatch(actionUpdateTableData({ data, currentPage: 0, limitPage: 0 }));
            dispatch(actionFetchingTableData({ fetching: false }));
        }, 2000);
    } catch (e) {
        console.debug('Search error', e);
    }
};

const actionClearSearch = () => ({
    type: ACTION_CLEAR_SEARCH,
});

export const actionHandleClearSearch = () => (dispatch: Dispatch, getState: IRootState) => {
    try {
        dispatch(actionClearSearch());
        actionFetchTableData(0)(dispatch, getState);
    } catch (e) {
        console.debug('Clear search error', e);
    }
};
