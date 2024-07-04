import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/mongodb/mongoose";
import User from "@/models/user";
import  bcrypt from "bcryptjs"
// POST handler for the app directory
export async function POST(req: NextRequest) {
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

    await connect();
    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(password, salt)

    // Attempt to create a new user
    await User.create({username, email, password: securePassword})
    // await newUser.save();
    

    // Respond with success
    return NextResponse.json(
      {
        status: 201,
        message: "User created successfully",
        data: { username, email }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
    // console.log(error.name)
    // Handle duplicate key error (MongoError)
    if (error.name === 'MongoServerError' && error.code === 11000) {
      // Determine which field caused the duplicate key error
      const duplicateField = Object.keys(error.keyPattern)[0];
      const errorMessage = `${duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)} already exists.`;

      return NextResponse.json(
        {
          status: 409,
          error: "Conflict",
          reason: errorMessage
        },
        { status: 409 }
      );
    }

    // Handle validation errors (Mongoose ValidationError)
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(e => e.message);

      return NextResponse.json(
        {
          status: 400,
          error: "Validation Error",
          reason: validationErrors.join(', ')
        },
        { status:  400 }
      );
    }

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