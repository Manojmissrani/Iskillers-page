import React from "react";
import { Bottonnavbar, Navbar } from "../../components";
import "./index.css";

const MobileApp = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/Appdevelopment-4535f85ebb505e08a04c3cfd0275a484.jpg?alt=media&token=0b633fc5-fd0d-41a4-b464-2502bee683e8"
          className="weblogo"
        />
      </div>

      <div className="main-header">
        <div className="main-header-1">
          <div className="course-div">
            <h1 className="course-heading">
              <span>Course </span> Info
              <div className="bottonline h"></div>
            </h1>
            <p className="note">Note: You must have laptop during class</p>
          </div>

          {/* table */}
          <div className="table-main">
            <div className="tr">
              <div className="td">
                <p>Duration</p>
              </div>
              <div className="td">
                <p>Three Months</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Admission Fees</p>
              </div>
              <div className="td">
                <p>5,000 PKR</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Monthly Fees</p>
              </div>
              <div className="td">
                <p>3,000 PKR</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Levels</p>
              </div>
              <div className="td">
                <p>Basic to Advanced</p>
              </div>
            </div>

            <div className="applybuttondiv">
              <button>Apply</button>
            </div>
          </div>

          <div className="aboutmain">
            <div className="aboutheading">
              <h1>
                <span>About</span> Mobile App Development
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                You will learn how to create applications for iOS and Android,
                develop prototypes and design mobile interfaces. Get a new
                profession and projects in your portfolio.
              </p>
            </div>
            <div className="imgdiv">
              <img
                src="https://academy.iskillers.com/static/mobile-app-01-b078af88857286111b34b8114af39ced.png"
                className="imgabout"
              />
            </div>
          </div>

          <div className="learnmaindev">
            <div className="learnd1">
              <h1 className="learnh1">
                <span>What </span>will you learn?
              </h1>
              <div className="bottonline l"></div>
            </div>

            <div className="learn12">
              <h2>
                <span>Application</span> design
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                Explore the cycle of creating a mobile application from layouts
                to submission to development.
              </p>
            </div>

            <div className="learn3">
              <h2>
                <span>Presentation</span> of projects
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                Learn how to present the mobile application project to customers
                qualitatively and vividly.
              </p>
            </div>

            <div className="learn3">
              <h2>
                <span>UX</span> prototyping
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                You will be able to develop user-friendly interfaces that
                increase customer retention. Hypothesis testing Learn how to
                test: corridor, network and testing on real users.
              </p>
            </div>

            <div className="learn3">
              <h2>
                <span>Adaptive</span> Design
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                Understand the requirements of the platforms and the differences
                in interface development for iOS and Android.
              </p>
            </div>

            <div className="learn3">
              <h2>
                <span>Working with</span> professional software
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                Master the tools of mobile design - Sketch, Principle, InVision
                Studio, Zeplin.
              </p>
            </div>

            <div className="learn3">
              <h2>
                <span>Building</span> Interactive JavaScript Websites
              </h2>
              <div className="bottonline leanrline2"></div>
              <p className="p">
                Explore the cycle of creating a mobile application from layouts
                to submission to development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Bottonnavbar />
    </>
  );
};

export default MobileApp;
