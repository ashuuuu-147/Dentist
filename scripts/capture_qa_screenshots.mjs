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
  await send("Network.enable");

  const viewports = [
    { name: "desktop_1440", width: 1440, height: 900, mobile: false, scale: 1 },
    { name: "desktop_1280", width: 1280, height: 800, mobile: false, scale: 1 },
    { name: "tablet_1024", width: 1024, height: 768, mobile: false, scale: 1 },
    { name: "tablet_768", width: 768, height: 1024, mobile: true, scale: 1 },
    { name: "mobile_390", width: 390, height: 844, mobile: true, scale: 2 },
    { name: "mobile_375", width: 375, height: 667, mobile: true, scale: 2 },
  ];

  const pages = [
    { name: "home", url: "http://localhost:3000/" },
    { name: "services", url: "http://localhost:3000/our-services" },
    { name: "team", url: "http://localhost:3000/meet-our-team" },
    { name: "appointment", url: "http://localhost:3000/make-appointment" },
    { name: "contact", url: "http://localhost:3000/contact" },
    { name: "insurance", url: "http://localhost:3000/insurance" },
    { name: "payment", url: "http://localhost:3000/payment-options" },
    { name: "what_to_expect", url: "http://localhost:3000/what-to-expect" },
    { name: "service_detail", url: "http://localhost:3000/our-services/dental-cleanings-checkups" },
  ];

  console.log("Capturing Homepage across all 6 viewports...");
  for (const vp of viewports) {
    await send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.scale,
      mobile: vp.mobile,
    });
    if (vp.mobile) {
      await send("Emulation.setUserAgentOverride", {
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      });
    } else {
      await send("Emulation.setUserAgentOverride", { userAgent: "" });
    }

    await send("Page.navigate", { url: "http://localhost:3000/" });
    await new Promise((r) => setTimeout(r, 2500));

    const shot = await send("Page.captureScreenshot", { format: "png" });
    const buffer = Buffer.from(shot.data, "base64");
    const filename = path.join(OUTPUT_DIR, `home_${vp.name}.png`);
    fs.writeFileSync(filename, buffer);
    console.log(`Saved: home_${vp.name}.png`);
  }

  console.log("\nCapturing secondary pages on desktop 1440 & mobile 390...");
  for (const p of pages.slice(1)) {
    // Desktop 1440
    await send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send("Emulation.setUserAgentOverride", { userAgent: "" });
    await send("Page.navigate", { url: p.url });
    await new Promise((r) => setTimeout(r, 2000));
    let shot = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(OUTPUT_DIR, `${p.name}_desktop_1440.png`), Buffer.from(shot.data, "base64"));
    console.log(`Saved: ${p.name}_desktop_1440.png`);

    // Mobile 390
    await send("Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await send("Emulation.setUserAgentOverride", {
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    });
    await send("Page.navigate", { url: p.url });
    await new Promise((r) => setTimeout(r, 2000));
    shot = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(OUTPUT_DIR, `${p.name}_mobile_390.png`), Buffer.from(shot.data, "base64"));
    console.log(`Saved: ${p.name}_mobile_390.png`);
  }

  console.log("\nAll screenshots captured successfully via Chrome DevTools Protocol!");
  ws.close();
} catch (e) {
  console.error("Error during screenshot capture:", e);
} finally {
  chrome.kill();
}
