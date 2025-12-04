"use client";
// @ts-nocheck

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const m: any = motion as any;

export default function Banner(): React.JSX.Element {
  const texts = ["Software Engineer", "UI/UX Designer", "React Native Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.98, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.25 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 lg:pt-16 px-6">
      <m.div className="container mx-auto max-w-6xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left side - Character image */}
          <m.div className="flex justify-center lg:justify-start relative w-full lg:w-auto lg:mr-8" variants={imageVariant} whileHover="hover" initial="hidden" animate="visible">
            <div className="relative mt-4 lg:mt-0 lg:-translate-y-2">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">
                  <Image src="/assets/arrow.png" alt="Arrow pointer" width={80} height={80} className="absolute top-5 rotate-z-280" style={{ width: "auto", height: "auto" }} />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">Hello! I am <span className="text-purple-400">Abdul Basit Ali</span></p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <m.div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] group" whileHover={{ scale: 1.03 }}>
                {/* Single profile image used instead of separate glow and portrait images */}
                <Image
                  src="/assets/profile.png"
                  alt="Abdul Basit Ali - profile"
                  width={300}
                  height={300}
                  className="relative z-10 w-full h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </m.div>
            </div>
          </m.div>

          {/* Right side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image src="/assets/arrow.png" alt="Arrow pointer" width={100} height={100} className="absolute" style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }} />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">Hello! I am <span className="text-purple-400">Abdul Basit Ali</span></p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>

            <m.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <p className="text-2xl">A Designer who</p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Judges a book
                <br /> by its <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">cover</span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">Because if the cover does not impress you what else can?</p>
            </m.div>
          </div>
        </div>

        <div className="space-y-3 pt-15 text-center lg:text-left">
          <m.p className="text-5xl text-white font-bold">
            I&apos;m a{' '}
            <AnimatePresence mode="wait">
              <m.span key={currentTextIndex} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="inline-block">
                {displayedText}
              </m.span>
            </AnimatePresence>
            <span className="animate-pulse">|</span>
          </m.p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a Software Engineer at</span>
            <span className="flex items-center gap-2">
              <Image src="/assets/webhr.webp" alt="WebHR" width={20} height={20} className="w-5 h-5" style={{ width: "auto", height: "auto" }} />
              <span className="text-blue-400 font-semibold">WebHR,</span>
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
        </div>
      </m.div>
    </section>
  );
}
