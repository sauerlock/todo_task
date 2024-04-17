"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import menu from "@/app/menuUtils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalState } from "@/app/context/globalProvider";
import Button from "../Button/Button";
import { logout } from "@/app/menuUtils/Icons";
import { useClerk } from "@clerk/nextjs";

function Sidebar() {
    const { theme } = useGlobalState();
    const router = useRouter();
    
    const { signOut } = useClerk();
    
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
            <div className="sign-out relative">
                <Button
                    name={"Sign Out"}
                    type={"submit"}
                    padding={"0.4rem 0.8rem"}
                    borderRad={"0.8rem"}
                    fw={"500"}
                    fs={"1.2rem"}
                    icon={logout}
                    click={() =>{
                        signOut(() => router.push("/signin"));
                    }}
                />
            </div>
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
    color: navy;
    &:hover {
        border-color: blue;
    }
    
    .profile {
        margin: 1.5rem;
        padding: 1rem 1.5rem;
        position: relative;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 300;
        color: navy;
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
            transition: all 0.55s linear;
            border-radius: 1rem;
            border: 3px dashed ${(props) => props.theme.colorBg4};
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
              transition: all 0.5s linear;
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
                background-color: #dbdbdb;
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
            background-color: #d8d8d8;
            z-index: 1;
            transition: all 0.55s ease-in-out;
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
            font-weight: 700;
            transition: all 0.3s ease-in-out;
            z-index: 2;
            line-height: 0;
        }

        i {
            display: flex;
            align-items: center;
            color: navy;
        }
        
        &:hover {
            &::after {
                width:100%;
            }
        }
    }
    
    .active {
        background-color: #dbdbdb;
        
        i, a{
            color: blue;
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