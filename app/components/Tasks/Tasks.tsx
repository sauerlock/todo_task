"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGlobalState } from "@/app/context/globalProvider";
import CreateContent from "@/app/Modals/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { plus } from "@/app/menuUtils/Icons";


interface Props{
  title: string;
  tasks: any[];

}

function Tasks({ title, tasks }: Props) {
  const { theme, isLoading, openModal, modal } = useGlobalState();

  return (
    <TaskStyled theme={theme}>
      {modal && <Modal content={<CreateContent />} />}
      <h1>{title}</h1>
      <div className="tasks-container">
        <div className="tasks grid">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              isCompleted={task.isCompleted}
              id={task.id}
            />
          ))}
        </div>
        <button className="create-task" onClick={openModal}>
          {plus}
          Add New Task
        </button>
      </div>
    </TaskStyled>
  );
}



const TaskStyled = styled.main`
 position: relative;
  padding: 2rem;
  width: 100%;
  background-color: #ffffff;
  border: 2px solid navy;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  color: navy;
  

 .tasks-container {
  display: inline-flex;
  flex-wrap: wrap;
}

.tasks {
  margin: 2rem 1rem;
  margin-left: auto;
}
    > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 8.5rem;
      height: 0.2rem;   
      background-color: navy;
      border-radius: 0.5rem;
    }
  }

  .create-task {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  margin: auto;
  padding: 2rem 5rem;
  height: 16rem;
  color: navy;
  font-weight: 600;
  cursor: pointer;
  border-radius: 1rem;
  border: 3px dashed navy;
  transition: all 0.3s ease;

  i {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: white;
    color: navy;
    border: 3px solid navy;
  }
}
    
`;

export default Tasks;