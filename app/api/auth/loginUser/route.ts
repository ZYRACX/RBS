import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/mongodb/mongoose";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
// POST handler for the app directory
export async function POST(req: NextRequest, res: NextResponse) {
  const JWT_SECRECT = process.env.JWT_SECRECT
  try {
    // Parse the request body
    const { username, password } = await req.json();

    // Log received fields for debugging
    // console.log({ username, email, password });

    // Basic validation for missing fields
    if (!username || !password) {
      return NextResponse.json(
        {
          status: 400,
          error: "Missing required fields",
          reason:
            "One or more of the following fields are missing: username, password.",
        },
        { status: 400 }
      );
    }

    await connect();
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        {
          status: 400,
          error: "User not found",
        },
        {
          status: 400,
        }
      );
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return NextResponse.json(
        {
          status: 400,
          error: "Password is incorrect",
        },
        {
          status: 400,
        }
      );
    }

    const data = {
      user:   {id: user.id}
    }

    const authToken = jwt.sign(data, JWT_SECRECT)

    // return NextResponse.json(authToken)

    // Respond with success
    return NextResponse.json(
      {
        token: JWT_SECRECT
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
  }

  // Handle validation errors (Mongoose ValidationError)

  // General server error fallback
  return NextResponse.json(
    {
      status: 500,
      error: "Internal Server Error",
      reason: "An unexpected error occurred. Please try again later.",
    },
    { status: 500 }
  );
}
