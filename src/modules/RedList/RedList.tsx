import React from 'react';
import Table from 'src/modules/RedList/components/Table';
import SelectionTable from '../../components/SelectionTable';

const RedList = React.memo(() => {
    return (
        <div>
            <SelectionTable />
            <Table />
        </div>
    );
});

export default RedList;
