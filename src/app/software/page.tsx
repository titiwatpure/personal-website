"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  ruler: "&#x1F4D0;",
  code: "&#x1F4BB;",
  chart: "&#x1F4CA;",
  wrench: "&#x1F527;",
};

export default function SoftwarePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Software & Tools" subtitle="เครื่องมือและโปรแกรม" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.software.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-sm bg-dark-card overflow-hidden hover:border-cyan-border transition-colors"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: categoryIcons[category.icon] || "&#x1F4BB;",
                      }}
                    />
                    <h3 className="font-[family-name:var(--font-space-mono)] text-xs text-text tracking-wider uppercase">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="gold">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Design Samples */}
                {category.samples.length > 0 && (
                  <div className="px-6 pb-6">
                    <h4 className="font-[family-name:var(--font-space-mono)] text-[10px] text-cyan opacity-60 tracking-wider mb-3">
                      DESIGN SAMPLES
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.samples.map((src, j) => (
                        <button
                          key={j}
                          onClick={() => setLightbox({ src, alt: `${category.title} sample ${j + 1}` })}
                          className="relative aspect-video bg-navy rounded-sm overflow-hidden border border-border hover:border-cyan-border transition-colors cursor-pointer group"
                        >
                          <Image
                            src={src}
                            alt={`${category.title} sample ${j + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                            <span className="text-text opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                              &#x1F50D;
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-dark/80 flex items-center justify-center text-text-dim hover:text-text hover:border-cyan-border transition-colors"
              >
                &#x2715;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
