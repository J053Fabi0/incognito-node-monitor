import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

interface IProps {}

const withPagination = (WrappedComponent: React.FunctionComponent) => (props: IProps) => {
    return (
        <ErrorBoundary>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );
};

export default withPagination;
