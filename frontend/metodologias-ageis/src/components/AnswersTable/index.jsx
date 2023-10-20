import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell, DataTableSkeleton } from '@carbon/react';
import { formatTableData } from '../utils/utils';

const AnswersTable = ({ loading, tableData }) => {
    const tableHeaders = ['Relatório', 'Resposta', 'Valor (%)'];

    return (
        <div>
            {loading &&
                <div>
                    <DataTableSkeleton />
                </div>
            }
            {!loading &&
                <div>
                    <Table size='md'>
                        <TableHead>
                            <TableRow>
                                {tableHeaders.map(header => <TableHeader id={header.key} key={header}>
                                    {header}
                                </TableHeader>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formatTableData(tableData).map(row => <TableRow key={row.id}>{Object.keys(row).filter(key => key !== 'id').map(key => { return <TableCell key={key}>{row[key]}</TableCell> })}</TableRow>)}
                        </TableBody>
                    </Table>
                </div>}
        </div>
    )
};

export default AnswersTable;

AnswersTable.propTypes = {
    loading: PropTypes.bool.isRequired,
    tableData: PropTypes.array.isRequired
};