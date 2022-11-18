import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

import { useState, useMemo, useEffect } from "react";

import {
  STD_COLS,
  STD_FILTERS,
  ALT_COLS,
  ALT_FILTERS,
  MINT_PASS_COLS,
  GROUP_COLORS,
} from "components/constants";

import {
  PageLayout,
  PageTitle,
  CustomTable,
  Tabs,
  ServerError,
  Loading,
} from "components";

const getCellProps = (cell, withColors, rowIndex) => {
  if (withColors && GROUP_COLORS.hasOwnProperty(cell.column?.parent?.Header)) {
    const color = GROUP_COLORS[cell.column?.parent?.Header].row;
    return {
      className: rowIndex % 2 === 0 ? color.even : color.odd,
    };
  }
  return {
    className: rowIndex % 2 === 0 ? "bg-slate-50" : "bg-slate-200",
  };
};

const getHeaderCellProps = (column, withColors) => {
  const propName = column.depth === 0 ? column.Header : column?.parent?.Header;

  if (withColors && GROUP_COLORS.hasOwnProperty(propName)) {
    const color = GROUP_COLORS[propName].header;
    return {
      className: `${
        column.depth === 0 ? color.main : color.sub
      } text-white font-normal`,
    };
  }

  return {
    className: `${
      column?.depth === 0 ? "bg-slate-900" : "bg-slate-700"
    } text-white font-normal`,
  };
};

export default function Home() {
  const [stats, setStats] = useState();
  const [error, setError] = useState(false);
  const [withColors, setWithColors] = useState(true);
  const filterTypes = useMemo(
    () => ({
      exactFilter: (rows, id, filterValue) => {
        const field = id[0];
        return rows.filter((r) => String(r.original[field]) === filterValue);
      },
      startWithFilter: (rows, id, filterValue) => {
        const field = id[0];
        return rows.filter((r) =>
          r.original[field].toLowerCase().startsWith(filterValue.toLowerCase())
        );
      },
    }),
    []
  );

  useEffect(() => {
    fetch(`${publicRuntimeConfig.serverUrl}/stats?separateFoil=1`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setError(true));
  }, []);

  const tabs = [
    {
      name: "Standard cards",
      content: (
        <CustomTable
          data={stats?.std_cards}
          columns={STD_COLS}
          filters={STD_FILTERS}
          filterTypes={filterTypes}
          getCellProps={getCellProps}
          getHeaderCellProps={getHeaderCellProps}
          withColors={withColors}
          setWithColors={setWithColors}
        />
      ),
    },
    {
      name: "Alternative cards",
      content: (
        <CustomTable
          data={stats?.alt_cards}
          columns={ALT_COLS}
          filters={ALT_FILTERS}
          filterTypes={filterTypes}
          getCellProps={getCellProps}
          getHeaderCellProps={getHeaderCellProps}
          withColors={withColors}
          setWithColors={setWithColors}
        />
      ),
    },
    {
      name: "Mint passes",
      content: (
        <CustomTable
          data={stats?.mint_passes || []}
          columns={MINT_PASS_COLS}
          getCellProps={getCellProps}
          getHeaderCellProps={getHeaderCellProps}
        />
      ),
    },
  ];

  return (
    <>
      {error ? (
        <ServerError />
      ) : !stats ? (
        <Loading />
      ) : (
        <PageLayout lastUpdate={stats.last_update}>
          <PageTitle>Cards collection</PageTitle>
          {stats.std_cards.length > 0 || stats.alt_cards.length > 0 ? (
            <Tabs tabs={tabs} />
          ) : (
            <ServerError />
          )}
        </PageLayout>
      )}
    </>
  );
}
