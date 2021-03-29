import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchSyncStat } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.actions';
import { monitorDetailSelector } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.selector';

const enhance = (WrappedComponent: React.FunctionComponent) => (props: any) => {
    const { syncStat } = useSelector(monitorDetailSelector);
    const dispatch = useDispatch();
    const handleFetchSyncState = () => dispatch(actionFetchSyncStat());

    React.useEffect(() => {
        handleFetchSyncState();
    }, []);

    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    beacon: syncStat?.beacon,
                    shards: syncStat?.shards,
                }}
            />
        </ErrorBoundary>
    );
};

export default enhance;
