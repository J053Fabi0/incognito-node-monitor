import React from 'react';
import Table from 'src/modules/RedList/components/Table';
import SelectionTable from 'src/components/SelectionTable';
import styled from 'styled-components';

const Wrapper = styled.div``;

const RedList = React.memo(() => {
    return (
        <Wrapper>
            <SelectionTable />
            <Table />
        </Wrapper>
    );
});

export default RedList;
