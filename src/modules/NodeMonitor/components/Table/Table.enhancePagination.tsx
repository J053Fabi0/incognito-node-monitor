import React, { ReactNode } from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { actionChangePage } from './Table.actions';

interface IProps {
  handleFetchData: (page: number) => void;
  handleRowsPerPage: () => void;
}

const withPagination = (WrappedComponent: React.FunctionComponent<IProps>) => (props: { children?: ReactNode }) => {
  const dispatch = useDispatch();
  const handleChangePage = async (page: number) => {
    /** Change number page */
    dispatch(actionChangePage(page));
  };
  const handleChangeRowsPerPage = () => undefined;

  return (
    <ErrorBoundary>
      <WrappedComponent {...props} handleFetchData={handleChangePage} handleRowsPerPage={handleChangeRowsPerPage} />
    </ErrorBoundary>
  );
};

export default withPagination;
