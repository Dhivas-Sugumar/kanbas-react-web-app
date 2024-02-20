import { Link, useLocation } from "react-router-dom";
import "./index.css";
import NortheasternLogo from "../../public/images/northeastern-logo.png";
import { FaImage } from "react-icons/fa";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaQuestionCircle, FaInbox, FaClock, FaTv, FaArrowCircleRight } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    {label: "", icon: <img src={NortheasternLogo} width="75" height="50" />},                                
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wd-kanbas-navigation-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-kanbas-navigation-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-kanbas-navigation-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-kanbas-navigation-icon" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2 wd-kanbas-navigation-icon" /> },
    { label: "History",  icon: <FaClock className="fs-2 wd-kanbas-navigation-icon" /> },
    { label: "Studio",  icon: <FaTv className="fs-2 wd-kanbas-navigation-icon" /> },
    { label: "Commons",  icon: <FaArrowCircleRight className="fs-2 wd-kanbas-navigation-icon" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2 wd-kanbas-navigation-icon" /> },

  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;