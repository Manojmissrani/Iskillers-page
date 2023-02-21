import React from "react";
import "./navbar.css";
// import manu from "./manu.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="main-navbar">
      <nav className="navbar">
        <div className="logo-div">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/ikillers-01.png?alt=media&token=aafafe1f-9990-46d9-97b3-68bfa64f5015"
            alt=""
            className="logo"
          />
        </div>

        <div className="manudiv">
          <img src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg" className="manu" />
        </div>

        <div className="pages">
          <ul className="ul">
            <li onClick={() => navigate("/")}>Home</li>
            <li className="dropdown">
              <a className="dropbtn">
                Courses
                <i className="fa-sharp fa-solid fa-caret-down m-1"></i>
              </a>
              <div className="dropdown-content">

                <a onClick={() => navigate("/Courses/Freelacing")}>
                  Freelacing
                </a>
                <a onClick={() => navigate("/Courses/webDevelopment")}>
                  Web Development & Design
                </a>
                <a onClick={() => navigate("/Courses/mobileAppDevelopment")}>
                  Mobile App Development
                </a>
                <a onClick={() => navigate("/Courses/graphicDesigning")}>
                  Graphic Designing
                </a>
                <a onClick={() => navigate("/Courses/WordPress")}>Wordpress</a>
                <a onClick={() => navigate("/Courses/YoutubeMastery")}>
                  Youtube Mastery
                </a>
                <a onClick={() => navigate("/Courses/SocialmediaMarketing")}>
                  Social Media Marketing
                </a>
              </div>
            </li>
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/Contact")}>Contact</li>
            <li onClick={() => navigate("/Gallery")}>Gallery</li>
            <li onClick={() => navigate("/Login")}>Login</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
