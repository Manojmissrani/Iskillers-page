import React from "react";
import { Bottonnavbar, Navbar } from "../../components";

const Graphic = () => {
  return (
    <>
      <div>
        <Navbar />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/graphicdesigning-0774d1d5d86156b7b7f4f29a6ffae975.jpg?alt=media&token=0303e6bd-2d9f-4383-b4bd-5f93f24162fc"
          className="weblogo"
        />
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
                <span>Graphic</span> Designing Pro
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                In 3 months of graphic design training, you will learn the basic
                tools for creating any project, Photoshop, Illustrator,
                InDesign, CorelDraw. The acquired skills will allow you to
                develop the corporate identity of companies, from logo to
                branding, to create advertising projects and website layouts.
                Graphic designers are in demand in design studios, publishing
                houses, branding and advertising agencies.
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
                <span>Create spectacular </span>cases for the portfolio.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Create logos Selection of font, </span> illustrations,
                effects. Represent logos in different versions.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Use and combine</span> colors for identity projects, RGB
                and CMYK, mixing, pantones.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Work with typography</span>for advertising, brand book,
                presentation, logo.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Font selection, </span> text layout, style-forming
                elements, patterns, guideline.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Create full-fledged</span> branding projects: concept,
                presentation, guideline.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Work on the communication</span> style: banners,
                advertising printing house.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Develop a brand book:</span> pages and elements of the
                brand book, brand map, presentation.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>
          </div>
        </div>
      </div>

<Bottonnavbar/>
    </>
  );
};

export default Graphic;
