import { NavLink } from "react-router-dom";

/**
 * Props
 */
class NavbarProps {
  navs?: any[];
}

export default ({ navs = [] }: NavbarProps) => {
  return (
    <div>
      <div className="p-3 text-center">
        {navs.map((nav, key: number) => (
          <NavLink
            key={key}
            to={nav.to}
            exact={nav.exact}
            className="mx-5"
            activeClassName="text-blue-500"
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
      <hr />
    </div>
  );
};
