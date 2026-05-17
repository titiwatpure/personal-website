// ไฟล์นี้คือ: ตัวนับเลขแบบ Animation (src/components/ui/AnimatedCounter.tsx)
// หน้าที่: แสดงตัวเลขที่นับจาก 0 ไปถึงค่าที่กำหนด เมื่อเลื่อนมาเห็น
// ใช้ในส่วนสถิติ เช่น "5+ ปี", "24 โครงการ"

"use client"; // ต้องรันบน browser เพราะมี state และ animation

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string; // ค่าที่จะนับถึง (ตัวเลข หรือ "5+")
  suffix?: string;        // ข้อความต่อท้าย เช่น "+"
  duration?: number;      // ระยะเวลาในการนับ (วินาที)
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // เล่นแค่ครั้งเดียวเมื่อเห็น
  const [display, setDisplay] = useState("0"); // ค่าที่แสดงบนหน้าจอ

  useEffect(() => {
    if (!isInView) return; // ยังไม่เห็น → ไม่ต้องนับ

    // ถ้าเป็นข้อความ (เช่น "5+") ให้แสดงเลย ไม่ต้องนับ
    if (typeof value === "string") {
      setDisplay(value);
      return;
    }

    // ถ้าเป็นตัวเลข → นับจาก 0 ถึงค่าที่กำหนด
    const end = value;
    const frameCount = duration * 60; // จำนวน frames ทั้งหมด (60fps)
    const increment = end / frameCount; // เพิ่มต่อ frame
    let frameIndex = 0;

    const timer = setInterval(() => {
      frameIndex++;
      const current = increment * frameIndex;
      
      if (frameIndex >= frameCount) {
        setDisplay(String(end));   // ถึงค่าสุดท้ายแล้ว
        clearInterval(timer);
      } else {
        setDisplay(String(Math.floor(current))); // ปัดลงเป็นจำนวนเต็ม
      }
    }, 1000 / 60); // ทุก 16ms (60fps)

    return () => clearInterval(timer); // cleanup เมื่อ component หายไป
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="font-[family-name:var(--font-space-mono)] text-3xl text-cyan"
    >
      {display}
      {suffix}
    </motion.span>
  );
}
