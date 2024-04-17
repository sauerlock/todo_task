"use client";
import Image from "next/image";
import Tasks from "./components/Tasks/Tasks";
import React from "react";
import { useGlobalState } from "./context/globalProvider";


export default function Home() {
  const {tasks} = useGlobalState();
  
  return <Tasks title="All Tasks"  tasks={tasks} />;
}
