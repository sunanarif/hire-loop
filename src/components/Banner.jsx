"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Magnifier, Briefcase, MapPin } from "@gravity-ui/icons";

const TRENDING = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function Banner() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative overflow-hidden bg-black px-4 py-24 sm:px-6">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
          <Briefcase className="h-4 w-4 text-orange-400" />
          <span className="font-mono font-semibold text-white">50,000+</span>
          <span>NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl md:text-[56px]">
          Find Your Dream Job Today
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 p-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 px-3 py-2">
            <Magnifier className="h-4 w-4 text-zinc-500" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
            />
          </div>

          <span className="hidden h-6 w-px bg-white/10 sm:block" />

          <div className="flex flex-1 items-center gap-2 px-3 py-2">
            <MapPin className="h-4 w-4 text-zinc-500" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
            />
          </div>

          <Button
            size="sm"
            className="rounded-xl bg-indigo-600 px-4 py-5 text-white hover:bg-indigo-500 sm:py-2"
          >
            <Magnifier className="h-4 w-4" />
          </Button>
        </div>

        {/* Trending positions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-zinc-500">Trending Position</span>
          {TRENDING.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-zinc-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}