# คู่มือใช้งาน Portfolio Website

เว็บไซต์ Portfolio ส่วนตัวแนว Professional Engineering & AI Systems

---

## สารบัญ

1. [สิ่งที่ต้องติดตั้งก่อนเริ่ม](#1-สิ่งที่ต้องติดตั้งก่อนเริ่ม)
2. [วิธีติดตั้งโปรเจกต์](#2-วิธีติดตั้งโปรเจกต์)
3. [วิธีรันโปรเจกต์](#3-วิธีรันโปรเจกต์)
4. [โครงสร้างไฟล์](#4-โครงสร้างไฟล์)
5. [วิธีแก้ไขข้อมูลใน data.json](#5-วิธีแก้ไขข้อมูลใน-datajson)
6. [วิธีเพิ่ม/ลดโครงการ](#6-วิธีเพิ่มลดโครงการ)
7. [วิธีใส่รูปภาพ](#7-วิธีใส่รูปภาพ)
8. [วิธีเพิ่มบทความ (MDX)](#8-วิธีเพิ่มบทความ-mdx)
9. [วิธีแก้ไขข้อความหน้าเว็บ](#9-วิธีแก้ไขข้อความหน้าเว็บ)
10. [วิธี Build / Export](#10-วิธี-build--export)
11. [วิธี Deploy ขึ้น GitHub Pages (แบบละเอียด)](#11-วิธี-deploy-ขึ้น-github-pages-แบบละเอียด)
12. [วิธี Deploy ขึ้น Vercel](#12-วิธีdeploy-ขึ้น-vercel)
13. [แก้ปัญหาที่พบบ่อย](#13-แก้ปัญหาที่พบบ่อย)
14. [SEO & Google Search Console](#14-seo--google-search-console)
15. [ระบบสี (Color System)](#15-ระบบสี-color-system)
16. [สถิติผู้เข้าชม (Supabase)](#16-สถิติผู้เข้าชม-supabase)
17. [Easter Egg (Pixel Art)](#17-easter-egg-pixel-art)

---

## 1. สิ่งที่ต้องติดตั้งก่อนเริ่ม

### 1.1 ติดตั้ง Node.js

Node.js คือโปรแกรมที่ใช้รัน JavaScript บนเครื่องของเรา

1. ไปที่ https://nodejs.org
2. ดาวน์โหลดเวอร์ชัน **LTS** (แนะนำ)
3. เปิดไฟล์ที่ดาวน์โหลดมา แล้วกด Next > Next > Install จนเสร็จ
4. ตรวจสอบว่าติดตั้งสำเร็จ โดยเปิด **Command Prompt** หรือ **PowerShell** แล้วพิมพ์:

```bash
node --version
```

ถ้าแสดงตัวเลข เช่น `v20.x.x` แปลว่าติดตั้งสำเร็จ

### 1.2 ติดตั้ง Git (ถ้ายังไม่มี)

1. ไปที่ https://git-scm.com
2. ดาวน์โหลดแล้วติดตั้ง (กด Next จนเสร็จ)
3. ตรวจสอบ:

```bash
git --version
```

---

## 2. วิธีติดตั้งโปรเจกต์

### กรณีดาวน์โหลดไฟล์มา (ZIP)

1. แตกไฟล์ ZIP ออกมา
2. เปิด **Terminal** หรือ **PowerShell** แล้วเข้าไปในโฟลเดอร์โปรเจกต์:

```bash
cd "C:\path\to\โปรเจกต์"
```

3. ติดตั้ง dependencies (ไฟล์ที่โปรเจกต์ต้องใช้):

```bash
npm install
```

รอจนเสร็จ (อาจใช้เวลา 1-3 นาที)

### กรณี Clone จาก GitHub

```bash
git clone https://github.com/titiwatpure/theone.github.io.git
cd theone.github.io
npm install
```

---

## 3. วิธีรันโปรเจกต์

### รันแบบ Development (ดูสดๆ แก้ไขแล้วเห็นทันที)

```bash
npm run dev
```

แล้วเปิดเบราว์เซอร์ไปที่: **http://localhost:3000**

> ทุกครั้งที่แก้ไขไฟล์ เว็บจะรีเฟรชอัตโนมัติ

### หยุดการทำงาน

กด `Ctrl + C` ใน Terminal

---

## 4. โครงสร้างไฟล์

```
โปรเจกต์/
├── data.json              ← ข้อมูลทั้งหมดของเว็บ (แก้ที่นี่)
├── public/
│   └── images/            ← ใส่รูปภาพทั้งหมดที่นี่
│       ├── avatar.jpg     ← รูปโปรไฟล์
│       ├── project-1.jpg  ← รูปโครงการ 1
│       └── ...
├── src/
│   ├── articles/          ← ไฟล์บทความ MDX (แก้ที่นี่)
│   │   ├── ai-document-audit.mdx
│   │   ├── qa-engineering.mdx
│   │   └── ...
│   ├── app/
│   │   ├── page.tsx       ← หน้า Home
│   │   ├── about/page.tsx ← หน้า About
│   │   ├── skills/page.tsx
│   │   ├── software/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── tools/page.tsx
│   │   ├── articles/
│   │   │   ├── page.tsx   ← หน้ารวมบทความ
│   │   │   └── [slug]/page.tsx ← หน้าอ่านบทความแต่ละเรื่อง
│   │   └── contact/page.tsx
│   └── components/        ← ส่วนประกอบ UI
└── package.json
```

**สิ่งที่ต้องแก้หลักๆ มี 3 อย่าง:**
1. `data.json` — ข้อมูลข้อความทั้งหมด
2. `public/images/` — รูปภาพทั้งหมด
3. `src/articles/` — เนื้อหาบทความ (MDX)

---

## 5. วิธีแก้ไขข้อมูลใน data.json

เปิดไฟล์ `data.json` ด้วยโปรแกรมแก้ไขรหัส (เช่น VS Code, Notepad++)

### 5.1 ข้อมูลส่วนตัว

```json
{
  "personal": {
    "name": "ชื่อภาษาไทย",              // ← ชื่อ-นามสกุล ภาษาไทย
    "nameEn": "Name English",            // ← ชื่อ-นามสกุล ภาษาอังกฤษ
    "title": "ตำแหน่งหรือคำโปรย",        // ← คำโปรยแสดงบนหน้า Hero
    "role": "บทบาท",                     // ← บทบาท เช่น "นายช่างระบบ"
    "bio": "คำอธิบายตัวเองสั้นๆ",        // ← คำอธิบายตัวเอง 1-2 บรรทัด
    "avatar": "/images/avatar.jpg",      // ← path รูปโปรไฟล์ (วางใน public/images/)
    "stats": {
      "years": "5+",                     // ← ปีประสบการณ์
      "projects": 24,                    // ← จำนวนโครงการ
      "clients": 12                      // ← จำนวนลูกค้า
    }
  }
}
```

**วิธีแก้:**
- เปลี่ยน `"name"` เป็นชื่อของคุณ
- เปลี่ยน `"title"` เป็นคำโปรยที่ต้องการ
- เปลี่ยน `"bio"` เป็นคำอธิบายตัวเอง
- เปลี่ยนตัวเลขใน `"stats"` เป็นของจริง

### 5.2 ข้อมูลติดต่อ

```json
{
  "contact": {
    "email": "your@email.com",                        // ← อีเมล
    "line": "@yourline",                              // ← Line ID
    "facebook": "https://facebook.com/yourprofile",   // ← Facebook URL
    "phone": "0xx-xxx-xxxx",                          // ← เบอร์โทร
    "github": "https://github.com/username",           // ← GitHub URL
    "linkedin": "https://linkedin.com/in/username"     // ← LinkedIn URL
  }
}
```

**วิธีแก้:** เปลี่ยนข้อมูลในเครื่องหมาย `" "` ให้เป็นของจริง

### 5.3 ทักษะ (Skills)

```json
{
  "skills": {
    "electrical": {                        // ← ชื่อหมวด (ใช้เป็น key ภายใน)
      "title": "Electrical Engineering",   // ← ชื่อที่แสดงบนหน้าเว็บ
      "icon": "zap",                       // ← ไอคอน (zap, cog, shield, brain, chart)
      "items": [                           // ← รายการทักษะ
        "ทักษะ 1",
        "ทักษะ 2",
        "ทักษะ 3"
      ]
    }
  }
}
```

**วิธีเพิ่มทักษะ:** เพิ่มข้อความใหม่ใน `items` array

```json
"items": [
  "ทักษะเดิม 1",
  "ทักษะเดิม 2",
  "ทักษะใหม่ที่ต้องการเพิ่ม"
]
```

**วิธีลบทักษะ:** ลบบรรทัดที่ไม่ต้องการออก (อย่าลืมลบ `,` ให้ถูก)

---

## 6. วิธีเพิ่ม/ลดโครงการ

### 6.1 เพิ่มโครงการใหม่

เปิด `data.json` หาส่วน `"projects"` แล้วเพิ่มโครงการต่อท้าย:

```json
{
  "projects": [
    {
      "name": "โครงการเดิม 1",
      "desc": "...",
      ...
    },
    {
      "name": "โครงการเดิม 2",
      "desc": "...",
      ...
    },
    {
      "name": "โครงการใหม่ของคุณ",           // ← ชื่อโครงการ
      "desc": "คำอธิบายโครงการ",              // ← คำอธิบายสั้นๆ
      "problem": "ปัญหาที่พบ",                  // ← ปัญหาที่พบ
      "solution": "วิธีแก้ปัญหา",                // ← วิธีแก้ปัญหา
      "tools": ["Python", "React", "PostgreSQL"], // ← เครื่องมือที่ใช้
      "tags": ["AI", "Dashboard"],                 // ← หมวดหมู่
      "images": [                                  // ← รูปภาพ 1-3 รูป
        "/images/project-new-1.jpg",               //   ภาพแรก = ภาพหลักบน Card
        "/images/project-new-2.jpg"                //   ภาพที่ 2+ = แสดงใน Modal
      ],
      "year": "2024"                               // ← ปีที่ทำ
    }
  ]
}
```

**แต่ละฟิลด์หมายถึง:**

| ฟิลด์ | คำอธิบาย | ตัวอย่าง |
|-------|---------|---------|
| `name` | ชื่อโครงการ | `"Document Audit AI"` |
| `desc` | คำอธิบายสั้นๆ | `"ระบบตรวจสอบเอกสารด้วย AI"` |
| `problem` | ปัญหาที่พบ | `"การตรวจสอบเอกสารใช้เวลานาน"` |
| `solution` | วิธีแก้ | `"พัฒนาระบบ AI ตรวจสอบอัตโนมัติ"` |
| `tools` | เครื่องมือที่ใช้ | `["Python", "FastAPI"]` |
| `tags` | หมวดหมู่ | `["AI", "Automation"]` |
| `images` | รูปภาพ (1-3 รูป) | `["/images/project-1.jpg"]` |
| `year` | ปีที่ทำ | `"2024"` |

> **สำคัญ:** ทุกโครงการต้องมี `,` คั่นระหว่างกัน ยกเว้นโครงการสุดท้ายไม่ต้องมี

### 6.2 ลบโครงการ

ลบบล็อก `{ ... }` ของโครงการที่ไม่ต้องการออก

**ตัวอย่าง:**
```json
// ก่อนลบ (มี 3 โครงการ)
"projects": [
  { "name": "A", ... },
  { "name": "B", ... },    ← ต้องการลบ
  { "name": "C", ... }
]

// หลังลบ (เหลือ 2 โครงการ)
"projects": [
  { "name": "A", ... },
  { "name": "C", ... }
]
```

> **ระวัง:** ตรวจสอบว่ามี `,` ถูกต้อง ไม่งั้นเว็บจะพัง

---

## 7. วิธีใส่รูปภาพ

### 7.1 ขั้นตอนการใส่รูป

1. เตรียมรูปภาพ (แนะนำ: JPG, PNG, WebP)
2. **ตั้งชื่อไฟล์** เป็นภาษาอังกฤษ ห้ามมีช่องว่าง เช่น:
   - `avatar.jpg` ✅
   - `project-audit.jpg` ✅
   - `รูป โครงการ 1.jpg` ❌ (ห้ามมีช่องว่างและภาษาไทย)
3. **วางไฟล์** ในโฟลเดอร์ `public/images/`
4. **อ้างอิง** ใน `data.json` โดยใช้ path เริ่มจาก `/images/`

### 7.2 ตัวอย่างการอ้างอิงรูป

```
public/images/avatar.jpg       → ใน data.json เขียน "/images/avatar.jpg"
public/images/project-1.jpg    → ใน data.json เขียน "/images/project-1.jpg"
public/images/project-qa.jpg   → ใน data.json เขียน "/images/project-qa.jpg"
```

### 7.3 รูปโปรไฟล์

วางไฟล์ `avatar.jpg` ใน `public/images/` แล้วใน `data.json`:

```json
{
  "personal": {
    "avatar": "/images/avatar.jpg"  // ← path รูปโปรไฟล์ (เริ่มด้วย /images/)
  }
}
```

### 7.4 รูปโครงการ (หลายภาพต่อโครงการ)

วางไฟล์รูปโครงการใน `public/images/` แล้วใน `data.json`:

```json
{
  "projects": [
    {
      "name": "Project Name",
      "images": [                          // ← ใส่ 1-3 รูปต่อโครงการ
        "/images/project-1.jpg",           //   ภาพแรก = แสดงบน Card หลัก
        "/images/project-2.jpg",           //   ภาพที่ 2 = แสดงใน Modal
        "/images/project-3.jpg"            //   ภาพที่ 3 = แสดงใน Modal
      ]
    }
  ]
}
```

- ใส่ 1-3 รูปต่อโครงการ
- ภาพแรกจะแสดงบนหน้า Card
- Modal จะมี carousel ให้เลื่อนดูทุกภาพ

### 7.5 รูป Software & Tools

วางไฟล์รูปตัวอย่างงานออกแบบใน `public/images/` แล้วใน `data.json`:

```json
{
  "software": [
    {
      "title": "CAD & Design",
      "icon": "ruler",
      "items": ["AutoCAD", "SketchUp"],
      "samples": [                         // ← ใส่ 4 รูปต่อหมวด (แสดง 2x2)
        "/images/sample-cad-1.jpg",        //   แถว 1 คอลัมน์ 1
        "/images/sample-cad-2.jpg",        //   แถว 1 คอลัมน์ 2
        "/images/sample-cad-3.jpg",        //   แถว 2 คอลัมน์ 1
        "/images/sample-cad-4.jpg"         //   แถว 2 คอลัมน์ 2
      ]
    }
  ]
}
```

- ใส่ 4 รูปต่อหมวด (แสดงเป็น 2x2 grid)
- คลิกที่รูปเพื่อดูขยาย (lightbox)

### 7.5 ขนาดรูปที่แนะนำ

| ประเภท | ขนาด (pixels) | รูปแบบ |
|--------|---------------|--------|
| รูปโปรไฟล์ | 400 x 400 | JPG, PNG |
| รูปโครงการ | 800 x 600 | JPG, WebP |

> **เคล็ดลับ:** บีบอัดรูปก่อนใช้ ที่ https://tinypng.com เพื่อให้เว็บโหลดเร็ว

---

## 8. วิธีเพิ่มบทความ (MDX)

บทความเขียนด้วย MDX (Markdown + JSX) แยกไฟล์ออกจากโค้ด

### 8.1 สร้างบทความใหม่

1. สร้างไฟล์ `.mdx` ในโฟลเดอร์ `src/articles/` เช่น `my-article.mdx`
2. เขียนเนื้อหาด้วย Markdown:

```mdx
export const metadata = {
  title: "ชื่อบทความ",           {/* ชื่อบทความ (แสดงบนหน้าเว็บ) */}
  desc: "คำอธิบายสั้นๆ",          {/* คำอธิบาย (แสดงบนหน้ารวมบทความ) */}
  category: "หมวดหมู่",            {/* หมวดหมู่ เช่น "AI Engineering" */}
  date: "2024",                    {/* ปีที่เขียน */}
};

import { ArticleImage, ImageGrid } from "@/components/ui/ArticleImage";

{/* ด้านบนคือส่วนข้อมูลบทความ + import component ภาพ */}

# ชื่อบทความ                     {/* หัวข้อใหญ่ (h1) */}

เนื้อหาบทความเขียนด้วย Markdown...

## หัวข้อย่อย                     {/* หัวข้อย่อย (h2) */}

- รายการ 1                        {/* รายการ bullet */}
- รายการ 2

**ตัวหนา** และ *ตัวเอียง*         {/* ตัวหนา/ตัวเอียง */}
```

> **หมายเหตุ:** ใน MDX ใช้ `{/* comment */}` สำหรับ comment (ไม่ใช่ `//`)

### 8.2 เพิ่มภาพในบทความ

**ภาพเดี่ยว (เต็มความกว้าง + caption):**
```mdx
{/* วางไว้ตรงไหนในบทความก็ได้ */}
<Image
  src="/images/article-photo.jpg"    {/* path รูป (อยู่ใน public/images/) */}
  alt="คำอธิบายภาพ"                  {/* คำอธิบายภาพ (สำหรับ SEO) */}
  caption="คำบรรยายภาพ"              {/* คำบรรยายใต้ภาพ (แสดงบนเว็บ) */}
/>
```

**2 ภาพคู่ (ซ้าย-ขวา):**
```mdx
{/* ครอบด้วย ImageGrid เพื่อแสดง 2 คอลัมน์ */}
<ImageGrid>
  <Image
    src="/images/before.jpg"         {/* รูปซ้าย */}
    alt="ก่อน"
    caption="ก่อนปรับปรุง"
  />
  <Image
    src="/images/after.jpg"          {/* รูปขวา */}
    alt="หลัง"
    caption="หลังปรับปรุง"
  />
</ImageGrid>
```

- คลิกที่ภาพเพื่อดูขยาย (lightbox)
- วางไฟล์ภาพใน `public/images/`

### 8.3 ลงทะเบียนบทความ

หลังสร้างไฟล์ MDX แล้ว ต้องเพิ่ม slug ใน 2 ที่:

**ที่ 1:** `src/app/articles/[slug]/page.tsx` — เพิ่ม slug ใน array:
```tsx
const articles = [
  "ai-document-audit",     // ← ต้องตรงกับชื่อไฟล์ .mdx
  "qa-engineering",        // ← ต้องตรงกับชื่อไฟล์ .mdx
  "my-new-article",        // ← เพิ่ม slug ใหม่ตรงนี้ (ต้องตรงกับชื่อไฟล์ .mdx)
];
```

**ที่ 2:** `data.json` — เพิ่มข้อมูลใน array `articles`:
```json
{
  "articles": [
    {
      "title": "ชื่อบทความ",      // ← ชื่อบทความ (แสดงบนหน้ารวมบทความ)
      "desc": "คำอธิบาย",         // ← คำอธิบายสั้น
      "category": "หมวดหมู่",      // ← หมวดหมู่ เช่น "AI Engineering"
      "date": "2024"               // ← ปีที่เขียน
    }
  ]
}
```

### 8.4 Markdown ที่รองรับ

| Syntax | ผลลัพธ์ |
|--------|--------|
| `# หัวข้อ` | หัวข้อใหญ่ |
| `## หัวข้อ` | หัวข้อย่อย |
| `**ตัวหนา**` | **ตัวหนา** |
| `*ตัวเอียง*` | *ตัวเอียง* |
| `- รายการ` | รายการ bullet |
| `1. รายการ` | รายการตัวเลข |
| `` `โค้ด` `` | `โค้ด` |
| `> อ้างอิง` | อ้างอิง |
| `[ลิงก์](url)` | ลิงก์ |
| `{/* comment */}` | comment (ไม่แสดงบนเว็บ) |

> **หมายเหตุ:** ใน MDX ใช้ `{/* comment */}` สำหรับ comment ไม่ใช่ `//` (เพราะ `//` จะทำให้ Build Error)

---

## 9. วิธีแก้ไขข้อความหน้าเว็บ

### ข้อความทั้งหมดอยู่ใน `data.json`

ไม่ต้องแก้โค้ด! แค่แก้ข้อความใน `data.json` แล้วเว็บจะอัปเดตอัตโนมัติ

| หน้าเว็บ | ข้อมูลใน data.json |
|---------|-------------------|
| หน้า Home | `personal.name`, `personal.title`, `personal.bio` |
| หน้า About | `about.philosophy`, `about.highlights`, `about.experience` |
| หน้า Skills | `skills` (แต่ละหมวด) |
| หน้า Software | `software` (แต่ละหมวด + รูปตัวอย่างงาน) |
| หน้า Projects | `projects` (แต่ละโครงการ + หลายรูป) |
| หน้า AI Tools | `aiTools` (แต่ละเครื่องมือ) |
| หน้า Articles | `articles` (ข้อมูล) + `src/articles/*.mdx` (เนื้อหา) |
| หน้า Contact | `contact` (ข้อมูลติดต่อ) |

### ตัวอย่าง: เปลี่ยนคำโปรยหน้าแรก

เปิด `data.json` แล้วแก้:

```json
{
  "personal": {
    "title": "คำโปรยใหม่ของคุณ"
  }
}
```

### ตัวอย่าง: เปลี่ยนปรัชญาการทำงาน

```json
{
  "about": {
    "philosophy": "ปรัชญาใหม่ของคุณ"
  }
}
```

---

## 10. วิธี Build / Export

### Build สำหรับ Deploy

```bash
npm run build
```

จะสร้างโฟลเดอร์ `out/` ที่มีไฟล์ HTML, CSS, JS พร้อม upload

### ตรวจสอบ Build

```bash
npx serve out
```

แล้วเปิด http://localhost:3000 เพื่อดูเวอร์ชัน build

---

## 11. วิธี Deploy ขึ้น GitHub Pages (แบบละเอียด)

### ขั้นตอนที่ 1: สร้าง GitHub Repository

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repo เช่น `personal-website`
3. **อย่าติ๊ก** Add README / .gitignore (เพราะเรามีอยู่แล้ว)
4. กด **Create repository**

### ขั้นตอนที่ 2: Push โค้ดขึ้น GitHub

เปิด Terminal ในโฟลเดอร์โปรเจกต์:

```bash
# เพิ่ม remote (ทำครั้งเดียว)
git remote add origin https://github.com/ชื่อคุณ/ชื่อrepo.git

# เพิ่มไฟล์ทั้งหมดที่จะ commit
git add .

# ดูก่อนว่ามีไฟล์อะไรที่ไม่ควร commit ไหม (เช่น .env, secrets)
git status

# commit
git commit -m "first commit"

# push ขึ้น main
git push -u origin main
```

> **สิ่งที่ต้องระวัง:**
> - **อย่า commit ไฟล์ที่มี secret** เช่น `.env`, API token, password
> - ถ้าเผลอ commit ไปแล้ว ต้อง revoke token นั้นทันทีแล้วลบออกจาก history

### ขั้นตอนที่ 3: สร้าง GitHub Actions Workflow

สร้างไฟล์ `.github/workflows/deploy.yml`:

```yaml
# ชื่อ workflow (จะแสดงใน tab Actions บน GitHub)
name: Deploy to GitHub Pages

# trigger: ทำงานเมื่อ push ไป main
on:
  push:
    branches: [main]

# permission ที่จำเป็นสำหรับ GitHub Pages
permissions:
  contents: read    # อ่านโค้ด
  pages: write      # เขียนหน้าเว็บ
  id-token: write   # ยืนยันตัวตน

jobs:
  # Job 1: Build
  build:
    runs-on: ubuntu-latest     # ใช้ Ubuntu ในการ build
    steps:
      # ดึงโค้ดจาก repo
      - uses: actions/checkout@v4

      # ติดตั้ง Node.js
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      # ติดตั้ง dependencies
      - run: npm ci

      # build โปรเจค
      - run: npm run build

      # อัปโหลด output ไปให้ job ถัดไป
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out           # Next.js output dir (ตั้ง output: "export" ใน next.config)

  # Job 2: Deploy (ต้องรอ build เสร็จก่อน)
  deploy:
    needs: build              # depends on build job
    runs-on: ubuntu-latest
    environment:
      name: github-pages      # จำเป็นต้องมีสำหรับ GitHub Pages
    steps:
      - uses: actions/deploy-pages@v4
```

### ขั้นตอนที่ 4: ตั้งค่า GitHub Pages

1. ไปที่ repo บน GitHub → **Settings** → **Pages**
2. Source เลือก **GitHub Actions** (ไม่ใช่ Deploy from a branch)
3. 保存

### ขั้นตอนที่ 5: Push Workflow ขึ้น GitHub

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow"
git push
```

### ขั้นตอนที่ 6: ตรวจสอบผลลัพธ์

1. ไปที่ tab **Actions** บน repo เพื่อดูสถานะ build
2. คลิก workflow run ล่าสุดเพื่อดู log แต่ละ step
3. เมื่อเสร็จ เว็บจะอยู่ที่ `https://ชื่อคุณ.github.io/ชื่อrepo/`

### Workflow ทำงานยังไง

```
คุณ push main → GitHub ตรวจจับ → เริ่ม workflow
                                    ├── checkout โค้ด
                                    ├── setup Node.js 20
                                    ├── npm ci (ติดตั้ง dependencies)
                                    ├── npm run build (build Next.js)
                                    ├── upload artifact
                                    └── deploy ขึ้น GitHub Pages
```

ทุก push ไป `main` จะ trigger อัตโนมัติ ไม่ต้องทำอะไรเพิ่ม

### ถ้า Build ไม่สำเร็จ

1. ไปที่ tab **Actions** → คลิก workflow ที่ fail → ดู step ที่ error
2. แก้ไขโค้ดตาม error message
3. Commit + Push ใหม่ → workflow จะรันอีกครั้งอัตโนมัติ

### สรุป Command ทั้งหมด

```bash
# 1. Remote (ทำครั้งเดียว)
git remote add origin https://github.com/USER/REPO.git

# 2. Commit & Push โค้ด
git add .
git commit -m "first commit"
git push -u origin main

# 3. สร้างไฟล์ .github/workflows/deploy.yml (ตามด้านบน)

# 4. Push workflow ขึ้นไป
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow"
git push

# 5. ไปตั้งค่า GitHub Pages → Settings → Pages → Source: GitHub Actions
```

หลังจากนั้นทุก `git push` จะ build + deploy อัตโนมัติ

---

## 12. วิธีDeploy ขึ้น Vercel

Vercel เป็นวิธีที่ง่ายที่สุด ฟรี และเหมาะกับ Next.js

### ขั้นตอนที่ 1: สมัคร Vercel

1. ไปที่ https://vercel.com
2. กด **Sign Up** แล้วเลือก **Continue with GitHub**

### ขั้นตอนที่ 2: Import Project

1. กด **Add New** > **Project**
2. เลือก repo `theone.github.io`
3. กด **Deploy**

### ขั้นตอนที่ 3: เสร็จ!

Vercel จะ build และ deploy ให้อัตโนมัติ
ทุกครั้งที่ push โค้ด Vercel จะ build ใหม่ให้เอง

เว็บจะอยู่ที่: `https://theone.vercel.app` (หรือชื่อที่ตั้งเอง)

---

## 13. แก้ปัญหาที่พบบ่อย

### `npm install` ไม่สำเร็จ

```bash
# ลบ node_modules แล้วติดตั้งใหม่
rm -rf node_modules
npm install
```

### แก้ data.json แล้วเว็บไม่เปลี่ยน

1. ตรวจสอบว่า JSON ถูกต้อง (ไม่มี comma เกิน/ขาด)
2. หยุด dev server (Ctrl+C) แล้วรันใหม่:

```bash
npm run dev
```

### รูปไม่แสดง

1. ตรวจสอบว่าไฟล์อยู่ใน `public/images/`
2. ตรวจสอบว่าชื่อไฟล์ถูกต้อง (ตรงกับใน data.json)
3. ตรวจสอบว่าไม่มีช่องว่างในชื่อไฟล์

### Build ไม่สำเร็จ

```bash
# ดู error message
npm run build

# ถ้าเป็น error เกี่ยวกับ TypeScript
# ตรวจสอบว่า data.json มี structure ถูกต้อง
```

### JSON Syntax Error

ถ้าไม่แน่ใจว่า JSON ถูกต้อง ให้:
1. คัดลอกเนื้อหา data.json ไปที่ https://jsonlint.com
2. กด **Validate JSON**
3. แก้ไขตามที่แจ้ง

### บทความไม่แสดง / Build Error บทความ

1. ตรวจสอบว่า slug ใน `src/app/articles/[slug]/page.tsx` ตรงกับชื่อไฟล์ `.mdx`
2. ตรวจสอบว่ามี `export const metadata = { ... }` ด้านบนไฟล์ MDX
3. ตรวจสอบว่า import path ถูกต้อง: `import { ArticleImage, ImageGrid } from "@/components/ui/ArticleImage"`
4. **ถ้ามี comment `//`** — เปลี่ยนเป็น `{/* comment */}` เพราะ MDX ไม่รองรับ `//`

### ภาพในบทความไม่แสดง

1. ตรวจสอบว่าไฟล์ภาพอยู่ใน `public/images/`
2. ตรวจสอบว่า path ใน MDX ถูกต้อง: `src="/images/ชื่อไฟล์.jpg"`
3. ตรวจสอบว่าไม่มีช่องว่างในชื่อไฟล์

### Footer / เนื้อหาถูกบังโดย GridBackground

ถ้าเนื้อหาส่วนท้ายของหน้าถูกบังหรือมัวๆ ให้เพิ่ม `relative z-10` ให้ element นั้น:

```tsx
<footer className="relative z-10 ...">  {/* เพิ่ม relative z-10 */}
```

**สาเหตุ:** `GridBackground` ใช้ `fixed inset-0 z-0` พร้อม gradient ทับทั้งหน้าจอ

---

## 14. SEO & Google Search Console

### 14.1 สิ่งที่มีมาให้แล้ว

เว็บไซต์นี้ตั้งค่า SEO พื้นฐานให้แล้ว:

| ไฟล์ | หน้าที่ |
|------|---------|
| `src/app/sitemap.ts` | สร้าง sitemap.xml อัตโนมัติ (รายชื่อหน้าเว็บทั้งหมด) |
| `src/app/robots.ts` | สร้าง robots.txt (อนุญาตให้ Google เข้าถึง) |
| `src/app/layout.tsx` | Meta Tags + OG Tags สำหรับ SEO |
| `src/lib/imageLoader.ts` | Custom image loader สำหรับ GitHub Pages |

### 14.2 วิธีสมัคร Google Search Console (ฟรี)

1. ไปที่ https://search.google.com/search-console
2. กด **เริ่มใช้งาน** (ลงชื่อเข้าใช้ด้วย Gmail)
3. เลือก **URL prefix** แล้วใส่: `https://titiwatpure.github.io/personal-website/`
4. เลือกวิธียืนยัน **แท็ก HTML** (ไม่ใช่ไฟล์ HTML)
5. คัดลอกค่า `content` จากโค้ดที่ได้ เช่น:
   ```html
   <meta name="google-site-verification" content="xxxxxxxxxxxx" />
   ```
6. เปิด `src/app/layout.tsx` แล้วแก้ค่า `google` ในส่วน `verification`:
   ```tsx
   verification: {
     google: "xxxxxxxxxxxx",  // ← วางค่า content ที่คัดลอกมา
   },
   ```
7. Commit + Push ขึ้น GitHub
8. รอ GitHub Actions build เสร็จ (1-2 นาที)
9. กลับไป Google Search Console กด **ยืนยัน**

### 14.3 วิธีส่ง Sitemap ให้ Google

1. ใน Google Search Console เลือก property ของคุณ
2. ไปที่ **Sitemap** (เมนูด้านซ้าย)
3. เพิ่ม: `sitemap.xml`
4. กด **ส่ง**

### 14.4 วิธีเพิ่มหน้าใหม่ใน Sitemap

เมื่อเพิ่มหน้าเว็บใหม่ ต้องเพิ่มใน `src/app/sitemap.ts`:

```typescript
{
  url: `${baseUrl}/หน้าใหม่`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
```

Google จะ index หน้าใหม่อัตโนมัติภายใน 3-7 วัน

### 14.5 วิธีตรวจสอบว่า Google ค้นหาเจอไหม

**วิธีที่ 1: ค้นหาใน Google**
พิมพ์ในช่องค้นหา:
```
site:titiwatpure.github.io/personal-website
```
ถ้าเจอผลลัพธ์ = Google index แล้ว ✅

**วิธีที่ 2: ดูใน Google Search Console**
- ไปที่ **ภาพรวม** → แสดงจำนวนหน้าที่ถูก index
- ไปที่ **ผลการค้นหา** → แสดงจำนวนคลิกและ impressions

### 14.6 เคล็ดลับให้ index เร็วขึ้น

- แชร์ลิงก์เว็บบน Facebook, Twitter, Line
- ใส่ลิงก์ในโปรไฟล์ GitHub
- อัปเดตเนื้อหาสม่ำเสมอ (Google ชอบเว็บที่มีการเคลื่อนไหว)
- เพิ่มบทความใหม่เป็นประจำ

### 14.7 Meta Tags ที่ตั้งค่าไว้

ใน `src/app/layout.tsx` มีการตั้งค่า SEO ดังนี้:

| Meta Tag | หน้าที่ |
|----------|---------|
| `title` | ชื่อเว็บที่แสดงใน Google Search |
| `description` | คำอธิบายเว็บที่แสดงใน Google Search |
| `keywords` | คำค้นหาที่เกี่ยวข้อง |
| `openGraph` | Preview สำหรับแชร์บน Facebook |
| `twitter` | Preview สำหรับแชร์บน Twitter |
| `robots` | อนุญาตให้ Google index |
| `verification` | ยืนยันความเป็นเจ้าของใน Google Search Console |

**วิธีแก้ไข:** เปิด `src/app/layout.tsx` แล้วแก้ค่าใน `metadata` object

---

## สรุปขั้นตอนการอัปเดตเว็บ

```
1. แก้ data.json           → เปลี่ยนข้อความ/ข้อมูล
2. ใส่รูปใน public/images/    → เพิ่มรูปภาพ
3. แก้ src/articles/*.mdx   → เพิ่ม/แก้บทความ
4. npm run dev             → ดูตัวอย่าง
5. npm run build           → Build สำหรับ deploy
6. git push                → อัปขึ้น GitHub/Vercel
```

---

## เทคโนโลยีที่ใช้

- **Next.js 16** — React Framework
- **Tailwind CSS 4** — CSS Framework
- **Framer Motion** — Animation
- **TypeScript** — Type-safe JavaScript
- **MDX** — Markdown + JSX สำหรับบทความ
- **Sarabun + Space Mono** — Fonts
- **Supabase** — Visitor Counter Database
- **Custom Theme System** — Light/Dark Theme Toggle (localStorage + CSS variables)

---

## 15. ระบบสี (Color System)

### โครงสร้าง

ระบบสีทำงาน 3 ชั้น:

1. **CSS Variables** (`:root` / `html.light`) ใน `globals.css` — กำหนดค่าสีดิบ
2. **`@theme inline`** — map ตัวแปร CSS ไปเป็น Tailwind tokens
3. **Tailwind classes** — ใช้ใน component เช่น `text-text`, `bg-dark`

### ค่าสีที่ใช้

| Class | Dark Theme | Light Theme | ใช้กับ |
|-------|-----------|-------------|--------|
| `text-text` | #e8e4d9 (off-white) | #1a1a2e (dark navy) | ข้อความหลัก |
| `text-text-dim` | 85% opacity | 85% opacity | ข้อความรอง |
| `text-text-muted` | 70% opacity | 70% opacity | label เล็กๆ |
| `text-cyan` | #00d4ff | #0077b6 | ไฮไลท์/ลิงก์ |
| `text-gold` | #c8a97e | #b8860b | ข้อความพิเศษ |
| `bg-dark` | #050508 | #ffffff | พื้นหลัง |
| `bg-dark-card` | #0d0d14 | #f1f3f5 | การ์ด |

### วิธีเปลี่ยนสี

เปิด `src/app/globals.css` แก้ค่าใน `:root` (dark) หรือ `html.light` (light):

```css
:root {
  --t-text: #e8e4d9;        /* สีข้อความหลัก dark theme */
  --t-cyan: #00d4ff;        /* สีไฮไลท์ dark theme */
}
html.light {
  --t-text: #1a1a2e;        /* สีข้อความหลัก light theme */
  --t-cyan: #0077b6;        /* สีไฮไลท์ light theme */
}
```

### ระบบธีม (Custom Theme System)

ใช้ระบบธีมแบบ custom แทน next-themes เพื่อความเข้ากันได้กับ Next.js 16:

| ไฟล์ | หน้าที่ |
|------|---------|
| `src/components/ThemeProvider.tsx` | React context สำหรับจัดการธีม (dark/light) |
| `src/components/ThemeToggle.tsx` | ปุ่มสลับธีม (ไอคอนพระอาทิตย์/พระจันทร์) |
| `src/app/layout.tsx` | Inline script ใน `<head>` ตั้ง class ก่อน render (ป้องกัน flash) |

**หลักการ:**
- ใช้ `localStorage` เก็บธีมที่เลือก
- Inline script ใน `<head>` อ่าน localStorage แล้วเพิ่ม class `light` บน `<html>` ก่อน React hydrate
- `ThemeProvider` sync state หลัง mount
- CSS `html.light` override ตัวแปรสีทั้งหมด

---

## 16. สถิติผู้เข้าชม (Supabase)

### สิ่งที่ต้องตั้งค่า

1. สมัคร [supabase.com](https://supabase.com) → สร้าง Project
2. รัน SQL สร้าง table:
```sql
CREATE TABLE page_visits (
  id BIGSERIAL PRIMARY KEY,
  page TEXT NOT NULL,
  visited_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_page_visits_visited_at ON page_visits(visited_at);
```
3. สร้าง `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

### วิธีใช้ GitHub Pages + Supabase

เพิ่ม Secrets ใน GitHub repo:
1. ไป **Settings → Secrets → Actions**
2. เพิ่ม `NEXT_PUBLIC_SUPABASE_URL` และ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. แก้ `.github/workflows/deploy.yml` เพิ่ม environment variables ใน build step

---

## 17. Easter Egg (Pixel Art)

### วิธีใช้

กด logo **"TRITOT.ENGINEER"** ใน Navbar **3 ครั้ง** ภายใน 1 วินาที → ตัวละครวิศวกร pixel art จะเดินข้ามหน้าจอจากซ้ายไปขวา

### รายละเอียด

| หัวข้อ | ข้อมูล |
|--------|--------|
| Trigger | กด logo 3 ครั้ง (triple-click) |
| ตัวละคร | วิศวกร 16x16 pixel (CSS box-shadow) |
| Animation | เดิน 8 วินาที, สลับขาทุก 300ms, bounce |
| หายไป | อัตโนมัติเมื่อเดินถึงขอบขวา |

### ไฟล์ที่เกี่ยวข้อง

| ไฟล์ | หน้าที่ |
|------|---------|
| `src/components/effects/PixelEasterEgg.tsx` | ตัวละคร pixel art + animation + trigger logic |
| `src/components/layout/Navbar.tsx` | เพิ่ม click handler บน logo |

### วิธีปรับแต่ง

- **เปลี่ยนความเร็ว:** แก้ `duration: 8` ใน `motion.div` (PixelEasterEgg.tsx)
- **เปลี่ยนสี:** แก้ hex code ใน `FRAME_0_SHADOWS` / `FRAME_1_SHADOWS`
- **เปลี่ยนจำนวนคลิก:** แก้ `>= 3` ใน `useEasterEgg` hook
- **เปลี่ยนขนาด:** แก้ `scale` ใน `PixelCharacter` component
