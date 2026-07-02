import { LinkedIn, GitHub, LeetCode, Gmail } from "./Navbar";
import { FaArrowUp } from "react-icons/fa6";

import { useState, useEffect } from "react";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300) {
                setShowScroll(true)
            } else {
                setShowScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
  return (
    <footer className="relative border-t border-neutral-700 bg-neutral-950/80 backdrop-blur-sm px-6 py-10 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* Branding / Info */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">Uday Sharma</h2>
          <p className="text-sm">
            Crafting modern web experiences with precision.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-3 md:items-end">
        <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/udysharma/">
                <LinkedIn className="w-6 sm:w-8 hover:scale-110 duration-300" />
              </a>
              <a href="https://github.com/Udysharma">
                <GitHub className="w-6 sm:w-8 hover:scale-110 duration-300" />
              </a>
              <a href="https://leetcode.com/u/1amG9NZMqo/">
                <LeetCode className="w-6 sm:w-8 hover:scale-110 duration-300" />
              </a>
              <a href="mailto:udysharma@outlook.com">
                <Gmail className="w-6 sm:w-8 hover:scale-110 duration-300" />
              </a>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} All rights reserved.</p>

        </div>
      </div>
      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-500 transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;