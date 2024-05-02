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
    const { theme, deleteTask } = useGlobalState();
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
        <button className="delete" onClick={() => {
            deleteTask(id);
        }}>{trash}</button>
        </div>
    </TaskItemStyled>
    );
}

const TaskItemStyled = styled.div`  
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    box-shadow: white;
    border: 3px dashed rgba(0, 157, 255, 0.3);
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.3);

    .date {
       margin-top: auto;
    }

    &:hover {
      border: 3px solid navy;
      background-color: ${(props) => props.theme.borderColor2};
      color: white;
      .completed{
        color: white;
      }

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
                font-size: 1.4rem;
                color: blue;
                
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
            color: white
        }

        .completed {
            background:${(props) => props.theme.colorGreenDark};
        }
        
        
    }
    
`;


export default TaskItem;