// app/page.tsx or Home.tsx

'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image';
import { BackgroundBeamsWithCollision } from "./Components/UI/background-beams-with-collision";
import { Pointer } from "@/components/magicui/pointer";


import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero';
import Technologies from './Components/Technologies';
import TimeLine from './Components/TimeLine';




export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: 'smooth',
      })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <BackgroundBeamsWithCollision>
      <Pointer />
    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-black tracking-tight">
    {" "}
    <div
      ref={scrollContainerRef}
      className="flex w-screen h-screen overflow-x-hidden overflow-y-hidden scroll-smooth"
    >
      <section className="min-w-screen h-screen flex items-center justify-center">
        <Navbar />
      </section>
      <section className="min-w-screen h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section className="min-w-screen h-screen flex items-center justify-center">
        <About />
      </section>
      <section className="min-w-screen h-screen flex items-center justify-center">
        <Technologies />
      </section>
      <section className="min-w-screen h-screen flex items-center justify-center">
        <TimeLine />
      </section>
    </div>
    </h2>
    </BackgroundBeamsWithCollision>
  )
}
