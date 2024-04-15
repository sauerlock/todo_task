"use client";
// Create context for theme updating and the actual context.
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()
    
export const GlobalProvider = ({ children }) => {
    const [selectTheme, setSelectTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const theme = themes[selectTheme];
    const [tasks, setTasks] = useState([]);

    const alltasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks", tasks);
            setTasks(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
};
    React.useEffect(() => {
        alltasks();
    }, []);
        return (
        <GlobalContext.Provider value={{
            theme,
            tasks,
        }} >
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);