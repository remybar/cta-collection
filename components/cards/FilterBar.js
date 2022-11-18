import FilterControl from './FilterControl';

const FilterBar = ({filters, setFilter}) => {
    return (
      <div className="container w-full flex flex-row">
        {filters.map(filter => (
            <FilterControl key={filter} name={filter} setFilter={setFilter}/>
        ))}
      </div>  
    );
}

export default FilterBar;