import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import Google from "next-auth/providers/Google";
export const authConfig = {
  providers: [GitHub, Google, "Credentials"],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async authorize(credentials) {
      const user = {
        id: 1,
        name: "Test User",
        email: "",
      };
      return user;
    },
    async redirect({ url, baseUrl }) {
     return '/'
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  theme: "auto",
  debug: false,
};

export const { handlers, auth, signOut, signIn} = NextAuth(authConfig);

