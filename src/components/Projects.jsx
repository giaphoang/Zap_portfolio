import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="py-12 sm:py-16">
      <motion.h2 
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y:-100}} 
        transition={{duration:0.5}} 
        className="my-8 sm:my-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="space-y-12 sm:space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <a 
              href={project.src} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="w-full sm:w-[250px] h-auto sm:h-[250px] rounded object-cover"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
              />
            </a>

            <motion.div
              className="w-full"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <h3 className="mb-2 font-semibold text-xl sm:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-stone-900 px-2 py-1 text-xs sm:text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
