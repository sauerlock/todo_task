"use client";

import React from "react";
import GSProvider from "./GSProvider";
import { GlobalProvider } from "../context/globalProvider";
import { Toaster } from "react-hot-toast";


interface Props {
    children: React.ReactNode;
}

function CtxtProvider({ children }: Props) {
    const [ready, setReady] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 200)
    }, []);

    if (!ready) {
        return null;
    }
    

    return <GlobalProvider>
                <Toaster />
                {children}
           </GlobalProvider>;
}

export default CtxtProvider;