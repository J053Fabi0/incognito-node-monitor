import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { tableSelector } from './Table.selector';

const withData = (WrappedComponent: React.FunctionComponent) => (props: any) => {
    const { currentPage, limitPage, rowsPerPage, data, fetching, isSearching } = useSelector(tableSelector);

    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    currentPage,
                    limitPage,
                    rowsPerPage,

                    data,
                    fetching,
                    isSearching,
                }}
            />
        </ErrorBoundary>
    );
};

export default withData;
