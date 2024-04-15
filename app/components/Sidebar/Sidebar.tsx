"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import menu from "@/app/menuUtils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalState } from "@/app/context/globalProvider";

function Sidebar() {
    const { theme } = useGlobalState();
    const router = useRouter();
    const pathName = usePathname();
    const handleClick = (link:string) => {
        router.push(link);
    };

    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay"></div>
                <div className="image">
                    <Image width={70} height={70} src="/vader.jpeg" alt="profile"/>
                </div>
                <h1>
                    <span>Darth</span>
                    <span>Vader</span>
                </h1>
            </div>
            <ul className="nav-items">
                {menu.map((item) => {
                    const link = item.link;
                    return (
                    <li 
                        className={`nav-item ${pathName === link ? "active" : ""}`}
                        onClick={() => {
                        handleClick(link);
                    }}>
                        {item.icon}
                        <Link href={link}>{item.title}</Link>
                    </li>
                );
                })}
            </ul>
            <button></button>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: #ffffff;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: blue;
    &:hover {
        border-color: darkblue;
    }

    .profile {
        margin: 1.5rem;
        padding: 1rem 1.5rem;
        position: relative;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 300;
        color: darkblue;
        display: flex;
        align-items: center;
        
        .profile-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(10px);
            z-index: 1;
            background: white;
            transition: all 0.55s liner;
            border-radius: 1rem;
            border: 1px solid ${(props) => props.theme.colorBg4};
            opacity: 0.2;
        }

        h1 {
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            line-height: 1.4rem;
        }

        .image, 
        h1 {
            position: relative;
            z-index: 1;
        }
        
        .image {
            flex-shrink: 0;
            display: inline-block;
            overflow: hidden;
            transition: all 0.5s ease;
            border-radius: 100%;
            
            width: 70px;
            height: 70px;

            img {
              border-radius: 100%;
              transition: all 0.5s ease;
            }
        }
        
        > h1 {
            margin-left: 0.8rem;
            font-size: clamp(1.2rem, 4vw, 1.4rem); 
            line-height: 100%;
        }

        &:hover {
            
            .profile-overlay {
                opacity: 1;
                background-color: #b4b4b4;
                border: 3px solid blue;
                transition: all 0.40s ease;
            }
    
            .image {
                transform: scale(1.2);
            }

            h1 {
                color: blue;
                font-weight: 300;
                transition: all 0.40s ease;
            }
        }
    }
    
    .nav-item {
        position: relative;
        padding: 0.8rem 1rem 0.9rem 2.1rem;
        margin: 0.4rem 0;
        display: grid;
        grid-template-columns: 40px 1fr;
        cursor: pointer;
        align-items: center;

        &::after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            background-color: #b1b0b0;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }

        &::before {
            position: absolute;
            content: "";
            right: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background-color: blue;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
        }

        a {
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            z-index: 2;
            line-height: 0;
            color: darkblue;
        }

        i {
            display: flex;
            align-items: center;
            color: darkblue;
        }
        &:hover {
            &::after {
                width:100%;
            }
        }
    }
    .active {
        background-color: #535353;
        
        i,
        a{
            color: white;
        }
    }
    .active::before{
        width: 0.3rem;
    }

    >button{
       margin: 1.5rem;
    }

`;

export default Sidebar;