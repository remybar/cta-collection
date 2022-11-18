import { FilterBar } from "./FilterBar";

export const TableControl = ({
  setFilter,
  filters,
  withColors,
  setWithColors,
}) => {
  return (
    <div className="flex flex-row my-2 py-2 items-center justify-start">
      <FilterBar filters={filters} setFilter={setFilter} />
      <div className="flex flex-row gap-x-2">
        <input
          type="checkbox"
          checked={withColors}
          onChange={(e) => {
            if (setWithColors) setWithColors(e.target.checked);
          }}
        />
        <label className="">with colors</label>
      </div>
    </div>
  );
};
