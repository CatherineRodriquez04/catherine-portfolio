"use client";

import { useState } from 'react';

import {FaReact, FaNodeJs, FaJs, FaHtml5, FaLinux, FaCss3, FaJava } from 'react-icons/fa';

import {SiTailwindcss, SiCplusplus, SiCsharp, SiPython, } from 'react-icons/si';

import { DiDatabase } from "react-icons/di";

import { motion } from 'framer-motion';

import Photo6 from "@/components/Photo6";

import Link from "next/link";

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

// about data
const about = {
    title: 'About Me',
    description: 'Hi! I am Catherine, but most call me Cat! I am a senior and first-generation college student at Louisiana State University pursuing a degree in computer science. I am concentrating in cybersecurity and software engineering, and I am minoring in digital media arts and engineering technology. When I am not coding, you can find me being artsy, traveling, engaging in sports, or spending time with my cat, Karl.',
    info: [
        {
            fieldName: "Name:",
            fieldValue: "Catherine Rodriquez"
        },
        {
            fieldName: "Phone:",
            fieldValue: "(225)772-1794"
        },
        {
            fieldName: "Experience:",
            fieldValue: "3 Years"
        },
        {
            fieldName: "Email:",
            fieldValue: "Catherine.Rodriquez04@gmail.com"
        },
        {
            fieldName: "Hobbies:",
            fieldValue: "Tennis, Dance, & Traveling"
        },
        {
            fieldName: "Pet(s):",
            fieldValue: "1 cat "
        },
    ]
};

//experience data
const experience = {
    icon: 'assets/resume/photo6.png',
    title: 'My Experience',
    description: ' From internships to teaching roles, I have gained valuable insights and practical knowledge in cybersecurity, risk management, and educational support. Explore my roles and achievements below to see how my experiences align with my passion for technology and continuous growth.',
    items: [
        {
            company: "Deloitte",
            position: "Cyber and Strategic Risk Intern",
            duration: "Jun. 2024 - Aug. 2024",
            description1: 'Partnered with a client to deploy multifactor authentication (MFA) solutions, significantly strengthening security protocols and safeguarding sensitive data. ',
            description2: 'Led the analysis and evaluation of client security frameworks, pinpointing vulnerabilities and crafting comprehensive strategies to address and mitigate potential risks, strengthening the security posture. '
        },
        {
            company: "Louisiana State University",
            position: "Supplemental Instructor",
            duration: "Jan. 2024 - Present",
            description1: 'Provided targeted support to enhance comprehension of challenging topics.',
            description2: 'Created and implemented innovative instructional materials for effective learning'
        },
        {
            company: "eXploreCS Camp",
            position: "Teaching Assistant",
            duration: "Jun. 2023 - Jun. 2024 ",
            description1: 'Gained valuable insights into effective teaching methods and classroom management in a coding education setting.',
            description2: 'Ensured a safe and inclusive environment for all camp attendees, providing individualized support to students with different learning needs or skill levels.'
        },
        {
            company: "TigerByte",
            position: "Workshop Developer & Teaching Assistant",
            duration: "Jan. 2024 - Apr. 2024",
            description1: 'Developed TigerByte, a workshop aimed at enhancing the understanding of cybersecurity among non-computer science majors, in collaboration with an LSU professor. ',
            description2: 'Conducted engaging and interactive sessions to educate participants on cybersecurity threats, best practices, and risk mitigation strategies.  '
        },
        {
            company: "Chick-fil-A Corporate",
            position: "Field Talent Staff",
            duration: "Dec. 2022 - May 2024",
            description1: 'Strengthened communications and customer service skills with team members and managers to efficiently run new business locations across the country under corporate standards.',
            description2: 'Opened 2 locations: Kansas City, Kansas & Livonia, Michigan.',
        },
        {
            company: "Deloitte",
            position: "Risk and Financial Advisory Intern",
            duration: "Jun. 2023 - Jul. 2023",
            description1: 'Collaborated with cross-functional teams to collect and analyze data for 2 developed acquisition options in a mock simulation setting.',
            description2: 'Prepared reports and presentation summarizing findings, recommendations, and actionable insights for key stakeholders.'
        },
        {
            company: "LEEP Help Desk",
            position: "Technical Support Operator",
            duration: "Jan. 2023 - Aug. 2023",
            description1: 'Diagnosed and resolved software issues for law enforcement officers, guiding them through troubleshooting steps and providing clear instructions.',
            description2: 'Responded to customer inquiries and provided technical support via phone and email, ensuring a high level of customer satisfaction.'
        },
        {
            company: "Chick-fil-A",
            position: "Authorized Trainer",
            duration: "Feb. 2022 - Jun. 2023",
            description1: 'Prioritized the success of the team by aiding in lacking areas, such as customer service or food production.',
            description2: 'Supervised and train 5 to 6 employees per month.'
        },
    ]
};

//education data
const education = {
    icon: 'assets/resume/photo6.png',
    title: 'My Education',
    description: 'My education at Louisiana State University provides a strong foundation in computer science, complemented by additional courses that enhance my technical skills and knowledge.',
    items: [
        {
            institution: "Louisiana State University",
            degree: "Computer Science - Cybersecurity",
            info: "Bachelors of Science",
            duration: "2022 - 2025"
        },
        {
            institution: "Louisiana State University",
            degree: "Digital Media Art & Engineering Technology",
            info: "Minor in Technology",
            duration: "2022 - 2025"
        },
        {
            institution: "SoloLearn",
            degree: "Introduction to SQL",
            info: "Certification",
            duration: "August 2024"
        },
        {
            institution: "SoloLearn",
            degree: "Introduction to Python",
            info: "Certification",
            duration: "June 2024"
        },
        {
            institution: "SoloLearn",
            degree: "C++ Intermediate",
            info: "Certification",
            duration: "May 2024"
        },
        {
            institution: "SoloLearn",
            degree: "Introduction to JavaScript",
            info: "Certification",
            duration: "May 2024"
        },
        {
            institution: "SoloLearn",
            degree: "Introduction to C++",
            info: "Certification",
            duration: "May 2024"
        },
    ]
};

