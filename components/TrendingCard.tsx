'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Flame, Heart, MessageSquare, Users } from "lucide-react"


interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    techStack: string[];
    trending: boolean;
    author: {
      name: string;
      avatar: string;
      initials: string;
    };
    likes: number;
    comments: number;
    collaborators: number;
  }
  
  interface TrendingCardProps {
    project: Project; // Expect a project prop of type Project
  }

const TrendingCard: React.FC<TrendingCardProps> = ({project}) => {
    return (
        <>

            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                            <CardDescription>{project.category}</CardDescription>
                        </div>
                        {project.trending && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <Flame className="h-3 w-3 text-orange-500" />
                                Trending
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <p className="line-clamp-3 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="p-6 border-t flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium">{project.author.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span className="text-sm">{project.likes}</span>
                        </div>
                        <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span className="text-sm">{project.comments}</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">{project.collaborators}</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}

export default TrendingCard;


