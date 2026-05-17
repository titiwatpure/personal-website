// ไฟล์นี้คือ: หน้าแรก (Home) (src/app/page.tsx)
// หน้าที่: แสดง Hero Section, สถิติ, และโครงการเด่น

import { HeroSection } from "@/components/sections/HeroSection"; // ส่วนแนะนำตัวด้านบน
import { StatsRow } from "@/components/sections/StatsRow"; // แถบสถิติ (ปีประสบการณ์, โครงการ, ลูกค้า)
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"; // โครงการเด่น 3 โครงการแรก
import { GridBackground } from "@/components/effects/GridBackground"; // พื้นหลังตารางเส้น

export default function Home() {
  return (
    <>
      <GridBackground /> {/* พื้นหลังตารางเส้นเรืองแสง */}
      <div className="relative z-10">
        <HeroSection />    {/* ส่วนแนะนำตัว + ปุ่ม CTA */}
        <StatsRow />       {/* สถิติ: 5+ ปี, 24 โครงการ, 12 ลูกค้า */}
        <FeaturedProjects /> {/* โครงการเด่น 3 รายการแรก */}
      </div>
    </>
  );
}
