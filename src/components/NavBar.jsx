"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSingOut= async()=>{
    await authClient.signOut();
  }

  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 

  const user =session?.user
  console.log(session);


  return (
    <div className="sticky top-4 z-50 w-full px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/90 px-5 backdrop-blur-lg sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="HireLoop"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Links + Buttons - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="h-5 w-px bg-white/15" />
            {
              user ? <>
                <h1>{user?.name}</h1>
                <Button onClick={handleSingOut} className="rounded-full bg-indigo-600 px-5 font-medium text-white hover:bg-indigo-500">Sing Out</Button>
              </> : <Link href="/auth/singin" className="text-sm font-medium text-indigo-400">
                Sign In
              </Link>
            }
            <Button
              as={Link}
              href="/signup"
              size="sm"
              className="rounded-full bg-indigo-600 px-5 font-medium text-white hover:bg-indigo-500"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link href="/login" className="block px-3 py-2 text-sm font-medium text-indigo-400">
                Sign In
              </Link>
              <Button
                as={Link}
                href="/signup"
                className="w-full rounded-full bg-indigo-600 font-medium text-white hover:bg-indigo-500"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}