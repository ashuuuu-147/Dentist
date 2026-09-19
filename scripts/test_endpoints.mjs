const BASE_URL = process.env.BASE_URL || "http://localhost:3000";


const endpoints = [
  { path: "/", expectedStatus: 200, name: "Home Page" },
  { path: "/our-services", expectedStatus: 200, name: "Services Hub" },
  { path: "/our-services/dental-cleanings-checkups", expectedStatus: 200, name: "Service Detail: Cleanings" },
  { path: "/our-services/invisalign-treatment", expectedStatus: 200, name: "Service Detail: Invisalign" },
  { path: "/our-services/gum-disease-treatment", expectedStatus: 200, name: "Service Detail: Periodontics" },
  { path: "/meet-our-team", expectedStatus: 200, name: "Meet Our Team" },
  { path: "/what-to-expect", expectedStatus: 200, name: "What to Expect" },
  { path: "/insurance", expectedStatus: 200, name: "Dental Insurance" },
  { path: "/payment-options", expectedStatus: 200, name: "Payment & Financing" },
  { path: "/make-appointment", expectedStatus: 200, name: "Make Appointment" },
  { path: "/contact", expectedStatus: 200, name: "Contact & Location" },
  { path: "/sitemap.xml", expectedStatus: 200, name: "Dynamic Sitemap" },
  { path: "/robots.txt", expectedStatus: 200, name: "Robots Directives" },
  { path: "/non-existent-page", expectedStatus: 404, name: "Custom 404 Handler" },
];

console.log("=== GEORGIA DENTAL CENTER ENDPOINT AUTOMATED SUITE ===\n");

let passed = 0;
let failed = 0;

// Test GET Endpoints
for (const ep of endpoints) {
  try {
    const res = await fetch(`${BASE_URL}${ep.path}`);
    const status = res.status;
    const body = await res.text();
    
    if (status === ep.expectedStatus) {
      console.log(`✓ [PASS] ${ep.name.padEnd(30)} -> HTTP ${status} (Bytes: ${body.length})`);
      passed++;
    } else {
      console.error(`✗ [FAIL] ${ep.name.padEnd(30)} -> Expected HTTP ${ep.expectedStatus}, got ${status}`);
      failed++;
    }
  } catch (err) {
    console.error(`✗ [FAIL] ${ep.name.padEnd(30)} -> Network error: ${err.message}`);
    failed++;
  }
}

// Test POST /api/contact - Valid Inquiry
console.log("\nTesting API Endpoints (/api/contact)...");
try {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Test Patient",
      phone: "4045550199",
      email: "test.patient@example.com",
      reason: "General Consultation",
      preferredMethod: "phone",
      message: "Automated test inquiry regarding appointment scheduling.",
      consent: true,
      formType: "contact_inquiry"
    })
  });
  
  const json = await res.json();
  if (res.status === 200 && json.success) {
    console.log(`✓ [PASS] POST /api/contact (Valid Inquiry) -> HTTP 200: ${json.message}`);
    passed++;
  } else {
    console.error(`✗ [FAIL] POST /api/contact (Valid Inquiry) -> HTTP ${res.status}:`, json);
    failed++;
  }
} catch (err) {
  console.error(`✗ [FAIL] POST /api/contact -> Network error: ${err.message}`);
  failed++;
}

// Test POST /api/contact - Valid Appointment Request
try {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Jane Decatur",
      phone: "4043777711",
      email: "jane.decatur@example.com",
      reason: "Routine Dental Cleaning & Exam",
      patientType: "new",
      preferredDay: "Tuesday",
      preferredTime: "morning",
      insurance: "Delta Dental PPO",
      consent: true,
      formType: "appointment_request"
    })
  });
  
  const json = await res.json();
  if (res.status === 200 && json.success) {
    console.log(`✓ [PASS] POST /api/contact (Appointment Req) -> HTTP 200: ${json.message}`);
    passed++;
  } else {
    console.error(`✗ [FAIL] POST /api/contact (Appointment Req) -> HTTP ${res.status}:`, json);
    failed++;
  }
} catch (err) {
  console.error(`✗ [FAIL] POST /api/contact (Appointment Req) -> Network error: ${err.message}`);
  failed++;
}

// Test POST /api/contact - Invalid Payload (Validation check)
try {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "J", // Too short
      email: "not-an-email",
      consent: false
    })
  });
  
  if (res.status === 400) {
    console.log(`✓ [PASS] POST /api/contact (Invalid Input)  -> HTTP 400 correctly rejected with validation errors`);
    passed++;
  } else {
    console.error(`✗ [FAIL] POST /api/contact (Invalid Input)  -> Expected HTTP 400, got ${res.status}`);
    failed++;
  }
} catch (err) {
  console.error(`✗ [FAIL] POST /api/contact (Invalid Input)  -> Network error: ${err.message}`);
  failed++;
}

console.log(`\n======================================================`);
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
console.log(`======================================================\n`);

process.exit(failed === 0 ? 0 : 1);

