import { useMemo } from 'react';
import { useFilters, useTable } from 'react-table';

import TableControl from './TableControl';

const CardTable = ({data, columns, filters}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter,
    } = useTable({ columns, data }, useFilters);

    return (
        <>
        <TableControl setFilter={setFilter} filters={filters}/>
        <table className="w-full border-collapse border border-slate-600 text-center" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default CardTable;