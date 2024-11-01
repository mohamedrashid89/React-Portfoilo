import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 w-full overflow-x-hidden">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Project
      </motion.h1>
      <div className="flex flex-wrap gap-4 md:justify-center w-full mx-auto md:w-3/4 lg:w-2/3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full"
          >
            {" "}
            {/* Flex direction switch */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="w-full md:w-3/6 flex-shrink-0"
            >
              {" "}
              {/* Image container */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-f mb-6 md:mb-0 rounded-md"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 flex flex-col justify-center"
            >
              {" "}
              {/* Content container */}
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    className="bg-slate-900 text-neutral-300 rounded px-2 py-1 text-sm font-medium"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
