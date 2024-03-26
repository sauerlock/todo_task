"use client";
import React from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

function GSProvider({children}: Props) {
    return (
        <GStyles>
            {children}
        </GStyles>
    )
}

const GStyles= styled.div`
    padding: 2rem;
    display: flex;
    gap: 2.5rem;
    height: 100%;
`;
 
export default GSProvider;
