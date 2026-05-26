// ไฟล์นี้คือ: เมนูนำทาง (Navbar) (src/components/layout/Navbar.tsx)
// หน้าที่: แสดงเมนูด้านบนสุดของเว็บ รองรับ Desktop และ Mobile

"use client"; // บอก Next.js ว่าไฟล์นี้ต้องรันบน browser (มี state, event)

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ดึง URL ปัจจุบัน
import { motion, AnimatePresence } from "framer-motion"; // ใช้ทำ animation
import { cn } from "@/lib/utils"; // ฟังก์ชันรวม class CSS

// รายการเมนูทั้งหมด
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/software", label: "Software" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "AI Tools" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname(); // URL ปัจจุบัน เช่น "/about"
  const [scrolled, setScrolled] = useState(false); // เลื่อนหน้าจอลงมาหรือยัง
  const [mobileOpen, setMobileOpen] = useState(false); // เมนูมือถือเปิดอยู่ไหม

  // ตรวจจับการเลื่อนหน้าจอ → เปลี่ยนสีพื้นหลัง Navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // เมื่อเปลี่ยนหน้า → ปิดเมนูมือถืออัตโนมัติ
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300",
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-border" // เลื่อนลงมาแล้ว: พื้นหลังทึบ
          : "bg-transparent" // ยังไม่เลื่อน: พื้นหลังใส
      )}
    >
      {/* โลโก้ / ชื่อเว็บ */}
      <Link
        href="/"
        className="font-[family-name:var(--font-space-mono)] text-sm text-cyan tracking-wider"
      >
        TRITOT.ENGINEER
      </Link>

      {/* เมนู Desktop (ซ่อนบนมือถือ) */}
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-xs tracking-wider transition-colors duration-200 font-[family-name:var(--font-space-mono)]",
                pathname === link.href
                  ? "text-cyan"           // หน้าปัจจุบัน: สีฟ้า
                  : "text-text-dim hover:text-text" // หน้าอื่น: สีจาง, เ hover เข้มขึ้น
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ปุ่ม Hamburger (แสดงบนมือถือเท่านั้น) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {/* เส้นที่ 1: หมุน 45° เมื่อเปิด */}
        <motion.span
          animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1px] bg-text-dim"
        />
        {/* เส้นที่ 2: หายไปเมื่อเปิด */}
        <motion.span
          animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-5 h-[1px] bg-text-dim"
        />
        {/* เส้นที่ 3: หมุน -45° เมื่อเปิด */}
        <motion.span
          animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1px] bg-text-dim"
        />
      </button>

      {/* เมนูมือถือ (แสดงเมื่อกด Hamburger) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}  // เริ่ม: โปร่งใส + เลื่อนขึ้น
            animate={{ opacity: 1, y: 0 }}     // เปิด: ทึบ + ลงมา
            exit={{ opacity: 0, y: -10 }}      // ปิด: โปร่งใส + เลื่อนขึ้น
            className="absolute top-16 left-0 right-0 bg-navy/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm rounded transition-colors",
                    pathname === link.href
                      ? "text-cyan bg-cyan-dim"        // หน้าปัจจุบัน: พื้นฟ้าอ่อน
                      : "text-text-dim hover:text-text hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
