import React from "react";
import "../css/About.css";
import pic1 from "../images/ohad.jpg";
import pic2 from "../images/ilana.jpeg";
import pic3 from "../images/illya.jpg";

function About() {
  return (
    <div className="about-page">
      <h1>About Team</h1>
      <div>
        <h2>Ohad</h2>
        <img src={pic1} alt="" className="pics-team person1" />
        <p>
          Ohad Lichtenstein. Ohad has been an ITC student for almost 5 months.
          He is married and has 2 dogs and a cat.
        </p>
      </div>
      <div>
        <h2>Ilana</h2>
        <img src={pic2} alt="" className="pics-team person2" />
        <p>
          Ilana Katzin. Ilana has been an ITC student for almost 5 months. She
          lives in Jerusalem and works in QA.
        </p>
      </div>
      <div>
        <h2>Illya</h2>
        <img src={pic3} alt="" className="pics-team person1" />
        <p>
          illya Sokolov. Illya has been an ITC student for almost 5 months. He
          studied computer sciences and obtains new skills as a Full stack
          developer with React and NodeJS with ITC.
        </p>
      </div>
    </div>
  );
}

export default About;
