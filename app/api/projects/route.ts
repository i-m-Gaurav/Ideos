import { NextRequest, NextResponse } from "next/server";
import { Project } from '@/types/types';
import { prisma } from '@/prisma';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { title, description, category, techStack , requirements }: Project = body;

		// Log the incoming data
		console.log("data", { title, description, category, techStack });

		// Create the project with techStack as an array of strings
		const project = await prisma.projects.create({
			data: {
				title,
				description,
				category,
				techStack: techStack, // This mf is special somehow
				requirements

			},
		});

		return NextResponse.json({ success: true, message: "Project submitted", data: project });
	} catch (error) {
		console.error("Error on the backend", error);
		return NextResponse.json({ success: false, message: "Failed backend error" }, { status: 500 });
	}
}