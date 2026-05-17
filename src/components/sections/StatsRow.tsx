// ไฟล์นี้คือ: แถบสถิติ (src/components/sections/StatsRow.tsx)
// หน้าที่: แสดงตัวเลขสถิติ 3 ช่อง: ปีประสบการณ์, จำนวนโครงการ, จำนวนลูกค้า
// ตัวเลขจะนับจาก 0 เมื่อเลื่อนมาเห็น

"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"; // ตัวนับเลขแบบ animation
import { data } from "@/data/portfolio";

// ข้อมูลสถิติ (ดึงจาก data.json)
const stats = [
  { value: 5, suffix: "+", label: "ปีประสบการณ์" },
  { value: data.personal.stats.projects, suffix: "", label: "โปรเจกต์" },
  { value: data.personal.stats.clients, suffix: "", label: "ลูกค้า" },
];

export function StatsRow() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 border border-border rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} // แต่ละช่องหน่วง 0.1 วินาที
              className="p-6 text-center border-r border-border last:border-r-0"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-[11px] text-text-muted tracking-wider mt-1 font-[family-name:var(--font-space-mono)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
