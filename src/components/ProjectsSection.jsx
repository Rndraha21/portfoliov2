import { Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Social Media",
    description:
      "A beautiful Social Media Community app using React and TailwindCSS",
    image: "/projects/Project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://robinmedia.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A beautiful Portfolio app using React and TailwindCSS",
    image: "/projects/Project2.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://rndrahadev.vercel.app/",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and TailwindCSS",
    image: "/projects/Project3.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://rndrahapage.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was sarefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="blank"
                      className="text-foreground/80 hover:text-secondary transition-colors duration-300 cosmic-button"
                    >
                      Visit Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Rndraha21"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="blank"
          >
            Visit My GitHub
            <Github />
          </a>
        </div>
      </div>
    </section>
  );
};
