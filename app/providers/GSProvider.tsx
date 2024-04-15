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
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
    height: 100%;
    width: 100%;

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300, 1fr));
        gap: 1.5rem;
    }
`;
 
export default GSProvider;
