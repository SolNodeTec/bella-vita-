export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  tags: string[]; // e.g. ["Signature", "Vegetarian", "Gluten Free", "Spicy"]
  pairing: string; // Recommended wine pairing
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'details';
  image: string;
}

export interface DiningZone {
  id: string;
  name: string;
  description: string;
  capacity: string;
  ambiance: string;
  extraCharge?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  zone: string;
  specialRequests?: string;
  bookingCode: string;
  createdAt: string;
}
