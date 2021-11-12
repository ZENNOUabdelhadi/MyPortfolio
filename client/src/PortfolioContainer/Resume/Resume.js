import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "PROFESSIONAL EXPERIENCE", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "SQL", ratingPercentage: 90 },
    { skill: "JAVA", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 95},
    { skill: "CSS", ratingPercentage: 95 },
    { skill: "PHP", ratingPercentage: 70 },
    { skill: "C/C++", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      
      duration: { fromDate: "", toDate: "2021" },
      description:
        "Technologies Used: React JS, Bootsrap.",
      subHeading: "A Personal Portfolio website to showcase all my details and projects at one place.",
    },
    {
      title: "online courses ",
      duration: { fromDate: "", toDate: "2021" },
      description:
      "Technologies Used: React JS,Ant Design, NodeJS, Express, HTML5, CSS3 ,MongoDB.",
      subHeading: "Realization of a web application for online courses.",
      
    },
    {
      title: " End of studies project ",
      duration: { fromDate: "", toDate: "2021" },
      description:
        "Technologies Used: React Js, Express Js, nodeJs,MongoDB.",
      subHeading:
      'Realization of a conversational system for hotel reservations.',
    },
   
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
       <ResumeHeading
        heading={"Faculty of Science . Kenitra, Morocco "}
        subHeading={"Master in Software Engineering for the Cloud"}
        fromDate={"2020"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Faculty of Science and Technology .Er-Rachidia, Morocco "}
        subHeading={"BACHELOR of Computer Science option: Software engineering"}
        fromDate={"2019"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Faculty of Science and Technology .Er-Rachidia, Morocco"}
        subHeading={"DEUST: mathematics,computer science and physics (MIP)."}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Baccalaureate Physical Sciences Tinghir, Morocco."}
        fromDate={"June"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Boussole Pro - internship"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"July"}
          toDate={"September/2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          "Realization of an application like LinkedIn for the community of business using web technologies". <br/>
      Technologies Used: React JS, Ant Design, HTML 5, CSS 3, PHP, MySQL.
          </span>
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Second World - internship"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"July"}
          toDate={"September/2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          "Realization of a dynamic and responsive user interface that allows you to create teams and manage its members." <br/>
              Technologies Used: React JS, Redux, HTML5, CSS3, SpringBoot, REST,postgresql.
          </span>
        </div>
      </div>

    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Volunteering"
      
      />
    
      <ResumeHeading
        heading="trip"
        
      />
      <ResumeHeading
        heading="Photography"
       
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
