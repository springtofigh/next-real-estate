import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json(
            { error: "لطفا اطلاعات معتبر وارد کنید" }, 
            { status: 422 })
        }

        const exsitingUser = await User.findOne({ email });
        if (exsitingUser) {
            return NextResponse.json(
                { error: "این حساب کاربری وجود دارد" }, 
                { status: 422 })
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });

        console.log(newUser);
        return NextResponse.json(
            { message: "حساب کاربری با موفقیت ساخته شد" }, 
            { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "مشکلی در سرور رخ داده"
        }, {
            status: 500
        })
    }
}