import React from "react";
import "./index.css";

import { Bottonnavbar, Navbar } from "../../components";

const Web = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/webdevelopment-da9871f1a62296fc4635c29728959cd7.jpg?alt=media&token=f01c8851-e5ed-4c81-8381-b069f2142cde"
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
                <p>Six Months</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Advance Monthly Fees</p>
              </div>
              <div className="td">
                <p>2,500 PKR</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Monthly Fees</p>
              </div>
              <div className="td">
                <p>2,500 PKR</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>Classroom Based</p>
              </div>
              <div className="td">
                <p>Support Included</p>
              </div>
            </div>

            <div className="applybuttondiv">
              <button>Apply</button>
            </div>
          </div>

          <div className="aboutmain">
            <div className="aboutheading">
              <h1>
                <span>About Web</span> Design & Development
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                Learn beginner to advance development skills. From Design to
                Development of the web applications. Perfect for career
                switchers, digital aspirants and all techy professionals seeking
                to boost their career.
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
                <span>Layout of sites</span> in HTML and CSS, make layout
                changes.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Work with</span> relational databases using MYSQL example.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Work with</span> the API Design a site for any type of
                device.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Understand</span> legacy code.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Manage the</span> development of digital projects.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Apply UX</span> knowledge and data from Customer Journey
                Map.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Work with Reactjs</span> ,Vue.js or Angular.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>
          </div>
        </div>
      </div>

      <Bottonnavbar />
    </>
  );
};

export default Web;
