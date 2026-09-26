"use client";

import { useState } from "react";
import Link from "next/link";
import { studioData } from "@/data/pilates";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = studioData;

  const navLinks = [
    { label: "Filosofi", href: "#filosofi" },
    { label: "Program Kelas", href: "#kelas" },
    { label: "Jadwal", href: "#jadwal" },
    { label: "Harga & Paket", href: "#harga" },
    { label: "Instruktur", href: "#instruktur" },
    { label: "Studio", href: "#studio" },
    { label: "FAQ", href: "#faq" },
  ];

  const defaultWhatsappMessage =
    "Halo AURA Pilates Studio! Saya ingin bertanya seputar jadwal dan booking First Trial Class.";

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DDD0] transition-colors">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A2821] text-[#FAF7F2] flex items-center justify-center font-serif text-xl font-bold tracking-tighter group-hover:bg-[#C86D51] transition-colors">
            A
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold tracking-tight text-[#1A2821] leading-none">
              AURA
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] text-[#647069] uppercase mt-1">
              Reformer & Movement
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#1A2821]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#647069] hover:text-[#1A2821] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C86D51] hover:after:w-full after:transition-all"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-all duration-300 shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4 text-[#FAF7F2]" />
            <span>Book Trial Rp 175k</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF7F2]/80" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-[#1A2821] hover:bg-[#F3EFE6] transition-colors"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DDD0] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#1A2821] py-2 border-b border-[#E5DDD0]/50"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Trial Rp 175k via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
