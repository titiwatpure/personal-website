"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-6">
        <button
          onClick={() => setOpen(true)}
          className="w-full cursor-pointer group"
        >
          <div className="relative aspect-video bg-navy rounded-sm overflow-hidden border border-border hover:border-cyan-border transition-colors">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </button>
        {caption && (
          <figcaption className="font-[family-name:var(--font-space-mono)] text-[10px] text-text-dim text-center mt-2 tracking-wider">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setOpen(false)}
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

interface ImageGridProps {
  children: React.ReactNode;
}

export function ImageGrid({ children }: ImageGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">{children}</div>;
}
