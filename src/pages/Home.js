import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [imageOffsets, setImageOffsets] = useState({
    nonameImg: 0,
    skillsImg: 0,
    projectImg: 0,
    AboutImg: 0,
  });

  const handleMouseOver = (id) => {
    setImageOffsets((prevOffsets) => ({
      ...prevOffsets,
      [id]: -10,
    }));
  };

  const handleMouseOut = (id) => {
    setImageOffsets((prevOffsets) => ({
      ...prevOffsets,
      [id]: 0,
    }));
  };

  return (
    <div className="firstDiv">
      <div className="parentDiv">
        <img
          src="/img/Group 12.png"
          id="nonameImg"
          alt="Image 1"
          onMouseOver={() => handleMouseOver("nonameImg")}
          onMouseOut={() => handleMouseOut("nonameImg")}
          style={{ transform: `translateY(${imageOffsets.nonameImg}px)` }}
        />

        <img
          src="/img/Group 9.png"
          id="skillsImg"
          alt="Image 2"
          onMouseOver={() => handleMouseOver("skillsImg")}
          onMouseOut={() => handleMouseOut("skillsImg")}
          style={{ transform: `translateY(${imageOffsets.skillsImg}px)` }}
        />
        <img
          src="/img/Group 10.png"
          id="projectImg"
          alt="Image 3"
          onMouseOver={() => handleMouseOver("projectImg")}
          onMouseOut={() => handleMouseOut("projectImg")}
          style={{ transform: `translateY(${imageOffsets.projectImg}px)` }}
        />
        <img
          src="/img/Group 11.png"
          id="AboutImg"
          alt="Image 4"
          onMouseOver={() => handleMouseOver("AboutImg")}
          onMouseOut={() => handleMouseOut("AboutImg")}
          style={{ transform: `translateY(${imageOffsets.AboutImg}px)` }}
        />
      </div>
    </div>
  );
};

export default Home;
