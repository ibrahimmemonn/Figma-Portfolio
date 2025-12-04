"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const m: any = motion as any;

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#lab", label: "Lab" },
  ];

  const hamburgerVariants = {
    closed: { rotate: 0, y: 0 },
    openTop: { rotate: 45, y: 6 },
    openMiddle: { opacity: 0, scale: 0 },
    openBottom: { rotate: -45, y: -6 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.45, transition: { duration: 0.18 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -8, scaleY: 0.98 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.22 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            {/* Image logo intentionally commented out in favor of text logo */}
            {/* <Image src="/logo/logo.svg" alt="Logo" width={100} height={100} style={{ width: "auto", height: "auto" }} /> */}
            <span className="lowercase tracking-wider">basitalitech</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <m.li key={link.href} whileHover={{ y: -2 }} className="m-0 p-0">
                <Link href={link.href} className="text-white hover:text-purple-400 transition-colors text-base font-normal">
                  {link.label}
                </Link>
              </m.li>
            ))}
          </ul>

          {/* Hamburger Button - Mobile Only */}
          {isMounted && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <m.span aria-hidden variants={hamburgerVariants} initial={"closed"} animate={isMenuOpen ? "openTop" : "closed"} className="block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center" />
              <m.span aria-hidden variants={hamburgerVariants} initial={"closed"} animate={isMenuOpen ? "openMiddle" : "closed"} className="block w-6 h-0.5 bg-white transition-all duration-300 ease-out" />
              <m.span aria-hidden variants={hamburgerVariants} initial={"closed"} animate={isMenuOpen ? "openBottom" : "closed"} className="block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center" />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMounted && isMenuOpen && (
          <>
            {/* Backdrop */}
            <m.div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMenuOpen(false)} style={{ top: "56px" }} aria-hidden variants={backdropVariants} initial="hidden" animate="visible" exit="hidden" />

            {/* Mobile Navigation Menu */}
            <m.div className={`absolute top-full left-0 right-0 bg-gradient-to-b from-[#110720] via-[#1a0f2e] to-[#110720] border-b border-white/10 md:hidden z-40 origin-top`} style={{ transformOrigin: 'top' }} variants={menuVariants} initial="hidden" animate="visible" exit="hidden">
              <ul className="flex flex-col list-none m-0 p-4 gap-2">
                {navLinks.map((link) => (
                  <li key={link.href} className="m-0 p-0">
                    <Link href={link.href} onClick={handleLinkClick} className="block px-6 py-3 text-white hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-200 text-base font-normal rounded-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}



