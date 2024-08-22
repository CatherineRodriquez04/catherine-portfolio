"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info =[
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(225)772-1794',
    },
    {
        icon: <FaEnvelope/>,
        title: 'Email',
        description: 'Catherine.Rodriquez04@gmail.com',
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: 'Address',
        description: 'Baton Rouge, Louisiana',
    },
]

import {motion} from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";

import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('https://formspree.io/f/xpwayybn', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission on Enter key press
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#565f69] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s Connect!</h3>
                            <p className="text-white/80">Feel free to reach out with any questions or comments.</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name"/>
                                <Input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name"/>
                                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address"/>
                                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number"/>
                            </div>
                            {/* select */}
                            <Select name="subject" value={formData.subject} onChange={(e) => handleChange({ target: { name: 'subject', value: e.target.value } })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select A Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select A Subject</SelectLabel>
                                        <SelectItem value="gen inquiry">General Inquiry</SelectItem>
                                        <SelectItem value="feedback">Feedback/Suggestions</SelectItem>
                                        <SelectItem value="career">Career Opportunities</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange}
                                className="h-[200px]" 
                                placeholder="Type your message here."
                            />
                            {/* button */}
                            <Button type="submit" size="md" className="max-w-50">Send Message!</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[42px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#565f69] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-accent font-semibold text-[14px] xl:text-[15px]">{item.title}</p>
                                        <h3 className=" text-[16px] xl:text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;