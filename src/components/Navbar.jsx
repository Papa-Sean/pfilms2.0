import {
  FaSquareInstagram,
  FaTiktok,
  FaXTwitter,
  FaPatreon,
  FaSquareYoutube,
  FaBars,
} from 'react-icons/fa6';
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
          <a
            href="https://www.instagram.com/paradizofilms/"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareInstagram className="btn btn-ghost btn-circle btn-xs ml-4" />
          </a>
          <a
            href="http://tiktok.com/paradizofilms"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok className="btn btn-ghost btn-circle btn-xs ml-4" />
          </a>
          <a
            href="http://twitter.com/paradizofilms"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="btn btn-ghost btn-circle btn-xs ml-4" />
          </a>
          <a
            href="http://patreon.com/ParadizoFilms"
            target="_blank"
            rel="noreferrer"
          >
            <FaPatreon className="btn btn-ghost btn-circle btn-xs ml-4" />
          </a>
          <a
            href="https://www.youtube.com/@paradizofilms"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareYoutube className="btn btn-ghost btn-circle btn-xs ml-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
