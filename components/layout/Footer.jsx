/**
 * Page footer.
 */
export const Footer = ({ lastUpdate }) => {
  const now = new Date().getTime();
  const update = lastUpdate ? new Date(lastUpdate).getTime() : null;

  return (
    <footer className="px-4 sm:px-6 mt-4 bg-gray-100 h-8 flex flex-row items-center justify-center">
      <p className="text-center text-sm text-gray-700">
        {new Date().getFullYear()}
        {update &&
          ` - last update: ${Math.round((now - update) / 1000)} seconds ago`}
      </p>
    </footer>
  );
};
