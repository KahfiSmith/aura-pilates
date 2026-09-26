export interface ClassCategory {
  id: string;
  name: string;
  subtitle: string;
  level: string;
  duration: string;
  intensity: string;
  capacity: string;
  description: string;
  benefits: string[];
  suitableFor: string;
  image: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  dayShort: string;
  time: string;
  className: string;
  level: string;
  instructorName: string;
  instructorRole: string;
  room: string;
  spotsLeft: number;
  totalSpots: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  pricePerSession: string;
  credits: string;
  validity: string;
  benefits: string[];
  isPopular?: boolean;
  badge?: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  certifications: string[];
  experience: string;
  specialty: string;
  bio: string;
  photo: string;
  quote: string;
}

export interface StudioAmenity {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  image: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  classType: string;
  rating: number;
  comment: string;
  result: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StudioPillar {
  number: string;
  title: string;
  desc: string;
  highlight: string;
}

export interface StudioConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  accreditation: string;
  contact: {
    phone: string;
    formattedPhone: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    address: string;
    district: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    openStreetMapUrl: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  schedule: {
    days: string;
    hours: string;
  }[];
  pillars: StudioPillar[];
  classes: ClassCategory[];
  timetable: ScheduleItem[];
  pricing: PricingPackage[];
  instructors: Instructor[];
  amenities: StudioAmenity[];
  reviews: ClientReview[];
  faqs: FaqItem[];
}
