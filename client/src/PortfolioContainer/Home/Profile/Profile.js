import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="mail:abdelhadizennou@gmail.com">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/hd_an_zn/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/abdelhadi-zennou-b769361b0">
                <i className="fa fa-linkedin fa-inverse" />
              </a>
              <a href="https://github.com/ZENNOUabdelhadi">
            <i className="fa fa-github fa-inverse" />
          </a>
             
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">ZENNOU ABDELHADI</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software developer 💻",
                    10000,
                    "Frontend  Developer 💻",
                    10000,
                    "MERN stck developer 🌐",
                    10000,
                    "React Js 🌐",
                    10000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Creation and building of applications with front-End and back-End .
            </span>
           
          </div>

          <div className="profile-options">
     
          <button  className="btn primary-btn"> Hire Me </button>
         
            <a href="resume.pdf" download="resume.pdf">
              <button className="btn primary-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
