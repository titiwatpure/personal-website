// ไฟล์นี้คือ: โครงการเด่น (src/components/sections/FeaturedProjects.tsx)
// หน้าที่: แสดงโครงการ 3 รายการแรกจาก data.json ในหน้า Home

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { data } from "@/data/portfolio";

export function FeaturedProjects() {
  const featured = data.projects.slice(0, 3); // เอาแค่ 3 โครงการแรก

  return (
    <section className="px-6 py-20 bg-navy/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Featured Projects" subtitle="ผลงานเด่น" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border rounded-sm bg-dark-card hover:border-cyan-border transition-colors duration-300 overflow-hidden"
            >
              {/* พื้นที่รูปภาพ */}
              <div className="aspect-video bg-navy relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
              </div>

              {/* ข้อมูลโครงการ */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-cyan opacity-60">
                    {project.year} {/* ปี */}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-text mb-2 group-hover:text-cyan transition-colors">
                  {project.name} {/* ชื่อโครงการ */}
                </h3>

                <p className="text-sm text-text-dim leading-relaxed mb-4 line-clamp-2">
                  {project.desc} {/* คำอธิบาย (แสดงแค่ 2 บรรทัด) */}
                </p>

                {/* แท็ก */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ปุ่มดูทั้งหมด */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-2.5 border border-border text-text-dim text-sm rounded-sm hover:border-cyan-border hover:text-cyan transition-colors"
          >
            ดูผลงานทั้งหมด →
          </Link>
        </div>
      </div>
    </section>
  );
}
