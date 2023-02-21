import React from "react";
import { Bottonnavbar, Navbar } from "../../components";

const WordPress = () => {
  return (
    <>
      <div>
        <Navbar />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/wordpress-01.jpg?alt=media&token=c6d33762-d205-485c-9153-bd8f63d8144f"
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
                <span>WordPress</span> Website Design
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                WordPress is one of the most popular CMS for creating websites.
                With Wordpress you can create sites from scratch of different
                complexity and functionality - simple one-page landing sites,
                business card site, personal blog, service sites or complex
                multi-page online stores. The WordPress course does not require
                knowledge of layout and programming. If you already have the
                skills to create a site in HTML/CSS - you can significantly
                speed up your work with WordPress. A course for those who want
                to quickly learn how to make cool sites, manage them and promote
                them. Having learned to use the capabilities of the world's most
                popular CMS, you will be able not only to create sites from
                scratch for yourself and/or to order, but also to earn on
                support for existing projects. Webmasters who know how to work
                on WordPress are in demand in the freelancer market.
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
                <span>You will learn</span>how to work in CMS WordPress -
                installation and configuration, creation of pages, use of
                plugins, widgets, themes and templates for any task.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn how to create</span>business card sites, one-page
                landing pages, portfolio sites, blogs.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn how to make </span> adaptive layout so that the site
                displays the same correctly on different devices.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Create a full-fledged</span> online store with product
                catalogs, payment system, delivery options, coupons.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn the basics of SEO</span> promotion, usability,
                search engine optimization settings and register your ready-made
                site in search engines.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>Learn how to check </span> whether the domain is free, how
                to buy a domain and link it to hosting.
              </h2>
              <div className="bottonline leanrline2"></div>
            </div>

            <div className="learn2">
              <h2>
                <span>How to secure</span> your site and backup.
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

export default WordPress;
