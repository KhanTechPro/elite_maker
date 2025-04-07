import { michroma, montserrat, robotoMono } from '../Fonts/fonts';
import { TextAnimate } from "./UI/text-animate";
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center px-8 md:px-16 py-4 w-full max-w-[1200px] mx-auto">
      {/* Background images */}
      <Image src="/bg_effect.png" alt="bg_effect" width={900} height={900} className="absolute bottom-[240px] left-[-240px] z-0" />
      
      <div className="flex justify-between items-center max-w-full w-full gap-[150px] z-10">
        <div className="flex flex-col items-start">
          <h3 className={`${michroma.className} text-4xl`}>Muminakhan Kasimova</h3>
          <h1 className={`${montserrat.className} font-extrabold text-[180px] uppercase`}>
            <TextAnimate by="word">
              Creative
            </TextAnimate>
          </h1>
          <h3 className={`${michroma.className} text-4xl`}>Designer and Developer</h3>
        </div>

        {/* Symbol */}
        <Image src="/symbol_1.svg" alt="symbol" width={400} height={400} />
      </div>

      {/* Background images */}
      <Image src="/bg_effect.png" alt="bg_effect" width={900} height={900} className="absolute bottom-[-500px] right-[-350px] z-0" />
    </div>
  );
}

export default Hero;
