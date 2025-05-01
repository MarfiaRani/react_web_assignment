import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/About.css"; // Custom CSS for styling
import aboutImage from "../assets/images/about.png"; 
import tomCruise from "../assets/images/Ab1.png";
import emmaWatson from "../assets/images/Ab2.png";
import willSmith from "../assets/images/Ab3.png";
import GuaranteeSection from "./GuaranteeSection"; 

 export const About = () => {
  return (
    <><div className="container my-5">
      <div className="row align-items-center">

        {/* Left Side Text */}
        <div className="col-md-6">
          <h1 className="fw-bold">Our Story</h1>
          <p className="text-muted">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace...
          </p>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6 text-center">
          <img src={aboutImage} alt="Shopping Experience" className="img-fluid" />
        </div>

      </div>
      <br />

      {/* Statistics Section */}
      <div className="row text-center mt-4">
        <div className="col-md-3">
          <h3 className="fw-bold">10.5k</h3>
          <p className="text-muted">Sellers active on our site</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold">33k</h3>
          <p className="text-muted">Monthly Product Sale</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold">45.5k</h3>
          <p className="text-muted">Customers active on our site</p>
        </div>
        <div className="col-md-3">
          <h3 className="fw-bold">25k</h3>
          <p className="text-muted">Annual Gross Sale</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center my-5">
        <h2 className="fw-bold">Meet Our Team</h2>
      </div>

      <div className="row text-center">
        {/* Team Member Cards */}
        {[
          { img: tomCruise, name: "Tom Cruise", title: "Founder & Chairman" },
          { img: emmaWatson, name: "Emma Watson", title: "Managing Director" },
          { img: willSmith, name: "Will Smith", title: "Product Designer" },
        ].map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 shadow-lg">
              <img src={member.img} alt={member.name} className="rounded-circle img-fluid mx-auto d-block" style={{ width: "250px", height: "250px" }} />
              <h4 className="mt-2">{member.name}</h4>
              <p className="text-muted">{member.title}</p>
              <div>
                <i className="bi bi-twitter mx-2"></i>
                <i className="bi bi-instagram mx-2"></i>
                <i className="bi bi-linkedin mx-2"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div><GuaranteeSection /></>
   
  );
};

export default About;