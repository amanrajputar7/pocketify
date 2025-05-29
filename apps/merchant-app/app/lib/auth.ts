import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@repo/db/client";

const db = new PrismaClient();

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async signIn({ user, account }: any) {
            if (account?.provider === "google") {
                try {
                    const existingMerchant = await db.merchant.findFirst({
                        where: {
                            email: user.email
                        }
                    });

                    if (!existingMerchant) {
                        await db.merchant.create({
                            data: {
                                email: user.email,
                                name: user.name,
                                auth_type: "Google"
                            }
                        });
                    }
                    return true;
                } catch (error) {
                    console.error("Error saving merchant:", error);
                    return false;
                }
            }
            return true;
        }
    }
}