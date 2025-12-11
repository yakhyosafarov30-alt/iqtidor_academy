import React from "react";
import HomePage from "./components/HomePage.jsx";
import Services from "./components/Services.jsx";
import Courses from "./components/Courses.jsx";

export default function page() {
  return (
    <div>
      <HomePage />

      <Courses />
      <Services />
    </div>
  );
}
