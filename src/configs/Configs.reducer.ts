import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { PersistConfig, persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export interface IConfigsReducer {
  auth?: {
    deviceId: string;
    deviceToken: string;
  };
  language: string;
}

const initialState: IConfigsReducer = {
  language: 'en',
};

interface Action {
  type: string;
  payload: any;
}
const configReducer: Reducer<IConfigsReducer, Action> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const persistConfig: PersistConfig<IConfigsReducer> = {
  key: 'config',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, configReducer);
