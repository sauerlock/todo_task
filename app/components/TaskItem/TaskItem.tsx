"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/menuUtils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/menuUtils/formatDate";
interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
    const { theme } = useGlobalState();
    return (<TaskItemStyled theme={theme} >
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="date">{formatDate( date )}</p>
        <div className="task-footer"> 
        {isCompleted ? ( 
            <button className="completed">Completed</button> 
        ) : ( 
            <button className="incomplete">Incomplete</button>
        )}
        <button className="edit">{edit}</button>
        <button className="delete">{trash}</button>
        </div>
    </TaskItemStyled>
    );
}

const TaskItemStyled = styled.div`  
    padding: 2.5rem 1.3rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: blue;
    border: 3px dashed darkblue;
    height: 16rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    margin: auto;

    .date {
       margin-top: auto;
       color: navy;
    }

    &:hover {
      border: 3px solid navy;
      background-color: white;
      color: navy;

    }

    > h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .task-footer{
        display: flex;
        align-items: center;
        gap: 1.2rem;
        
        button {
            border: none;
            outline: none;
            cursor: pointer;
            i {
                font-size: 1rem;
                color: navy;
            }
        }
    
        .edit {
            margin-left: auto;
        }
        
        .completed, 
        .incomplete {
            display: inline-block;
            padding: 0.3rem 1rem;
            background: red;
            border-radius: 16px;
        }

        .completed {
            background:${(props) => props.theme.colorGreenDark};
        }
    
    }
    
`;


export default TaskItem;