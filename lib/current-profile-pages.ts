import { NextApiRequest } from "next";
import { getAuth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const currentProfilePages = async (req: NextApiRequest) => {
  const userId = getAuth(req);

  if (userId && userId.userId !== null) {
    const profile = await db.profile.findUnique({
      where: {
        userId: userId.userId,
      },
    });
    return profile;
  } else {
    return null;
  }
};
