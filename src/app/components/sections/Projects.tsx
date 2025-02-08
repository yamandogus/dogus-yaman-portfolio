"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const projects = [
  {
    id: 1,
    title: "QU3 Nutrition",
    description: "React, TypeScript, SCSS, React Router DOM, Zustand, State Slider ve Material UI kullanılarak geliştirilmiş tam responsive bir uygulama. Kullanıcılar besin değerlerini takip edebilir ve günlük hedeflerini belirleyebilir.",
    image: "/projects/qu3-nutrition.jpg",
    liveUrl: "https://qu3-nutrition.vercel.app",
    githubUrl: "https://github.com/username/qu3-nutrition",
    technologies: ["React", "TypeScript", "SCSS", "Zustand"]
  },
  {
    id: 2,
    title: "Placeholder React",
    description: "TypeScript, React Router DOM, Zustand ve State Components kullanılarak geliştirilmiş bir sosyal medya uygulaması. Kullanıcılar post paylaşabilir ve yönetebilir.",
    image: "/projects/placeholder-react.jpg",
    liveUrl: "https://placeholder-react.vercel.app",
    githubUrl: "https://github.com/username/placeholder-react",
    technologies: ["React", "TypeScript", "Zustand"]
  },
  {
    id: 3,
    title: "Star Wars Wiki",
    description: "JavaScript kullanılarak geliştirilmiş dinamik bir Star Wars uygulaması. Kullanıcılar karakter listesini görüntüleyebilir ve detaylı bilgilere erişebilir.",
    image: "/projects/starwars-wiki.jpg",
    liveUrl: "https://starwars-wiki.vercel.app",
    githubUrl: "https://github.com/username/starwars-wiki",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: 4,
    title: "Responsive Web Design",
    description: "HTML, CSS ve Bootstrap kullanılarak geliştirilmiş responsive bir tasarım. Tüm cihazlarda uyumlu çalışacak şekilde tasarlandı.",
    image: "/projects/responsive-design.jpg",
    liveUrl: "https://responsive-design.vercel.app",
    githubUrl: "https://github.com/username/responsive-design",
    technologies: ["HTML", "CSS", "Bootstrap"]
  }
];

export function Projects() {
  return (
    <section className="container py-24">
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Projelerim
          </h2>
          <p className="text-muted-foreground">
            Geliştirdiğim bazı projeler
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group space-y-4">
              <div className="overflow-hidden rounded-lg bg-secondary aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank">Canlı Önizleme</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank">Kaynak Kod</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 