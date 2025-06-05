import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if(isOnDashboard) {
            if(isLoggedIn) return true;
            return false; //redirect the user to login page
        } else if(isLoggedIn) { //else if he user is logged in and not on the dasboard, tehn redirect it to the dashboard
            return Response.redirect(new URL('/dashboard', nextUrl))
        }
        return true;
    }
  },
  providers: []
} satisfies NextAuthConfig;