"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo4 = () => {
    return <div className="w-full h-full relative">
        <motion.div 
            initial={{opacity: 0}} 
            animate=
                {{opacity: 1, 
                    transition: {
                        delay: 2, 
                        duration: 0.4, 
                        ease: "easeIn"
                    },
                }} >
            {/* image */}
            <motion.div 
                initial={{opacity: 0}} 
                animate=
                    {{opacity: 1, 
                        transition: {
                            delay: 2.4, 
                            duration: 0.4, 
                            ease: "easeInOut"
                        },
                    }}
                className="w-[70px] h-[62px] xl:w-[120px] xl:h-[112px] absolute bottom-[20px] right-[-30px] xl:bottom-[35px] xl:right-[-45px]">
                <Image src="/assets/photo4.png" priority quality={100} fill alt="" className="object-contain"/>
            </motion.div>
            {/* circle */}
            <motion.svg 
                className="w-[160px] xl:w-[106px] h-[55px] xl:h-[106px] absolute bottom-[25px] right-[-75px] xl:bottom-[40px] xl:right-[-40px]" 
                fill="transparent"
                viewBox="0 0 506 506"
                xllns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="black" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>

        </motion.div>
    </div>;
}

export default Photo4;