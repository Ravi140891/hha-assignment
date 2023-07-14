import React, { createContext, useContext, useState } from "react";

const LevelContexts = createContext();

const LevelContext = ({ children }) => {
  const [levelOne, setLevelOne] = useState({
    current: 0,
    completed: false,
  });

  const [levelTwo, setLevelTwo] = useState({
    current: 0,
    completed: false,
  });

  const [levelThree, setLevelThree] = useState({
    current: 0,
    completed: false,
  });

  const [levelFour, setLevelFour] = useState({
    current: 0,
    completed: false,
  });

  const [levelFive, setLevelFive] = useState({
    current: 0,
    completed: false,
  });

  return (
    <LevelContexts.Provider
      value={{
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
      }}
    >
      {children}
    </LevelContexts.Provider>
  );
};

const useLevel = () => useContext(LevelContexts);

export { useLevel, LevelContext };
