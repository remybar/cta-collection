import { CircleStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { PropTypes } from "prop-types";

/**
 * Display the project logo.
 */
export const Logo = ({ title, Icon }) => (
  <Link href="/">
    <div className="flex items-center space-x-1">
      <Icon className="w-8 h-8 flex-shrink-0" />
      <span className="font-bold text-xl tracking-tight whitespace-nowrap">
        {title}
      </span>
    </div>
  </Link>
);

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
