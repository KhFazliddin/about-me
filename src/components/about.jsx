import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
       
       
        {
          id: "Wordpress_skill",
          content: "Redux",
          porcentage: "50%",
          value: "50"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "TECHNICAL SKILLS:   Programming Languages: JavaScript, HTML 5, CSS, React.js, NodeJS  Operating Systems: Windows, Mac OS Software: MS Visual Studio, Adobe Suite  "
        },
        {
          id: "second-p-about",
          content:
            "CERTIFICATES:  Udacity Certified Front End Development Track Udacity, Inc Udacity Certified Full Stack Development Track Udacity, Inc Bobir Akilkhanov Tech Academy Certified Full Stack Development Track Bobir Akilkhanov Tech Academy"
        },
        {
          id: "third-p-about",
          content:
            "PROJECTS:  SELF PROJECT: {CALCULATOR } TECHNOLOGIES: HTML, CSS, JAVASCRIPT SELF PROJECT: {CV ABOUT ME } TECHNOLOGIES: REACT, JS, CSS  SELF PROJECT: {PRICE TRACKER } TECHNOLOGIES: REACT, JS, CSS  SELF PROJECT: {LOGIN/REGISTER FORM } TECHNOLOGIES: REACT / REDUX, JS, CSS, MUI"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
