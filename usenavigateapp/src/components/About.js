import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function routeToHome() {
    navigate("/");
  }
  function back() {
    navigate(-1);
  }

  return (
    <div>
      About page
      <button onClick={routeToHome}>Route to home</button>
      <button onClick={back}>Back</button>
    </div>
  );
}

export default About;
