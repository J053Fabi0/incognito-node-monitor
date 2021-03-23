import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { ITableReducer } from './Table.interface';
import { ACTION_CHANGE_PAGE } from './Table.actionsName'; // defaults to localStorage for web

const initialState: ITableReducer = {
    currentPage: 0,
};

const tableReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_CHANGE_PAGE: {
            return { ...state };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'tableNodeMonitor',
    storage,
    whitelist: ['storage'],
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, tableReducer);
