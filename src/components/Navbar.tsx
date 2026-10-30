"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { studioData } from "@/data/pilates";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { MOTION_EASE } from "@/lib/motion";
import { useLenis } from "@/components/motion/SmoothScrollProvider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { contact } = studioData;
  const { scrollY } = useScroll();
  const { scrollTo } = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollTo(href, { offset: -76, duration: 1.25 });
      window.history.pushState(null, "", href);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 24);
    });
  }, [scrollY]);

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
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(248, 248, 247, 0.94)" : "rgba(248, 248, 247, 1)",
        borderBottomColor: isScrolled ? "rgba(223, 223, 217, 0.9)" : "rgba(223, 223, 217, 0.6)",
        boxShadow: isScrolled ? "0 4px 20px -2px rgba(18, 19, 18, 0.05)" : "none",
      }}
      transition={{ duration: 0.3, ease: MOTION_EASE.smooth }}
      className="sticky top-0 z-50 backdrop-blur-md border-b"
    >
      <div
        className={`max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-9 h-9 bg-[#121312] text-[#F8F8F7] flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-[#CE5A37] transition-colors"
          >
            A
          </motion.div>
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#5E605E] hover:text-[#121312] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#121312] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(defaultWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#121312] text-[#F8F8F7] text-xs font-bold tracking-wider uppercase hover:bg-[#CE5A37] transition-colors"
          >
            <span>Book a Class</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: MOTION_EASE.editorial }}
            className="lg:hidden bg-[#F8F8F7] border-b border-[#DFDFD9] px-5 py-6 space-y-4 overflow-hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
              className="flex flex-col space-y-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-sm font-bold uppercase tracking-wider text-[#121312] py-2 border-b border-[#DFDFD9] hover:text-[#CE5A37] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <div className="pt-2">
              <motion.a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121312] text-[#F8F8F7] text-xs font-bold tracking-wider uppercase hover:bg-[#CE5A37] transition-colors"
              >
                <span>Book a Class via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
