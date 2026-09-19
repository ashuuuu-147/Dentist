import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = "/Users/shubhamchandra/Desktop/Dentist/screenshots";
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless",
  "--disable-gpu",
  "--remote-debugging-port=9222",
  "about:blank"
]);

await new Promise((r) => setTimeout(r, 2000));

try {
  const res = await fetch("http://localhost:9222/json");
  const tabs = await res.json();
  const pageTab = tabs.find((t) => t.type === "page");

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));

  let msgId = 1;
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const curId = msgId++;
      const timeout = setTimeout(() => reject(new Error(`Timeout: ${method}`)), 15000);
      const handler = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === curId) {
          clearTimeout(timeout);
          ws.removeEventListener("message", handler);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }
      };
      ws.addEventListener("message", handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  await send("Page.enable");
  await send("DOM.enable");
  await send("Runtime.enable");

  // Helper to scroll and evaluate
  async function evaluate(expression) {
    return send("Runtime.evaluate", { expression, returnByValue: true });
  }

  console.log("=== CAPTURING DESKTOP (1440x900) MOTION SECTIONS ===");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Emulation.setUserAgentOverride", { userAgent: "" });

  await send("Page.navigate", { url: "http://localhost:3000/" });
  await new Promise((r) => setTimeout(r, 3000)); // Allow hero GSAP sequence & 3D canvas resolve

  // 1. Hero
  let shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_hero_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_hero_desktop.png");

  // 2. Bento Services
  await evaluate(`window.scrollTo({ top: 900, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1200));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_bento_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_bento_desktop.png");

  // 3. Doctor Section
  await evaluate(`window.scrollTo({ top: 1950, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_doctor_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_doctor_desktop.png");

  // 4. Patient Journey
  await evaluate(`window.scrollTo({ top: 2900, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_journey_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_journey_desktop.png");

  // 5. Technology & Insurance
  await evaluate(`window.scrollTo({ top: 3850, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_tech_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_tech_desktop.png");

  // 6. Location & Final CTA
  await evaluate(`window.scrollTo({ top: 5200, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_cta_desktop.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_cta_desktop.png");

  console.log("\n=== CAPTURING MOBILE (390x844) MOTION SECTIONS ===");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await send("Emulation.setUserAgentOverride", {
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
  });

  await send("Page.navigate", { url: "http://localhost:3000/" });
  await new Promise((r) => setTimeout(r, 3000));

  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_hero_mobile.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_hero_mobile.png");

  await evaluate(`window.scrollTo({ top: 1200, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1200));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_bento_mobile.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_bento_mobile.png");

  await evaluate(`window.scrollTo({ top: 2500, behavior: 'instant' })`);
  await new Promise((r) => setTimeout(r, 1200));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(OUTPUT_DIR, "motion_doctor_mobile.png"), Buffer.from(shot.data, "base64"));
  console.log("Captured: motion_doctor_mobile.png");

  console.log("\nAll motion QA screenshots captured successfully!");
  ws.close();
} catch (e) {
  console.error("Screenshot error:", e);
} finally {
  chrome.kill();
}
