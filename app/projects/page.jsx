"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { FaYoutube } from 'react-icons/fa';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip" ;

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'Fullstack',
        title: 'Daily Gratitude Journal',
        description: 'A journal application that helps users find inspiration by reflecting on their daily experiences. It offers personalized accounts for secure, private journaling and aims to provide a sense of peace and perspective through daily reflections.',
        duration: 'Aug. 2024 - Sept. 2024',
        stack: [
            {name: "Next.js"},
            {name: "React.js"},
            {name: "Tailwind.css"},
            {name: "Firebase"}
        ],
        image: '/assets/work/Journal.png',
        live: "https://journal.catrodriquez.dev/",
        youtube: "https://youtu.be/zP1t9r6HJHQ",
        github: "https://github.com/CatherineRodriquez04/gratitude-journal"
    },
    {
        num: '02',
        category: 'Fullstack',
        title: 'Tiger Dorm Defender',
        description: 'I led the design for a project during Geaux Engineering, where freshmen developed a dorm security system to replace the need for a physical Tiger Card. This application pushed freshmen to quickly research and learn a variety coding languages to implement a project in a competitive environment. They sought guidance from me throughout different steps of the development process and increased their skills from little to no experience to above the average for incoming freshmen.',
        duration: 'Aug. 2024 -> within 24 hrs',
        stack: [
            {name: "MySQL"},
            {name: "Node.js"},
            {name: "React.js"},
            {name: "Tailwind.css"}
        ],
        image: '/assets/work/TigerDormDefender.png',
        live: "",
        youtube: "https://youtu.be/erDOc3aKloE",
        github: "https://github.com/CatherineRodriquez04/Tiger_Dorm_Defender",
    },
    {
        num: '03',
        category: 'Fullstack',
        title: 'Word Search',
        description: 'This is an engaging Word Search game where players can compete against an AI to find hidden words within a grid. The game features a dynamic timer and intuitive UI, with the ability to highlight found words and track the progress. The AI randomly selects words, adding an extra layer of challenge. Customize your play with themes and enjoy a seamless experience.',
        duration: 'May 2024 - Sept. 2024',
        stack: [
            {name: "Html"},
            {name: "Javascript"},
            {name: "Css"}
        ],
        image: '/assets/work/WordSearch_Game.png',
        live: "https://catherinerodriquez04.github.io/AI-Arcade/wordSearch.html",
        youtube: "https://youtu.be/MXng6v8z4mk",
        github: "https://github.com/CatherineRodriquez04/AI-Arcade",
    },
    {
        num: '04',
        category: 'Frontend',
        title: 'Website Portfolio',
        description: "I developed this website to showcase my portfolio, projects, and professional background, reflecting both my technical skills and design sensibilities. Using Framer Motion, I added smooth animations that enhance interactivity and visual appeal. The site is crafted to provide an engaging user experience, reflecting my skills in design and functionality. ",
        duration: 'Aug. 2024 - Sept. 2024',
        stack: [
            {name: "Next.js"},
            {name: "Tailwind.css"},
        ],
        image: '/assets/work/Portfolio.png',
        live: "catrodriquez.dev",
        youtube: "",
        github: "https://github.com/CatherineRodriquez04/catherine-portfolio",
    },
    {
        num: '05',
        category: 'Fullstack',
        title: 'Tic Tac Toe',
        description: 'This is a classic Tic Tac Toe game that allows players to play against each other, play against an AI, or watch two AI players compete against each other. The AI uses the minimax algorithm with alpha-beta pruning to determine the best moves. Select your game mode and enjoy a strategic battle on the grid.',
        duration: 'Mar. 2024 - May 2024',
        stack: [
            {name: "Html"},
            {name: "Javascript"},
            {name: "Css"}
        ],
        image: '/assets/work/TicTacToe_Game.png',
        live: "https://catherinerodriquez04.github.io/AI-Arcade/TicTacToe.html",
        youtube: "https://youtu.be/E6ffX_l9qg0",
        github: "https://github.com/CatherineRodriquez04/AI-Arcade",
    },
    {
        num: '06',
        category: 'Frontend',
        title: 'Baby Groot',
        description: "In this project, I used Python's Turtle Graphics to draw and animate Baby Groot. The process involved designing and coordinating intricate shapes, pushing the boundaries of programming as a medium for artistic expression.",
        duration: 'Jun. 2024 - Jul. 2024',
        stack: [
            {name: "Python"},{name: "Turtle Graphics"},
        ],
        image: '/assets/work/Groot.png',
        live: "",
        youtube: "https://youtu.be/H38LkT6t-aQ",
        github: "https://github.com/CatherineRodriquez04/Groot",
    },
    {
        num: '07',
        category: 'Fullstack',
        title: 'Shift Reduce Parser',
        description: 'For my final project in CSC 4101, I developed a visual display of the step-by-step process of shift-reduce parsing, a key concept in compiler design. The project showcases how strings are parsed using production rules, a stack, an input buffer, a parsing table, and actions like shift, reduce, accept, and error.',
        duration: 'Mar. 2024 - May 2024',
        stack: [
            {name: "Html"},
            {name: "Javascript"},
            {name: "Css"}
        ],
        image: '/assets/work/ShiftReduceParser.png',
        live: "https://catherinerodriquez04.github.io/ShiftReduceParser/",
        youtube: "https://youtu.be/0FaiY7LtoEI",
        github: "https://github.com/CatherineRodriquez04/ShiftReduceParser",
    },
    {
        num: '08',
        category: 'Fullstack w/ Arduino',
        title: 'Save the Planet',
        description: "Save the Planet is a game where players must prevent an asteroid from hitting Earth by bouncing it on a movable bar. The game offers three modes that adjust the asteroid's speed. With a 30-second time limit, players face a Game Over if the asteroid passes the bar. A volume slider controls the sound and, when connected to an Arduino, adjusts the brightness of an LED light.",
        duration: 'Jan. 2023 - May 2023',
        stack: [
            {name: "Html"},
            {name: "Javascript"},
            {name: "Css"},
            {name: "p5.js"},
            {name: "Tone.js"}
        ],
        image: '/assets/work/SavePlanet.png',
        live: "https://catherinerodriquez04.github.io/Final-Project-CSC-2463/",
        youtube: "https://youtu.be/NFk1yFw7Tbw",
        github: "https://github.com/CatherineRodriquez04/Final-Project-CSC-2463",
    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[20px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            <div>
                                {/* project title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>

                                {/* duration */}
                                <p className="text-accent text-[15px]" >{project.duration}</p>

                                {/* project category */}
                                <p className="text-white/80 text-[15px]">{project.category} Project</p>

                            </div>

                            {/* project description */}
                            <p className="text-white/80">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index)=> {
                                    return (
                                        <li key={index} className="text-[15px] text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-black/40"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {project.live ? (
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group border border-transparent hover:border-accent">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : (
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group cursor-not-allowed opacity-50">
                                                <BsArrowUpRight className="text-white text-3xl" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Not Available</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group border border-transparent hover:border-accent">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* youtube project button */}
                                <Link href={project.youtube}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group border border-transparent hover:border-accent">
                                                <FaYoutube className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Youtube</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] ">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12" 
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index)=> {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>

                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover rounded-xl"
                                                alt=""
                                                
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            <div>
                                {/* slider buttons */}
                                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[0px] z-20 w-full justify-between xl:w-max xl:justify-none" 
                                    btnsStyles="xl:border xl:border-accent xl:bg-transparent bg-accent text-white rounded-full xl:text-black hover:bg-accent xl:hover:text-white text-primary text-[22px] w-[44px] h-[44px] xl:w-[53px] xl:h-[53px] flex justify-center items-center transition-all" 
                                />
                            </div>
                        </Swiper>
                        <p className="flex justify-center relative text-accent text-center xl:absolute xl:right-[200px] xl:bottom-[85px] bottom-[40px]">Use the above arrows to explore more projects</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;