import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;


function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "",
    name: "",
    description: "",
    course: "",
  })
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
  const MODULE_URL = `${API_BASE}/a5/module`

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  const updateScore = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/score/${assignment.score}`);
    setAssignment(response.data);
  };

  const updateCompleted = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/completed/${assignment.completed}`);
    setAssignment(response.data);
  };

  const updateModuleName = async () => {
    const response = await axios
      .get(`${MODULE_URL}/name/${module.name}`);
    setModule(response.data);

  }

  const updateModuleDescription = async () => {
    const response = await axios
      .get(`${MODULE_URL}/description/${module.description}`);
    setModule(response.data);
  }

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text"
        onChange={(e) => setAssignment({
          ...assignment,
          title: e.target.value
        })}
        value={assignment.title} />
      <h3>Modifying Properties</h3>
      <hr />
      <input onChange={(e) => setAssignment({
        ...assignment, title: e.target.value
      })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <hr />
      <input onChange={(e) => setAssignment({
        ...assignment, score: parseInt(e.target.value)
      })}
        value={assignment.score} type="number" />
      <button onClick={updateScore} >
        Update score to: {assignment.score}
      </button>
      <hr />
      <hr />
      <input
        checked={assignment.completed}
        type="checkbox"
        onChange={() => setAssignment({ ...assignment, completed: !assignment.completed })}
      />
      <button onClick={updateCompleted}>
        Update completed to: {assignment.completed.toString()}
      </button>
      <hr />
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <hr />
      <h4>Module </h4>
      <hr />
      <a href={`${API_BASE}/a5/module`}>
        Get module
      </a>
      <hr />
      <a href={`${API_BASE}/a5/module/name`}>
        Get module name
      </a>
      <hr />
      <input onChange={(e) => setModule({
        ...module, name: e.target.value
      })}
        value={module.name} type="text" />
      <button onClick={updateModuleName} >
        Update name to: {module.name}
      </button>
      <hr />
      <input onChange={(e) => setModule({
        ...module, description: e.target.value
      })}
        value={module.description} type="text" />
      <button onClick={updateModuleDescription} >
        Update description to: {module.description}
      </button>
      <hr />
    </div>
  );
}
export default WorkingWithObjects;

