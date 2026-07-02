import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

// 🧠 Tech stack icons
import javascript from "../assets/images/assets/js.png";
import typescript from "../assets/images/assets/ts.png";
import react from "../assets/images/assets/react.png";
import nextjs from "../assets/images/assets/next.png";
import reactnative from "../assets/images/assets/react.png";
import tailwind from "../assets/images/assets/tailwind.png";
import zustand from "../assets/images/assets/zustand.png";
import vercelai from "../assets/images/assets/vercel.png";
import clerk from "../assets/images/assets/clerk.png";
import authjs from "../assets/images/assets/auth.png";
import supabase from "../assets/images/assets/supabase.png";
import neon from "../assets/images/assets/neon.png";
import postgres from "../assets/images/assets/postgres.png";
import drizzle from "../assets/images/assets/drizzle.png";

const vapi = vercelai;
const gemini = vercelai;
const expo = reactnative;

const projects = [
  {
    id: 1,
    title: "Interview SideKick 💬",
    description:
      "AI-powered interview prep assistant that generates smart questions, personalized feedback, and integrates live voice interviews.",
    image: "/interviewimage.png",
    tech: [typescript, postgres, drizzle, neon, tailwind, nextjs, authjs, vapi],
    live: "https://interviewsidekick25.vercel.app/",
    github: "https://github.com/Udysharma/ai-interview-prep",
  },
  {
    id: 2,
    title: "MediBook 🏥",
    description:
      "Comprehensive healthcare booking platform connecting patients, doctors, and clinics seamlessly — with full admin control.",
    image: "/medibookimage.png",
    tech: [typescript, postgres, drizzle, neon, tailwind, nextjs, authjs],
    live: "https://medibook23.vercel.app",
    github: "https://github.com/Udysharma/medibook",
  },
  {
    id: 3,
    title: "Resumind 📄",
    description:
      "AI-driven resume analyzer that gives ATS scores, stores resumes, and provides actionable insights — all wrapped in a sleek modern UI.",
    image: "/resumindimage.png",
    tech: [react, zustand, tailwind, javascript],
    live: "https://resumind23.vercel.app",
    github: "https://github.com/Udysharma/resume-analyzer-ai",
  },
  {
    id: 4,
    title: "Converso 🧠",
    description:
      "Interactive platform for creating and chatting with personalized AI companions that adapt to user learning styles.",
    image: "/conversoimage.png",
    tech: [nextjs, clerk, supabase, tailwind, vapi],
    live: "https://converso23.vercel.app",
    github: "https://github.com/Udysharma/saas-app",
  },
  {
    id: 5,
    title: "Echo AI Chatbot 🤖",
    description:
      "Chat anonymously or sign in to save your conversations — an AI chatbot powered by Google Gemini and Supabase.",
    image: "/echoimage.png",
    tech: [supabase, tailwind, gemini, nextjs, clerk],
    live: "https://echo23.vercel.app",
    github: "https://github.com/Udysharma/echo-ai-chatbot",
  },
  {
    id: 6,
    title: "MediCare 📱",
    description:
      "Mobile app that simplifies medical appointment booking using React Native and Expo for accessible healthcare scheduling.",
    image: "/medicareimage.png",
    tech: [reactnative, tailwind, typescript, expo],
    live: "",
    github: "https://github.com/Udysharma/medicare",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.98,
  }),
  center: { opacity: 1, x: 0, scale: 1, zIndex: 1 },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 60 : -60,
    scale: 0.98,
    zIndex: 0,
  }),
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[index];

  return (
    <section id="projects" className="py-20 overflow-hidden md:mb-40 lg:mb-0 px-4 md:px-8  text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center mb-24 sm:mb-32 md:mb-[20%] lg:mb-0"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          Selected Works ✨
        </h2>
        <p className="text-neutral-300 max-w-2xl mx-auto text-base md:text-lg">
          Projects that combine design, AI, and full-stack engineering to deliver
          modern, performant, and user-centric experiences.
        </p>
      </motion.div>

      {/* Project Card */}
      <div className="relative max-w-6xl mx-auto min-h-[500px] flex justify-center items-center">
        <AnimatePresence custom={direction} initial={false} mode="sync">
          <motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 280, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className="absolute w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-[0_0_30px_-5px_rgba(0,0,0,0.6)]"
          >
            {/* Left: Image */}
            <motion.a
              href={project.live || project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block rounded-2xl overflow-hidden relative group aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>

            {/* Right: Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-neutral-300 mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.1 }}>
                      <img
                        src={tech}
                        alt="tech icon"
                        className="w-9 h-9 object-contain p-1.5 rounded-lg border border-zinc-700 bg-zinc-800 shadow-md"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap justify-between items-center border-t border-zinc-800 pt-4 mt-4 gap-4">
                <div className="flex gap-3">
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg shadow-blue-500/30"
                    >
                      Live <FaArrowUpRightFromSquare className="w-3 h-3" />
                    </motion.a>
                  ) : (
                    <span className="px-4 py-2 border border-zinc-700 rounded-full text-neutral-500 text-sm">
                      Coming soon 🚧
                    </span>
                  )}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center gap-2 text-sm border border-zinc-700"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
                  >
                    <FaArrowLeft className="w-4 h-4" />
                  </button>
                  {projects.map((_, i) => (
                    <motion.div
                      key={i}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                        i === index ? "bg-blue-400 scale-125" : "bg-white/30"
                      }`}
                    />
                  ))}
                  <button
                    onClick={next}
                    className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
