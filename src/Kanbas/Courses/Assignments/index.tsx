import React from "react";
import { FaCheckCircle, FaEdit, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../../styles.css";     
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
<div className="d-flex"             >
      <form id="assignments-search">
        <input id="assignment" placeholder="Search for Assignments" />
      </form>
      <button type="button"><FaPlus/>Group</button>
      <button style={{backgroundColor: "red", color: "white"}} type="button"><FaPlus/>Assignment</button>
      <select id="assignments-edit">
        <option value="assignments-edit-dates">Edit Assignment Dates</option>
      </select>
    </div>      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaEdit style={{color: "green", margin: 10}}/>
                <Link className="text-decoration-none" style={{color: "black", fontWeight: "bold", fontSize: 20 }}              
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                <div>
                  <span className="pl-2"> <span style={{color: "red"}}>Multiple Modules</span> | Due Sep 18 at 11:59 pm | 100 pts</span>
                </div>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;