import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function routeToAbout() {
    navigate("/about");
  }

  function back() {
    navigate(-1);
  }
  return (
    <div>
        COntact page
        <button onClick={routeToAbout}>Route to about</button>
        <button onClick={back}>Back</button>
    </div>
  )
}

export default Contact;
