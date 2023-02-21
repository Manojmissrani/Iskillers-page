import React from "react";
import { Bottonnavbar, Navbar } from "../../components";

const YoutubeMastery = () => {
  return (
    <>
      <div>
        <Navbar />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/wbsite%20frint-01.jpg?alt=media&token=a84e7969-6eb6-4c21-a235-828f9a712592"
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
                <p>1 Month</p>
              </div>
            </div>

            <div className="tr">
              <div className="td">
                <p>One Time Fees</p>
              </div>
              <div className="td">
                <p>2399 PKR</p>
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
                <span>Social Media Marketing -</span> Course
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                YouTube is the perfect place to grow your own brand, drive
                traffic to your website, and earn money from YouTube ads and
                your product and service promotions. And this is the perfect
                course for you to jumpstart your YouTube Channel.
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
                <span>What</span> will you learn?
              </h1>
              <div className="bottonline l"></div>
            </div>

            <div className="learn12">
              <h2>
                <span>Create your own </span>successful YouTube channel.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to select the </span>
                correct niche.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Grow your brand</span>with a YouTube channel.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Get more YouTube </span>views.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Get more YouTube </span> subscribers.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Optimize videos </span> with great titles, descriptions,
                and tags.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>YouTube SEO for </span> ranking number one in YouTube
                search.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to do keyword </span>research.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to monetize </span>your YouTube channel & earn money.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>YouTube advance </span>features and tips.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn how edit </span>thumbnail using mobile.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Create clickable</span> thumbnails on mobile that get more
                views.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to create</span> content for your channel.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to make a logo, </span> channel art and trailer for
                pro YouTube channel.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to download </span> copyright free music,images and
                videos.
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

export default YoutubeMastery;
