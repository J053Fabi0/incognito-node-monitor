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
import withTable from './Table.enhance';
import { ITableData } from './Table.interface';

interface IProps {
    data: ITableData[];
    currentPage: number;
    limitPage: number;
    rowsPerPage: number;
    fetching: boolean;
    isSearching: boolean;

    handleChangePage: (page: number) => void;
    handleChangeRowsPerPage: () => void;
}
const Table = (props: IProps & any) => {
    const {
        currentPage,
        limitPage,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        data,
        fetching,
        isSearching,
    } = props;

    const columns = MockupColumns;
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    const onChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, page: number) =>
        handleChangePage && handleChangePage(page);

    const onChangeRowsPerPage = () => handleChangeRowsPerPage && handleChangeRowsPerPage();

    const renderHeader = () => (
        <TableHead>
            {headerGroups.map((headerGroup) => (
                <TableRow className="header-row" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                    ))}
                </TableRow>
            ))}
        </TableHead>
    );

    const renderBody = () => (
        <TableBody>
            {rows.map((row, index) => {
                prepareRow(row);
                return (
                    <TableRow className="table-row" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return (
                                <TableCell
                                    className={`table-cell ${index % 2 !== 0 && 'dark-row'}`}
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    );

    const renderPagination = () => {
        if (!limitPage || isSearching) return null;
        return (
            <TablePagination
                component="div"
                count={limitPage}
                page={currentPage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                className="pagination"
            />
        );
    };

    return (
        <Styled>
            <Card className="card">
                <MaUTable {...getTableProps()}>
                    {renderHeader()}
                    {!fetching && renderBody()}
                </MaUTable>
                {!!fetching && <LoadingOverlay />}
                {renderPagination()}
            </Card>
        </Styled>
    );
};

export default withTable(Table);
