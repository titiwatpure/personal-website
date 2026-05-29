import { supabase } from "./supabase";

export async function trackVisit(page: string) {
  // กันนับซ้ำ: ถ้าเคย visit หน้านี้ใน session นี้แล้ว ไม่ต้องบันทึก
  const key = `visited_${page}`;
  if (sessionStorage.getItem(key)) return;

  try {
    await supabase.from("page_visits").insert({ page });
    sessionStorage.setItem(key, "1");
  } catch {
    // เงียบไว้ถ้า error ไม่ให้กระทบ UX
  }
}
