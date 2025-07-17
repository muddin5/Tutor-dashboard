import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification:false
};

export const ContextProvider = ( { children } ) => {
    //Copied directly from Repo while debugging smmth, but uncomment them when we see them in vid
    const [screenSize, setScreenSize] = useState(undefined);
    //const [currentColor, setCurrentColor] = useState('#03C9D7');
    //const [currentMode, setCurrentMode] = useState('Light');
    //const [themeSettings, setThemeSettings] = useState(false); 
    
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return(
        <StateContext.Provider
        value ={{
            activeMenu,
            setActiveMenu,
            isClicked, setIsClicked, handleClick,
            screenSize, setScreenSize,
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext)