import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { compose } from 'recompose';
import withData from './Table.enhanceData';
import withFetch from './Table.enhanceFetch';
import withPagination from './Table.enhancePagination';

interface IProps {}

const withTable = (WrappedComponent: React.FunctionComponent) => (props: IProps) => {
    return (
        <ErrorBoundary>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );
};

export default compose(withData, withFetch, withPagination, withTable);
