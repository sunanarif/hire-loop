"use client";

import Image from "next/image";
import { Card } from "@heroui/react";
import {
  FiBriefcase,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { Factory } from "@gravity-ui/icons";

const stats = [
  {
    icon: <FiBriefcase size={22} />,
    value: "50K",
    title: "Active Jobs",
  },
  {
    icon: <Factory size={22} />,
    value: "12K",
    title: "Companies",
  },
  {
    icon: <FiUsers size={22} />,
    value: "2M",
    title: "Job Seekers",
  },
  {
    icon: <FiAward size={22} />,
    value: "97%",
    title: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-16 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-700/30 blur-[170px]" />

      {/* Globe */}
      <Image
        src="/images/globe1.png"
        alt="Globe"
        width={1800}
        height={900}
        priority
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[1500px] max-w-none opacity-90 pointer-events-none z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center pt-60">
          <h2 className="text-4xl md:text-[40px]  text-white leading-tight">
            Assisting over{" "}
            <span className="text-violet-500">15,000</span>
            <br />
            job seekers find their dream positions.
          </h2>
        </div>

        {/* Cards */}
        <div className="-mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-20">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10"
            >
              <div className="text-white mb-10">{item.icon}</div>

              <h3 className="text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}