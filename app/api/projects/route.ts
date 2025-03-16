import { NextRequest, NextResponse } from "next/server";
import { Project } from '@/types/types'
import { prisma } from '@/prisma'


export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { title, description, category }: Project = body;

		const projects = await prisma.Projects.create({

			data: {
				title,
				description,
				category,
			},

		});


		return NextResponse.json({ success: true, message: "Project submitted", data: projects });

	}

	catch (error) {
		console.error("Error on the backend", error);
	}
}
