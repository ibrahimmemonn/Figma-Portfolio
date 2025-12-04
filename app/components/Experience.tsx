"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const m: any = motion as any;

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "WebHR - HR Management App",
    description: "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "WebHR Kiosk - Time Clock Kiosk",
    description: "WebHR Kiosk is a time clock kiosk that allows you to clock in and out of your work. It is a simple and easy to use app that allows you to clock in and out of your work.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Somezing - AI-Powered Agents",
    description: "Somezing is a AI-Powered Agents to Automate Your Workflows. It is a simple and easy to use app that allows you to automate your workflows.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "FileIT - File Sharing App",
    description: "FileIT is a file sharing app that allows you to share files with your friends and family. It is a simple and easy to use app that allows you to share files with your friends and family.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <m.section id="experience" className="py-20 px-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <m.div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 flex items-center gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            >
              <div className="mb-4 ">
                <m.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
                </m.div>
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="https://ibiimemon.com/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                <m.span whileHover={{ x: 6, scale: 1.02 }}>LEARN MORE →</m.span>
              </Link>
              </div>

            </m.div>
          ))}
        </div>
      </div>
    </m.section>
  );
}

