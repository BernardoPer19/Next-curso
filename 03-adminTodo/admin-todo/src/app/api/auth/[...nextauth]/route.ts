//imports
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";

//CredentialProviders
import CredentialsProvider from "next-auth/providers/credentials";

//Providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { signInEmailPassword } from "@/Auth/actions/auth-actions";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "user@gmail.om" },
                password: { label: "Contraseña", type: "password", placeholder: "******" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email y contraseña son obligatorios");
                }

                const user = await signInEmailPassword(credentials.email, credentials.password);

                if (user) {
                    return user
                } else {
                    return null

                }
            }
        })
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // Ejemplo: solo permitir correos verificados
            if (!user.email) return false;
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }


            if (!token.email) {
                console.error("No email found in token");
                return token;
            }

            try {
                const dbUser = await prisma.user.findUnique({
                    where: { email: token.email },
                });

                if (dbUser?.isActive === false) {
                    throw Error("Usuario no esta activo")
                }


                if (dbUser) {
                    token.roles = dbUser.roles ?? [];
                } else {
                    token.roles = [];
                }
            } catch (error) {
                console.error("Error fetching user from DB:", error);
                token.roles = [];
            }

            return token;
        },
        async session({ session, token, user }) {
            // Puedes agregar campos personalizados al `session.user` aquí
            if (session && session.user) {
                session.user.roles = token.roles
                session.user.id = token.id
            }


            if (token && session.user) {
                session.user.email = token.sub;
            }
            return session;
        },

    },


};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
