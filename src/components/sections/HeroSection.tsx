// ไฟล์นี้คือ: Hero Section (src/components/sections/HeroSection.tsx)
// หน้าที่: ส่วนแนะนำตัวด้านบนสุดของหน้า Home แสดงชื่อ คำโปรย ปุ่ม CTA

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/portfolio"; // โหลดข้อมูลจาก data.json

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* ฝั่งซ้าย: ข้อความ */}
          <div>
            {/* ป้าย "ENGINEERING & AI SYSTEMS" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.2em] text-cyan border border-cyan-border px-3 py-1 rounded-sm mb-6">
                ENGINEERING & AI SYSTEMS
              </span>
            </motion.div>

            {/* ชื่อ */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-text leading-tight mb-4"
            >
              {data.personal.name}
            </motion.h1>

            {/* คำโปรย / ตำแหน่ง */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-space-mono)] text-sm text-gold tracking-wider mb-6"
            >
              {data.personal.title}
            </motion.p>

            {/* คำอธิบายตัวเอง */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text text-base leading-relaxed max-w-xl mb-8"
            >
              {data.personal.bio}
            </motion.p>

            {/* ปุ่ม CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-3 flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-2.5 bg-cyan text-dark text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                >
                  ดูผลงาน
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 border border-border text-text-dim text-sm rounded-sm hover:border-cyan-border hover:text-text transition-colors"
                >
                  ติดต่อฉัน
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ฝั่งขวา: รูปโปรไฟล์ (ซ่อนบนมือถือ) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border border-cyan-border" /> {/* วงแหวนนอก */}
              <div className="absolute inset-2 rounded-full border border-gold-border opacity-50" /> {/* วงแหวนใน */}
              <div className="absolute inset-4 rounded-full bg-navy overflow-hidden">
                <Image
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
