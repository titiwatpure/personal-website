// ไฟล์นี้คือ: หัวข้อ Section (src/components/ui/SectionHeader.tsx)
// หน้าที่: แสดงหัวข้อแต่ละส่วนของเว็บ มีเส้นคั่นซ้าย-ขวา
// ตัวอย่าง: ────── ABOUT ME ──────

interface SectionHeaderProps {
  title: string;      // หัวข้อภาษาอังกฤษ (แสดงบน)
  subtitle?: string;  // หัวข้อภาษาไทย (แสดงใต้, ไม่บังคับ)
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-1 h-[0.5px] bg-border" /> {/* เส้นซ้าย */}
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-space-mono)] text-xs text-text-muted tracking-[0.15em] uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-text-dim mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex-1 h-[0.5px] bg-border" /> {/* เส้นขวา */}
    </div>
  );
}
