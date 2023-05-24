import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/airbnb-logo.png";
import user from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faBorderAll, faFilter, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { Input } from "reactstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {
  const [[startDate, endDate], setDateRange] = useState<(Date | null)[]>([new Date(), null]);

  return (
    <main>
      <nav className="d-flex align-items-center justify-content-between border-bottom px-3">
        <div className="max-w-5 min-w-5">
          <img src={logo} alt="" />
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${isActive ? "active" : ""}`
            }
            to="/"
          >
            Stays
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${isActive ? "active" : ""}`
            }
            to="experience"
          >
            Experiences
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${isActive ? "active" : ""}`
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
      <nav className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
        <div>
          <button className="btn btn-dark max-w-2-5 min-h-2-5 d-inline-flex align-items-center justify-content-center py-2">
            <FontAwesomeIcon icon={faBorderAll} className="fs-5" />
          </button>
          <button className="btn btn-light max-w-2-5 min-h-2-5 d-inline-flex align-items-center justify-content-center py-2">
            <FontAwesomeIcon icon={faMap} className="fs-5" />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <Input type="select" className="bg-light border-0 d-inline-block">
            <option value="">Anywhere</option>
            <option value="">Somewhere</option>
          </Input>
          <div className="mx-3 w-100">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={setDateRange}
              dateFormat="MMMM d"
              className="form-control border-0 bg-light d-inline-block"
            />
          </div>
          <div className="d-inline-flex justify-content-between align-items-center p-2 rounded-1 bg-light">
            <button className="btn shadow-sm bg-white max-w-1-5 max-h-1-5 align-items-center d-flex justify-content-center">
              <small className="text-danger"> <FontAwesomeIcon icon={faMinus} /></small>
            </button>
            <span className="d-inline-block no-break px-3">4 guests</span>
            <button className="btn shadow-sm bg-white fs-6 max-w-1-5 max-h-1-5 align-items-center d-flex justify-content-center">
              <small className="text-danger"><FontAwesomeIcon icon={faPlus} /></small>
            </button>
          </div>
        </div>
        <div >
          <button className="btn btn-light max-w-2-5 min-h-2-5 align-items-center d-inline-flex justify-content-center py-2">
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default Dashboard;
