import "./App.css";
import { Routes, NavLink, Link, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Link tag replicates the functionalities of the a tag of html */}
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/contactus">Contact us</Link> <br />
      <br />
      <br />
      {/* NavLink tag add another functionality in addition with the link tag functionalities, it adds an active class to whichever the router is active, one can see it in the inspect elements tab */}
      <NavLink to="/">Home</NavLink> <br />
      <NavLink to="/about">About</NavLink>
      <br />
      <NavLink to="/contactus">Contact us</NavLink>
      <br />
      <br />
      <br />
      {/* normal routing */}
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contactus" element={<div>contact us</div>} />
        {/* * is used to handle any other than above specified route paths */}
        <Route path="*" element={<div>404 NOt found</div>} />
      </Routes>
      {/* Nested routing, but the problem in this routing is that the parent element doesn't let the child elements load */}
      <Routes>
        {/* parent route is / or home */}
        <Route
          path="/"
          element={
            <div>
              <Outlet />
              Home
            </div>
          }
        >
          {/* child routes must go through home routes means for /about first / then about */}
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contactus" element={<div>contact us</div>} />
          {/* * is used to handle any other than above specified route paths */}
          <Route path="*" element={<div>404 NOt found</div>} />
        </Route>
      </Routes>
      {/* So to prevent problem in nested routing, outlet tag is used, added the <Outlet /> tag in the parent tag as home is the parent route */}
      {/* outlet is kind of permission that parent gives to show its child elements */}
      {/* but for every child page its parent element's content is shown everytime a child appears */}
      {/* So to prevent that a special keyword is used i.e { index keyword is used } */}
      {/* Syntax: <Route index element={} /> */}
      {/* index means a default route path */}
      {/* So to solve the problem that for every child its parent element's content is shown with it just do some steps: 1. Create one component name it as you like 2. Transfer the outlet tag to the newly formed component 3. Make that new component as a parent of the routes 4. Now add a new route with element as home and put the index keyword inside that route */}
      {/* by using the index keyword in a route tag that route becomes the default route */}
    </div>
  );
}

export default App;
