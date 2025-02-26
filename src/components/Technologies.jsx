import { DiRedis } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPytorch, SiTensorflow, SiKeras, SiNumpy, SiOpencv, SiScikitlearn, SiPandas, SiNvidia, SiKubernetes, SiTerraform } from "react-icons/si";
import { FaDocker, FaAws } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <motion.div className="pb-24">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiPytorch className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiTensorflow className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.8)} className="p-4">
          <SiKeras className="text-7xl text-red-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.2)} className="p-4">
          <SiNumpy className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.7)} className="p-4">
          <SiOpencv className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.1)} className="p-4">
          <SiScikitlearn className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.9)} className="p-4">
          <SiPandas className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.3)} className="p-4">
          <SiNvidia className="text-7xl text-green-600" title="CUDA" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.6)} className="p-4">
          <FaDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.4)} className="p-4">
          <SiKubernetes className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.7)} className="p-4">
          <SiTerraform className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.2)} className="p-4">
          <FaAws className="text-7xl text-orange-400" title="AWS Cloud" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.8)} className="p-4">
          <SiPostgresql className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.0)} className="p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.9)} className="p-4">
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.1)} className="p-4">
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
