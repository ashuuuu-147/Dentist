import os
import subprocess
import time

CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUTPUT_DIR = "/Users/shubhamchandra/Desktop/Dentist/screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

viewports = [
    ("desktop_1440", 1440, 900),
    ("desktop_1280", 1280, 800),
    ("tablet_1024", 1024, 768),
    ("tablet_768", 768, 1024),
    ("mobile_390", 390, 844),
    ("mobile_375", 375, 667),
]

pages = [
    ("home", "http://localhost:3000/"),
    ("services", "http://localhost:3000/our-services"),
    ("team", "http://localhost:3000/meet-our-team"),
    ("appointment", "http://localhost:3000/make-appointment"),
    ("contact", "http://localhost:3000/contact"),
    ("insurance", "http://localhost:3000/insurance"),
    ("payment", "http://localhost:3000/payment-options"),
    ("what_to_expect", "http://localhost:3000/what-to-expect"),
    ("service_detail", "http://localhost:3000/our-services/dental-cleanings-checkups"),
]

print("Starting Visual QA screenshot capture...")

# First capture home across all 6 viewports
for name, w, h in viewports:
    out_file = os.path.join(OUTPUT_DIR, f"home_{name}.png")
    cmd = [
        CHROME_PATH,
        "--headless",
        "--disable-gpu",
        f"--window-size={w},{h}",
        f"--screenshot={out_file}",
        "--virtual-time-budget=4000",
        "http://localhost:3000/",
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"Captured: home_{name}.png ({w}x{h})")

# Also capture other key pages at 1440px desktop and 390px mobile
for page_name, url in pages[1:]:
    for vp_name, w, h in [("desktop_1440", 1440, 900), ("mobile_390", 390, 844)]:
        out_file = os.path.join(OUTPUT_DIR, f"{page_name}_{vp_name}.png")
        cmd = [
            CHROME_PATH,
            "--headless",
            "--disable-gpu",
            f"--window-size={w},{h}",
            f"--screenshot={out_file}",
            "--virtual-time-budget=3000",
            url,
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(f"Captured: {page_name}_{vp_name}.png")

print("All Visual QA screenshots captured successfully!")
