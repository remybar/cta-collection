const formatCount = (c) => c || "-";

const COMMON_COLS = [
  { Header: "ID", accessor: "id", filter: "exactFilter" },
  {
    Header: "name",
    accessor: "card_name",
    filter: "startWithFilter",
  },
  { Header: "type", accessor: "card_type", filter: "startWithFilter" },
  { Header: "rarity", accessor: "rarity", filter: "startWithFilter" },
  {
    Header: "element",
    accessor: (row) => (row?.advancement === "COMBO" ? "-" : row.element),
    filter: "startWithFilter",
  },
];

const COUNT_COLS = [
  {
    Header: "Count",
    columns: [
      {
        Header: "# total",
        accessor: "total_count",
      },
      { Header: "# non foil", accessor: "total_count_non_foil" },
      { Header: "# foil", accessor: "total_count_foil" },
    ],
  },
];

const SUPPLY_COLS = [
  {
    Header: "% of supply",
    columns: [
      {
        Header: "% non foil",
        accessor: (row) => row?.supply_percent?.non_foil,
        Cell: ({ row }) => (
          <div className="group relative flex justify-center">
            <span className="hover:text-blue-500 hover:font-semibold">
              {row.original.supply_percent?.non_foil}
            </span>
            {row.original?.supply?.non_foil && (
              <div className="absolute left-16 -top-2 scale-0 rounded bg-gray-500 p-2 text-xs text-white group-hover:scale-100 w-32 z-10">
                {`${row.original.total_count_non_foil} / ${row.original?.supply?.non_foil}`}
              </div>
            )}
          </div>
        ),
      },
      {
        Header: "% foil",
        accessor: (row) => row?.supply_percent?.foil,
        Cell: ({ row }) => {
          return (
            <div className="group relative flex justify-center">
              <span className="hover:text-blue-500 hover:font-semibold">
                {row.original.supply_percent?.foil}
              </span>
              {row.original?.supply?.foil && (
                <div className="absolute left-12 -top-2 scale-0 rounded bg-gray-500 p-2 text-xs text-white group-hover:scale-100 w-32 z-10">
                  {`${row.original.total_count_foil} / ${row.original?.supply?.foil}`}
                </div>
              )}
            </div>
          );
        },
      },
    ],
  },
];

export const STD_COLS = [
  {
    Header: "Metadata",
    columns: COMMON_COLS,
  },
  ...COUNT_COLS,
  ...SUPPLY_COLS,
  {
    Header: "Non Foil Ranks",
    columns: [
      {
        Header: "rank 1",
        accessor: (row) => formatCount(row.ranks.standard.r1),
      },
      {
        Header: "rank 2",
        accessor: (row) => formatCount(row.ranks.standard.r2),
      },
      {
        Header: "rank 3",
        accessor: (row) => formatCount(row.ranks.standard.r3),
      },
      {
        Header: "rank 4",
        accessor: (row) => formatCount(row.ranks.standard.r4),
      },
      {
        Header: "rank 5",
        accessor: (row) => formatCount(row.ranks.standard.r5),
      },
    ],
  },
  {
    Header: "Foil Ranks",
    columns: [
      {
        Header: "rank 1 (F)",
        accessor: (row) => formatCount(row.ranks.foil.r1),
      },
      {
        Header: "rank 2 (F)",
        accessor: (row) => formatCount(row.ranks.foil.r2),
      },
      {
        Header: "rank 3 (F)",
        accessor: (row) => formatCount(row.ranks.foil.r3),
      },
      {
        Header: "rank 4 (F)",
        accessor: (row) => formatCount(row.ranks.foil.r4),
      },
      {
        Header: "rank 5 (F)",
        accessor: (row) => formatCount(row.ranks.foil.r5),
      },
    ],
  },
];

export const ALT_COLS = [
  {
    Header: "Metadata",
    columns: [
      ...COMMON_COLS,
      {
        Header: "advancement",
        accessor: (row) => row.advancement.replace("ALTERNATIVE_", ""),
      },
    ],
  },
  ...COUNT_COLS,
  ...SUPPLY_COLS,
  {
    Header: "Non Foil Grades",
    columns: [
      {
        Header: "C",
        accessor: (row) => formatCount(row.grades.standard.C),
      },
      {
        Header: "B",
        accessor: (row) => formatCount(row.grades.standard.B),
      },
      {
        Header: "A",
        accessor: (row) => formatCount(row.grades.standard.A),
      },
      {
        Header: "S",
        accessor: (row) => formatCount(row.grades.standard.S),
      },
    ],
  },
  {
    Header: "Foil Grades",
    columns: [
      {
        Header: "C (foil)",
        accessor: (row) => formatCount(row.grades.foil.C),
      },
      {
        Header: "B (foil)",
        accessor: (row) => formatCount(row.grades.foil.B),
      },
      {
        Header: "A (foil)",
        accessor: (row) => formatCount(row.grades.foil.A),
      },
      {
        Header: "S (foil)",
        accessor: (row) => formatCount(row.grades.foil.S),
      },
    ],
  },
];

export const MINT_PASS_COLS = [
  { Header: "name", accessor: "name" },
  { Header: "count", accessor: "count" },
  { Header: "min number", accessor: "min_number" },
  { Header: "max number", accessor: "max_number" },
];

export const STD_FILTERS = [
  { name: "id", label: "Id" },
  { name: "card_name", label: "Card Name" },
  { name: "card_type", label: "Card Type" },
  { name: "rarity", label: "Rarity  " },
  { name: "element", label: "Element" },
];
export const ALT_FILTERS = [...STD_FILTERS, { name: "advancement" }];

export const GROUP_COLORS = {
  Count: {
    row: {
      odd: "bg-purple-200",
      even: "bg-purple-50",
    },
    header: {
      main: "bg-purple-900",
      sub: "bg-purple-700",
    },
  },
  "% of supply": {
    row: {
      odd: "bg-blue-200",
      even: "bg-blue-50",
    },
    header: {
      main: "bg-blue-900",
      sub: "bg-blue-700",
    },
  },
  "Non Foil Ranks": {
    row: {
      odd: "bg-amber-200",
      even: "bg-amber-50",
    },
    header: {
      main: "bg-amber-900",
      sub: "bg-amber-700",
    },
  },
  "Foil Ranks": {
    row: {
      odd: "bg-lime-200",
      even: "bg-lime-50",
    },
    header: {
      main: "bg-lime-900",
      sub: "bg-lime-700",
    },
  },
  "Non Foil Grades": {
    row: {
      odd: "bg-amber-200",
      even: "bg-amber-50",
    },
    header: {
      main: "bg-amber-900",
      sub: "bg-amber-700",
    },
  },
  "Foil Grades": {
    row: {
      odd: "bg-lime-200",
      even: "bg-lime-50",
    },
    header: {
      main: "bg-lime-900",
      sub: "bg-lime-700",
    },
  },
};
