/**
 * Display the title of a page
 * @param children the page title
 * @returns
 */
export const PageTitle = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold border-b border-slate-400 py-4 mb-4">
      {children}
    </h1>
  );
};
