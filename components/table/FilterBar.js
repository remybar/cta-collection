import { FilterControl } from "./FilterControl";

export const FilterBar = ({ filters, setFilter }) => {
  return (
    <div className="flex flex-row">
      {filters.map((filter) => (
        <FilterControl
          key={filter.name}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
};
