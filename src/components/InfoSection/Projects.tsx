import { motion } from "framer-motion";
import { projects } from "@/stores/Projects";
import ProjectCard from "../ProjectPage/ProjectCard";

const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
    }
};

const Projects = () => {
    return (
        <motion.div 
            className="flex flex-col text-center gap-30 justify-center items-center" 
            style={{ color: "#57534E" }}
            variants={containerVariants}
        >
            <motion.div 
                className="text-8xl leading-none font-bold"
                variants={itemVariants}
            >
                Projects.
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="cursor-pointer">
                        <ProjectCard 
                            projectTitle={project.projectTitle} 
                            projectImage={project.projectFrontImage}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;