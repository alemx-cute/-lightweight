import React from "react";
import "C:/Users/Ameen/Mits React/-lightweight/src/styles/hire.css";
import { Link } from "react-router-dom";

function HireTalent() {
  return (
    <div id="main">
      <div id="page11">
        <video
          muted
          autoPlay
          loop
          src="src\assets\bg vid - Made with Clipchamp.mp4"
        ></video>

        <div className="navbar2">
          <h2>Logo</h2>
          <div className="nav2-right">
            {/* <div id="searchbar">
              <input type="search" name="" placeholder="Search Workers" id="" />
            </div> */}
            <Link className="link">Home</Link>

            <Link className="link">Contacts</Link>
          </div>
        </div>

        <div className="p2-mid">
          <div className="p2-left">
            <h3>LIGHTWIGHT FOR EMPLOYERS</h3>
            <h1>Select the ideal </h1>
            <h1> candidate to join</h1>
            <h1>
              <i>your</i>
            </h1>
            <h1>business </h1>
            <div className="btn">
              <h3>Post Job</h3>
              <i class="ri-arrow-right-line"></i>
            </div>
          </div>

          <div className="p2-right"></div>
        </div>
      </div>

      <div id="page3">
        <div className="p2-top">
          <h1>Create a job post</h1>
        </div>
        <div className="p2-mid2">
          <div className="p2-mid-left">
            <form action="">
              <div className="inputs">
                <label htmlFor="Job-title"> Job Title</label>
                <input type="text" id="Job-title" placeholder="Title" />
              </div>

              <div className="inputs">
                <label htmlFor="number-work">Number of People Required</label>
                <input
                  type="number"
                  id="number-work"
                  name="number-work"
                  min="1"
                  max="20"
                  placeholder="How many workers do you need"
                />
              </div>

              <div className="inputs">
                <label className="label3" htmlFor="remote">
                  What describes your job the most
                </label>
                <input
                  type="text"
                  placeholder="eg: Remote or online "
                  id="remote"
                />
              </div>
              <div className="inputs">
               <div className="input-left">
               <label htmlFor="min-pay">Mininimum Payment</label>
                <input
                  type="number"
                  id="min-pay"
                  min="100"
                  placeholder="The minimum amount you are willing to pay"
                />
               </div>

                <div className="input-right">
                  <label htmlFor="max-pay">Maximum Payment</label>
                  <input
                    type="number"
                    id="max-pay"
                    min="100"
                    placeholder="The maxiomum amount you are willing to pay"
                  />
                </div>
              </div>

              <div className="inputs">
                <label htmlFor="date">Date & Time </label>
                <input type="datetime-local" name="date" id="date" />
              </div>

              <div className="btn2">
              <h3>Post Job</h3>
              <i class="ri-arrow-right-line"></i>
            </div>
            </form>
          </div>
          <div className="p2-mid-right">
            <h2>map here</h2>
          </div>
        </div>
      </div>

      <div id="page4">
        <div className="p4-top">
          <h2>Manage your hiring from start to finish</h2>
        </div>
      </div>
    </div>
  );
}

export default HireTalent;
