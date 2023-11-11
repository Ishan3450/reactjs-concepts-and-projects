import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function routeToContact() {
    navigate("/contact");
  }
  function back() {
    navigate(-1);
  }

  return (
    <div>
      Home
      <br />
      <button onClick={routeToContact}>Go to contact page</button>
      <button onClick={back}>Back</button>
    </div>
  );
}

export default Home;
