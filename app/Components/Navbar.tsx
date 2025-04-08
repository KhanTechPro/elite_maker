"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const sections = ["About", "Technologies", "Timeline"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollMid = container.scrollLeft + window.innerWidth / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const left = el.offsetLeft;
          const right = left + el.offsetWidth;
          if (scrollMid >= left && scrollMid < right) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 py-4 z-50 h-screen flex flex-col justify-start items-center">
      <Link href="/">
        <Image
          src="/logo_white.svg"
          alt="logo"
          width={160}
          height={160}
          className="object-contain"
        />
      </Link>

      <div className="flex flex-col items-center px-10 backdrop-blur-md bg-opacity-40 relative mt-6 h-full">
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-500" />
        <div className="flex flex-col gap-[130px] relative top-20 text-sm font-semibold tracking-widest">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transform -rotate-90 origin-left transition duration-300 ${
                activeSection === section ? "text-red-500" : "text-gray-400"
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
