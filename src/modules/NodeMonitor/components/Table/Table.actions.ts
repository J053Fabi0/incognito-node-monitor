import { IRootState } from 'src/redux/interface';
import { Dispatch } from 'redux';
import {
    ACTION_CHANGE_LIMIT_PAGE,
    ACTION_CHANGE_ROWS_PER_PAGE,
    ACTION_CHANGE_PAGE,
    ACTION_UPDATE_TABLE_DATA,
    ACTION_FETCHING_TABLE_DATA,
} from './Table.actionsName';
import { ITableData } from './Table.interface';
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
