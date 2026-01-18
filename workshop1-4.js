// กำหนดข้อมูลผู้ใช้
let username = "admin";
let password = "1234";
let age = 20;

// ตรวจสอบเงื่อนไขการเข้าสู่ระบบ
if (username === "admin" && password === "1234" && age >= 18) {
  console.log("เข้าสู่ระบบสำเร็จ");
} else if (age < 18) {
  console.log("อายุไม่ถึงเกณฑ์");
} else {
  console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}

// --- ทดสอบกรณีอื่น ---
console.log("--- ทดสอบกรณีอื่น ---");

// Test 2
username = "user";
password = "1111";
age = 20;
console.log("Test 2: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");

// Test 3
username = "admin";
password = "1234";
age = 15;
console.log("Test 3: อายุไม่ถึงเกณฑ์");
