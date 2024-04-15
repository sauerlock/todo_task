"use client";
import React, {useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import styled from "styled-components";


function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name: string) => (e: any) => {
        switch(name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "important":
                setImportant(e.target.checked);
                break;
            default:
            break;
        }

    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const tasks = {
            title,
            description,
            date,
            completed,
            important,
        };
        try {
            const res = await axios.post("/api/tasks", tasks);
            if(res.data.error) {
                toast.error(res.data.error);
            }

            if(!res.data.error) {
            toast.success("Task Created Successfully");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    } 
    return (
    <form onSubmit={handleSubmit}>
        <h1>Create a Task</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={handleChange("title")}
            placeholder="Title"
            />
        </div>
        <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea 
                value={description}
                onChange={handleChange("description")}
                id="description"
                name="description"                
                rows={4}
                placeholder="description"
           ></textarea>
        </div>
        <div className="input-control">
            <label htmlFor="date">Date</label>
            <input 
                value={date}
                id="date"
                name="date"
                onChange={handleChange("date")}
                type="date"
                placeholder="date"
           />
        </div>
        <div className="input-control">
            <label htmlFor="completed">Completed</label>
            <input 
                value={completed.toString()}
                id="completed"
                name="completed"
                onChange={handleChange("completed")}
                type="checkbox"
                placeholder="completed"
           />
        </div>
        <div className="input-control">
            <label htmlFor="important">Important</label>
            <input 
                value={important.toString()}
                id="important"
                name="important"
                onChange={handleChange("important")}
                type="checkbox"
                placeholder="important"
           />
        </div>
        <div className="submit-btn flex justify-end">
            <button type="submit">
                <span>Submit</span>
            </button>
        </div>
    </form>
)}

export default CreateContent;