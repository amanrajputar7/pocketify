import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    try {
        await client.user.create({
            data: {
                email: "test@example.com",
                name: "Test User"
            }
        })
        return NextResponse.json({
            message: "User created successfully"
        })
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create user",
            details: error
        }, { status: 500 })
    }
}

export const POST = async () => {
    try {
        const users = await client.user.findMany();
        return NextResponse.json({
            users
        })
    } catch (error) {
        return NextResponse.json({
            error: "Failed to fetch users",
            details: error
        }, { status: 500 })
    }
}