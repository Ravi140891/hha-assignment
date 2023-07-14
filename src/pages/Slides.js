import React, { useState, useEffect } from "react";
import Bar from "../assets/align-justify.png";
import Arrow from "../assets/Group 15.png";
import Close from "../assets/Frame 7.png";
import Slide1 from "../assets/Rectangle 7.png";
import Slide2 from "../assets/Slide2.png";
import Slide3 from "../assets/Slide3.png";
import { useLevel } from "../context/LevelContext";
import { useNavigate } from "react-router-dom";

const Slides = () => {
  const [showBar, setShowBar] = useState(true);
  const navigate = useNavigate();
  const {
    levelOne,
    setLevelOne,
    levelTwo,
    setLevelTwo,
    levelThree,
    setLevelThree,
    levelFour,
    setLevelFour,
    levelFive,
    setLevelFive,
  } = useLevel();

  const images = [Slide1, Slide2, Slide3];
  const levels = [
    { state: levelOne, setState: setLevelOne },
    { state: levelTwo, setState: setLevelTwo },
    { state: levelThree, setState: setLevelThree },
    { state: levelFour, setState: setLevelFour },
    { state: levelFive, setState: setLevelFive },
  ];

  const getCurrentLevel = () => {
    const currentLevel = levels.find((level) => level.state.show);
    if (currentLevel) {
      const { current, name } = currentLevel.state;
      return {
        ...currentLevel,
        image: images[current],
        name: name,
      };
    }
    return null;
  };

  const handleBack = () => {
    const currentLevel = getCurrentLevel();
    if (currentLevel && currentLevel.state.current > 0) {
      const newCurrent = currentLevel.state.current - 1;
      currentLevel.setState((prevState) => ({
        ...prevState,
        current: newCurrent,
      }));
    }
  };

  const handleNext = () => {
    const currentLevel = getCurrentLevel();
    if (currentLevel && currentLevel.state.current < images.length - 1) {
      const newCurrent = currentLevel.state.current + 1;
      currentLevel.setState((prevState) => ({
        ...prevState,
        current: newCurrent,
      }));
    }
  };

  const handleFinish = () => {
    const currentLevel = getCurrentLevel();
    if (currentLevel) {
      const { setState } = currentLevel;
      const newCurrent = 0; // Reset current index to 0
      setState((prevState) => ({
        ...prevState,
        completed: true,
        current: newCurrent,
        show: false,
      }));
      navigate("/");
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleClick = () => {
    setShowBar((prevState) => !prevState);
  };

  useEffect(() => {
    navigate("/slides");
  }, [navigate]);

  const currentLevel = getCurrentLevel();

  const isBackDisabled = currentLevel ? currentLevel.state.current === 0 : true;
  const isNextDisabled = currentLevel
    ? currentLevel.state.current === images.length - 1
    : true;
  const nextButtonText = isNextDisabled ? "Finish" : "Next";

  return (
    <div className="slide_container">
      <div className="top-bar">
        <button className="menu-btn" onClick={handleClick}>
          {showBar ? <img src={Bar} alt="" /> : <img src={Arrow} alt="" />}
        </button>
        <button onClick={handleExit}>
          {!showBar ? <img src={Close} alt="" className="close-btn" /> : ""}
        </button>
      </div>
      <div className="slide-section">
        {currentLevel && <img src={currentLevel.image} alt="" />}
      </div>
      <div className="btn-container">
        <button className="btn" disabled={isBackDisabled} onClick={handleBack}>
          Back
        </button>
        <button
          className="btn"
          onClick={isNextDisabled ? handleFinish : handleNext}
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};

export default Slides;
