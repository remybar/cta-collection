export const FilterControl = ({ filter, setFilter }) => (
  <input
    className="mr-4 border border-slate-200 px-2"
    placeholder={filter?.label || filter.name.replace("_", " ")}
    onChange={(e) => setFilter(filter.name, e.target.value || undefined)}
  />
);
