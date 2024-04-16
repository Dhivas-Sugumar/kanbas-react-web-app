import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useEffect, useState } from "react";
import axios from "axios";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/Details";

const API_BASE = process.env.REACT_APP_API_BASE;


const COURSES_API = `${API_BASE}/api/courses`;

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const location = useLocation();
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  const currentSection = location.pathname.split('/').pop();

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <h3><HiMiniBars3 /> {`${course?.name} > ${currentSection}`}</h3>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Quizzes" element={<Quizzes/>} />
            <Route path="Quizzes/:quizId" element={<QuizDetails/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;      
