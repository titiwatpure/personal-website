const fs = require('fs');
const path = require('path');

// SVG placeholder โครงการ
const projects = [
  { name: 'project-qa', color: '#00E5FF', icon: '✓' },
  { name: 'project-solar', color: '#FFD700', icon: '☀' },
  { name: 'project-dashboard', color: '#4A90E2', icon: '📊' },
  { name: 'project-hvac', color: '#7C3AED', icon: '🌬' },
  { name: 'project-ncr', color: '#F59E0B', icon: '📋' },
];

const imagesDir = path.join(__dirname, 'public', 'images');

// สร้างรูป SVG placeholder สำหรับแต่ละโครงการ
projects.forEach(project => {
  const svg = `<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <!-- background -->
  <rect width="800" height="450" fill="#0a1628"/>
  
  <!-- gradient -->
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${project.color};stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:${project.color};stop-opacity:0.05" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad)"/>
  
  <!-- border -->
  <rect x="1" y="1" width="798" height="448" fill="none" stroke="${project.color}" stroke-width="2" opacity="0.3"/>
  
  <!-- icon -->
  <text x="400" y="225" font-size="120" text-anchor="middle" dominant-baseline="central" fill="${project.color}" opacity="0.4">${project.icon}</text>
  
  <!-- text -->
  <text x="400" y="350" font-size="16" text-anchor="middle" fill="${project.color}" opacity="0.6" font-family="Arial">
    ${project.name.replace('project-', '').toUpperCase()}
  </text>
</svg>`;

  const filePath = path.join(imagesDir, `${project.name}.jpg`);
  fs.writeFileSync(filePath, Buffer.from(svg), 'utf-8');
  console.log(`✓ สร้าง: ${project.name}.jpg`);
});

console.log('\n✅ สร้างรูป placeholder ทั้งหมดแล้ว!');
