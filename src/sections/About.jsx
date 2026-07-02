
import grid1 from "../assets/grid1.png"
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";

import Glowing from "../components/Glowing";
import Earth from "../components/Earth";

import { useState } from "react";
import { Copy, CheckCheck } from "lucide-react";

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "udysharma@outlook.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      className="mb-5 grid md:grid-cols-2 lg:grid-cols-3 items-center md:px-3"
      id="about"
    >
      <div className="border border-neutral-700 bg-neutral-950 bg-opacity-65 rounded-3xl w-[94%] mx-auto p-5 lg:h-[500px]">
          <div className="h-40 overflow-hidden flex justify-center items-center">
            <img
              src={grid1}
              className="object-cover mx-auto"
              />
          </div>
        <span className="font-semibold">Hi, I’m Uday Sharma</span>
        <p className="mt-5 text-neutral-300 text-sm">
          I’m a Full Stack Developer who loves turning ideas into interactive,
          intuitive, and user-centric applications. I specialize in both
          frontend and backend development, building dynamic and responsive
          websites. My expertise includes TypeScript, React, Next.js, and more,
          and I’m always eager to learn. I’ve developed projects ranging from
          resume analyzers to online medical booking apps. Let’s build something
          amazing together!
        </p>
      </div>

    
      <div className="border border-neutral-700 bg-neutral-950 bg-opacity-65 my-5 rounded-3xl w-[94%] mx-auto p-5 md:col-start-2 md:row-start-1 lg:h-[530px]">
        <div className="grid place-items-center my-3 mb-10 overflow-hidden">
          <Earth />
        </div>
        <span className="font-semibold">
          I’m very flexible with time zone communications & locations
        </span>
        <p className="mt-5 text-neutral-300 text-sm">
          I&apos;m based in India and open to remote work worldwide.
        </p>
        <a href="#contact" className=" w-full flex items-center justify-center gap-3 rounded-lg bg-neutral-700 hover:bg-neutral-800 duration-200 py-3 mt-3">
          {" "}
          <Glowing />
          Contact Me
        </a>
      </div>

      <div className="">
        <div className="border border-neutral-700 bg-neutral-950 bg-opacity-65 md:-mt-[10%] lg:mt-5 my-5 rounded-3xl w-[94%] mx-auto p-5">
          <img src={grid3} />
          <span className="font-semibold">Why I code?</span>
          <p className="mt-2 text-neutral-300 text-sm">
            I love solving problems and building things through code.
            I enjoy exploring new technologies, experimenting with ideas, and constantly improving my skills to build better applications.
          </p>
        </div>

        <div className="border border-neutral-700 bg-neutral-950 bg-opacity-65 my-5 relative rounded-3xl w-[94%] mx-auto p-5 md:hidden lg:block md:col-start-2 md:row-start-2 sm:h-[400px] md:h-[300px] lg:h-[250px]">
          <div className="overflow-hidden">
            <img
              src={grid4}
              className=" mx-auto object-cover"
            />
          </div>
          <div className="absolute bottom-5 w-11/12 place-items-center grid justify-center items-center">
            <span className="font-semibold">Contact me</span>
            <div className="flex items-center gap-2 py-2">
              <p className="text-neutral-400 text-sm">{email}</p>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <CheckCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-neutral-700 bg-neutral-950 bg-opacity-65 my-5 relative rounded-3xl w-[94%] mx-auto p-5 hidden md:block lg:hidden md:col-start-2 md:row-start-2 sm:h-[400px] md:h-[300px] lg:h-[250px]">
          <div className="overflow-hidden">
            <img
              src={grid4}
              className=" mx-auto object-cover"
            />
          </div>
          <div className="absolute bottom-5 w-11/12 place-items-center grid justify-center items-center">
            <span className="font-semibold">Contact me</span>
            <div className="flex items-center gap-2 py-2">
              <p className="text-neutral-300 text-sm">{email}</p>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <CheckCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
