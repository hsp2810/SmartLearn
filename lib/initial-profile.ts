import { currentUser, auth } from "@clerk/nextjs/server";

import prisma from "@/lib/db";

export const initialProfile = async () => {
  const loggedInUser = await currentUser();
  if (!loggedInUser) return auth().redirectToSignIn();

  const userExists = await prisma.user.findUnique({
    where: { clerkUserId: loggedInUser.id },
  });
  if (userExists) return userExists;

  //New user
  const newUser = await prisma.user.create({
    data: {
      clerkUserId: loggedInUser.id,
      name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
      imageUrl: loggedInUser.imageUrl,
      email: loggedInUser.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
