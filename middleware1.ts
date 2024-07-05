// import { NextRequest, NextResponse  } from "next/server";
// import  jwt from "jsonwebtoken";
// export async function middleware (req: NextRequest ){
//     const requestHeaders = new Headers(req.headers)
//     const JWT_SECRECT = process.env.JWT_SECRECT
//     const token = requestHeaders.get("x-auth-token");
//     console.log(token)
//     if(!token){
//         return new NextResponse("Unauthorized", {status: 401});
//     }
//     try{    
//         const data = jwt.verify(token, JWT_SECRECT)
//         requestHeaders.set("user", JSON.stringify(data))
//         return NextResponse.next({
//             request: {
//                 headers: requestHeaders
//             }
//         })
//     }catch(error){
//         return new NextResponse("Unauthorized", {status: 401});
//     }

    
// }

// export const config= {
//     matcher: "/app/:path*"
// }