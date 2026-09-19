export interface DoctorProfile {
  name: string;
  title: string;
  npi: string;
  headshotUrl: string;
  quote: string;
  leadBio: string;
  fullBioMarkdown: string;
  education: {
    degree: string;
    institution: string;
  }[];
  residency: string;
  personalBio: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  roleType: "management" | "hygiene" | "assistant" | "business";
}

export const doctorData: DoctorProfile = {
  name: "Dr. Shikha M Amin, DMD",
  title: "Doctor of Dental Medicine",
  npi: "1689254583",
  headshotUrl: "/assets/images/dr-shikha-amin.jpg",
  quote:
    "My mission is to deliver top-quality, compassionate care that prioritizes each patient's unique needs and well-being. I am committed to using the latest advancements in dentistry to provide effective treatments while fostering a comfortable and supportive environment. My goal is to build lasting relationships with my patients, empowering them with the knowledge and resources necessary to achieve and maintain optimal oral health.",
  leadBio:
    "Dr. Amin delivers top-quality, compassionate care that prioritizes each patient's unique needs and well-being.",
  fullBioMarkdown:
    "Dr. Shikha M Amin is dedicated to delivering clinical excellence paired with a gentle, patient-centered philosophy. Committed to continuing education and modern dental innovations, Dr. Amin partners with each patient to develop thoughtful treatment plans focused on longevity, comfort, and aesthetic naturalness.",
  education: [
    {
      degree: "Doctor of Dental Medicine (DMD)",
      institution: "Medical University of South Carolina College of Dental Medicine – Charleston, South Carolina",
    },
    {
      degree: "Bachelor of Science (BS)",
      institution: "Tennessee Technological University – Cookeville, Tennessee",
    },
  ],
  residency: "General Practice Residency at The Brooklyn Hospital Center in Brooklyn, New York.",
  personalBio:
    "Dr. Amin recently moved from South Carolina with her husband, Rohin. She is excited to make Atlanta her home and serve the community in Decatur. When she has free time, Dr. Amin enjoys traveling, playing tennis, and spending time with her niece, Dua.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "T_101111_GADENT",
    name: "Omar G. Cordero",
    title: "Practice Manager of Operations",
    roleType: "management",
  },
  {
    id: "T_101421_GADENT",
    name: "Ke’Andra Snead",
    title: "Registered Dental Hygienist",
    roleType: "hygiene",
  },
  {
    id: "T_100253_GADENT",
    name: "LaTasha M. Williams",
    title: "Registered Dental Hygienist",
    roleType: "hygiene",
  },
  {
    id: "T_43568_GADENT",
    name: "Lequita J. Duncan",
    title: "Registered Dental Hygienist",
    roleType: "hygiene",
  },
  {
    id: "T_68187_GADENT",
    name: "Julet Hyde",
    title: "Dental Assistant",
    roleType: "assistant",
  },
  {
    id: "T_117921_GADENT",
    name: "Romayne Marrett",
    title: "Dental Assistant",
    roleType: "assistant",
  },
  {
    id: "T_115452_GADENT",
    name: "Roderick Harris",
    title: "Business Assistant",
    roleType: "business",
  },
];
