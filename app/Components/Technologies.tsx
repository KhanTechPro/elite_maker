import { BorderBeam } from '@/components/magicui/border-beam';
import { michroma, montserrat } from '../Fonts/fonts';
import Image from 'next/image'
import { TextAnimate } from './UI/text-animate';


const Technologies = () => {
  return (
    <div className="relative flex justify-center items-center  px-8 md:px-16 py-4 w-full max-w-[500px] mx-auto">
     
    <div className=''>
      
        <h3 className={`${michroma.className} text-4xl text-start`}>
            <TextAnimate >Technologies</TextAnimate>
        </h3>
        
        <div className='pb-4 pt-6 flex justify-between items-center gap-6 w-full max-w-[1650px]'>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>
                <Image src="/tools_photoshop.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_illustrator.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_html.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_js.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_react.svg" alt='tools' width={120} height={120} />
            </div>
        
        </div>

        <div className='flex justify-between items-center gap-6 w-full max-w-[1650px]'>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_figma.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_canva.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_css.svg" alt='tools' width={90} height={90} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_ts.svg" alt='tools' width={120} height={120} />
            </div>
            <div className='bg-zinc-800 w-[250px] h-[180px] flex justify-center items-center shadow-xl relative py-8'>    
                <Image src="/tools_next.svg" alt='tools' width={120} height={120} />
            </div>
        </div>
    </div>

    <Image src="/symbol_3.svg" alt="bg_effect" width={450} height={450}  className='relative left-50'/>
</div>
  )
}

export default Technologies