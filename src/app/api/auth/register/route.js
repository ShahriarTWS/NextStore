import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password, name } = body;

        if (!email || !password || !name) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const userCollection = await dbConnect(collectionNameObj.userCollection);

        // Check if user already exists
        const existing = await userCollection.findOne({ email });
        if (existing) {
            return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userCollection.insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        // ⚠️ Don't return password
        return NextResponse.json({
            _id: result.insertedId,
            name,
            email,
        });
    } catch (error) {
        console.error("Register API error:", error);
        return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
    }
}
