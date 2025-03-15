import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ title = "Github Finder" }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container flex mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            <FaGithub className="inline pr-2 pb-1 text-3xl" />
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <NavLink to="/" className={`btn btn-ghost mx-1 btn-sm`}>
              HOME
            </NavLink>
            <NavLink to="/about" className={`btn btn-ghost mx-1 btn-sm`}>
              ABOUT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
