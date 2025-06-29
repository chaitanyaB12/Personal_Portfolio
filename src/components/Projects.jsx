import image1 from "/RecipeXpress.png";
import image2 from "/NoteCraft.png";
import image3 from "/YT Transcript.jpeg";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "RecipeXpress",
    description:
      "A full-stack MERN application for discovering and sharing food recipes. Built with Node.js, Express, React, MongoDB, and styled using CSS3.",
    technologies: [
      "React.js",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
      "Multer"
    ],
    liveLink: "https://recipe-xpress.vercel.app/",
    githubLink: "https://github.com/chaitanyaB12/RecipeXpress.git"
  },
  {
    image: image2,
    title: "NoteCraft",
    description:
      "A lightweight note saving and snippet tool built using React and Tailwind CSS. Includes features like instant copy, local storage, and beautiful UI.",
    technologies: ["React", "Tailwind CSS", "LocalStorage"],
    liveLink: "https://paste-craft.vercel.app/",
    githubLink: "https://github.com/chaitanyaB12/PasteCraft.git"
  },
  {
    image: image3,
    title: "YT Transcript Summarizer",
    description:
      "An AI tool that summarizes YouTube video transcripts using Python Flask and HuggingFace Transformers. Frontend built in React.",
    technologies: ["React", "Python", "Flask", "HuggingFace", "Tailwind"],
    liveLink: "#",
    githubLink: "#"
  }
];

const ScrollReveal = ({ children, index }) => {
  const direction = index % 2 === 0 ? -100 : 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => (
  <ScrollReveal index={index}>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[400px]"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-lg bg-black px-3 py-1 text-sm border border-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href={project.liveLink}
            target="_blank"
            className="rounded-md border border-green-500 px-4 py-2 text-sm hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="rounded-md border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Projects
      </motion.h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
