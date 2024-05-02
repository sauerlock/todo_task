"use client";
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react';
import styled from 'styled-components';

interface Props {
    icon?: React.ReactNode;
    name?: string;
    background?: string;
    padding?: string;
    borderRad?: string;
    fw?: string;
    fs?: string;
    click?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    border?: string;
}

function Button ({
    icon,
    name,
    background,
    padding,
    borderRad,
    fw,
    fs,
    click,
    type,
    border,
 }: Props ) {
    const { theme } = useGlobalState();
    return (
    
    <ButtonStyled  
                type={type}
                style={{
                    background: background,
                    padding: padding || "0.5rem 1 rem",
                    borderRadius: borderRad || "0.5rem",
                    fontWeight: fw || "500",
                    fontSize: fs ,
                    border: border || "none",
                }}
                theme={theme}
                onClick={click}
    > 
        {icon && icon}
        {name}
    </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    color: #5cd6ff;
    z-index: 5;
    cursor: pointer;
    transition: all 0.55s ease-in-out;

    i{
        margin-right: 1rem;
        color: #76ddff;
        font: 1.5rem;
        transition: all 0.55s ease-in-out;
    }

    &:hover {
        color: blue;
        i {
            color: blue;
        }
    }
`;


export default Button;