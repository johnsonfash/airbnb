import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/airbnb-logo.png";
import user from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  return (
    <main>
      <nav className="d-flex align-items-center justify-content-between border-bottom px-3">
        <div className="max-w-5 min-w-5">
          <img src={logo} alt="" />
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block ${isActive ? "active" : ""}`
            }
            to="/"
          >
            Stays
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block ${isActive ? "active" : ""}`
            }
            to="experience"
          >
            Experiences
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block ${isActive ? "active" : ""}`
            }
            to="online-experience"
          >
            Online Experiences
          </NavLink>
        </div>
        <div className="max-w-2 rounded-circle overflow-hidden min-w-2 max-h-2 min-h-2 d-flex align-items-center justify-content-center">
          <img src={user} alt="" className="" />
        </div>
      </nav>
      <nav className="">
        <div>
          <button className="btn btn-dark px-2">
            <FontAwesomeIcon icon={faBorderAll} className="fs-5" />
          </button>
          <button className="btn btn-dark px-2">
            <FontAwesomeIcon icon={faBorderAll} className="fs-5" />
          </button>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default Dashboard;
