import "./App.css";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Error404 from "./components/Error404";

function App() {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState({
    "admin@gmail.com": { fname: "admin", lname: "admin", password: "admin" },
  });
  const [activeUser, setActiveUser] = useState({});

  return (
    <div className="App">
      <div className="container">
        <NavBar
          isLoggedIn={isLoggedIn}
          setLoginStatus={setLoginStatus}
          activeUserName={activeUser.fname + " " + activeUser.lname}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              <Login
                setLoginStatus={setLoginStatus}
                setActiveUser={setActiveUser}
                userData={userData}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup setUserData={setUserData} />}
          />

          {/* dashboard is only available when a used is logged in */}
          {isLoggedIn && (
            <Route
              path="/dashboard"
              element={<Dashboard userData={activeUser} />}
            />
          )}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
