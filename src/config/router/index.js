import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Freelacing,
  Gallery,
  Graphic,
  Home,
  Login,
  MobileApp,
  NotFound,
  Signup,
  SocialMedia,
  Web,
  WordPress,
  YoutubeMastery,
} from "./../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="*" element={<NotFound />} />
        <Route path="/Courses/webDevelopment" element={<Web />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Courses/Freelacing" element={<Freelacing />} />
        <Route path="/Courses/graphicDesigning" element={<Graphic />} />
        <Route path="/Courses/SocialmediaMarketing" element={<SocialMedia />} />
        <Route path="/Courses/WordPress" element={<WordPress />} />
        <Route path="/Courses/YoutubeMastery" element={<YoutubeMastery />} />
        <Route path="/Courses/mobileAppDevelopment" element={<MobileApp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
