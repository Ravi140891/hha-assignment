import React from "react";
import Pink from "../assets/pink-ellipse.png";
import Fire from "../assets/fire.png";
import Active_line from "../assets/Active-line.png";
import Active_down from "../assets/Active_down.png";
import Inactive_fire from "../assets/Inactive_fire.png";
import Inactive_ellipse from "../assets/Inactive_ellipse.png";
import Inactive_line from "../assets/Line 7.png";
import Inactive_down from "../assets/Line 8.png";
import { useLevel } from "../context/LevelContext";

const Home = () => {
  const { levelOne, levelTwo, levelThree, levelFour } = useLevel();
  console.log(levelThree.completed);
  return (
    <div className="home">
      <div className="home-container">
        <div className="level-one">
          <button>
            <img src={Pink} alt="Ellipse" className="pink_ellipse" />
            <img src={Fire} alt="" className="fire" />
            <h3>Level 1</h3>
          </button>
          <img src={Active_line} alt="" className="right-side" />
          <img src={Active_down} alt="" className="right-down" />
        </div>
        <div className="level-two">
          <button disabled={!levelOne.completed}>
            <img src={levelOne.completed ? Pink : Inactive_ellipse} alt="" />
            <img
              src={levelOne.completed ? Fire : Inactive_fire}
              alt=""
              className="fire"
            />
            <h3>Level 2</h3>
          </button>
          <img
            src={levelOne.completed ? Active_line : Inactive_line}
            alt="straigh line"
            className="left-side"
          />
          <img
            src={levelOne.completed ? Active_down : Inactive_down}
            alt=""
            className="left-down"
          />
        </div>
        <div className="level-three">
          <button disabled={!levelTwo.completed}>
            <img src={levelTwo.completed ? Pink : Inactive_ellipse} alt="" />
            <img
              src={levelTwo.completed ? Fire : Inactive_fire}
              alt=""
              className="fire"
            />
            <h3>Level 3</h3>
          </button>
          <img
            src={levelTwo.completed ? Active_line : Inactive_line}
            alt=""
            className="right-side"
          />
          <img
            src={levelTwo.completed ? Active_down : Inactive_down}
            alt=""
            className="right-down"
          />
        </div>
        <div className="level-four">
          <button disabled={!levelThree.completed}>
            <img src={levelThree.completed ? Pink : Inactive_ellipse} alt="" />
            <img
              src={levelThree.completed ? Fire : Inactive_fire}
              alt=""
              className="fire"
            />
            <h3>Level 4</h3>
          </button>
          <img
            src={levelThree.completed ? Active_line : Inactive_line}
            alt=""
            className="left-side"
          />
          <img
            src={levelThree.completed ? Active_down : Inactive_down}
            alt=""
            className="left-down"
          />
        </div>
        <div className="level-five">
          <button disabled={!levelFour.completed}>
            <img src={levelFour.completed ? Pink : Inactive_ellipse} alt="" />
            <img
              src={levelFour.completed ? Fire : Inactive_fire}
              alt=""
              className="fire"
            />
            <h3>Level 5</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
