export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    street1: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    schedulingEmail?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googlePlaceId: string;
  googleMapsUrl: string;
  hours: {
    day: string;
    shortDay: string;
    open: string;
    close: string;
    isClosed: boolean;
  }[];
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  affiliations: {
    network: string;
    networkUrl: string;
    aarpSelected: boolean;
    disclaimer: string;
  };
  bookingUrl?: string;
  careCreditUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Georgia Dental Center",
  legalName: "Georgia Dental Professionals, PC",
  tagline: "Smile with confidence.",
  address: {
    street1: "755 Commerce Dr",
    suite: "Ste 513",
    city: "Decatur",
    state: "GA",
    zip: "30030",
    full: "755 Commerce Dr, Ste 513, Decatur, GA 30030",
  },
  contact: {
    phone: "(404) 377-7711",
    phoneFormatted: "+14043777711",
    schedulingEmail: "info@georgiadentalcenter.com",
  },
  coordinates: {
    lat: 33.777445,
    lng: -84.294017,
  },
  googlePlaceId: "ChIJK4C_nxUH9YgReguzcTwtQqQ",
  googleMapsUrl: "https://maps.google.com/maps?cid=11836072508311931770",
  hours: [
    { day: "Monday", shortDay: "Mon", open: "8:30 AM", close: "5:00 PM", isClosed: false },
    { day: "Tuesday", shortDay: "Tue", open: "8:00 AM", close: "5:00 PM", isClosed: false },
    { day: "Wednesday", shortDay: "Wed", open: "8:00 AM", close: "5:00 PM", isClosed: false },
    { day: "Thursday", shortDay: "Thu", open: "8:00 AM", close: "5:00 PM", isClosed: false },
    { day: "Friday", shortDay: "Fri", open: "8:00 AM", close: "1:00 PM", isClosed: false },
    { day: "Saturday", shortDay: "Sat", open: "", close: "", isClosed: true },
    { day: "Sunday", shortDay: "Sun", open: "", close: "", isClosed: true },
  ],
  socials: {
    facebook: "https://facebook.com/155836567814729",
    instagram: "https://www.instagram.com/georgiadentalcenter",
    twitter: "https://twitter.com/GeorgiaDental",
    linkedin: "https://www.linkedin.com/in/ThomasJPriceDDS",
    youtube: "https://www.youtube.com/user/GeorgiaDentalCenter",
  },
  affiliations: {
    network: "Orahh Care Dental Community",
    networkUrl: "https://orahhcare.com/",
    aarpSelected: true,
    disclaimer:
      "Dental services are provided by independent dentists. Orahh Care Dental Community is a brand owned by Heartland Dental LLC, which provides administrative and business support services to dental practices. AARP and its affiliates do not employ the dentists and staff and are not responsible for the services provided by them.",
  },
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "/make-appointment",
  careCreditUrl: "https://www.carecredit.com/go/662KVR/",
};
