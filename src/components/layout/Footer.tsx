// ไฟล์นี้คือ: ส่วนท้ายเว็บ (Footer) (src/components/layout/Footer.tsx)
// หน้าที่: แสดงชื่อและข้อความท้ายหน้า

import { data } from "@/data/portfolio"; // โหลดข้อมูลจาก data.json
import { VisitorCounter } from "@/components/ui/VisitorCounter";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* แสดงชื่อจาก data.json */}
        <span className="font-[family-name:var(--font-space-mono)] text-xs text-white">
          {data.personal.name}
        </span>
        {/* สถิติผู้เข้าชม */}
        <VisitorCounter />
        {/* ข้อความท้าย */}
        <span className="font-[family-name:var(--font-space-mono)] text-xs text-red-400">
          Engineering Systems & AI Automation
        </span>
      </div>
    </footer>
  );
}
