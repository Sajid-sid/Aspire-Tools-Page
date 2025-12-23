import { motion } from "framer-motion";
import word from "./assets/word.png";
import Amazon from "./assets/amazon.png";
import "./App.css";

/* Container stagger */
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // cards fall one by one
    },
  },
};

/* Falling down animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: -150,          // start from top
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,     // bounce control
    },
  },
};

function App() {
  const tools = [
    {
      name: "Word to PDF Converter",
      description:
        "Convert Word documents into high-quality PDFs while preserving formatting.",
      image: word,
      link: "https://word-to-pdf-converter-ten.vercel.app/",
    },
    {
      name: "Amazon Seller Profit Calculator",
      description:
        "Calculate Amazon fees, costs, profit, and margins before selling products.",
      image: Amazon,
      link: "https://wheat-goose-528320.hostingersite.com/",
    },
    {
      name: "Amazon Seller Profit Calculator",
      description:
        "Calculate Amazon fees, costs, profit, and margins before selling products.",
      image: Amazon,
      link: "https://wheat-goose-528320.hostingersite.com/",
    },
    {
      name: "AI Writing Tools",
      description:
        "AI Writing Tools help users generate high-quality content quickly using advanced artificial intelligence.",
      image: null,     // 👈 no image
      link: null,      // 👈 no link
    },
  ];

  return (
    <>
      {/* Animated Heading */}
      <motion.p
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools
      </motion.p>

      {/* Cards */}
      <motion.div
        className="head"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tools.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => item.link && window.open(item.link, "_blank")}
          >
            {/* Image (only if exists) */}
            {item.image && (
              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>
            )}

            <p className="title">{item.name}</p>
            <p className="description">{item.description}</p>

            <span className="glow"></span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default App;
