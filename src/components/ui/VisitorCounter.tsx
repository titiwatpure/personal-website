"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Stats {
  total: number;
  today: number;
  month: number;
  year: number;
}

export function VisitorCounter() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      const startOfYear = new Date(now.getFullYear(), 0, 1).toISOString();

      const [totalRes, todayRes, monthRes, yearRes] = await Promise.all([
        supabase
          .from("page_visits")
          .select("*", { count: "exact", head: true }),
        supabase
          .from("page_visits")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", startOfDay),
        supabase
          .from("page_visits")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", startOfMonth),
        supabase
          .from("page_visits")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", startOfYear),
      ]);

      if (!totalRes.error) {
        setStats({
          total: totalRes.count ?? 0,
          today: todayRes.count ?? 0,
          month: monthRes.count ?? 0,
          year: yearRes.count ?? 0,
        });
      }
    }

    fetchStats();
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "8px 16px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "2px",
        backgroundColor: "#0d0d14",
      }}
    >
      {/* ไอคอน */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00d4ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>

      {/* สถิติ */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#9a9a9a", letterSpacing: "0.1em" }}>
            TODAY
          </p>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "14px", fontWeight: "bold", color: "#ffffff" }}>
            {stats !== null ? stats.today.toLocaleString() : "..."}
          </p>
        </div>

        <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#9a9a9a", letterSpacing: "0.1em" }}>
            MONTH
          </p>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "14px", fontWeight: "bold", color: "#ffffff" }}>
            {stats !== null ? stats.month.toLocaleString() : "..."}
          </p>
        </div>

        <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#9a9a9a", letterSpacing: "0.1em" }}>
            YEAR
          </p>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "14px", fontWeight: "bold", color: "#ffffff" }}>
            {stats !== null ? stats.year.toLocaleString() : "..."}
          </p>
        </div>

        <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#9a9a9a", letterSpacing: "0.1em" }}>
            TOTAL
          </p>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "14px", fontWeight: "bold", color: "#00d4ff" }}>
            {stats !== null ? stats.total.toLocaleString() : "..."}
          </p>
        </div>
      </div>
    </div>
  );
}
