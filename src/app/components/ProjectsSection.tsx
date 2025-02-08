'use client'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "OJS Nutrition",
    description: "A comprehensive shopping application using React, Vite, TypeScript, SCSS, React Router DOM, Zustand, Blaze Slider, Material UI. The app is fully responsive, offering a seamless experience across mobile, tablet, and web.",
    technologies: ["React", "TypeScript", "SCSS", "Bootstrap", "Zustand", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/ojs.png"
  },
  {
    title: "Shopping List",
    description: "Implemented a dynamic Shopping List application using JavaScript, leveraging the power of array methods to efficiently filter items based on various categories, enhancing the user's ability to organize and manage their shopping needs.",
    technologies: ["React", "JavaScript", "Bootstrap", "Styled Components", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/shopping.png"
  },
  {
    title: "Star Wars API",
    description: "Developed a dynamic Star Wars application using JavaScript, featuring a filter-by-homeworld functionality. This application enhances user experience by efficiently listing and filtering characters based on their homeworlds.",
    technologies: ["JavaScript", "CSS", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/starwars.png"
  },
  {
    title: "Responsive Web Design",
    description: "This project aims to translate the Figma design into code using HTML, Sass, and Bootstrap. It emphasizes that the design is visually appealing while noting that the project isn't technically challenging, but assistance may be needed with certain technical details.",
    technologies: ["HTML", "CSS/SCSS", "CSS", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/responsive-web.png"
  },
  {
    title: "Placeholder-React",
    description: "I developed a customized Placeholder API clone using TypeScript, Bootstrap, and React-Router that displays content such as posts and albums specific to a particular user. Additionally, we allow users to like and save posts and store them to localStorage.",
    technologies: ["React", "TypeScript", "SCSS", "Bootstrap", "Zustand", "Styled Components"],
    liveUrl: "https://placeholder-react-api.vercel.app/",
    githubUrl: "https://github.com/yamandogus/placeholder-react",
    imageUrl: "/placeholder.png"
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
