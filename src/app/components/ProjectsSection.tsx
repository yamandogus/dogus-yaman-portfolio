"use client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OJS Nutrition",
    description:
      "React, Vite, TypeScript, SCSS, React Router DOM, Zustand, Blaze Slider, Material UI kullanılarak geliştirilmiş kapsamlı bir alışveriş uygulaması. Uygulama tamamen duyarlı olup, mobil, tablet ve web üzerinde sorunsuz bir deneyim sunar.",
    technologies: [
      "React",
      "TypeScript",
      "SCSS",
      "Bootstrap",
      "Zustand",
      "Styled Components",
    ],
    liveUrl: "https://dogus-yaman-nutrition.vercel.app/",
    githubUrl: "https://github.com/yamandogus/final-project.git",
    imageUrl: "/ojs.png",
  },
  {
    title: "Weather Map Dashboard",
    description:
      "Gerçek zamanlı hava durumu bilgileri sunan, interaktif bir arayüze sahip Next.js 13 ve NextUI ile geliştirilmiş modern bir hava durumu paneli. Uygulama, masaüstü ve mobil görünümler için duyarlı bir tasarıma, animasyonlu hava durumu göstergelerine ve ayrıntılı hava tahminlerine sahiptir.",
    technologies: [
      "Next.js 13",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "Framer Motion",
      "Lottie Animations",
      "Axios",
      "React",
    ],
    liveUrl: "https://water-map-project.vercel.app/",
    githubUrl: "https://github.com/yamandogus/water-map-project.git",
    imageUrl: "/weather.png",
  },
  {
    title: "Shopping List",
    description:
      "JavaScript kullanarak dinamik bir Alışveriş Listesi uygulaması geliştirdim. Kullanıcıların alışveriş ihtiyaçlarını daha iyi organize etmelerini sağlamak amacıyla, çeşitli kategorilere göre filtreleme yapabilen güçlü dizi metodlarını kullandım.",
    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Styled Components",
      "CSS",
    ],
    liveUrl: "https://shopping-list-iota-gules.vercel.app/",
    githubUrl: "https://github.com/yamandogus/Shopping-List.git",
    imageUrl: "/shopping.png",
  },
  {
    title: "Star Wars API",
    description:
      "JavaScript ile geliştirilen dinamik bir Star Wars uygulaması. Kullanıcı deneyimini geliştirme için gezegene göre filtreleme özelliği sunar. Karakterler, geldikleri gezegenlere göre listelenir ve filtrelenebilir.",
    technologies: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://star-wars-inky.vercel.app/",
    githubUrl: "https://github.com/yamandogus/Star-Wars.git",
    imageUrl: "/starwars.png",
  },
  {
    title: "Responsive Web Design",
    description:
      "Bu proje, Figma tasarımını HTML, Sass ve Bootstrap kullanarak koda dökmeyi amaçlamaktadır. Tasarımın görsel olarak etkileyici olması hedeflenmiştir. Teknik açıdan zorlayıcı bir proje olmasa da belirli teknik detaylar konusunda yardıma ihtiyaç duyulabilir.",
    technologies: ["HTML", "CSS/SCSS", "CSS", "Bootstrap"],
    liveUrl: "https://nefa-responsive-web.vercel.app/",
    githubUrl: "https://github.com/yamandogus/Nefa-Responsive-Web.git",
    imageUrl: "/responsive-web.png",
  },
  {
    title: "Placeholder-React",
    description:
      "TypeScript, Bootstrap ve React-Router kullanarak özel bir Placeholder API klonu geliştirdim. Bu uygulama, belirli bir kullanıcıya ait gönderileri ve albümleri görüntüler. Ayrıca kullanıcıların gönderileri beğenmelerine ve kaydetmelerine olanak tanıyarak bunları localStorage’a kaydetmelerini sağlar.",
    technologies: [
      "React",
      "TypeScript",
      "SCSS",
      "Bootstrap",
      "Zustand",
      "Styled Components",
    ],
    liveUrl: "https://placeholder-react-api.vercel.app/",
    githubUrl: "https://github.com/yamandogus/placeholder-react",
    imageUrl: "/placeholder.png",
  },
];

export default function ProjectsSection() {
  return (
    <section>
     <div className="flex items-center justify-center">
     <h2 className="text-3xl font-bold text-center mb-12 my-8 text-gray-400 shadow-custom inline-block p-4">
        Projects
      </h2>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
