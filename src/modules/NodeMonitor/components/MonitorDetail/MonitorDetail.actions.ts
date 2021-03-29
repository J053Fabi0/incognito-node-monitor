import { Dispatch } from 'redux';
import { IRootState } from 'src/redux/interface';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { ACTION_UPDATE_MONITOR_DETAIL, ACTION_UPDATE_SYNC_STAT } from './MonitorDetail.actionsName';
import { getSyncStatInfo } from '../Table/Table.services';
import { NodesSyncStatBuilder } from '../Table/Table.builder';
import { ISyncStat } from './MonitorDetail.interface';

export const actionUpdateMonitorDetail = (payload: { node?: ITableData }) => ({
    type: ACTION_UPDATE_MONITOR_DETAIL,
    payload,
});

export const actionUpdateSyncStat = (payload: { syncStat?: ISyncStat }) => ({
    type: ACTION_UPDATE_SYNC_STAT,
    payload,
});

export const actionFetchSyncStat = () => async (dispatch: Dispatch, getState: () => IRootState) => {
    try {
        const { node } = getState().monitorDetail;
        if (!node) return;
        const { publicKey } = node;
        const syncStat = NodesSyncStatBuilder(await getSyncStatInfo(publicKey));
        dispatch(actionUpdateSyncStat({ syncStat }));
    } catch (e) {
        console.debug('Fetch sync stats with error: ', e);
    }
};
