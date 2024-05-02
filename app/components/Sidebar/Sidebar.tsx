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
import { useClerk, UserButton, useUser } from "@clerk/nextjs";


function Sidebar() {
    const { theme } = useGlobalState();
    const router = useRouter();
    const { user } = useUser();
    const { firstName, lastName, imageUrl } = user || { firstName: "", lastName: "", imageUrl: ""};
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
                <div className="user-btn absolute z-20 top-0 w-full h-full">
                  <UserButton />
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
                        key={item.id}
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
    background-color: ${(props) => props.theme.borderColor2};
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #5cd6ff;
    
    .user-btn {
      .cl-rootBox {
        width: 100%;
        height: 100%;
      }
      .cl-userButtonBox {
        width: 100%;
        height: 100%;
        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
    
    .profile {
        margin: 1.5rem;
        padding: 1rem 1.5rem;
        position: relative;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 300;
        color:  #5cd6ff;
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
            border: 3px dashed #76ddff;
            opacity: 0.1;
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
            color: blue;
            .profile-overlay {
                opacity: 1;
                background-color: ${(props) => props.theme.borderColor};
                border: 3px solid navy;
                transition: all 0.55s ease;
            }
    
            img {
                transform: scale(1.1);
            }
        }
    }
    
     .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

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
      background-color: rgba(240, 232, 232, 0.03);
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
    }

    i {
      display: flex;
      align-items: center;
      color:  #5cd6ff;

    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: black;
    i,
    a {
      color: #2323ff;
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }
`;

export default Sidebar;