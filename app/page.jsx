import React from "react";
// import HomePage from "./components/HomePage.jsx";
import Home from "./components/Home"
import IqtidorTitle from "./components/IqtidorTitle"
// import Services from "./components/Services.jsx";
import Courses from "./components/Courses.jsx";
import Mentor from "./components/Mentor"
import CourseDefault from "./components/CourseDefault"
import IqtidorLink from "./components/IqtidorLink"
import Partner from "./components/Partner"
// import IqtidorSection from './components/IqtidorSection'

export default function page() {
  return (
    <div>
      <Home/>
      <IqtidorTitle/>
      <Courses />
      <Mentor /> 
      <CourseDefault />
      <IqtidorLink />
      {/* <IqtidorSection /> */}
      <Partner />
      {/* <Services /> */}
    </div>
  );
}
