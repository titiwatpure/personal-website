"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Projects" subtitle="ผลงาน" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer border border-border rounded-sm bg-dark-card hover:border-cyan-border transition-colors duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-navy relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-cyan bg-dark/80 px-2 py-0.5 rounded-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-medium text-text mb-2 group-hover:text-cyan transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
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
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-dark-card border border-border rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-navy relative">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-dark/80 flex items-center justify-center text-text-dim hover:text-text hover:border-cyan-border transition-colors"
                >
                  &#x2715;
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-space-mono)] text-xs text-cyan opacity-60">
                    {selected.year}
                  </span>
                </div>

                <h2 className="text-2xl font-light text-text mb-4">
                  {selected.name}
                </h2>

                <p className="text-sm text-text-dim leading-relaxed mb-6">
                  {selected.desc}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] text-gold tracking-wider mb-2">
                      PROBLEM
                    </h4>
                    <p className="text-sm text-text-dim leading-relaxed">
                      {selected.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] text-gold tracking-wider mb-2">
                      SOLUTION
                    </h4>
                    <p className="text-sm text-text-dim leading-relaxed">
                      {selected.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] text-gold tracking-wider mb-2">
                    TOOLS
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tools.map((tool) => (
                      <Badge key={tool} variant="gold">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <Badge key={tag} variant="cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
