"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Aline Cuida", href: "#hero" },
        { name: "Como funciona", href: "#how-it-works" },
        { name: "Funcionalidades", href: "#features" },
        { name: "Dra. Aline", href: "#dra-aline" },
        { name: "Planos", href: "#plans" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-night-base/80 backdrop-blur-md border-white/5 py-4 shadow-sm"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo */}
                    <div className="w-8 h-8 rounded-full bg-accent-sage/20 border border-accent-sage flex items-center justify-center">
                        <span className="text-accent-sage font-cormorant font-bold italic text-xl leading-none pt-1">A</span>
                    </div>
                    <span className="font-fraunces font-medium text-lg text-accent-pearl">Aline Cuida</span>
                </div>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-accent-pearl/70 hover:text-accent-pearl transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button size="sm" withWhatsapp className="hidden md:flex">
                        Começar no WhatsApp
                    </Button>
                    <button className="lg:hidden text-accent-pearl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
