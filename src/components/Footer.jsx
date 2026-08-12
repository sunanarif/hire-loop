import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const FOOTER_LINKS = {
    Product: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary-data" },
    ],
    Navigations: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/career-library" },
        { label: "Contact", href: "/contact" },
    ],
    Resources: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/newsroom" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="HireLoop" width={140} height={32} className="h-8 w-auto" />
                        </Link>
                        <p className="mt-4 text-sm text-zinc-400">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
                        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-sm font-semibold text-indigo-400">{title}</h4>
                                <ul className="mt-4 space-y-3">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <div className="flex items-center gap-3">
                        <Link href="https://facebook.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-white hover:bg-zinc-700">
                            <FaFacebookF size={16} />
                        </Link>
                        <Link href="https://pinterest.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">
                            <FaPinterestP size={16} />
                        </Link>
                        <Link href="https://linkedin.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-white hover:bg-zinc-700">
                            <FaLinkedinIn size={16} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span>Copyright 2026 — Programming Hero</span>
                        <Link href="/terms" className="hover:text-white">Terms & Policy</Link>
                        <span>-</span>
                        <Link href="/privacy" className="hover:text-white">Privacy Guideline</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}