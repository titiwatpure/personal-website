// ไฟล์นี้คือ: Utility Functions (src/lib/utils.ts)
// หน้าที่: เก็บฟังก์ชันช่วยที่ใช้ร่วมกันทั้งโปรเจกต์

// ฟังก์ชัน cn = "class name"
// ใช้รวม class CSS หลายตัวเข้าด้วยกัน โดยกรองค่าที่เป็น falsy ออก
// ตัวอย่าง: cn("text-white", isActive && "bg-blue-500", undefined)
// ผลลัพธ์: "text-white bg-blue-500"
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
