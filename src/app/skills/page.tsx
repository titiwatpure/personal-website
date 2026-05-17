"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  electrical: "&#x26A1;",
  mechanical: "&#x2699;",
  qaqc: "&#x1F6E1;",
  ai: "&#x1F9E0;",
  dashboard: "&#x1F4CA;",
};

const categoryColors: Record<string, "cyan" | "gold" | "default"> = {
  electrical: "cyan",
  mechanical: "gold",
  qaqc: "cyan",
  ai: "gold",
  dashboard: "cyan",
};

export default function SkillsPage() {
  const categories = Object.entries(data.skills);

  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Skills" subtitle="ทักษะ" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(([key, category], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-sm bg-dark-card p-6 hover:border-cyan-border transition-colors group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: categoryIcons[key] || "&#x2699;",
                    }}
                  />
                  <h3 className="font-[family-name:var(--font-space-mono)] text-xs text-text-muted tracking-wider uppercase">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant={categoryColors[key]}
                      className="group-hover:border-opacity-50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
