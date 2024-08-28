import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Link from "next/link";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Photo2 from "@/components/Photo2";
import Photo3 from "@/components/Photo3";
import Photo4 from "@/components/Photo4";
import Photo5 from "@/components/Photo5";
import Stats from "@/components/Stats";
import TypeEffect from "@/components/TypeEffect";

const Home = () => {
  return <section className="h-full overflow-hidden">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-[17px] xl:text-xl">Software Developer | Cybersecurity Analyst</span>
          <h1 className="h1 mb-6 ">
            Hello I&apos;m <br /><TypeEffect />
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I&apos;m a senior at LSU specializing in cybersecurity and software engineering with a deep passion for AI.  I thrive on challenges and continually seek to improve my skills. <span className="text-accent">Let&apos;s connect!</span></p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href="/assets/Resume.pdf">
            <Button 
              variant="outline" 
              size="lg"
              className=" uppercase flex items-center gap-8"
              >
                <span>Download Resume </span>
                <FiDownload  className=" text-xl" />
            </Button>
            </Link>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconsStyles="w-9 h-9 border border-accent rounded-full text-accent flex justify-center items-center item-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="relative order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          <Photo2 />
          <Photo3 />
          <Photo4 />
          <Photo5 />
        </div >
      </div>
    </div>
    <Stats />
  </section>
};

export default Home;