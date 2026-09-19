export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  procedureSteps: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  isFeatured?: boolean;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  iconName: string;
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "dental-cleanings-checkups",
    slug: "dental-cleanings-checkups",
    name: "Dental Cleanings & Checkups",
    category: "Preventative Oral Health",
    categorySlug: "preventative",
    shortDescription: "Essential preventative hygiene and detailed dental checkups to maintain long-term oral health.",
    overview:
      "Routine cleanings and thorough comprehensive checkups are the cornerstone of proactive dentistry. Our hygiene team gently removes plaque, calculus (tartar), and surface stains while examining teeth, gums, and oral structures for early signs of decay or periodontal concerns.",
    benefits: [
      "Prevents tartar buildup and gum inflammation",
      "Early detection of cavities, worn fillings, or enamel wear",
      "Freshens breath and polishes enamel for a brighter smile",
      "Personalized at-home oral care coaching tailored to your needs",
    ],
    procedureSteps: [
      {
        title: "Comprehensive Oral Examination",
        description: "Our team conducts a gentle examination of your teeth, soft tissues, and bite alignment.",
      },
      {
        title: "Ultrasonic & Gentle Hand Scaling",
        description: "Specialized tools carefully lift hardened tartar from enamel surfaces and along the gumline.",
      },
      {
        title: "Polishing & Flossing",
        description: "A gentle prophy paste buffs away microscopic stains, followed by thorough professional flossing.",
      },
      {
        title: "Preventative Assessment",
        description: "Dr. Amin reviews any findings with you, answering questions with complete clinical transparency.",
      },
    ],
    faq: [
      {
        question: "How often should I have a dental cleaning and checkup?",
        answer: "Most patients benefit from routine cleanings every six months. Patients with a history of periodontal disease may require visits every three to four months to maintain periodontal health.",
      },
      {
        question: "Does a routine cleaning hurt?",
        answer: "Our team prioritizes patient comfort. Routine cleanings are typically pain-free. If you have sensitive gums or dental anxiety, we can apply topical numbing agents or discuss nitrous oxide options.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "gum-disease-treatment",
    slug: "gum-disease-treatment",
    name: "Gum Disease Treatment",
    category: "Periodontics",
    categorySlug: "periodontics",
    shortDescription: "Advanced periodontal therapies to halt gum infection, protect bone support, and restore tissue vitality.",
    overview:
      "Periodontal disease is an infection of the tissues that hold your teeth in place. Using modern diagnostic imaging and gentle deep scaling techniques (scaling and root planing), we eradicate subgingival bacteria to halt progression and support gum reattachment.",
    benefits: [
      "Eliminates bleeding, tender, or swollen gum tissue",
      "Protects the alveolar bone structure supporting natural teeth",
      "Reduces systemic inflammation associated with oral pathogens",
      "Smooths root surfaces to prevent future bacterial colonization",
    ],
    procedureSteps: [
      {
        title: "Periodontal Charting & Assessment",
        description: "We measure periodontal pocket depths around each tooth to map areas of concern.",
      },
      {
        title: "Targeted Scaling & Root Planing",
        description: "Carefully cleaning deep below the gumline to remove bacterial colonies and smooth root surfaces.",
      },
      {
        title: "Antimicrobial Irrigation",
        description: "Therapeutic antimicrobial solutions may be applied directly into pockets to eliminate residual bacteria.",
      },
      {
        title: "Periodontal Maintenance Schedule",
        description: "Regular supportive checkups to monitor pocket reduction and maintain healthy gum margins.",
      },
    ],
    faq: [
      {
        question: "What are common signs of gum disease?",
        answer: "Gums that bleed when brushing or flossing, persistent red or swollen gums, receding gumlines, and chronic bad breath are typical warning signs that warrant an exam.",
      },
      {
        question: "Can gum disease be cured completely?",
        answer: "Gingivitis (early stage) is completely reversible with good hygiene. More advanced periodontitis cannot be fully cured, but it can be successfully arrested and managed with professional periodontal care.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "invisalign-treatment",
    slug: "invisalign-treatment",
    name: "Invisalign® Treatment",
    category: "Orthodontics",
    categorySlug: "orthodontics",
    shortDescription: "Discreet clear aligners that gently guide your teeth into optimal alignment without metal brackets.",
    overview:
      "Invisalign® clear aligners offer a comfortable, virtually invisible way to straighten your teeth and correct bite misalignments. Custom-fabricated from SmartTrack medical-grade polymers, each set of aligners applies controlled pressure to guide teeth gradually into position.",
    benefits: [
      "Clear, transparent appearance with minimal visual impact",
      "Removable for effortless eating, drinking, brushing, and flossing",
      "Smooth plastic eliminates brackets and wires that irritate cheeks",
      "Precise digital planning allowing you to preview your projected smile outcome",
    ],
    procedureSteps: [
      {
        title: "Digital Smile Scanning",
        description: "We capture a precise 3D digital model of your dental arches without messy impression putty.",
      },
      {
        title: "Custom Treatment Plan",
        description: "Dr. Amin maps the step-by-step movement of your teeth and shares a 3D digital simulation.",
      },
      {
        title: "Aligner Delivery & Guidance",
        description: "You receive your series of custom aligners, wearing each tray for 1 to 2 weeks for 20-22 hours daily.",
      },
      {
        title: "Periodic Progress Checks",
        description: "Brief visits ensure your teeth are tracking perfectly until your new smile is complete.",
      },
    ],
    faq: [
      {
        question: "How long does Invisalign treatment take?",
        answer: "Treatment length varies depending on complexity, but most adult cases take between 6 to 18 months. Noticeable improvements often appear within the first few weeks.",
      },
      {
        question: "Can I remove the aligners when dining out?",
        answer: "Yes, you can remove them for meals, coffee, and brushing. For optimal results, wear aligners 20–22 hours per day.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "restorative-dentistry",
    slug: "restorative-dentistry",
    name: "Restorative Dentistry & Crowns",
    category: "Restorative Dentistry",
    categorySlug: "restorative",
    shortDescription: "Custom ceramic crowns, durable tooth-colored fillings, and precision restorations that restore strength and form.",
    overview:
      "When teeth sustain fractures, deep decay, or structural damage, restorative dentistry re-establishes full chewing function and natural beauty. We craft high-grade ceramic crowns and biomimetic composite fillings that seamlessly blend with adjacent teeth.",
    benefits: [
      "Restores bite force and structural integrity to compromised teeth",
      "Color-matched ceramic materials that replicate natural enamel translucency",
      "Protects vulnerable roots and pulp chambers from bacterial invasion",
      "Durable, long-lasting clinical materials engineered for longevity",
    ],
    procedureSteps: [
      {
        title: "Assessment & Decay Removal",
        description: "The tooth is gently numbed, and damaged or decayed structure is meticulously removed.",
      },
      {
        title: "Digital or Precision Impression",
        description: "Detailed impressions capture the exact contours of the prepared tooth and surrounding bite.",
      },
      {
        title: "Custom Fabrication",
        description: "High-strength ceramic is custom-shaded to harmonize with your smile's natural spectrum.",
      },
      {
        title: "Permanent Bonding & Adjustment",
        description: "The restoration is permanently bonded, with bite alignment carefully calibrated for lasting comfort.",
      },
    ],
    faq: [
      {
        question: "How long do dental crowns last?",
        answer: "With good oral hygiene and regular dental checkups, quality ceramic crowns typically last 10 to 15 years or longer.",
      },
      {
        question: "Will the crown look different from my other teeth?",
        answer: "No. Modern ceramic and porcelain materials are matched precisely to your natural shade, translucency, and texture.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "Endodontics",
    categorySlug: "endodontics",
    shortDescription: "Gentle therapy to eliminate internal tooth infection, alleviate acute pain, and save natural teeth.",
    overview:
      "Root canal therapy is a tooth-saving procedure performed when the internal pulp of a tooth becomes inflamed or infected. Far from being painful, modern root canal treatment immediately relieves severe toothache and preserves the natural tooth root in the jaw.",
    benefits: [
      "Promptly relieves intense tooth pain and temperature sensitivity",
      "Saves the natural tooth from extraction, maintaining jawbone density",
      "Prevents the spread of infection to neighboring teeth and surrounding bone",
      "Restores normal biting sensations and natural appearance when crowned",
    ],
    procedureSteps: [
      {
        title: "Targeted Comfort & Numbing",
        description: "Profound local anesthesia ensures complete comfort before beginning any treatment.",
      },
      {
        title: "Pulp Chamber Access",
        description: "A micro-opening allows access to remove inflamed pulp tissue and bacterial debris.",
      },
      {
        title: "Disinfection & Canal Shaping",
        description: "The delicate root canals are thoroughly irrigated and shaped using precision instruments.",
      },
      {
        title: "Sealing & Structural Protection",
        description: "Canals are sealed with biocompatible gutta-percha, followed by a protective crown.",
      },
    ],
    faq: [
      {
        question: "Is root canal therapy painful?",
        answer: "With modern local anesthetics and gentle techniques, root canal therapy feels very similar to receiving a standard dental filling and resolves the underlying pain.",
      },
      {
        question: "Why not just extract the tooth?",
        answer: "Preserving your natural tooth is always preferred. Missing teeth cause adjacent teeth to shift, lead to bone loss, and often require more costly implants or bridges to replace.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "dentures",
    slug: "dentures",
    name: "Dentures & Partial Dentures",
    category: "Restorative Dentistry",
    categorySlug: "restorative",
    shortDescription: "Custom-fitted complete and partial dentures designed for comfort, stability, and confident smiling.",
    overview:
      "For patients missing several or all teeth, modern dentures provide a comfortable and natural-looking restoration. Each prosthesis is custom-molded to the contours of your mouth, restoring the ability to speak clearly, chew nutritious foods, and smile with confidence.",
    benefits: [
      "Restores facial volume and natural lip/cheek contours",
      "Allows you to enjoy a varied diet and chew comfortably",
      "Lightweight, custom-acrylic materials tailored to your gum shade",
      "Options for full dentures, removable partials, or implant-supported dentures",
    ],
    procedureSteps: [
      {
        title: "Oral Health Evaluation",
        description: "Dr. Amin evaluates your gum ridges, jawbone structure, and remaining teeth.",
      },
      {
        title: "Detailed Molds & Bite Records",
        description: "We take precise impressions and measure bite alignment to establish ideal tooth positioning.",
      },
      {
        title: "Wax Try-In Consultation",
        description: "You preview the appearance and fit in wax before the final appliance is fabricated.",
      },
      {
        title: "Custom Fitting & Support",
        description: "The completed denture is seated with minor adjustments to ensure maximum comfort.",
      },
    ],
    faq: [
      {
        question: "How long does it take to adapt to new dentures?",
        answer: "Most patients adjust within a few weeks as oral muscles become accustomed to holding the denture in place. We provide follow-up check-ins to make small comfort adjustments.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Contouring",
    category: "Cosmetic Dentistry",
    categorySlug: "cosmetic",
    shortDescription: "Aesthetic smile enhancements including tooth bonding and subtle enamel contouring.",
    overview:
      "Cosmetic dentistry focuses on harmonizing the proportion, symmetry, and color of your smile. Whether you want to correct minor chips, close small gaps, or smooth uneven tooth edges, our conservative cosmetic treatments deliver noticeable results with minimal intervention.",
    benefits: [
      "Immediate aesthetic refinement with conservative techniques",
      "Closes small gaps and smooths chipped or jagged enamel edges",
      "High-grade composite materials that blend seamlessly into natural teeth",
      "Boosts personal and professional self-confidence",
    ],
    procedureSteps: [
      {
        title: "Aesthetic Smile Consultation",
        description: "We listen to your smile goals and examine tooth symmetry and proportions.",
      },
      {
        title: "Enamel Preparation",
        description: "For bonding, enamel is lightly conditioned with no invasive drilling required.",
      },
      {
        title: "Artistic Layering & Shaping",
        description: "Dr. Amin sculpts composite resin by hand to create natural contour and light reflection.",
      },
      {
        title: "High-Gloss Curing & Polish",
        description: "A specialized curing light hardens the restoration, followed by a multi-step shine polish.",
      },
    ],
    faq: [
      {
        question: "Can composite bonding fix small chipped teeth?",
        answer: "Yes, tooth bonding is one of the quickest, most cost-effective methods for repairing minor chips or small cosmetic discrepancies, usually in a single visit.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "dental-imaging",
    slug: "dental-imaging",
    name: "Dental Imaging & X-rays",
    category: "Dental Technology",
    categorySlug: "technology",
    shortDescription: "Ultra-low radiation digital radiography and high-resolution imaging for clinical precision.",
    overview:
      "Modern digital imaging allows our clinical team to visualize underlying bone structures, tooth roots, and interproximal areas that cannot be seen with the naked eye. Digital radiography drastically reduces radiation exposure compared to traditional film while providing instantaneous high-resolution diagnostic feedback.",
    benefits: [
      "Up to 80-90% lower radiation exposure than traditional film X-rays",
      "Immediate image availability displayed on chairside monitors",
      "Early detection of hidden decay between teeth and bone changes",
      "Environmentally friendly with zero chemical film processing",
    ],
    procedureSteps: [
      {
        title: "Digital Sensor Placement",
        description: "Comfortable ergonomic digital sensors are positioned precisely inside the mouth.",
      },
      {
        title: "Rapid Low-Dose Exposure",
        description: "The digital radiograph is captured in a fraction of a second.",
      },
      {
        title: "Chairside Review",
        description: "Dr. Amin magnifies and reviews the images directly with you on our high-definition display.",
      },
    ],
    faq: [
      {
        question: "Are digital dental X-rays safe?",
        answer: "Yes. Digital dental radiography produces extremely minimal radiation—less than the amount of natural background radiation you receive during a short domestic flight.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "nitrous-oxide",
    slug: "nitrous-oxide",
    name: "Sedation & Dental Anxiety Relief",
    category: "Dental Anxiety & Comfort",
    categorySlug: "comfort",
    shortDescription: "Safe nitrous oxide (laughing gas) and compassionate comfort protocols for relaxed dental visits.",
    overview:
      "We believe no patient should avoid essential healthcare due to anxiety or fear. Georgia Dental Center provides safe, fast-acting nitrous oxide sedation to help nervous patients relax comfortably through their appointments. The sedative takes effect in minutes and completely dissipates before you drive home.",
    benefits: [
      "Immediate reduction in dental anxiety and stress",
      "Safe for patients of all ages, with adjustable sedation levels",
      "No lingering grogginess—you can safely drive yourself home after the visit",
      "Creates a tranquil, calm state while you remain fully awake and responsive",
    ],
    procedureSteps: [
      {
        title: "Comfort Discussion",
        description: "We review your medical history and discuss your comfort preferences.",
      },
      {
        title: "Gentle Mask Administration",
        description: "A comfortable nose mask delivers a controlled blend of nitrous oxide and pure oxygen.",
      },
      {
        title: "Relaxed Treatment",
        description: "You feel a gentle sense of calm and well-being as our team completes your treatment.",
      },
      {
        title: "Rapid Pure Oxygen Flush",
        description: "100% oxygen is administered for five minutes, completely clearing the effects from your system.",
      },
    ],
    faq: [
      {
        question: "Will I fall asleep with nitrous oxide?",
        answer: "No. You will feel deeply relaxed and at ease, but you remain awake, aware, and able to converse with our clinical team at all times.",
      },
    ],
    isFeatured: false,
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Preventative Oral Health",
    slug: "preventative",
    description: "Protect your smile before problems begin with proactive cleanings, screenings, and exams.",
    iconName: "ShieldCheck",
    services: servicesData.filter((s) => s.categorySlug === "preventative"),
  },
  {
    title: "Periodontics",
    slug: "periodontics",
    description: "Advanced techniques to identify and treat gum disease, preserving healthy bone and tissue.",
    iconName: "Activity",
    services: servicesData.filter((s) => s.categorySlug === "periodontics"),
  },
  {
    title: "Restorative Dentistry",
    slug: "restorative",
    description: "Custom crowns, durable fillings, and dentures that rebuild chewing strength and aesthetics.",
    iconName: "Sparkles",
    services: servicesData.filter((s) => s.categorySlug === "restorative"),
  },
  {
    title: "Invisalign® & Orthodontics",
    slug: "orthodontics",
    description: "Clear, comfortable aligners that gently straighten teeth without traditional metal brackets.",
    iconName: "Smile",
    services: servicesData.filter((s) => s.categorySlug === "orthodontics"),
  },
  {
    title: "Endodontics",
    slug: "endodontics",
    description: "Gentle root canal therapy to relieve severe tooth pain and preserve natural teeth.",
    iconName: "HeartPulse",
    services: servicesData.filter((s) => s.categorySlug === "endodontics"),
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic",
    description: "Subtle tooth bonding and enamel contouring that refine the proportion and symmetry of your smile.",
    iconName: "Gem",
    services: servicesData.filter((s) => s.categorySlug === "cosmetic"),
  },
  {
    title: "Technology & Comfort",
    slug: "technology-comfort",
    description: "Ultra-low dose digital radiography and relaxing nitrous oxide sedation for peace of mind.",
    iconName: "Cpu",
    services: servicesData.filter((s) => s.categorySlug === "technology" || s.categorySlug === "comfort"),
  },
];
