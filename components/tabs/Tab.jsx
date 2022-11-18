export const Tab = ({ name, setActive, active }) => {
  const baseClasses = "inline-block p-3 rounded-t-lg";
  const activeClasses = `${baseClasses} bg-slate-600 text-slate-100`;
  const inactiveClasses = `${baseClasses} bg-slate-200 text-slate-700`;

  return (
    <li key="name" className="mr-2">
      <a
        href="#"
        onClick={() => setActive()}
        className={active ? activeClasses : inactiveClasses}>
        {name}
      </a>
    </li>
  );
};
