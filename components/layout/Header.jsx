import { Logo } from "./Logo";

/**
 * Page header with a logo.
 */
export const Header = ({ title, Icon, menus = [] }) => (
  <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white h-16">
    <div className="flex flex-row justify-between items-center px-4">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Logo title={title} Icon={Icon} />
      </div>

      {menus.length > 0 && (
        <nav className="px-6 text-white font-bold text-xl tracking-tight whitespace-nowrap">
          <ul className="flex flex-row space-x-8 text-lg ">
            {menus.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.link}
                  className="block py-2 pl-3 pr-4 hover:text-blue-300">
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <a
        className="p-3 rounded-lg bg-orange-400 text-orange-50"
        href="https://cta-collection.kampsite.co/"
        target="_blank">
        Feedback
      </a>
    </div>
  </header>
);
