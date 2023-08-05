/* eslint-disable no-sequences */
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { actionGetRedList } from './TableValidator.actions';

interface IProps {
  fetchData: (page: number) => void;
}

const withFetchData = (WrappedComp: React.FunctionComponent<IProps>) => (props: { children?: ReactNode }) => {
  const dispatch = useDispatch();
  const fetchData = (page: number) => dispatch(actionGetRedList({ page }));
  React.useEffect(() => (fetchData(0), undefined), []);
  return (
    <ErrorBoundary>
      <WrappedComp {...props} fetchData={fetchData} />
    </ErrorBoundary>
  );
};

export default withFetchData;
