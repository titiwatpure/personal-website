"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GridBackground } from "@/components/effects/GridBackground";
import { data } from "@/data/portfolio";

const contactMethods = [
  {
    label: "Email",
    value: data.contact.email,
    icon: "&#x2709;",
    href: `mailto:${data.contact.email}`,
  },
  {
    label: "Line",
    value: data.contact.line,
    icon: "&#x1F4AC;",
    href: null,
  },
  {
    label: "Phone",
    value: data.contact.phone,
    icon: "&#x1F4DE;",
    href: `tel:${data.contact.phone}`,
  },
  {
    label: "GitHub",
    value: data.contact.github,
    icon: "&#x1F4BB;",
    href: data.contact.github,
  },
  {
    label: "Facebook",
    value: data.contact.facebook,
    icon: "&#x1F310;",
    href: data.contact.facebook,
  },
];

export default function ContactPage() {
  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Contact" subtitle="ติดต่อ" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="font-[family-name:var(--font-space-mono)] text-xs text-text-muted tracking-[0.12em] mb-3">
              มีโปรเจกต์ในใจอยู่แล้ว?
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-text">
              มาคุยกันได้เลย
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-5 border border-border rounded-sm bg-dark-card hover:border-cyan-border transition-colors block"
                  >
                    <span
                      className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                      dangerouslySetInnerHTML={{ __html: method.icon }}
                    />
                    <div>
                      <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-text-muted tracking-wider uppercase mb-0.5">
                        {method.label}
                      </p>
                      <p className="text-sm text-text-dim group-hover:text-cyan transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="group flex items-center gap-4 p-5 border border-border rounded-sm bg-dark-card">
                    <span
                      className="text-2xl opacity-60"
                      dangerouslySetInnerHTML={{ __html: method.icon }}
                    />
                    <div>
                      <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-text-muted tracking-wider uppercase mb-0.5">
                        {method.label}
                      </p>
                      <p className="text-sm text-text-dim">{method.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
