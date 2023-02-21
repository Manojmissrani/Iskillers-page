import React from "react";
import { Navbar,Bottonnavbar } from "../../components";
import "./index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/aboutus-01-3f49cf1316ed21278232fbc2dd8c52dd.jpg?alt=media&token=0a76aafe-8852-4363-b6a2-683699da26b3"
          className="weblogo"
        />
      </div>

      <div className="main-header-1">
        <div className="aboutmain">
          <div className="imgdiv">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/fivePoints.png?alt=media&token=33ddfcb1-14d4-42b3-9b8c-983c7e0cebad"
              className="imgabout"
            />
          </div>
          <div className="aboutheading">
            <h1>
              <span>Welcome</span> to iSkillers
            </h1>
            <div className="bottonline aboutline"></div>

            <p className="aboutmessage">
              The world around us is changing every minute, globalizing, and the
              speed of information exchange and its volume are steadily
              increasing. A person who wants to keep up with the times,
              understand the new global trends in the development of science and
              technology, must have curiosity, be active and have analytical
              thinking and leadership qualities. But in addition, in order to be
              competitive he needs to have a huge amount of knowledge and
              skills, including professional ones. The high pace of scientific
              and technological progress and the wide spread of information
              technologies leads to the fact that any area of activity is
              constantly enriched with new discoveries, methods and techniques
              of work. We offer only programs that will help you climb a few
              steps higher in your life. All areas in which we work are in
              demand and relevant. We use only the latest proven and reliable
              methods of trainings. We do not have boring lectures. Our trainers
              use an interactive approach that significantly improves the
              efficiency of training and know all modern training methods. New
              knowledge is an empowerment of you and a chance to make your life
              better, brighter and more diverse.
            </p>
          </div>
        </div>
      </div>

     <Bottonnavbar/>
    </>
  );
};

export default About;
