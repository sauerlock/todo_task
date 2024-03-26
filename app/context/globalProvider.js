"use client";
// Create context for theme updating and the actual context.
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()
    
export const GlobalProvider = ({ children }) => {
    const [selectTheme, setSelectTheme] = useState(0);
    const theme = themes[selectTheme];    
        return (
        <GlobalContext.Provider value={{
            theme,
        }} >
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);