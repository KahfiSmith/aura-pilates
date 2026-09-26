"use client";

import { useState } from "react";
import Link from "next/link";
import { studioData } from "@/data/pilates";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = studioData;

  const navLinks = [
    { label: "Studio", href: "#studio-intro" },
    { label: "Classes", href: "#classes" },
    { label: "Schedule", href: "#schedule" },
    { label: "Instructors", href: "#instructors" },
    { label: "Membership", href: "#pricing" },
    { label: "Location", href: "#location" },
  ];

  const defaultWhatsappMessage =
    "Halo AURA Movement Studio! Saya ingin booking sesi latihan / trial class.";

  return (
    <header className="sticky top-0 z-50 bg-[#F8F8F7]/95 backdrop-blur-md border-b border-[#DFDFD9] transition-all">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-9 h-9 bg-[#121312] text-[#F8F8F7] flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-[#CE5A37] transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-[#121312] uppercase leading-none">
              AURA
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-[#5E605E] uppercase mt-0.5">
              Movement Studio
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#121312]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#5E605E] hover:text-[#121312] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#121312] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(defaultWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121312] text-[#F8F8F7] text-xs font-bold tracking-wider uppercase hover:bg-[#CE5A37] transition-colors"
          >
            <span>Book a Class</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#121312] hover:bg-[#F0F0EE] transition-colors"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#F8F8F7] border-b border-[#DFDFD9] px-5 py-6 space-y-4 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-[#121312] py-2 border-b border-[#DFDFD9]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121312] text-[#F8F8F7] text-xs font-bold tracking-wider uppercase hover:bg-[#CE5A37] transition-colors"
            >
              <span>Book a Class via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
