// ไฟล์นี้คือ: ป้าย Tag (Badge) (src/components/ui/Badge.tsx)
// หน้าที่: แสดงป้ายเล็กๆ สำหรับแท็ก เช่น "AI", "Python", "Dashboard"
// รองรับ 3 สี: cyan (ฟ้า), gold (ทอง), default (เทา)

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;  // ข้อความในป้าย
  variant?: "cyan" | "gold" | "default"; // สีของป้าย
  className?: string;         // class เพิ่มเติม (ไม่บังคับ)
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] px-2.5 py-1 font-[family-name:var(--font-space-mono)] tracking-wider rounded-sm hover:scale-105 transition-transform duration-200",
        variant === "cyan" && "bg-cyan-dim text-cyan border border-cyan-border",   // สีฟ้า
        variant === "gold" && "bg-gold-dim text-gold border border-gold-border",   // สีทอง
        variant === "default" && "bg-white/5 text-text-dim border border-border",  // สีเทา
        className
      )}
    >
      {children}
    </span>
  );
}
