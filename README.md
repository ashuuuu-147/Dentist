# Georgia Dental Center — Premium Digital Healthcare Experience

A high-end, agency-level digital experience designed and engineered for **Georgia Dental Center** in Decatur, Georgia. The project combines dark editorial luxury, clinical precision, custom interactive 3D art direction, and conversion-focused patient workflows.

---

## 💎 Creative Direction & Brand Identity

- **Visual Theme**: "Clinical Precision × Human Comfort × Editorial Luxury × Digital Depth"
- **Color Palette**:
  - Primary Dark Environment: `#121212`
  - Deep Teal: `#0A5157`
  - Mid Teal: `#0D727C`
  - Aqua / Turquoise Accent: `#17AEAB`
  - Light Contrast Surface: `#F4FBFC`
  - Brand Blue: `#0072BB`
- **Typography**:
  - Display / Editorial Serif: `Cormorant Garamond` (Google Fonts, zero CLS)
  - Body & UI Sans: `Plus Jakarta Sans` (Google Fonts)
- **3D Dental Centerpiece**:
  - Procedural pearl-enamel molar model with transmission, roughness, and turquoise rim lighting.
  - Ambient floating micro-particles, mouse parallax, and gentle vertical breathing float.
  - Multi-tier performance fallbacks: WebGL capability detection, loading shimmer, low-power fallback, and full `prefers-reduced-motion` accessibility support.

---

## 🏥 Source of Truth & Verified Practice Data

All content is strictly grounded in official practice documentation:
- **Practice Name**: Georgia Dental Center
- **Legal Entity**: Georgia Dental Professionals, PC
- **Community Affiliation**: Orahh Care Dental Community / Heartland Dental LLC (Selected by AARP®)
- **Physical Address**: 755 Commerce Dr, Ste 513, Decatur, GA 30030
- **Phone**: (404) 377-7711
- **Google Place ID**: `ChIJK4C_nxUH9YgReguzcTwtQqQ` (Lat: `33.777445`, Lng: `-84.294017`)
- **Office Hours**:
  - Monday: 8:30 AM – 5:00 PM
  - Tuesday – Thursday: 8:00 AM – 5:00 PM
  - Friday: 8:00 AM – 1:00 PM
  - Saturday – Sunday: Closed
- **Lead Doctor**: Dr. Shikha M Amin, DMD
  - DMD: Medical University of South Carolina College of Dental Medicine
  - BS: Tennessee Technological University
  - General Practice Residency (GPR): The Brooklyn Hospital Center in Brooklyn, NY
  - NPI: `1689254583`
- **Participating Insurances**: Aetna, Delta Dental, Cigna, MetLife, Humana, Guardian, UCCI, Assurant SunLife, Ameritas, Unum, GEHA Connection, DentaQuest, Careington, Aflac.
- **Financing & Savings**:
  - CareCredit: `https://www.carecredit.com/go/662KVR/`
  - In-house VantageOne Dental Savings Plan

---

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router, Server & Client Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3 + CSS Variables
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation**: GSAP, CSS Keyframes
- **Forms & Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Icons**: `lucide-react`

---

## 📂 Project Architecture

```
├── public/
│   ├── assets/
│   │   ├── images/           # Authentic Dr. Amin portrait, building exterior
│   │   └── logos/            # Georgia Dental Center official crest
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Global fonts, metadata, JSON-LD Schema.org Dentist
│   │   ├── page.tsx          # Homepage (Hero, Bento, Doctor, Journey, Tech, Insurance, Location, CTA)
│   │   ├── our-services/
│   │   │   ├── page.tsx      # Services index with search and category filters
│   │   │   └── [slug]/page.tsx # Dynamic SEO treatment detail pages
│   │   ├── meet-our-team/page.tsx # Dr. Amin profile, credentials, staff directory
│   │   ├── what-to-expect/page.tsx# 4-step visit timeline, paperwork instructions, FAQs
│   │   ├── insurance/page.tsx # Verified 14-provider network, policy statement, FAQs
│   │   ├── payment-options/page.tsx # CareCredit, VantageOne, payment FAQs
│   │   ├── make-appointment/page.tsx # Real appointment workflow with zero fake slots
│   │   ├── contact/page.tsx   # Contact form, office hours, interactive Google Map
│   │   ├── api/contact/route.ts # Server-side Zod validation API
│   │   ├── robots.ts         # SEO crawlers directive
│   │   ├── sitemap.ts        # Dynamic XML sitemap generator
│   │   └── not-found.tsx     # Custom branded 404 recovery
│   ├── components/
│   │   ├── 3d/               # Three.js ToothScene, ToothModel, ToothCanvas, Fallback
│   │   ├── navigation/       # Sticky Navbar, Mobile Menu, MobileActionBar
│   │   ├── home/             # Hero, BentoServices, DoctorSection, PatientJourney, etc.
│   │   ├── footer/           # Editorial Footer with legal and hours
│   │   └── ui/               # Logo, Badges, Icons
│   ├── data/                 # Centralized content: siteConfig, services, team, etc.
│   ├── hooks/                # useReducedMotion
│   └── lib/                  # Utility helpers (cn)
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Optional direct third-party booking URL (e.g. Heartland Dental DPS portal)
# If left empty, the site seamlessly routes to the priority consultation dispatcher at /make-appointment
NEXT_PUBLIC_BOOKING_URL=

# Optional NICE inContact Live Chat toggle
# If set to "true", the official NICE inContact chat widget initializes asynchronously
NEXT_PUBLIC_NICE_CHAT_ENABLED=false
```

---

## 🚀 Development & Build Instructions

```bash
# Install dependencies
npm install

# Run TypeScript typecheck
npm run typecheck

# Run production build
npm run build

# Start production server
npm run start
```
