"use client"

import { Pointer } from '@/components/magicui/pointer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 py-4 z-50">
      <Pointer />
      {/* Logo */}
      <Link href="/">
        <Image src="/logo_white.svg" alt="logo" width={160} height={160} className="object-contain" />
      </Link>

      {/* Vertical Nav Menu */}
      <div className="flex flex-col items-center px-10 backdrop-blur-md bg-opacity-40">
        <div className="h-[100px] w-[1px] bg-gray-500" />

        <div className="flex flex-col gap-[130px] text-gray-400 text-sm font-semibold tracking-widest">
          <Link href="/About" className="transform -rotate-90 origin-left hover:text-red-500 transition">
            About Me
          </Link>
          <Link href="/Technologies" className="transform -rotate-90 origin-left hover:text-white transition">
            Technologies
          </Link>
          <Link href="/Timeline" className="transform -rotate-90 origin-left hover:text-white transition">
            Timeline
          </Link>
          <Link href="/Projects" className="transform -rotate-90 origin-left hover:text-white transition">
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
