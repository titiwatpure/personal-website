// ไฟล์นี้คือ: Layout หลักของเว็บไซต์ (src/app/layout.tsx)
// หน้าที่: กำหนดโครงสร้างหลักที่ใช้ร่วมกันทุกหน้า เช่น Navbar, Footer, Font, Metadata

import type { Metadata } from "next";
import { Sarabun, Space_Mono } from "next/font/google"; // โหลดฟอนต์จาก Google Fonts
import "./globals.css"; // โหลดไฟล์ CSS หลัก (ธีมสี, เอฟเฟกต์)
import { Navbar } from "@/components/layout/Navbar"; // เมนูนำทางด้านบน
import { Footer } from "@/components/layout/Footer"; // ส่วนท้ายเว็บ

// ตั้งค่าฟอนต์ Sarabun (ใช้เป็นฟอนต์หลักสำหรับข้อความภาษาไทย)
const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
});

// ตั้งค่าฟอนต์ Space Mono (ใช้สำหรับข้อความโค้ด/ตัวเลข)
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ข้อมูล SEO ที่แสดงใน Google Search
export const metadata: Metadata = {
  title: "ไตรทศ ทองเกิด | Engineering Systems & AI Automation",
  description:
    "Portfolio วิศวกรระบบไฟฟ้า เครื่องกล และ AI Automation ผู้เชี่ยวชาญด้านการตรวจสอบคุณภาพและพัฒนาระบบอัจฉริยะ",
};

// Layout หลัก: ครอบทุกหน้าเว็บ
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${sarabun.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar /> {/* เมนูนำทางด้านบน */}
        <main className="flex-1">{children}</main> {/* เนื้อหาแต่ละหน้า */}
        <Footer /> {/* ส่วนท้ายเว็บ */}
      </body>
    </html>
  );
}
