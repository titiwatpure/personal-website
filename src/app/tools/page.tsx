"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

export default function ToolsPage() {
  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="AI Engineering Tools"
            subtitle="เครื่องมือ AI ด้านวิศวกรรม"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border rounded-sm bg-dark-card p-6 hover:border-cyan-border transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-cyan-dim border border-cyan-border flex items-center justify-center">
                      <span className="text-lg">&#x1F9E0;</span>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-text group-hover:text-cyan transition-colors">
                        {tool.name}
                      </h3>
                      <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-cyan tracking-wider">
                        {tool.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-text-dim leading-relaxed mb-4">
                  {tool.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tool.tech.map((t) => (
                    <Badge key={t} variant="gold">
                      {t}
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
