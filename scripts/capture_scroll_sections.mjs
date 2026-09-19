import { spawn } from "child_process";
import fs from "fs";

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
  await send("Network.enable");

  await send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  await send("Page.navigate", { url: "http://localhost:3000/" });
  await new Promise((r) => setTimeout(r, 2500));

  // Scroll down to Editorial & Services
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 950);" });
  await new Promise((r) => setTimeout(r, 1500));
  let shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/light_editorial_bento.png", Buffer.from(shot.data, "base64"));

  // Scroll down to Doctor section
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 2200);" });
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/light_doctor_journey.png", Buffer.from(shot.data, "base64"));

  // Scroll down to Location & Final CTA & Footer
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 5200);" });
  await new Promise((r) => setTimeout(r, 1500));
  shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/light_location_footer.png", Buffer.from(shot.data, "base64"));

  console.log("Captured editorial, doctor, and footer scroll sections successfully!");
  ws.close();
} finally {
  chrome.kill();
}

