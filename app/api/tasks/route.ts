import prisma from "@/app/menuUtils/connect";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";


export async function POST(req: Request) {
    try {
        const { userId } = auth();

        if(!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }
        
        const { title, description, date, completed, important } = await req.json();

        if (!title || !description || !date) {
            return NextResponse.json({
                error: "Missing required fields",
                status: 400,            
            });
        }

        if (title.length < 3) {
            return NextResponse.json({
                error: "Title must be at least 5 3 characters long",
                status: 400,
            });
        }
        
        const task = await prisma.tasks.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            },
        });

        return NextResponse.json(task);
    } catch (error) {
        console.log("Error: can't create todos: ", error);
        return NextResponse.json({ error : "Error creating your todo", status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ erro: "Unauthorized", status: 401});
        }
        const tasks = await prisma.tasks.findMany({
            where: {
                userId,
            },
        });
        console.log("TASKS: ", tasks);
        return NextResponse.json(tasks);
    } catch (error) {
        console.log("Error: can't get todos: ", error);
        return NextResponse.json({ error : "Error getting your todo", status: 500 })
    }
}

export async function PUT(req: Request) {
    try {

    } catch (error) {
        console.log("Error: can't update todos: ", error);
        return NextResponse.json({ error : "Error update your todo", status: 500 })
    }
}

export async function DELETE(req: Request) {
    try {

    } catch (error) {
        console.log("Error: can't delete todos: ", error);
        return NextResponse.json({ error : "Error delete your todo", status: 500 })
    }
}