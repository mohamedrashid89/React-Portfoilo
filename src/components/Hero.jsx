import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/macbook.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: delay,
            duration: 0.5,
        }
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-10 text-6xl font-mono tracking-tight lg:mt-16
                            lg:text-7xl "
                        >
                            Mohamed Rashid
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-600
                            bg-clip-text text-5xl -tracking-tighter text-transparent"
                        >
                            Web Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-6 max-w-xl tracking-tighter font-light">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            src={profilePic}
                            alt="Profile Picture"
                            className="h-50
                            w-auto lg:h-96 lg:w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
