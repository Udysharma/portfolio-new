import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { SiAmazonwebservices } from "react-icons/si";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e8cb676f89cc476282ad6177e62a38f1",
    icon: SiAmazonwebservices,
  },
  {
    id: 2,
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/872b179ff5d54b5d92bb789fd4fcb181",
    icon: SiAmazonwebservices,
  },
  {
    id: 3,
    title: "AWS Certified CloudOps Engineer – Associate",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/4018073d662b4881a5d29239008b8331",
    icon: SiAmazonwebservices,
  },
  {
    id: 4,
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/b7ed1bc86eef43c781399109a93d7bc3",
    icon: SiAmazonwebservices,
  },
  {
    id: 5,
    title: "Cloud Computing Engineering Certificate",
    issuer: "NASSCOM / FutureSkills",
    link: new URL("../../Uday+Sharma_161138285.pdf.pdf", import.meta.url).href,
    icon: FaRegFileAlt,
  },
];

const Certifications = () => {
  return (
    <section className="py-20 overflow-hidden px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          My <span className="text-purple-400">Certifications</span>
        </h2>
        <p className="text-neutral-300 mb-12 text-base md:text-lg max-w-2xl">
          AWS certifications showcasing my expertise in cloud computing and AWS services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-neutral-900 border border-neutral-700 hover:border-purple-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl text-orange-400 group-hover:text-orange-300 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">
                  <cert.icon />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt className="text-xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
