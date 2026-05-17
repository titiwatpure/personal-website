// ไฟล์นี้คือ: ระบบโหลดข้อมูล Portfolio (src/data/portfolio.ts)
// หน้าที่: อ่านข้อมูลจาก data.json แล้วส่งออกเป็น TypeScript ที่ type-safe
//          ทุกหน้าเว็บจะ import ข้อมูลจากไฟล์นี้

import portfolioData from "../../data.json"; // โหลดข้อมูลจาก data.json

// === ข้อมูลส่วนตัว ===
export interface PersonalInfo {
  name: string;        // ชื่อภาษาไทย
  nameEn: string;      // ชื่อภาษาอังกฤษ
  title: string;       // คำโปรย / ตำแหน่ง
  role: string;        // บทบาท
  bio: string;         // คำอธิบายตัวเอง
  avatar: string;      // path รูปโปรไฟล์ เช่น "/images/avatar.jpg"
  stats: {
    years: string;     // ปีประสบการณ์ เช่น "5+"
    projects: number;  // จำนวนโครงการ
    clients: number;   // จำนวนลูกค้า
  };
}

// === ข้อมูลประสบการณ์ทำงาน ===
export interface Experience {
  role: string;        // ตำแหน่งงาน
  company: string;     // บริษัท
  type: string;        // ประเภท เช่น "Full-time", "Contract"
  period: string;      // ช่วงเวลา เช่น "2023–ปัจจุบัน"
  desc: string;        // รายละเอียดงาน
}

// === ข้อมูลหน้า About ===
export interface AboutInfo {
  philosophy: string;   // ปรัชญาการทำงาน
  highlights: string[]; // จุดเด่น (เป็น array ของข้อความ)
  experience: Experience[]; // ประวัติการทำงาน
}

// === ข้อมูลหมวดทักษะ ===
export interface SkillCategory {
  title: string;    // ชื่อหมวด เช่น "Electrical Engineering"
  icon: string;     // ไอคอน (emoji code)
  items: string[];  // รายการทักษะ
}

// === ข้อมูลโครงการ ===
export interface Project {
  name: string;      // ชื่อโครงการ
  desc: string;      // คำอธิบาย
  problem: string;   // ปัญหาที่พบ
  solution: string;  // วิธีแก้ปัญหา
  tools: string[];   // เครื่องมือที่ใช้ เช่น ["Python", "React"]
  tags: string[];    // แท็ก เช่น ["AI", "Dashboard"]
  image: string;     // path รูปภาพ เช่น "/images/project-1.jpg"
  year: string;      // ปีที่ทำ
}

// === ข้อมูลเครื่องมือ AI ===
export interface AITool {
  name: string;      // ชื่อเครื่องมือ
  desc: string;      // คำอธิบาย
  tech: string[];    // เทคโนโลยีที่ใช้
  status: string;    // สถานะ เช่น "Production"
}

// === ข้อมูลบทความ ===
export interface Article {
  title: string;     // ชื่อบทความ
  desc: string;      // คำอธิบาย
  category: string;  // หมวดหมู่ เช่น "AI Engineering"
  date: string;      // วันที่
}

// === ข้อมูลติดต่อ ===
export interface ContactInfo {
  email: string;
  line: string;
  facebook: string;
  phone: string;
  github: string;
  linkedin: string;
}

// === ข้อมูลทั้งหมดของ Portfolio ===
export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: Record<string, SkillCategory>; // Record = object ที่มี key เป็น string
  projects: Project[];
  aiTools: AITool[];
  articles: Article[];
  contact: ContactInfo;
}

// ส่งออกข้อมูลให้หน้าอื่นๆ ใช้: import { data } from "@/data/portfolio"
export const data = portfolioData as PortfolioData;
