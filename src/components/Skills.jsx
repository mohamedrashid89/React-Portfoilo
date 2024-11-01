import { RiReactjsLine } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5, delay: 0.5}}
      className="my-20 text-center text-4xl">My Skills</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <ImHtmlFive2 className="text-5xl text-orange-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaCss3 className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <IoLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiTailwindCssFill className="text-5xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <TbBrandNextjs className="text-5xl text-neutral-300" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiDjango className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
