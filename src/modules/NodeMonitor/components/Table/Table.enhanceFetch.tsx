import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

interface IProps {
    currentPage: number;
    handleFetchData: () => void;
}

const withFetch = (WrappedComponent: React.FunctionComponent) => (props: IProps & any) => {
    const { currentPage } = props;
    const handleFetchData = () => {};
    React.useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    handleFetchData,
                }}
            />
        </ErrorBoundary>
    );
};

export default withFetch;
