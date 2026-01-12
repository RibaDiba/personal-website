import { motion } from "framer-motion";

interface ProjectProps {
    projectTitle: string;
    projectImage: string;
}

const ProjectCard = ({ projectTitle, projectImage }: ProjectProps) => {

    return (
        <motion.div 
            className="flex flex-col w-60 h-60 rounded-3xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="h-[75%] w-full bg-gray-300">
                <img 
                    src={projectImage} 
                    alt={projectTitle} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="h-[25%] w-full bg-[#57534E] flex items-center justify-center">
                <span className="text-white font-bold text-md">{projectTitle}</span>
            </div>
        </motion.div>
    );
};

export default ProjectCard;