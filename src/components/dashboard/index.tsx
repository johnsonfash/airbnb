import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/airbnb-logo.png";
import user from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import {
  faBorderAll,
  faBowlRice,
  faCampground,
  faChessRook,
  faCity,
  faDungeon,
  faFilter,
  faHouseChimneyWindow,
  faKitchenSet,
  faMinus,
  faPersonSkiing,
  faPlus,
  faShower,
  faSunPlantWilt,
  faTableTennis,
  faTowerObservation,
  faTree,
  faUmbrellaBeach,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faMap } from "@fortawesome/free-regular-svg-icons";
import { Input } from "reactstrap";
import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faAirbnb, faPagelines } from "@fortawesome/free-brands-svg-icons";
import Filter from "./filter";

const leftNavClass = ({ isActive }: { isActive: boolean }) =>
  `left-link d-flex align-items-center text-dark ${
    isActive ? "left-active" : ""
  }`;

function Dashboard() {
  const [[startDate, endDate], setDateRange] = useState<(Date | null)[]>([
    new Date(),
    null,
  ]);
  const [filter, setfilter] = useState(false);
  const [detail, setDetail] = useState(false);
  const toggleDetail = useCallback(() => {
    setDetail(!detail);
  }, [detail]);
  const toggleFilter = () => setfilter(!filter);

  return (
    <main>
      <nav className="d-flex align-items-center justify-content-between border-bottom px-3">
        <div className="max-w-5 min-w-5">
          <img src={logo} alt="" />
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${
                isActive ? "top-active" : ""
              }`
            }
            to="/"
          >
            Stays
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${
                isActive ? "top-active" : ""
              }`
            }
            to="experience"
          >
            Experiences
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `main-link d-inline-block text-dark ${
                isActive ? "top-active" : ""
              }`
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
      <nav className="sticky-top z-index-2 bg-white d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
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
          <div className="mx-3 w-100 bg-light max-h-2-3 d-flex align-items-center p-1 rounded-2">
            <span className="d-inline-block p-1 px-2">
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={setDateRange}
              dateFormat="MMMM d"
              className="w-100 outline-none border-0 bg-light d-inline-block"
            />
          </div>
          <div className="d-inline-flex justify-content-between align-items-center p-2 rounded-2 bg-light">
            <button className="btn shadow-sm bg-white max-w-1-5 max-h-1-5 align-items-center d-flex justify-content-center">
              <small className="text-danger">
                <FontAwesomeIcon icon={faMinus} />
              </small>
            </button>
            <span className="d-inline-block no-break px-3">4 guests</span>
            <button className="btn shadow-sm bg-white fs-6 max-w-1-5 max-h-1-5 align-items-center d-flex justify-content-center">
              <small className="text-danger">
                <FontAwesomeIcon icon={faPlus} />
              </small>
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={toggleFilter}
            className="btn btn-light max-w-2-5 min-h-2-5 align-items-center d-inline-flex justify-content-center py-2"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </nav>
      <section>
        <nav className="left-nav position-fixed shadow-sm">
          <NavLink className={leftNavClass} to="/">
            <FontAwesomeIcon className="left-nav-icon" icon={faAirbnb} />
            <span className="d-inline-block no-break">All Homes</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/amazing-view">
            <FontAwesomeIcon className="left-nav-icon" icon={faDungeon} />
            <span className="d-inline-block no-break">Amazing Views</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/tiny-house">
            <FontAwesomeIcon
              className="left-nav-icon"
              icon={faHouseChimneyWindow}
            />
            <span className="d-inline-block no-break">Tiny Homes</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/kitchen">
            <FontAwesomeIcon className="left-nav-icon" icon={faKitchenSet} />
            <span className="d-inline-block no-break">Chef's Kitchen</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/surfing">
            <FontAwesomeIcon className="left-nav-icon" icon={faPersonSkiing} />
            <span className="d-inline-block no-break">Surfing</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/mansion">
            <FontAwesomeIcon className="left-nav-icon" icon={faCity} />
            <span className="d-inline-block no-break">Mansions</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/luxe">
            <FontAwesomeIcon className="left-nav-icon" icon={faBowlRice} />
            <span className="d-inline-block no-break">Luxe</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/tree-house">
            <FontAwesomeIcon className="left-nav-icon" icon={faTree} />
            <span className="d-inline-block no-break">Tree House</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/camp">
            <FontAwesomeIcon className="left-nav-icon" icon={faCampground} />
            <span className="d-inline-block no-break">Camping</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/beach">
            <FontAwesomeIcon className="left-nav-icon" icon={faUmbrellaBeach} />
            <span className="d-inline-block no-break">Beachfront</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/farm">
            <FontAwesomeIcon
              className="left-nav-icon"
              icon={faTowerObservation}
            />
            <span className="d-inline-block no-break">Farms</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/castle">
            <FontAwesomeIcon className="left-nav-icon" icon={faChessRook} />
            <span className="d-inline-block no-break">Castles</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/island">
            <FontAwesomeIcon className="left-nav-icon" icon={faPagelines} />
            <span className="d-inline-block no-break">Islands</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/vineyard">
            <FontAwesomeIcon className="left-nav-icon" icon={faTableTennis} />
            <span className="d-inline-block no-break">Vineyards</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/pools">
            <FontAwesomeIcon className="left-nav-icon" icon={faWaterLadder} />
            <span className="d-inline-block no-break">Amazing Pools</span>
          </NavLink>
          <NavLink className={leftNavClass} to="/garden">
            <FontAwesomeIcon className="left-nav-icon" icon={faSunPlantWilt} />
            <span className="d-inline-block no-break">Flower Garden</span>
          </NavLink>
        </nav>
        <Filter open={filter} />
        <div className="content py-3 px-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
