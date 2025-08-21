"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    if (!email || !password) return null;

    const userCollection = dbConnect(collectionNameObj.userCollection);
    const user = await userCollection.findOne({ email });

    if (!user) return null;

    // bcrypt.compare(password, hashedPassword)
    const isPasswordOK = await bcrypt.compare(password, user.password);

    if (!isPasswordOK) return null;

    return user;
};
