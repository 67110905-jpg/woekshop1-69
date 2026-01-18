// ประกาศคะแนนสอบแต่ละวิชา
let math = 85;
let science = 72;
let english = 90;

// คำนวณคะแนนรวม
let total = math + science + english;

// คำนวณค่าเฉลี่ย
let average = total / 3;

// ตรวจสอบว่าคะแนนเฉลี่ย >= 80 หรือไม่
let isPassed = average >= 80;

// แสดงผลลัพธ์
console.log("คะแนนรวม:", total);
console.log("คะแนนเฉลี่ย:", average);
console.log("คะแนนเฉลี่ย >= 80:", isPassed);
