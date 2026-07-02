import { motion } from "framer-motion";
import { LeetCode, GitHub, LinkedIn, Gmail } from "../components/Navbar";
import Switch from "../components/Switch";
// import Atom from "../components/Atom"
import { resumeUrl } from "../constants/resume";

import wavingHand from "../images/waving-hand.png";
import bg from "../images/giph.webp";

const Home = ({ onOpenResume }) => {
  return (
    <section className="relative w-full h-[700px]" id="home">
      <div className="absolute w-full h-full lg:h-[750px] bg-black bg-opacity-70 flex flex-col items-center pt-36">
        <div className="flex items-center gap-2 text-sm sm:text-base md:mt-12">
          <Switch />
          <p>Available for new opportunities.</p>
        </div>

        {/* Name + Hand */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold text-3xl text-[32px] md:text-5xl lg:text-7xl flex mt-12 items-center justify-center"
        >
          Hi, I&apos;m Uday Sharma{" "}
          <img
            src={wavingHand}
            className="w-12 lg:w-16 h-12 lg:h-16"
            alt="👋"
          />
          .
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-semibold text-2xl text-[23px] lg:text-4xl mt-1 flex items-center justify-center"
        >
          I&apos;m a Full Stack Developer
        </motion.p>

        {/* Taglines */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-semibold text-teal-500 lg:text-lg my-1"
        >
          Building Dynamic Web Applications
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-semibold text-teal-500 lg:text-lg text-center"
        >
          Transforming ideas into robust digital solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex gap-2 mt-24"
        >
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={resumeUrl}
              onClick={(event) => {
                event.preventDefault();
                onOpenResume();
              }}
              className="bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              My Resume
            </a>

            <a
              href="#contact"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 border border-neutral-600 hover:border-neutral-400"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-6 mt-10 text-white"
        >
          <a href="https://www.linkedin.com/in/udysharma/">
            <LinkedIn className="w-10 sm:w-12 hover:scale-110 duration-300" />
          </a>
          <a href="https://github.com/Udysharma">
            <GitHub className="w-10 sm:w-12 hover:scale-110 duration-300" />
          </a>
          <a href="https://leetcode.com/u/1amG9NZMqo/">
            <LeetCode className="w-10 sm:w-12 hover:scale-110 duration-300" />
          </a>
          <a href="mailto:udysharma@outlook.com">
            <Gmail className="w-10 sm:w-12 hover:scale-110 duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Background */}
      <img
        src={bg}
        className="w-full lg:h-[750px] h-full object-cover"
        alt="background"
      />
    </section>
  );
};

export default Home;
