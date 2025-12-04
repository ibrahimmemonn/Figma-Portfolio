"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const m: any = motion as any;

export default function About(): React.JSX.Element {
  return (
    <m.section id="about" className="py-20 px-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container mx-auto max-w-6xl">
        <m.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <p className="text-2xl max-w-6xl mx-auto">
            I&apos;m currently looking to join a <span className="text-purple-400">cross-functional team</span><br/> <span className="text-sm">that values 
            improving people&apos;s lives through accessible design</span>
          </p>
        </m.div>
        <m.div className="mx-auto w-fit mt-8 relative" whileHover={{ scale: 1.02 }} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <Image 
            src="/assets/illustration.png"
            alt="Skills"
            width={800}
            height={800}
            className="object-cover mx-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </m.div>
      </div>
    </m.section>
  );
}

