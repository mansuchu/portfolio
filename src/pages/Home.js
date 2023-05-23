import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [imageOffsets, setImageOffsets] = useState({
        nonameImg: 0,
        skillsImg: 0,
        projectImg: 0,
        // AboutImg: 0,
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
                <div
                    id="nonameImg"
                    onMouseOver={() => handleMouseOver("nonameImg")}
                    onMouseOut={() => handleMouseOut("nonameImg")}
                    style={{ transform: `translateY(${imageOffsets.nonameImg}px)` }}
                >
                    <img src="/img/Group 12.png" alt="Image 1" />
                </div>
                <div
                    id="skillsImg"
                    onMouseOver={() => handleMouseOver("skillsImg")}
                    onMouseOut={() => handleMouseOut("skillsImg")}
                    style={{ transform: `translateY(${imageOffsets.skillsImg}px)` }}
                >
                    <img src="/img/Group 9.png" alt="Image 2" />
                </div>
                <div
                    id="projectImg"
                    onMouseOver={() => handleMouseOver("projectImg")}
                    onMouseOut={() => handleMouseOut("projectImg")}
                    style={{ transform: `translateY(${imageOffsets.projectImg}px)` }}
                >
                    <img src="/img/Group 10.png" alt="Image 3" />
                </div>
                <div id="AboutImg">
                    <img src="/img/Group 11.png" alt="Image 4" />
                    <img src="/img/my.png" id="myImg" alt="Image 5" />

                    <p>안녕하세요 신입개발자 추승희 입니다</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
