// ไฟล์นี้คือ: ส่วนท้ายเว็บ (Footer) (src/components/layout/Footer.tsx)
// หน้าที่: แสดงชื่อและข้อความท้ายหน้า

import { data } from "@/data/portfolio"; // โหลดข้อมูลจาก data.json

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* แสดงชื่อจาก data.json */}
        <span className="font-[family-name:var(--font-space-mono)] text-xs text-text-muted">
          {data.personal.name}
        </span>
        {/* ข้อความท้าย */}
        <span className="font-[family-name:var(--font-space-mono)] text-xs text-text-muted">
          Engineering Systems & AI Automation
        </span>
      </div>
    </footer>
  );
}
