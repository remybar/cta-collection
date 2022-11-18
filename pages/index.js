import Layout from '../sections/Layout';
import CardTable from '../components/cards/Table';
import Tabs from '../components/Tabs';

import DATA from './data.json';

const formatCount = (c) => c || '-';

const COMMON_COLS = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'name', accessor: 'card_name' },
  { Header: 'type', accessor: 'card_type' },
  { Header: 'rarity', accessor: 'rarity' },
  { Header: 'arkhome', accessor: 'arkhome' },
  { Header: 'total count', accessor: 'total_count' },
  { Header: '% supply', accessor: 'supply_percent' },
];

const STD_DATA = DATA.filter(d => d.advancement === 'STANDARD');
const ALT_DATA = DATA.filter(d => d.advancement !== 'STANDARD');

const STD_COLS = [
    ...COMMON_COLS,
    { Header: 'rank 1', accessor: row => formatCount(row.ranks[1].count)},
    { Header: 'rank 2', accessor: row => formatCount(row.ranks[2].count) },
    { Header: 'rank 3', accessor: row => formatCount(row.ranks[3].count) },
    { Header: 'rank 4', accessor: row => formatCount(row.ranks[4].count) },
    { Header: 'rank 5', accessor: row => formatCount(row.ranks[5].count) },
];

const ALT_COLS = [
  ...COMMON_COLS,
  { Header: 'advancement', accessor: 'advancement' },
  { Header: 'grade C', accessor: row => formatCount(row.grades.C.count) },
  { Header: 'grade B', accessor: row => formatCount(row.grades.B.count) },
  { Header: 'grade A', accessor: row => formatCount(row.grades.A.count) },
  { Header: 'grade S', accessor: row => formatCount(row.grades.S.count) },
];

const STD_FILTERS = ['card_name', 'card_type', 'rarity', 'arkhome'];
const ALT_FILTERS = [...STD_FILTERS, 'advancement'];

export default function Home() {
  const tabs = [
    {
      name: 'Standard cards',
      content: <CardTable data={STD_DATA} columns={STD_COLS} filters={STD_FILTERS}/>
    },
    {
      name: 'Alternative cards',
      content: <CardTable data={ALT_DATA} columns={ALT_COLS} filters={ALT_FILTERS}/>
    }
  ];

  return (
    <>
      <Layout>
        <Tabs tabs={tabs}/>
      </Layout>
    </>
  );
}
