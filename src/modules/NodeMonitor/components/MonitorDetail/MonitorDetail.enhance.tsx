import React, { PropsWithChildren } from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { compose } from 'recompose';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import withCommittee from './MonitorDetail.enhanceCommittee';
import withSyncStat from './MonitorDetail.enhanceSyncStat';
import { getMiningPublicKey } from '../Table/Table.utils';
import { actionFetchNodeSyncInfo } from './MonitorDetail.actions';

interface IProps {
  isWebview: boolean;
}
const enhance = (WrappedComp: React.FunctionComponent<IProps>) => ({
  isWebview: isWebviewDefault = false,
  ...props
}: PropsWithChildren<IProps>) => {
  const dispatch = useDispatch();
  const [isWebview, setIsWebview] = React.useState(isWebviewDefault);
  const handleOpenNewTab = () => {
    const mpk = getMiningPublicKey();
    if (isEmpty(mpk)) return;
    setIsWebview(true);
    dispatch(actionFetchNodeSyncInfo(mpk));
  };

  React.useEffect(() => {
    handleOpenNewTab();
  }, []);
  return (
    <ErrorBoundary>
      <WrappedComp {...props} isWebview={isWebview} />
    </ErrorBoundary>
  );
};

export default compose(withSyncStat, withCommittee, enhance);
