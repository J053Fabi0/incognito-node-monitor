import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

interface IProps {}
const enhance = (WrappedComp: React.FunctionComponent) => (props: IProps) => {
    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                }}
            />
        </ErrorBoundary>
    );
};

export default enhance;
