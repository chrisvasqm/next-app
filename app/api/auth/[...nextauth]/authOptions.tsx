import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null

                const user = await prisma.user.findUnique({ where: { email: credentials.email } })

                if (!user) return null

                const passwordsMatched = await bcrypt.compare(credentials.password, user.hashedPassword!)

                return passwordsMatched ? user : null
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
};

export default authOptions