
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const socials = [
    {icons: <FaGithub />, path: 'https://github.com/CatherineRodriquez04'},
    {icons: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/catherine-rodriquez04'},
    {icons: <FaYoutube />, path: 'https://www.youtube.com/@CatherineRodriquez'},
]

const Social = ({containerStyles, iconsStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconsStyles}>
                    {item.icons}
                </Link>
        })}
    </div>
}

export default Social;