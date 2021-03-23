import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

interface IProps {
    page: number;
}

const withFetch = (WrappedComponent: React.FunctionComponent) => (props: IProps & any) => {
    const { page } = props;
    const handleFetchData = () => {};
    React.useEffect(() => {}, []);
    return (
        <ErrorBoundary>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );
};

export default withFetch;
