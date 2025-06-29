import { BiLogoCPlusPlus, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };

  const technologies = [
    { icon: BiLogoJavascript, color: "text-yellow-400" },
    { icon: BiLogoReact, color: "text-blue-400" },
    { icon: BiLogoTailwindCss, color: "text-sky-400" },
    { icon: BiLogoNodejs, color: "text-green-500" },
    { icon: BiLogoMongodb, color: "text-green-700" },
    { icon: BiLogoCPlusPlus, color: "text-blue-600" }
  ];

  return (
    <motion.div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.h1
        variants={variants}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
    {technologies.map((tech, index) => {
      const Icon = tech.icon;
       return (
        <motion.div
        key={index}
        variants={variants}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        >
        <Icon className={`cursor-pointer text-[80px] sm:text-[100px] md:text-[120px] transition-all duration-900 hover:-translate-y-5 ${tech.color}`} />
        </motion.div>
      );
      })}

      </div>
    </motion.div>
  );
};

export default Tech;
