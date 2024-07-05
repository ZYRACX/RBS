import NextAuth from "next-auth/next";
// import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
// import handleers from "next-auth"
// export const { GET, POST } = handlers