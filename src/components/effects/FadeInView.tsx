// ไฟล์นี้คือ: เอฟเฟกต์ Fade-in (src/components/effects/FadeInView.tsx)
// หน้าที่: ครอบ element ใดๆ ให้ค่อยๆ ปรากฏขึ้นเมื่อเลื่อนมาเห็น
// ใช้: <FadeInView><Card /></FadeInView>

"use client";

import { motion } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;  // element ที่ต้องการแสดง
  delay?: number;             // หน่วงเวลาก่อนแสดง (วินาที)
  direction?: "up" | "down" | "left" | "right"; // ทิศทางที่เลื่อนเข้ามา
  className?: string;
}

export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInViewProps) {
  // กำหนดจุดเริ่มต้นตามทิศทาง
  const directionOffset = {
    up: { y: 30 },     // เลื่อนขึ้นมาจากด้านล่าง
    down: { y: -30 },   // เลื่อนลงมาจากด้านบน
    left: { x: 30 },    // เลื่อนมาจากขวา
    right: { x: -30 },  // เลื่อนมาจากซ้าย
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }} // เริ่ม: โปร่งใส + เลื่อน
      whileInView={{ opacity: 1, x: 0, y: 0 }}  // เมื่อเห็น: ทึบ + ตำแหน่งปกติ
      viewport={{ once: true, margin: "-50px" }} // เล่นแค่ครั้งเดียว, เริ่มก่อนถึง 50px
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
