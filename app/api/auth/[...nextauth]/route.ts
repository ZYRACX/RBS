import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
// import Email from "next-auth/providers/email";
// import { randomBytes, randomUUID } from "crypto";
import { compare } from "bcryptjs";
import { AuthOptions } from "next-auth";

// import {} from "next-auth"

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "Text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        console.log(credentials);
        const User = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });
        console.log(User?.password)
        if (!User) {
          return null;
        }

        const isPasswordValid = compare(credentials.password, User.password);

        if (!isPasswordValid) {
          return null;
        }
        console.log(User)
        return User
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(email);
      console.log(credentials);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      // console.log(user);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

  },
  pages: {
    signIn: "/auth/signin",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// import handleers from "next-auth"
// export const { GET, POST } = handlers
