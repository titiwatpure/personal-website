// ไฟล์นี้คือ: หน้า About Me (src/app/about/page.tsx)
// หน้าที่: แสดงประวัติ ปรัชญา จุดเด่น และประสบการณ์ทำงาน

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="About Me" subtitle="เกี่ยวกับฉัน" />

          {/* ส่วนปรัชญาการทำงาน */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border border-border rounded-sm bg-dark-card p-8 mb-10"
          >
            <h3 className="font-[family-name:var(--font-space-mono)] text-xs text-cyan tracking-wider mb-4">
              PHILOSOPHY
            </h3>
            <p className="text-lg text-text leading-relaxed">
              &ldquo;{data.about.philosophy}&rdquo;
            </p>
          </motion.div>

          {/* ส่วนจุดเด่น (แสดงเป็น 2 คอลัมน์) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {data.about.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 p-4 border border-border rounded-sm bg-dark-card"
              >
                <span className="text-cyan mt-1">&#x25B8;</span> {/* ไอคอนสามเหลี่ยม */}
                <p className="text-sm text-text-dim leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ส่วนประวัติการทำงาน (Timeline) */}
          <SectionHeader title="Experience" subtitle="ประสบการณ์" />

          <div className="space-y-4">
            {data.about.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border rounded-sm bg-dark-card p-6 hover:border-cyan-border transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    {/* จุด Timeline: จุดแรกจะกระพริบ */}
                    <div className="mt-1 w-2 h-2 rounded-full border border-cyan flex-shrink-0">
                      {i === 0 && (
                        <div className="w-full h-full rounded-full bg-cyan animate-pulse" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-text">
                        {exp.role} {/* ตำแหน่ง */}
                      </h3>
                      <p className="text-sm text-gold opacity-70 mt-0.5">
                        {exp.company} · {exp.type} {/* บริษัท · ประเภท */}
                      </p>
                      <p className="text-sm text-text-dim mt-2 leading-relaxed">
                        {exp.desc} {/* รายละเอียด */}
                      </p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-text-muted whitespace-nowrap">
                    {exp.period} {/* ช่วงเวลา */}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
