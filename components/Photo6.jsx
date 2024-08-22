"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const Photo6 = () => {
    const [showFirstImage, setShowFirstImage] = useState(true);

    // Use effect to toggle the image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage(prev => !prev);
        }, 15000); 

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full h-full relative items-center flex justify-center">
            <motion.div className="w-[295px] h-[287px] xl:w-[290px] xl:h-[290px] xl:absolute xl:bottom-[-4px] xl:right-[60px]">
                {/* Solid grey circle */}
                <div className="w-full h-full inset-0 rounded-full bg-[#565f69]" />

                {/* Image -> Me to Karl */}
                <motion.div
                    key={showFirstImage ? "first" : "second"}
                    className="absolute inset-0 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut"
                    }}
                >

                    {/* Image */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                            src={showFirstImage ? "/assets/photo6.png" : "/assets/photo8.png"}
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-contain rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
            
                {/* circle */}
            <motion.svg 
                className="w-[300px] h-[300px] xl:w-[310px] xl:h-[302px] absolute xl:bottom-[-10px] xl:right-[50px]" 
                fill="transparent"
                viewBox="0 0 506 506"
                xllns="http://www.w3.org/2000/svg"
            >
                <defs>
                        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "black", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="245"
                        stroke="url(#gradientStroke)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{
                            opacity: [0.8, 1, 0.8],
                            scale: [1, 1.1, 1],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
            </motion.svg>
                        
        </div>
    );
};

export default Photo6;

