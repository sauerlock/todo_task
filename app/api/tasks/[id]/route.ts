import prisma from "@/app/menuUtils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    {params}: { params: { id: string } } 
) {
    try {
        const { userId } = auth();
        const { id } = params;
        
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 })
        }

        const task = await prisma.tasks.delete({
            where: {
                id,
            },
        });
        
        console.log("Task Deleted: ", task);
        return NextResponse.json(task);

    } catch (error) {
        console.log("Error Deleting Task", error);
        return NextResponse.json({ error: "Error deleting your task"});
    }
}