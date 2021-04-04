import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetRedList } from './TableValidator.actions';

const TableValidator = () => {
    const dispatch = useDispatch();
    const fetchData = () => dispatch(actionGetRedList({ page: 0 }));
    React.useEffect(() => {
        fetchData();
    }, []);
    return <div />;
};

export default memo(TableValidator);
