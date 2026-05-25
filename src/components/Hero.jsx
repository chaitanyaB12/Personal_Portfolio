import image from "/Chaitu.png";
import {motion}  from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-4 text-center"
        >
         <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Chaitanya Bhopnikar
         </h1>

      <p className="md:text-base text-sm text-gray-300 leading-relaxed">
        I’m a{" "}
        <span className="text-violet-400 font-semibold">MERN stack developer</span>{" "}
        focused on building responsive and user-friendly web applications. I
        specialize in creating modern{" "}
        <span className="text-pink-400 font-semibold">React.js</span>{" "}
        interfaces, integrating{" "}
        <span className="text-yellow-400 font-bold">REST APIs</span>, and
        developing scalable full-stack applications with clean and reusable
        code.
      </p>

          <a
            href="/Chaitanya_Bhopnikar_9325350043.pdf"
            download="Chaitanya-Bhopnikar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-md border border-indigo-400 bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-500 hover:text-black hover:shadow-lg"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;