import javascript from "../assets/images/assets/js.png";
import typescript from "../assets/images/assets/ts.png";
import sql from "../assets/images/assets/sql.png";
import scss from "../assets/images/assets/scss.png";
import react from "../assets/images/assets/react.png";
import nextjs from "../assets/images/assets/next.png";
import vue from "../assets/images/assets/vue.png";
import reactnative from "../assets/images/assets/react.png";
import html from "../assets/images/assets/html.png";
import shadcn from "../assets/images/assets/shadcn.png";
import tailwind from "../assets/images/assets/tailwind.png";
import css from "../assets/images/assets/css.png";
import zustand from "../assets/images/assets/zustand.png";
import figma from "../assets/images/assets/figma.png";
import nodejs from "../assets/images/assets/node.png";
import vercelai from "../assets/images/assets/vercel.png";
import clerk from "../assets/images/assets/clerk.png";
import authjs from "../assets/images/assets/auth.png";
import express from "../assets/images/assets/express.png";
import mongodb from "../assets/images/assets/mongo.png";
import supabase from "../assets/images/assets/supabase.png";
import neon from "../assets/images/assets/neon.png";
import postgres from "../assets/images/assets/postgres.png";
import firebase from "../assets/images/assets/firebase.png";
import drizzle from "../assets/images/assets/drizzle.png";
import prisma from "../assets/images/assets/prisma.png";
import git from "../assets/images/assets/git.png";
import github from "../assets/images/assets/github.png";
import { SiAmazonwebservices, SiDocker, SiJenkins, SiKubernetes, SiLinux } from "react-icons/si";

const techstack = [
  // Languages
  {
    id: 101,
    name: "JavaScript",
    category: "Languages",
    icon: javascript,
  },
  { id: 102, name: "TypeScript", category: "Languages", icon: typescript },
  { id: 103, name: "SQL", category: "Languages", icon: sql },
  { id: 104, name: "SCSS", category: "Languages", icon: scss },

  // Frontend
  { id: 201, name: "React.js", category: "Front-End", icon: react },
  { id: 202, name: "Next.js", category: "Front-End", icon: nextjs },
  { id: 203, name: "Vue.js", category: "Front-End", icon: vue },
  { id: 204, name: "React Native", category: "Front-End", icon: reactnative },
  { id: 205, name: "HTML5", category: "Front-End", icon: html },
  { id: 206, name: "CSS3", category: "Front-End", icon: css },
  { id: 207, name: "Tailwind", category: "Front-End", icon: tailwind },
  { id: 208, name: "Shadcn", category: "Front-End", icon: shadcn },
  { id: 209, name: "Zustand", category: "Front-End", icon: zustand },
  { id: 210, name: "Figma", category: "Front-End", icon: figma },

  // Backend
  { id: 301, name: "Node.js", category: "Back-End", icon: nodejs },
  { id: 302, name: "Express.js", category: "Back-End", icon: express },
  { id: 304, name: "AI-SDK", category: "Back-End", icon: vercelai },
  { id: 305, name: "Clerk", category: "Authentication", icon: clerk },
  { id: 306, name: "Auth.js", category: "Authentication", icon: authjs },

  // Databases & ORMs
  { id: 401, name: "MongoDB", category: "Database", icon: mongodb },
  { id: 402, name: "Supabase", category: "Database", icon: supabase },
  { id: 403, name: "PostgreSQL", category: "Database", icon: postgres },
  { id: 404, name: "Firebase", category: "Database", icon: firebase },
  { id: 405, name: "Neon", category: "Database", icon: neon },
  { id: 406, name: "Drizzle", category: "ORM", icon: drizzle },
  { id: 407, name: "Prisma", category: "ORM", icon: prisma },

  // DevOps
  { id: 501, name: "Git", category: "Version Control", icon: git },
  { id: 502, name: "GitHub", category: "Version Control", icon: github },
  { id: 503, name: "Vercel", category: "Version Control", icon: vercelai },

  // Infrastructure
  { id: 601, name: "Linux", category: "Infrastructure", icon: SiLinux, color: "#FCC624" },
  { id: 602, name: "Docker", category: "Infrastructure", icon: SiDocker, color: "#2496ED" },
  { id: 603, name: "Kubernetes", category: "Infrastructure", icon: SiKubernetes, color: "#326CE5" },
  { id: 604, name: "Jenkins", category: "Infrastructure", icon: SiJenkins, color: "#D24939" },
  { id: 605, name: "AWS", category: "Infrastructure", icon: SiAmazonwebservices, color: "#FF9900" },
];

// Group tech by category
const grouped = techstack.reduce((acc, item) => {
  acc[item.category] = acc[item.category]
    ? [...acc[item.category], item]
    : [item];
  return acc;
}, {});

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-12 px-4 sm:px-5 md:px-10">
      <h2 className="text-4xl font-bold mb-6">My Tech Stack</h2>
      <p className=" text-neutral-400 mx-auto mb-12 text-base md:text-base">
        I specialize in a variety of languages, frameworks, and tools that allow
        me to build robust and scalable applications, with expertise in both
        frontend and backend development to deliver high-quality software
        solutions.
      </p>

      <div className="space-y-12">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              {category}
            </h3>
            <div className="flex flex-wrap sm:gap-5 gap-2.5 max-w-6xl">
              {items.map((tech) => (
                <div
                  key={tech.id}
                  className=" border-neutral-700 group hover:scale-105 duration-300 relative overflow-hidden rounded-3xl p-4 px-1 flex flex-col w-[107px] h-[107px] justify-center items-center shadow-inner shadow-neutral-700 bg-black/80 backdrop-blur-[1px]"
                >
                  {typeof tech.icon === "string" ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className=" w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-125 filter group-hover:brightness-110 
                     transition-all duration-300"
                    />
                  ) : (
                    <tech.icon 
                      className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-125 transition-all duration-300" 
                      style={{ color: tech.color }}
                    />
                  )}
                  <span className="text-sm font-semibold text-center mt-2 md:mt-1">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-neutral-400 text-base mt-10">
        I have developed several personal projects using industry best
        practices, focusing on clean code and efficient solutions. I am
        enthusiastic about continuous learning and staying up-to-date with new
        technologies.
      </p>
    </section>
  );
};
