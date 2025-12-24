import { motion } from "framer-motion";
import word from "./assets/word2pdf.png";
import Amazon from "./assets/Amazon1.png";
import "./App.css";

/* ===== Container stagger ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4, // after heading
    },
  },
};

/* ===== Card animation ===== */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,        // smoother than -150
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

function App() {
  const tools = [
    {
      name: "Word to PDF Converter",
      description:
        "Convert Word documents into high-quality PDFs while preserving formatting.",
      feature:
        "Fast, secure conversion with full layout and content preservation.",
      image: word,
      link: "https://wordtopdf.aspireths.com/",
    },
    {
      name: "Amazon Seller Profit Calculator",
      description:
        "Calculate Amazon fees, costs, profit, and margins before selling products.",
      feature:
        "Accurate profit estimation with real-time fee calculations.",
      image: Amazon,
      link: "https://wheat-goose-528320.hostingersite.com/",
    },
    {
      name: "AI Writing Tools",
      description:
        "Generate high-quality content instantly using AI-powered writing tools.",
      feature:
        "Blogs, emails, ads, and SEO content in seconds.",
      image: null,
      link: null,
    },
  ];

  return (
    <>
      {/* ===== Heading ===== */}
<motion.p
  className="heading"
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  animate={{ clipPath: "inset(0 0% 0 0)" }}
  transition={{
    duration: 0.5,
    
  }}
>
  Tools
</motion.p>


      {/* ===== Cards ===== */}
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => item.link && window.open(item.link, "_blank")}
            style={{ cursor: item.link ? "pointer" : "default" }}
          >
            {/* Image */}
            {item.image && (
              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>
            )}

            <p className="title">{item.name}</p>
            <p className="description">{item.description}</p>

            {item.feature && (
              <p className="feature">
                <strong>Feature:</strong>
                <br />
                {item.feature}
              </p>
            )}

            <span className="glow"></span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default App;
