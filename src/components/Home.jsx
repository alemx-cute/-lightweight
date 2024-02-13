import React from "react";
import "C:/Users/Ameen/Mits React/-lightweight/src/styles/home.css";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function Home() {
  return (
    <div id="main ">
      <div id="page2">
        <div id="navbar">
          <h2>Logo</h2>

          <div className="nav-right">
            <Link className="link" to="/">
              Home
            </Link>

            <Link className="link">Contact</Link>
            <Link className="link" to="/Login">
              Login
            </Link>
          </div>
        </div>

        <div className="p1-mid">
          <div className="p1-left">
            {" "}
            <span>
              <h2>Earn While you learn</h2>
            </span>
            <span>
              <h2>
                <span className="text-green-400">One</span>-Day gig for{" "}
                <span className="text-green-400"> teens</span>
              </h2>
            </span>
            <span>
              <h2>
                <span className="text-green-400">opportunity </span>for{" "}
                <span className="text-green-400">all ages</span>
              </h2>
            </span>
          </div>

          <div className="p1-right">
            <h2>You are here to</h2>
            <div className="p1-right-2">
              <Link to="/findwork" className="find-work">
                Find work <i class="ri-tools-fill"></i>
              </Link>
              <Link to="/hire" className="hire-talent">
                Hire talent <i class="ri-user-add-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
