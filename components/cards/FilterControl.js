const FilterControl = ({name, setFilter}) => (
    <input
        className="mr-4 border border-slate-200 px-2"
        placeholder={name.replace('_', ' ')}
        onChange={(e) => setFilter(name, e.target.value || undefined) }
    />
);

export default FilterControl;