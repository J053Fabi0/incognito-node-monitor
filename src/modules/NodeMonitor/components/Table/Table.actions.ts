import { ACTION_CHANGE_LIMIT_PAGE, ACTION_CHANGE_LIMIT_ROW_PER_PAGE, ACTION_CHANGE_PAGE } from './Table.actionsName';

export const actionChangePage = (payload: { page: number }) => ({
    type: ACTION_CHANGE_PAGE,
    payload,
});

export const actionChangeLimitRowPerPage = (payload: { limitRowPerPage: number }) => ({
    type: ACTION_CHANGE_LIMIT_ROW_PER_PAGE,
    payload,
});

export const actionChangeLimitPage = (payload: { limitPage: number }) => ({
    type: ACTION_CHANGE_LIMIT_PAGE,
    payload,
});
