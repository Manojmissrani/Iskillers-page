import React from "react";
import { Bottonnavbar, Navbar } from "../../components";
import "./index.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/contactus-01-c15726995624cc473dd4afa67bb2936f.jpg?alt=media&token=c5ebc98c-db30-47c0-b515-7fd88deafdae"
          className="weblogo"
        />
      </div>

      <div className="main-header-2">
        <p className="p1">
          Stay Connected to Opportunities Get in the Game & Stay Ahead.
        </p>
        <div className="iconsmain">
          <div>
            <img
              src="https://academy.iskillers.com/static/email-0bd165fb6b7c2ab5d6e16194bd62c1e7.png"
              className="imgmains"
            />
            <p>info@iSkillers.com</p>
          </div>

          <div>
            <img
              src="https://academy.iskillers.com/static/pin-664c09fabb57973cb48959f9feb25d02.png"
              className="imgmains"
            />
            <p>Mithi Sindh Pakistan</p>
          </div>

          <div>
            <img
              src="https://academy.iskillers.com/static/phone-call-1448cadecb440efcdaff2eae4aa648ba.png"
              className="imgmains"
            />
            <p>03322511711</p>
          </div>
        </div>
      </div>

      <div className="mapdiv">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3623.5015528607573!2d69.799184!3d24.743987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394fb1bf64a6dae7%3A0xec0c8d99f865b6f6!2siSkillers%20-%20IT%20Company!5e0!3m2!1sen!2sus!4v1676225026502!5m2!1sen!2sus"
            className="map"
          ></iframe>
        </div>

   <Bottonnavbar/>
    </>
  );
};

export default Contact;
