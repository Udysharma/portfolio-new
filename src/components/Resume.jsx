import { FaLink, FaPrint, FaExternalLinkAlt } from "react-icons/fa";
import { resumeUrl } from "../constants/resume";
import { useRef } from "react";

const Resume = ({ isOpen, onOpen, onClose }) => {
  const iframeRef = useRef(null);

  const handleOpenNewTab = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    const w = window.open(resumeUrl, "_blank", "noopener,noreferrer");
    if (w) {
      w.focus();
      w.onload = () => w.print();
    }
  };

  return (
    <section className="my-16 flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-semibold text-2xl md:text-3xl mb-5">
        Link to my <span className="text-purple-400">Resume</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open resume preview"
          className="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        >
          View Resume <FaLink className="text-lg" />
        </button>

        <a
          href={resumeUrl}
          download="Uday resume.pdf"
          className="flex items-center gap-3 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300"
          aria-label="Download resume PDF"
        >
          Download PDF
        </a>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-preview-title"
        >
          <div className="relative w-full h-full max-w-none overflow-hidden rounded-0 border border-neutral-700 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 text-left">
              <h3 id="resume-preview-title" className="font-semibold text-white">Resume Preview</h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenNewTab}
                  className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
                  aria-label="Open resume in new tab"
                >
                  Open <FaExternalLinkAlt className="inline ml-1" />
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
                  aria-label="Print resume"
                >
                  Print <FaPrint className="inline ml-1" />
                </button>
                <a
                  href={resumeUrl}
                  download="Uday resume.pdf"
                  className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
                  aria-label="Download resume"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
                  aria-label="Close resume preview"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe
              ref={iframeRef}
              title="Resume preview"
              src={resumeUrl}
              loading="lazy"
              className="h-[100vh] w-full bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
