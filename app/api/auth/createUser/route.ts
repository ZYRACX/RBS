import { NextRequest, NextResponse } from "next/server";
import  bcrypt from "bcryptjs"
import {pool} from "@/utils/mysql/connect"
import { PrismaClient } from "@prisma/client";
// POST handler for the app directory
export async function POST(req: NextRequest) {
  const prisma =new PrismaClient()
  try {
    // Parse the request body
    const { username, email, password } = await req.json();

    // Log received fields for debugging
    // console.log({ username, email, password });

    // Basic validation for missing fields
    if ((!username || !email || !password) ) {
      return NextResponse.json(
        { 
          status: 400,
          error: "Missing required fields",
          reason: "One or more of the following fields are missing: username, email, password."
        },
        { status: 400 }
      );
    }

    // Check if the username already exists
    const isUsernameExsists = await prisma.user.findUnique({
      where:{
        username: username
      }
    })
    if(isUsernameExsists){
      return NextResponse.json(
        {
          status: 400,
          error: "Username already exists",
          reason: "The username you provided already exists. Please choose a different username"
          },
          { status: 400 }
          );
        }
    // Check if the email already exists
    const isEmailExsists = await prisma.user.findUnique({
      where:{
        email: email
      }
    })
    if (isEmailExsists) {
      return NextResponse.json(
        {
          status: 400,
          error: "Email already exists",
          reason: "The email you provided already exists. Please choose a different email"
          },
          { status: 400 }
          );
    }

    // Making password secure
    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(password, salt)

    // Attempt to create a new user
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: securePassword
      }
    })

    // Respond with success
    return NextResponse.json(
      {
        status: 201,
        message: "User created successfully",
      },
      { status: 201, }
    );
  } catch (error) {
    console.error("Error in POST request:", error);

    // General server error fallback
    return NextResponse.json(
      {
        status: 500,
        error: "Internal Server Error",
        reason: "An unexpected error occurred. Please try again later."
      },
      { status: 500 }
    );
  }
}