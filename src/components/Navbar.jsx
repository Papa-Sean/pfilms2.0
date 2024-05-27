import { FaBars } from 'react-icons/fa6';
import { socialLinks } from '../data';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-circle mt-2 mb-2 btn-primary text-2xl w-12 h-6 items-center"
          >
            PF
          </NavLink>
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <FaBars className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {socialLinks.map((link) => {
            const { id, href, rel, target, icon } = link;
            return (
              <a
                key={id}
                href={href}
                rel={rel}
                target={target}
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
