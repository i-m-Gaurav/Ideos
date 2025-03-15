import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {

	try {

		const body = await req.json();
		const { title, category } = body;

		console.log("data from project", { title, category });

		return NextResponse.json({ title, category }, { status: 200 });



	} catch (error) {
		console.error("Error", error);
	}

}
