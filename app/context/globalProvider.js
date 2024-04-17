"use client";
// Create context for theme updating and the actual context.
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()
    
export const GlobalProvider = ({ children }) => {
    const { user } = useUser();
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


    const deleteTask = async (id) => {
        try {
            const res = axios.delete(`/api/tasks/${id}`);
            toast.success("Task deleted");
            alltasks();
        } catch (error) {
            console.log(error)
            total.error("Something went wrong");
        }
    }

    React.useEffect(() => {
        if(user) alltasks();
    }, [user]);
        return (
        <GlobalContext.Provider value={{
            theme,
            tasks,
            deleteTask,
            isLoading,
        }} >
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);