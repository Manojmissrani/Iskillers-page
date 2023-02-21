import React from "react";
import { Bottonnavbar, Navbar } from "../../components";
import "./index.css";

const Freelacing = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/freelancing-01-aed71e6e186b96ecdab92427eeb6eb77.jpg?alt=media&token=14271986-6ad5-4e6f-8d5a-111f21b9a995"
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
                <p>6 Weeks</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>One Time Fees</p>
              </div>
              <div className="td">
                <p>5000 PKR</p>
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

            <div className="fiftydis">
              <div className="fiftydiv">
                <span>50% </span> off for Students enrolled in other courses
              </div>
            </div>

            <div className="applybuttondiv">
              <button>Apply</button>
            </div>
          </div>

          <div className="aboutmain">
            <div className="aboutheading">
              <h1>
                <span>Freelancing - </span>Take Your Skills To The Market
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                In the current difficult situation with self isolation more and
                more people are leaving offices for remote work. This short
                course will help you take your skills to the market. We will
                train you to work on various freelance marketplaces like Fiverr,
                Upwork, Guru, and other channels. This course is perfect for
                those who are already skilled in their respective niche and want
                to grow their career.
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
                <span>What is freelance</span> and how it is different from
                normal work.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>All the pro</span> and cons of working from home.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Types of </span>work on internet.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to choose</span> niche and how to take your first
                order.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Filter projects </span>correctly and choose adequate
                customers.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Communicate </span> correctly with clients.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Write cover letters</span> to customers that are actually
                answered.
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

export default Freelacing;
