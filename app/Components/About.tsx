import { michroma, montserrat } from '../Fonts/fonts';
import Image from 'next/image'



const About = () => {
  return (
    <div className="relative flex justify-center items-center  px-8 md:px-16 py-4 w-full max-w-[1200px] mx-auto">
     
          <div className='w-[900px]'>
            <h3 className={`${michroma.className} text-4xl text-start`}>Short Story</h3>
            <p className={`${montserrat.className} text-xl text-start font-medium py-4`}>My name is Muminakhan, who worked in web development sphere not only as UX&UI designer, also as PM and Frontend developer.
              My journey were too long in order to enter IT because of my past profession were I spent my three year as accountant, 
              by the way my self-taught helped me to solve the problems in this area. 
            </p>
          </div>

          <Image src="/symbol_2.svg" alt="bg_effect" width={450} height={450}  className='relative left-50'/>
    </div>
  );
};

export default About;
