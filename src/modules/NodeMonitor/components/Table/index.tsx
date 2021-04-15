import React from 'react';
import { MockupColumns } from 'src/modules/NodeMonitor/NodeMonitor.mockupData';
import { Styled } from 'src/modules/NodeMonitor/components/Table/styled';
import { useTable } from 'react-table';
import Card from '@material-ui/core/Card';
import TablePagination from '@material-ui/core/TablePagination';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LoadingOverlay from 'src/components/LoadingOverlay';
import withTable from 'src/modules/NodeMonitor/components/Table/Table.enhance';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { isEmpty } from 'lodash';
import SearchRow from 'src/modules/NodeMonitor/components/SearchRow';
import SelectionTable from 'src/components/SelectionTable';
import { Table, Tag, Space, Breadcrumb } from 'antd';
import { getColumnsNodeMonitor } from 'src/modules/NodeMonitor/NodeMonitor.data';
import MonitorDetailModal from '../MonitorDetail/components/MonitorDetailModal';

export interface ITableNodeProps {
    data: ITableData[];
    currentPage: number;
    limitPage: number;
    rowsPerPage: number;
    fetching: boolean;
    isSearching: boolean;
    visibleModal: boolean;

    handleChangePage: (page: number) => void;
    handleChangeRowsPerPage: () => void;
    handleClickTableCell: (item: ITableData) => void;
    handleCloseMonitorModal: () => void;
}

const TableNodeMonitor = (props: ITableNodeProps & any) => {
    const {
        currentPage,
        limitPage,
        rowsPerPage,
        data,
        fetching,
        isSearching,
        visibleModal,
        handleChangePage,
        handleChangeRowsPerPage,
        handleClickTableCell,
        handleCloseMonitorModal,
    } = props;

    const { Column, ColumnGroup } = Table;

    const onChangePage = (page: number) => handleChangePage && handleChangePage(page);

    const onClickTableCell = (item: ITableData) => {
        if (!item) return;
        handleClickTableCell && handleClickTableCell(item);
    };

    const onCloseModal = () => {
        handleCloseMonitorModal && handleCloseMonitorModal();
    };

    const columns = getColumnsNodeMonitor({
        deleteCell: () => {},
    });

    return (
        <Styled>
            <SearchRow />
            <SelectionTable />
            <Card className="card">
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={!!fetching || isEmpty(data)}
                    pagination={{
                        current: currentPage + 1,
                        pageSize: rowsPerPage,
                        total: limitPage,
                    }}
                    onRow={(record) => ({
                        onClick: () => {
                            onClickTableCell && onClickTableCell(record);
                        },
                    })}
                    onChange={(pagination: any) => {
                        const { current } = pagination;
                        onChangePage(current - 1);
                    }}
                />
            </Card>
            <MonitorDetailModal visible={visibleModal} onClose={onCloseModal} />
        </Styled>
    );
};

export default withTable(TableNodeMonitor);
