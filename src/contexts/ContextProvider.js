import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    userProfil:false,
    notification: false,
  };

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });


  return (
    <StateContext.Provider value={{ activeMenu, screenSize, isClicked, setIsClicked, initialState, setScreenSize, handleClick, setActiveMenu}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);