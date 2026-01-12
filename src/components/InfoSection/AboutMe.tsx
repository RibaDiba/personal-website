import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1
        }
    }
};

const itemVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeIn" }
    }
};

const AboutMe = () => {
    return (
        <motion.div 
            className="flex flex-col text-center gap-32 justify-center items-center"
            variants={containerVariants}
        >
            <motion.div 
                className="text-8xl leading-none font-bold" 
                style={{ color: "#57534E" }}
                variants={itemVariants}
            >
                About Me.
            </motion.div>

            <motion.div 
                className="flex items-center flex-col gap-[85px] text-2xl mx-64"
                variants={containerVariants}
            >

                <motion.div 
                    className="text-center text-[#57534E] max-w-5xl font-semibold"
                    variants={itemVariants}
                >
                    Hey! I'm Abir Modak, I'm a computer science major at <span className="font-bold text-black">Maryland, College Park</span>
                </motion.div>

                <motion.div 
                    className="w-7/8 h-1 bg-[#57534E] rounded-full" 
                    variants={itemVariants}
                />

                <motion.div 
                    className="text-center text-[#57534E] max-w-5xl font-semibold leading-normal"
                    variants={itemVariants}
                >
                    I have experience building web apps with <span className="font-bold text-black">Next.js</span> and <span className="font-bold text-black">Svelte</span>. 
                    I also work with open source vision frameworks such as <span className="font-bold text-black">Detectron2</span>. 
                    I also have some <span className="font-bold text-black">embedded systems</span> work on my GitHub!
                </motion.div>

            </motion.div>
        </motion.div>
    )
};

export default AboutMe;