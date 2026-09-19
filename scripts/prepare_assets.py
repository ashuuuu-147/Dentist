import os
import urllib.request
from PIL import Image

output_images_dir = "/Users/shubhamchandra/Desktop/Dentist/public/assets/images"
output_logos_dir = "/Users/shubhamchandra/Desktop/Dentist/public/assets/logos"
os.makedirs(output_images_dir, exist_ok=True)
os.makedirs(output_logos_dir, exist_ok=True)

# 1. Process Dr. Amin's portrait from user uploaded image
media_doctor = "/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/.user_uploaded/media_1789763738255.png"
if os.path.exists(media_doctor):
    img = Image.open(media_doctor)
    w, h = img.size
    # In media_1789763738255.png, Dr. Amin's portrait is prominently on the left:
    # Based on screenshot, left box starts around x=63 to x=493, y=184 to y=848 (approx square/portrait)
    # Let's crop the doctor image specifically:
    # We can detect or crop the prominent square box
    # Coordinates in 1000x... viewport:
    # Let's crop the doctor's portrait cleanly
    crop_box = (int(w * 0.063), int(h * 0.185), int(w * 0.493), int(h * 0.848))
    doctor_crop = img.crop(crop_box)
    doctor_crop.convert("RGB").save(os.path.join(output_images_dir, "dr-shikha-amin.jpg"), quality=95)
    doctor_crop.save(os.path.join(output_images_dir, "dr-shikha-amin.png"))
    print("Saved Dr. Amin portrait from user screenshot.")

# Also try downloading the CDN version if possible
cdn_doctor_url = "https://res.cloudinary.com/heartland-dental/w_800,c_fill,g_faces,f_auto,ar_1:1,d_doctorphotos:notfound11.jpg/doctorphotos/1689254583"
try:
    req = urllib.request.Request(cdn_doctor_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=5) as response:
        with open(os.path.join(output_images_dir, "dr-shikha-amin-cdn.jpg"), 'wb') as f:
            f.write(response.read())
            print("Successfully downloaded CDN Dr. Amin headshot")
except Exception as e:
    print("CDN download note:", e)

# 2. Extract building exterior from media_1789763738307.png
media_building = "/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/.user_uploaded/media_1789763738307.png"
if os.path.exists(media_building):
    img = Image.open(media_building)
    w, h = img.size
    building_crop = img.crop((int(w * 0.315), int(h * 0.125), int(w * 0.99), int(h * 0.92)))
    building_crop.convert("RGB").save(os.path.join(output_images_dir, "office-building.jpg"), quality=95)
    print("Saved office exterior image.")

# 3. Extract logo from media_1789763738302.png
media_logo = "/Users/shubhamchandra/.gemini/antigravity/brain/ca1be2b9-923a-4857-804e-99497154f797/.user_uploaded/media_1789763738302.png"
if os.path.exists(media_logo):
    img = Image.open(media_logo)
    w, h = img.size
    logo_crop = img.crop((int(w * 0.35), int(h * 0.125), int(w * 0.92), int(h * 0.92)))
    logo_crop.save(os.path.join(output_logos_dir, "georgia-dental-logo.png"))
    print("Saved Georgia Dental Center logo.")

print("Asset preparation complete.")
