"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

export default function ArticlesPage() {
  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Technical Articles"
            subtitle="บทความทางเทคนิค"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border rounded-sm bg-dark-card p-6 hover:border-cyan-border transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="gold">{article.category}</Badge>
                  <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-text-muted">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-base font-medium text-text mb-2 group-hover:text-cyan transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-text-dim leading-relaxed">
                  {article.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
