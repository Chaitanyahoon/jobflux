import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            const isOnJobs = nextUrl.pathname.startsWith('/jobs')

            if (isOnDashboard || isOnJobs) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // Logic to redirect authenticated users away from login page could go here
                return true
            }
            return true
        },
        session: ({ session, token }) => {
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
        jwt: ({ token, user }) => {
            // In v5, user is available only on sign in
            if (user) {
                token.sub = user.id
            }
            return token
        },
    },
    providers: [], // Providers added in auth.ts
} satisfies NextAuthConfig
