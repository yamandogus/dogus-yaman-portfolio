'use client'
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl: string
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  githubUrl,
  imageUrl 
}: ProjectCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-gray-100 px-2 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex gap-2">
        {liveUrl && (
          <Button 
            as={Link}
            href={liveUrl}
            target="_blank"
            className="bg-black text-white"
          >
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button 
            as={Link}
            href={githubUrl}
            target="_blank"
            variant="bordered"
          >
            View Code
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
