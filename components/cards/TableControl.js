import FilterBar from './FilterBar';

const TableControl = ({setFilter, filters}) => {
    return (
        <div className="container flex flex-row mb-4 py-2">
            <FilterBar filters={filters} setFilter={setFilter} />
        </div>
    );
}

export default TableControl;