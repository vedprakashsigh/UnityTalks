import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const currentProfile = async () => {
	const userId = auth();

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
