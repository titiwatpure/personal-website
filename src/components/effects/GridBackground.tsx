// ไฟล์นี้คือ: พื้นหลังตารางเส้น (src/components/effects/GridBackground.tsx)
// หน้าที่: แสดงเส้นตารางจางๆ เป็นพื้นหลังทั้งหน้า ให้ความรู้สึก Technical/Engineering

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* เส้นตาราง */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      {/* gradient ขอบบน-ล่าง เพื่อให้เนื้อหาอ่านง่าย */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
    </div>
  );
}
