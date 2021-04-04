import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { ROWS_PER_PAGE } from './TableValidator.constants';
import { ACTION_UPDATE_TABLE_DATA } from './TableValidator.actionsName';

const initialState: any = {
    currentPage: 0,
    rowsPerPage: ROWS_PER_PAGE,
    limitPage: 0,
    data: [],
    fetching: false,
    visibleModal: false,
};

const tableValidatorReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_UPDATE_TABLE_DATA: {
            const { payload } = action;
            return {
                ...state,
                payload,
            };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'tableRedList',
    storage,
    whitelist: [''],
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, tableValidatorReducer);
