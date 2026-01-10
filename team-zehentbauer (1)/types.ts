export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export type LegalDocType = 'agb' | 'impressum' | 'datenschutz';

export interface ImageData {
  src: string;
  fallback: string;
  alt: string;
}