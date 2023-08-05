import React, { ReactNode } from "react";
import ErrorBoundary from "src/components/ErrorBoundary";
import { useDispatch } from "react-redux";
import { actionFetchTableData } from "./Table.actions";

interface IProps {
  handleFetchData: (page: number) => void;
}

const withFetch = (WrappedComponent: React.FunctionComponent<IProps>) => (props: { children?: ReactNode }) => {
  const dispatch = useDispatch();
  const handleFetchData = (page: number) => dispatch(actionFetchTableData(page));

  const firstTimeFetchData = () => handleFetchData(0);

  // eslint-disable-next-line no-sequences
  React.useEffect(() => (firstTimeFetchData(), undefined), []);

  return (
    <ErrorBoundary>
      <WrappedComponent {...props} handleFetchData={handleFetchData} />
    </ErrorBoundary>
  );
};

export default withFetch;
