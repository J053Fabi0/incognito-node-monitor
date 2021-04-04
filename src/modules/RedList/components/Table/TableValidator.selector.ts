import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { ITableRedListReducer } from './TableValidator.interface';

export const tableRedListSelector = createSelector(
    (state: IRootState) => state.tableRedList,
    (tableRedList: ITableRedListReducer) => tableRedList,
);
