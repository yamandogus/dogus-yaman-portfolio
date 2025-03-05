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
      "Gerçek zamanlı hava durumu bilgileri sunan, interaktif bir arayüze sahip Next.js 13 ve NextUI ile geliştirilmiş modern bir hava durumu paneli. Uygulama, masaüstü ve mobil görünümler için duyarlı bir tasarıma, animasyonlu hava durumu göstergelerine ve 5 günlük ayrıntılı hava tahminlerine sahiptir.",
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
    imageUrl: "/image.png",
  },
  {
    title: "Chow Responsive App",
    description:
      "Next.js ve modern web teknolojileri ile geliştirilmiş kapsamlı bir yemek sipariş platformu. Kullanıcılar hesap oluşturabilir, restoranları keşfedebilir ve siparişlerini yönetebilir. NextUI ve Tailwind CSS ile modern bir arayüz, Next Auth ile güvenli kimlik doğrulama sistemi sunulmuştur.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "NextUI",
      "Tailwind CSS",
      "Redux Toolkit",
      "Next Auth",
      "Framer Motion",
      "Swiper.js",
      "FontAwesome",
    ],
    liveUrl: "https://chow-responsive-app.vercel.app/",
    githubUrl: "https://github.com/yamandogus/chow-responsive-app.git",
    imageUrl: "/crew.png",
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
      "TypeScript, Bootstrap ve React-Router kullanarak özel bir Placeholder API klonu geliştirdim. Bu uygulama, belirli bir kullanıcıya ait gönderileri ve albümleri görüntüler. Ayrıca kullanıcıların gönderileri beğenmelerine ve kaydetmelerine olanak tanıyarak bunları localStorage'a kaydetmelerini sağlar.",
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
     <h2 className="sm:text-3xl md:text-xl font-bold mb-6 text-center border p-4 rounded text-gray-400 shadow-custom inline-block">
        Projects
      </h2>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