// skills data 
const skills = {
    title: 'My Skills',
    description: 'My skills are honed through practical experience and projects, showcasing my ability to build robust and efficient solutions. Explore the skills I bring to the table and how they contribute to my expertise in technology.',
    skillList: [
        {
            icon: <FaReact />,
            name: 'react.js',
            level: 'Experienced'
        },
        {
            icon: <SiPython />,
            name: 'python',
            level: 'Intermediate'
        },
        {
            icon: <FaJava />,
            name: 'java',
            level: 'Experienced'
        },
        {
            icon: <SiCplusplus />,
            name: 'C++',
            level: 'Experienced'
        },
        {
            icon: <SiCsharp />,
            name: 'C#',
            level: 'Beginner'
        },
        {
            icon: <FaJs />,
            name: 'javascript',
            level: 'Experienced'
        },
        {
            icon: <FaHtml5 />,
            name: 'html',
            level: 'Experienced'
        },
        {
            icon: <DiDatabase />,
            name: 'SQL',
            level: 'Intermediate'
        },
        {
            icon: <FaLinux />,
            name: 'Linux',
            level: 'Beginner'
        },
        {
            icon: <FaCss3 />,
            name: 'css',
            level: 'Experienced'
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css',
            level: 'Experienced'
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js',
            level: 'Intermediate'
        },
    ]
};

//goals data 
const goals = {
    title: 'My Goals',
    description: 'My ultimate goal is to work with AI, driving innovation and creating impactful solutions.'
}

//awards data 
const awards = {
    title: 'My Awards',
    description: 'fix later...'
}

const Resume = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);  // Added this state to track which item is expanded

    const handleExpand = (index) => {  // Added this function to toggle the expanded state
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 overflow-hidden'
        >
            <div className='container mx-auto'>
                
                <Tabs defaultValue="about" className='flex flex-col h-full min-h-full xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        {/* <TabsTrigger value="awards">Awards</TabsTrigger>
                        <TabsTrigger value="goals">Goals</TabsTrigger> */}
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[750px] text-white/80 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index)=> {
                                            return (
                                            <li key={index} onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} className={`bg-[#565f69] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#434950] transition-all duration-300 cursor-pointer ${expandedIndex === index ? "lg:col-span-2 h-auto justify-center items-center" : "lg:col-span-1 h-[184px]"}`}>
                                                <div className='flex flex-col w-full'>
                                                    <span className={`text-accent ${expandedIndex === index ? "text-center" : "text-left"}`}>{item.duration}</span>
                                                    <h3 className={`text-xl ${expandedIndex === index ? "min-h-[40px] text-center" : "min-h-[65px]"}`}>{item.position}</h3>
                                                    <div className={`flex items-center gap-3 ${expandedIndex === index ? "justify-center" : "justify-start"}`}>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/80'>{item.company}</p> 
                                                    </div>
                                                </div>
                                                {expandedIndex === index && (  
                                                    <div className='mt-4 w-full'>
                                                        <div className='flex items-center gap-2'>
                                                            {/* dot */}
                                                            <span className='min-w-[6px] min-h-[6px] rounded-full bg-accent mr-2'></span>
                                                            <p className='text-white/80 ml-2'>{item.description1}</p> 
                                                        </div>
                                                        <div className='flex items-center gap-2 mt-2'>
                                                            {/* dot */}
                                                            <span className='min-w-[6px] min-h-[6px] rounded-full bg-accent mr-2'></span>
                                                            <p className='text-white/80 ml-2'>{item.description2}</p> 
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[750px] text-white/80 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 gap-[30px]'>
                                        {education.items.map((item, index)=> {
                                            return (
                                            <li key={index} className='bg-[#565f69] h-[220px] xl:h-[160px] py-5 px-10 rounded-xl flex flex-col justify-center items-center text-center gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl min-w-[260px] min-h-[40px] xl:min-h-[30px] text-center '>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/80'>{item.info}</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/80'>{item.institution}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[750px] text-white/80 mx-auto xl:mx-0'>{skills.description}</p>
                            </div>

                            {/* border */}
                            <div className="border border-black/40"></div>
                            
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]'>
                                {skills.skillList.map((skill, index) =>{
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[90px] bg-[#565f69] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition all duration-300 group-hover:scale-105'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize text-accent font-semibold text-center'>{skill.name}<br></br></p>
                                                        <p className='text-blue-600 capitalize'>{skill.level}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                        <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <div className='bg-[#565f69] max-w-[645px] rounded-xl py-2 px-5 flex flex-col justify-center items-center lg:items-start' >
                                <p className='max-w-[700px] text-white/80 mx-auto xl:mx-0'>{about.description}</p>
                            </div>
                                <ul className='grid grid-cols-1 xl:grid-cols-1 gap-y-3 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item,index)=> {
                                        return <li key={index} className='flex items-center justify-center xl:justify-start gap-2'>
                                            <span className='text-accent/80 text-[15px]' >{item.fieldName}</span>
                                            <span className='text-[15px]'>{item.fieldValue}</span>
                                        </li> 
                                        
                                    })}
                                </ul>
                                <Photo6 />
                                
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;