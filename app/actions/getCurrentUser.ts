import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb"

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    
    if (!session?.user?.email) { return null; }

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string }
    });
    if (!currentUser) { return null; }

    // Date objects can't be passed to client component from server component. Need toISoString() method to transform Data ype into a string.
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };

  } catch (error: any) {
    return null; // Won't throw any error cause this is not a API requisition. Its a direct comunication with database throught the server component. 
  }
}