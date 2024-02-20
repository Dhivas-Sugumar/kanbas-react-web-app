import { FaArrowDown, FaArrowRight, FaBell, FaBullhorn, FaBullseye, FaChartBar, FaCheckCircle, FaCircle, FaEllipsisV, FaFile, FaPlus, FaPlusCircle } from "react-icons/fa";
import "../Modules/index.css";
import ModuleList from "../Modules/List";
import { ModulesHeaderButtons } from "../Modules";
import "../../styles.css";      
function Home() {
  return (
<div className="d-flex">
    <div className="flex-fill">
      <ModulesHeaderButtons />              
  <hr/>
  <ul className="list-group wd-modules">
      <li className="list-group-item">
        <ModuleList />        
      </li>

    </ul>
    </div>
    <div>
    <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: 250 }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
              <FaFile/>Import Existing Content
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
              <FaArrowRight   />Import from commons
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
              <FaBullseye/> Choose Home Page
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
              <FaChartBar/> View Course Steam
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
              <FaBullhorn/>New Announcement
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
            <FaChartBar/>New Analytics
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="wd-kanbas-button" type="button">
            <FaBell/>View Course Notifications
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <h5>To Do</h5>
          <hr />
        </div>
        <div className="row">
          <span>
            <span
              id="notifcation-count"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: "5px",
              }}
            >
              1
            </span>
            <span style={{ color: "red" }}> Grade A3. ENV + HTML</span>
            <i style={{ color: "grey", paddingLeft: "20px" }} className="fa fa-times"></i>
          </span>
          <p>100 points . Sep 18 at 11:59 pm</p>
        </div>
        <div className="row">
          <div className="col">
            <h5>Coming Up</h5>
          </div>
          <div className="col">
            <i className="fa fa-calendar"></i>
            <span style={{ color: "red", fontSize: "x-small" }}> View Calendar</span>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col">
            <i className="fa fa-calendar"></i> <span style={{ color: "red" }}>Lecture</span>
            <span style={{ paddingRight: "30px" }}>CS4550.13123.123123</span>
            <br/>
            <span>Sep 11 at 11:45am</span>
          </div>
          <div className="col">
            <i className="fa fa-calendar"></i> <span style={{ color: "red" }}>Lecture</span>
            <span style={{ paddingRight: "30px" }}>CS4550.13123.123123</span>
            <br/>
            <span>Sep 11 at 11:45am</span>
          </div>
          <div className="col">
            <i className="fa fa-calendar"></i> <span style={{ color: "red" }}>Lecture</span>
            <span style={{ paddingRight: "20px" }}>CS4550.13123.123123</span>
            <br/>
            <span>Sep 11 at 11:45am</span>
          </div>
        </div>
        <div className="row mt-3">
          <span className="text-danger">12 more in the next week...</span>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}
export default Home;