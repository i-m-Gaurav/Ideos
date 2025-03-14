"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {

	const handleButtonClick = async () => {
		await signOut();
	};

	return (
		<button onClick={handleButtonClick}>
			Sign Out
		</button>
	);
}