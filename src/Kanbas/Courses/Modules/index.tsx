import { FaArrowDown, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import ModuleList from "./List";
import "./index.css";     
import "../../styles.css";                    

export const ModulesHeaderButtons = () => {
  return (
    <div className="wd-modules-header-buttons-container">
    <button className="wd-modules-header-button" >
      Collapse All
    </button>
    <button className="wd-modules-header-button ml-auto">
      View Progress
    </button>
    <button className="wd-modules-header-button ml-auto" >
      <FaCheckCircle style={{ color: "green" }} /> 
      Publish All <FaArrowDown />
    </button>
    <button
      style={{ backgroundColor: "red", color: "white" }}
      className="wd-modules-header-button ml-auto"
    >
      <FaPlus/> Module
    </button>
    <button className="wd-modules-header-button ml-auto">
      <FaEllipsisV />
    </button>
  </div>
  );
}

function Modules() {
  return (
    <div>
          <ModulesHeaderButtons />
      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;

