"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";

const coms = [
    {
        num: '01',
        title: 'Technical',
        description: 'Technical communication focuses on creating clear documentation, code comments, and instructions. This ensures that code and projects are easily understandable, usable, and maintainable by others, which is vital for long-term success.',
        href: "/technical",
    },
    {
        num: '02',
        title: 'Written',
        description: 'Written communication is key for composing emails, project proposals, and reports. It allows for the professional and precise conveyance of ideas and instructions, ensuring that messages are clearly understood and acted upon.',
        href: "/written",
    },
    {
        num: '03',
        title: 'Spoken',
        description: 'Spoken communication is essential for effectively collaborating on projects, presenting ideas, and explaining technical concepts. It allows for clear articulation of thoughts, immediate feedback, and strong teamwork, ensuring everyone is on the same page.',
        href: "/spoken",
    },
    {
        num: '04',
        title: 'Visual',
        description: 'Visual communication simplifies complex ideas by using diagrams, flowcharts, and designs. It makes technical concepts more accessible and engaging for various audiences, and is crucial for presenting project outcomes clearly.',
        href: "/visual",
    },
];

import { motion } from 'framer-motion';

const Communication = () => {
    return <section className="min-h-[80vh] h-full flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {coms.map((com, index)=> {
                    return (
                        <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                        {/* top */}
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{com.num}</div>
                            <Link href={com.href} className="w-[60px] h-[60px] rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className='text-white text-3xl'/>
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className='text-[35px] font-bold leading-3 text-white group-hover:text-accent transition-all duration-500 group-hover:scale-105'>{com.title}</h2>
                        {/* description */}
                        <p className='text-white/60'>{com.description}</p>
                        {/* border */}
                        <div className='border-b border-white/20 w-full'></div>
                    </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
};

export default Communication