import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { actionChangePage } from './Table.actions';

interface IProps {
    handleFetchData: (page: number) => void;
}

const withPagination = (WrappedComponent: React.FunctionComponent) => (props: IProps & any) => {
    const { handleFetchData } = props;
    const handleChangePage = async (page: number) => {
        /** Change number page */
        handleFetchData && handleFetchData(page);
    };
    const handleChangeRowsPerPage = () => {};

    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    handleChangePage,
                    handleChangeRowsPerPage,
                }}
            />
        </ErrorBoundary>
    );
};

export default withPagination;
