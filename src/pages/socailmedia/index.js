import React from "react";
import { Bottonnavbar, Navbar } from "../../components";

const SocialMedia = () => {
  return (
    <>
      <div>
        <Navbar />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/social%20media%20marketing-01.jpg?alt=media&token=ef5c9e7f-ac1d-48be-9e9c-1652dfa599fe"
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
                <p>2999 PKR</p>
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
                You will learn how to build a strategy, select social media
                platforms (Facebook, Instagram, and LinkedIn) to work with large
                or small budgets, and effectively manage your team. Get
                additional specialization in contextual, targeted advertising.
                You will be able to work on large projects, apply for a
                leadership position and earn more in the freelancing market as a
                social media marketer.
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
                <span>Understand how </span>social media marketing works for
                your business.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Understand the social media</span> platforms (Facebook,
                Instagram, and LinkedIn) and how they can be used.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn Facebook </span>Marketing
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn LinkedIn </span>Marketing
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn Instagram </span> Marketing
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn advanced features</span>of the most popular social
                networks.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>You will understand</span> how to set up a simple yet
                powerful marketing strategy for your online business.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Build a social media </span>
                schedule and plan so that you carry your marketing through to
                its desired objective.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to create a </span>
                professional social media profile/page.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Show a knowledge of </span>
                the buyer journey and how to use it to get sales in your
                business.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Create a social media </span>marketing post to a high
                standard that gets engagement.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Understand the power </span> of social media communities
                and how powerful they can be for brand building.
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

export default SocialMedia;
