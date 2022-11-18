import { useMemo } from "react";
import { useFilters, useTable, useSortBy } from "react-table";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

import { TableControl } from "./TableControl";

export const CustomTable = ({
  data,
  columns,
  filters,
  filterTypes,
  defaultSortKey = "id",
  getRowProps = (props) => props,
  getCellProps = (cell) => {},
  getHeaderCellProps = (column) => {},
  withColors,
  setWithColors,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: {
        sortBy: [
          {
            id: defaultSortKey,
            desc: false,
          },
        ],
      },
    },
    useFilters,
    useSortBy
  );
  const sortIconClasses = "inline-block w-4 h-4 ml-2";

  return (
    <>
      {filters && (
        <TableControl
          setFilter={setFilter}
          filters={filters}
          withColors={withColors}
          setWithColors={setWithColors}
        />
      )}
      <table
        className="w-full mt-2 border-collapse border border-slate-600 text-center text-xs"
        {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps({
                      ...column.getSortByToggleProps(),
                      ...getHeaderCellProps(column, withColors),
                    })}>
                    {column.render("Header")}
                    <span>
                      {column.depth > 0 &&
                        (column.isSorted ? (
                          column.isSortedDesc ? (
                            <ChevronDownIcon className={sortIconClasses} />
                          ) : (
                            <ChevronUpIcon className={sortIconClasses} />
                          )
                        ) : (
                          <ChevronUpDownIcon className={sortIconClasses} />
                        ))}
                    </span>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} {...getRowProps(row)}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps(
                      getCellProps(cell, withColors, rowIndex)
                    )}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
