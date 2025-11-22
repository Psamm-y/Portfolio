import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from '@/data';
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>

      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill='blue' />
      </div>
       <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    
      </div>
        <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'> 
          <TextGenerateEffect
            words='Creating Magic, Building Amazing User Interfaces'
            className='text-center text-[40px] md:text-5xl lg:text-6xl]'
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white flex items-baseline">
            Hi! I&apos;m Psammy
            {/* //github social icon */}
            <div
              title='my github'
              className="w-10 h-10 cursor-pointer inline-flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg "
            >
              <a href={socialMedia[0].href} target="_blank">
                <img src={socialMedia[0].img} alt="github" width={20} height={20} />
                </a>
            </div>
            , a Front-end Developer based in Ghana.
          </p>
          
          <a href="#projects">
            <MagicButton
           title="Show my work" icon=  {<FaLocationArrow />} position="right"/>
          
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;