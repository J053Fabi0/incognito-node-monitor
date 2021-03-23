import { IConfigsReducer } from 'src/configs';
import { IThemeReducer } from 'src/theme';
import { ITableReducer } from 'src/modules/NodeMonitor/components/Table/Table.interface';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    configs: IConfigsReducer;
    theme: IThemeReducer;
    table: ITableReducer; // Node monitor
}
