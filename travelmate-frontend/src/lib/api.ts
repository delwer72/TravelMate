// src/lib/api.ts
import axios from 'axios';

export interface TourPackage {
  _id: string;
  title: string;
  slug: string;
  destination: string;
  country: string;
  category: 'Adventure' | 'Beach' | 'Cultural' | 'Wildlife' | 'Luxury' | 'City' | 'Mountain';
  description: string;
  price: number;
  discountPrice?: number;
  durationDays: number;
  maxGroupSize: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  coverImage: string;
  featured?: boolean;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  startLocation: string;
  departureDates: string[];
}

export interface Booking {
  _id: string;
  userId?: string;
  packageId: string;
  packageTitle: string;
  packageCoverImage?: string;
  destination: string;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  guestsCount: number;
  startDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  specialRequests?: string;
  createdAt: string;
}

export interface AdminStats {
  totalRevenue: number;
  totalBookings: number;
  totalUsers: number;
  totalPackages: number;
  monthlyRevenue: { month: string; revenue: number; bookings: number }[];
  statusBreakdown: { name: string; value: number; color: string }[];
  recentBookings: Booking[];
}

export interface UserStats {
  totalTrips: number;
  activeTrips: number;
  savedPlaces: number;
  totalSpent: number;
  rewardPoints: number;
  recentBookings: Booking[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fallback mock packages in case backend is offline
export const FALLBACK_PACKAGES: TourPackage[] = [
  {
    _id: "pkg-1",
    title: "Bali Tropical Paradise & Island Hopping",
    slug: "bali-tropical-paradise",
    destination: "Bali, Indonesia",
    country: "Indonesia",
    category: "Beach",
    description: "Experience the ultimate tropical vacation in Bali with crystal-clear beaches, sacred temples, private pool villas, and sunset boat cruises around Nusa Penida.",
    price: 850,
    discountPrice: 720,
    durationDays: 7,
    maxGroupSize: 12,
    ratingsAverage: 4.9,
    ratingsQuantity: 142,
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["Nusa Penida Kelingking Beach tour", "Ubud Monkey Forest & Rice Terraces", "Sunset Seafood Dinner at Jimbaran", "Traditional Balinese Massage Session"],
    included: ["4-Star Resort Accommodations", "Daily Buffet Breakfast", "All Airport Transfers", "English-speaking Local Guide", "Speedboat Tickets"],
    excluded: ["International Airfare", "Personal Expenses", "Travel Insurance"],
    itinerary: [
      { day: 1, title: "Arrival & Seminyak Welcome Dinner", description: "Arrive at Ngurah Rai International Airport, transfer to resort, relax and enjoy beachside dinner." },
      { day: 2, title: "Ubud Cultural Tour & Sacred Monkey Forest", description: "Explore the lush art capital Ubud, Tegallalang rice terraces, and coffee plantation." },
      { day: 3, title: "Nusa Penida Island Day Cruise", description: "Speedboat across to Nusa Penida to visit Kelingking cliff and snorkel in crystal waters." },
      { day: 4, title: "Uluwatu Temple & Kecak Fire Dance", description: "Cliffside temple views followed by mystical sunset fire dance and Jimbaran seafood." },
      { day: 5, title: "Leisure & Spa Retreat", description: "Enjoy complimentary spa treatment and shopping in Canggu." },
      { day: 6, title: "Mount Batur Sunrise Trekking", description: "Early morning hike for breath-taking volcanic sunrise and hot springs." },
      { day: 7, title: "Souvenir Shopping & Farewell", description: "Check out and private transfer to airport." }
    ],
    startLocation: "Denpasar, Bali",
    departureDates: ["2026-09-15", "2026-10-01", "2026-10-20", "2026-11-05"]
  },
  {
    _id: "pkg-2",
    title: "Swiss Alps Adventure & Glacier Express",
    slug: "swiss-alps-adventure",
    destination: "Interlaken & Zermatt",
    country: "Switzerland",
    category: "Mountain",
    description: "Witness majestic alpine peaks, ride the world-famous Glacier Express scenic train, and hike through postcard-perfect valleys beneath the Matterhorn.",
    price: 1890,
    discountPrice: 1650,
    durationDays: 8,
    maxGroupSize: 10,
    ratingsAverage: 4.95,
    ratingsQuantity: 98,
    images: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["First-class Glacier Express scenic train pass", "Matterhorn Glacier Paradise cable car", "Jungfraujoch – Top of Europe excursion", "Lake Brienz boat cruise"],
    included: ["Swiss Travel Pass 8-Day 1st Class", "Alpine Boutique Hotels", "Daily Gourmet Breakfasts", "Fondue dinner experience"],
    excluded: ["International flights", "Lunches", "Optional paragliding"],
    itinerary: [
      { day: 1, title: "Zurich to Lucerne", description: "Arrive in Zurich and train to picturesque Lucerne." },
      { day: 2, title: "Lucerne to Interlaken", description: "GoldenPass scenic railway and Lake Brienz cruise." },
      { day: 3, title: "Jungfraujoch Expedition", description: "Ascend to Europe's highest railway station." },
      { day: 4, title: "Lauterbrunnen Valley Waterfalls", description: "Hike among 72 roaring waterfalls in glacier valley." },
      { day: 5, title: "Glacier Express to Zermatt", description: "Panoramic train ride through breathtaking mountain passes." },
      { day: 6, title: "Matterhorn Glacier Paradise", description: "Highest cable car station in Europe with 360-degree views." },
      { day: 7, title: "Gornergrat Mountain Railway", description: "Cogwheel train ride and reflection photos in Riffelsee." },
      { day: 8, title: "Departure from Geneva/Zurich", description: "Return train to airport with unforgettable memories." }
    ],
    startLocation: "Zurich, Switzerland",
    departureDates: ["2026-09-20", "2026-10-10", "2026-11-15"]
  },
  {
    _id: "pkg-3",
    title: "Kyoto & Tokyo Cultural Discovery",
    slug: "kyoto-tokyo-cultural-discovery",
    destination: "Tokyo, Kyoto & Osaka",
    country: "Japan",
    category: "Cultural",
    description: "Immerse yourself in neon-lit modern Tokyo, serene bamboo groves of Arashiyama, ancient torii gates in Fushimi Inari, and authentic Michelin culinary street markets.",
    price: 1450,
    discountPrice: 1299,
    durationDays: 9,
    maxGroupSize: 14,
    ratingsAverage: 4.88,
    ratingsQuantity: 210,
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["Shinkansen Bullet Train experience", "Fushimi Inari Thousand Torii Shrine walk", "Tokyo Shibuya Crossing & TeamLab Borderless", "Authentic Tea Ceremony with a Geisha apprentice"],
    included: ["JR Rail Pass 7 Days", "4-Star Modern & Ryokan Hotels", "Daily Breakfast & 2 Kaiseki Dinners", "Subway passes and English guide"],
    excluded: ["International Airfare", "Personal shopping"],
    itinerary: [
      { day: 1, title: "Tokyo Arrival & Shinjuku Night Walk", description: "Touch down in Tokyo and explore illuminated neon alleys." },
      { day: 2, title: "Asakusa Senso-ji & Akihabara", description: "Ancient temple juxtaposed with electric city tech culture." },
      { day: 3, title: "Shibuya, Harajuku & Meiji Shrine", description: "Iconic scramble crossing and tranquil forest shrine." },
      { day: 4, title: "Bullet Train to Kyoto", description: "Speed across Japan past Mount Fuji into ancient Kyoto." },
      { day: 5, title: "Kinkaku-ji Golden Pavilion & Arashiyama", description: "Marvel at golden architecture and bamboo paths." },
      { day: 6, title: "Fushimi Inari & Gion Geisha District", description: "Sunrise gate walk followed by traditional tea ceremony." },
      { day: 7, title: "Nara Deer Park Day Trip", description: "Feed friendly bowing sika deer and visit giant Buddha." },
      { day: 8, title: "Osaka Dotonbori Street Food Tour", description: "Takoyaki, okonomiyaki, and Osaka castle." },
      { day: 9, title: "Kansai Airport Departure", description: "Sayonara Japan with full luggage and happy memories." }
    ],
    startLocation: "Tokyo, Japan",
    departureDates: ["2026-09-18", "2026-10-05", "2026-10-25", "2026-11-12"]
  },
  {
    _id: "pkg-4",
    title: "Serengeti & Masai Mara Wildlife Safari",
    slug: "serengeti-masai-mara-safari",
    destination: "Serengeti & Ngorongoro",
    country: "Tanzania",
    category: "Wildlife",
    description: "Track the Big Five across the endless golden plains of the Serengeti, descend into the lush Ngorongoro Crater, and stay in luxurious tented safari camps.",
    price: 2400,
    discountPrice: 2150,
    durationDays: 6,
    maxGroupSize: 6,
    ratingsAverage: 4.98,
    ratingsQuantity: 76,
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    highlights: ["Big 5 Game Drives in 4x4 Land Cruiser with pop-up roof", "Ngorongoro Crater descent", "Sunset bush dinners under African stars", "Maasai cultural village experience"],
    included: ["Luxury Safari Lodges", "All National Park Entry Fees", "Full Board Meals on Safari", "Expert Safari Tracker & Driver"],
    excluded: ["International Airfare", "Visa Fees", "Guide Gratuities"],
    itinerary: [
      { day: 1, title: "Arusha to Tarangire National Park", description: "Elephant herds and iconic giant baobab trees." },
      { day: 2, title: "Lake Manyara & Rift Valley", description: "Tree-climbing lions and thousands of pink flamingos." },
      { day: 3, title: "Central Serengeti Endless Plains", description: "Drive into predator country with cheetahs and lion prides." },
      { day: 4, title: "Full Day Serengeti Game Drive", description: "Witness the great migration and elusive leopards." },
      { day: 5, title: "Ngorongoro Crater Floor", description: "Descend 600m into wildlife paradise with black rhinos." },
      { day: 6, title: "Return to Kilimanjaro Airport", description: "Morning Maasai visit and return transfer." }
    ],
    startLocation: "Kilimanjaro, Tanzania",
    departureDates: ["2026-09-25", "2026-10-15", "2026-11-20"]
  },
  {
    _id: "pkg-5",
    title: "Santorini & Mykonos Cyclades Odyssey",
    slug: "santorini-mykonos-odyssey",
    destination: "Santorini & Mykonos",
    country: "Greece",
    category: "Luxury",
    description: "Whitewashed caldera suites, azure waters, world-class beach clubs, and iconic blue-domed churches in the enchanting Greek Cyclades islands.",
    price: 1680,
    discountPrice: 1490,
    durationDays: 7,
    maxGroupSize: 10,
    ratingsAverage: 4.92,
    ratingsQuantity: 165,
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    highlights: ["Semi-private sunset catamaran cruise with BBQ & wine", "Oia cliffside photo walking tour", "Mykonos Little Venice & Windmills sunset cocktail", "Akrotiri prehistoric ruins guided visit"],
    included: ["Caldera view 4-star boutique hotels", "High-speed ferry between Santorini & Mykonos", "Daily Greek breakfast buffet", "Private port and airport transfers"],
    excluded: ["International flights", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Welcome to Santorini", description: "Check into cliffside hotel and take in panoramic Aegean views." },
      { day: 2, title: "Oia & Fira Hike & Sunset", description: "Stroll scenic cobblestone lanes and capture iconic blue domes." },
      { day: 3, title: "Catamaran Cruise & Red Beach", description: "Sail volcanic hot springs, snorkel, and enjoy onboard Greek feast." },
      { day: 4, title: "High-Speed Ferry to Mykonos", description: "Arrive in Mykonos and check in to beachside resort." },
      { day: 5, title: "Mykonos Windmills & Little Venice", description: "Explore the labyrinth of Chora and sunset cocktails." },
      { day: 6, title: "Delos Island Sacred Sanctuary Tour", description: "Boat excursion to birthplace of Apollo with ancient ruins." },
      { day: 7, title: "Farewell Cyclades", description: "Transfer to airport for return flight." }
    ],
    startLocation: "Santorini, Greece",
    departureDates: ["2026-09-10", "2026-09-28", "2026-10-18"]
  },
  {
    _id: "pkg-6",
    title: "Inca Trail & Machu Picchu Wonder",
    slug: "inca-trail-machu-picchu",
    destination: "Cusco & Sacred Valley",
    country: "Peru",
    category: "Adventure",
    description: "Follow the stone paths of the Incas through cloud forests, mountain passes, and sacred ruins leading to the legendary Lost City of Machu Picchu.",
    price: 1250,
    discountPrice: 1100,
    durationDays: 6,
    maxGroupSize: 12,
    ratingsAverage: 4.96,
    ratingsQuantity: 180,
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    highlights: ["Sunrise entry to Machu Picchu Citadel", "Scenic Vistadome panoramic train ride", "Sacred Valley artisan markets in Pisac", "Guided Cusco colonial & Incan architecture tour"],
    included: ["Official Inca Trail & Machu Picchu permits", "Certified Quechua English-speaking guide", "Hotels & luxury camp equipment", "All meals during trek"],
    excluded: ["International flights", "Sleeping bag rental", "Tips"],
    itinerary: [
      { day: 1, title: "Cusco Acclimatization & City Tour", description: "Explore Plaza de Armas and ancient Incan stonework." },
      { day: 2, title: "Sacred Valley & Ollantaytambo", description: "Visit Pisac ruins and massive Incan fortress." },
      { day: 3, title: "Classic Inca Trail Day 1", description: "Begin trek along the Urubamba river to Wayllabamba." },
      { day: 4, title: "Dead Woman's Pass (4215m)", description: "Conquer the highest mountain pass with stunning Andes views." },
      { day: 5, title: "Sun Gate to Machu Picchu", description: "Descend into the citadel at golden afternoon light." },
      { day: 6, title: "Machu Picchu In-depth & Train to Cusco", description: "Comprehensive guided history tour and return train." }
    ],
    startLocation: "Cusco, Peru",
    departureDates: ["2026-09-12", "2026-10-08", "2026-11-04"]
  }
];

export const FALLBACK_BOOKINGS: Booking[] = [
  {
    _id: "bk-101",
    packageId: "pkg-1",
    packageTitle: "Bali Tropical Paradise & Island Hopping",
    packageCoverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    destination: "Bali, Indonesia",
    travelerName: "Alex Morgan",
    travelerEmail: "alex.morgan@travelmate.com",
    travelerPhone: "+1 (555) 234-5678",
    guestsCount: 2,
    startDate: "2026-10-01",
    totalPrice: 1440,
    status: "confirmed",
    paymentStatus: "paid",
    specialRequests: "Vegetarian breakfast and ocean-view room please",
    createdAt: "2026-08-25T10:30:00Z"
  },
  {
    _id: "bk-102",
    packageId: "pkg-2",
    packageTitle: "Swiss Alps Adventure & Glacier Express",
    packageCoverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    destination: "Interlaken & Zermatt",
    travelerName: "Sarah Jenkins",
    travelerEmail: "sarah.j@example.com",
    travelerPhone: "+44 20 7946 0912",
    guestsCount: 1,
    startDate: "2026-11-15",
    totalPrice: 1650,
    status: "pending",
    paymentStatus: "paid",
    specialRequests: "Window seat preference on Glacier Express",
    createdAt: "2026-08-28T14:15:00Z"
  },
  {
    _id: "bk-103",
    packageId: "pkg-3",
    packageTitle: "Kyoto & Tokyo Cultural Discovery",
    packageCoverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    destination: "Tokyo, Kyoto & Osaka",
    travelerName: "David Chen",
    travelerEmail: "david.chen@example.com",
    travelerPhone: "+1 (415) 889-1234",
    guestsCount: 2,
    startDate: "2026-09-18",
    totalPrice: 2598,
    status: "confirmed",
    paymentStatus: "paid",
    specialRequests: "Anniversary celebration amenity",
    createdAt: "2026-08-20T09:00:00Z"
  },
  {
    _id: "bk-104",
    packageId: "pkg-4",
    packageTitle: "Serengeti & Masai Mara Wildlife Safari",
    packageCoverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    destination: "Serengeti & Ngorongoro",
    travelerName: "Emma Watson",
    travelerEmail: "emma.w@example.com",
    travelerPhone: "+61 2 9876 5432",
    guestsCount: 2,
    startDate: "2026-07-10",
    totalPrice: 4300,
    status: "completed",
    paymentStatus: "paid",
    specialRequests: "Airport pick up at JRO",
    createdAt: "2026-06-15T12:00:00Z"
  }
];

// In-memory stored bookings/packages for dynamic interactive state in browser
let localPackages = [...FALLBACK_PACKAGES];
let localBookings = [...FALLBACK_BOOKINGS];

export const getPackages = async (params: {
  category?: string;
  destination?: string;
  search?: string;
  maxPrice?: number;
  sort?: string;
} = {}): Promise<TourPackage[]> => {
  try {
    const res = await apiClient.get('/packages', { params });
    if (res.data?.data && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (err) {
    // Graceful fallback
  }

  let filtered = [...localPackages];
  if (params.category && params.category !== 'All') {
    filtered = filtered.filter(p => p.category.toLowerCase() === params.category?.toLowerCase());
  }
  if (params.destination) {
    const q = params.destination.toLowerCase();
    filtered = filtered.filter(p => p.destination.toLowerCase().includes(q) || p.country.toLowerCase().includes(q));
  }
  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.destination.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }
  if (params.maxPrice) {
    filtered = filtered.filter(p => p.price <= params.maxPrice!);
  }
  if (params.sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (params.sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (params.sort === 'rating') {
    filtered.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  }

  return filtered;
};

export const getPackageByIdOrSlug = async (idOrSlug: string): Promise<TourPackage | null> => {
  try {
    const res = await apiClient.get(`/packages/${idOrSlug}`);
    if (res.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    // Graceful fallback
  }

  const pkg = localPackages.find(p => p._id === idOrSlug || p.slug === idOrSlug);
  return pkg || null;
};

export const submitBooking = async (bookingData: Omit<Booking, '_id' | 'createdAt'>): Promise<Booking> => {
  try {
    const res = await apiClient.post('/bookings', bookingData);
    if (res.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    // Graceful fallback
  }

  const newBooking: Booking = {
    ...bookingData,
    _id: `bk-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
  };
  localBookings = [newBooking, ...localBookings];
  return newBooking;
};

export const getUserBookings = async (): Promise<Booking[]> => {
  try {
    const res = await apiClient.get('/bookings/my');
    if (res.data?.data) return res.data.data;
  } catch (err) {
    // Fallback
  }
  return localBookings;
};

export const getAdminBookings = async (): Promise<Booking[]> => {
  try {
    const res = await apiClient.get('/bookings');
    if (res.data?.data) return res.data.data;
  } catch (err) {
    // Fallback
  }
  return localBookings;
};

export const updateBookingStatus = async (
  id: string,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
): Promise<boolean> => {
  try {
    await apiClient.patch(`/bookings/${id}/status`, { status });
    return true;
  } catch (err) {
    // Fallback
  }

  localBookings = localBookings.map(b => b._id === id ? { ...b, status } : b);
  return true;
};

export const getAdminStats = async (): Promise<AdminStats> => {
  try {
    const res = await apiClient.get('/dashboard/admin');
    if (res.data?.stats) return res.data.stats;
  } catch (err) {
    // Fallback
  }

  const totalRevenue = localBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
  return {
    totalRevenue: totalRevenue || 54600,
    totalBookings: localBookings.length,
    totalUsers: 184,
    totalPackages: localPackages.length,
    monthlyRevenue: [
      { month: 'Jan', revenue: 4200, bookings: 5 },
      { month: 'Feb', revenue: 5800, bookings: 7 },
      { month: 'Mar', revenue: 7100, bookings: 9 },
      { month: 'Apr', revenue: 8400, bookings: 11 },
      { month: 'May', revenue: 10500, bookings: 14 },
      { month: 'Jun', revenue: 12900, bookings: 17 },
      { month: 'Jul', revenue: 15400, bookings: 21 },
      { month: 'Aug', revenue: 18200, bookings: 25 },
    ],
    statusBreakdown: [
      { name: 'Confirmed', value: localBookings.filter(b => b.status === 'confirmed').length || 18, color: '#10B981' },
      { name: 'Pending', value: localBookings.filter(b => b.status === 'pending').length || 4, color: '#F59E0B' },
      { name: 'Completed', value: localBookings.filter(b => b.status === 'completed').length || 14, color: '#6366F1' },
      { name: 'Cancelled', value: localBookings.filter(b => b.status === 'cancelled').length || 1, color: '#EF4444' },
    ],
    recentBookings: localBookings.slice(0, 5),
  };
};

export const getUserStats = async (): Promise<UserStats> => {
  try {
    const res = await apiClient.get('/dashboard/user');
    if (res.data?.stats) return res.data.stats;
  } catch (err) {
    // Fallback
  }

  const totalSpent = localBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
  return {
    totalTrips: localBookings.length,
    activeTrips: localBookings.filter(b => b.status === 'confirmed').length,
    savedPlaces: 5,
    totalSpent: totalSpent || 3190,
    rewardPoints: Math.floor((totalSpent || 3190) * 0.1),
    recentBookings: localBookings,
  };
};

export const createPackage = async (packageData: Partial<TourPackage>): Promise<TourPackage> => {
  try {
    const res = await apiClient.post('/packages', packageData);
    if (res.data?.data) return res.data.data;
  } catch (err) {
    // Fallback
  }

  const newPkg: TourPackage = {
    _id: `pkg-${Date.now()}`,
    title: packageData.title || 'New Tour Package',
    slug: (packageData.title || 'new-tour').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    destination: packageData.destination || 'Global',
    country: packageData.country || 'Global',
    category: packageData.category || 'Adventure',
    description: packageData.description || 'Wonderful travel experience.',
    price: Number(packageData.price) || 999,
    discountPrice: packageData.discountPrice ? Number(packageData.discountPrice) : undefined,
    durationDays: Number(packageData.durationDays) || 5,
    maxGroupSize: Number(packageData.maxGroupSize) || 12,
    ratingsAverage: 5.0,
    ratingsQuantity: 1,
    images: packageData.images || ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
    coverImage: packageData.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    featured: packageData.featured || false,
    highlights: packageData.highlights || ['Panoramic views', 'Guided trek'],
    included: packageData.included || ['Hotel stay', 'Daily breakfast'],
    excluded: packageData.excluded || ['Flight tickets'],
    itinerary: packageData.itinerary || [{ day: 1, title: 'Arrival', description: 'Welcome greeting and hotel check-in.' }],
    startLocation: packageData.startLocation || 'City Center',
    departureDates: packageData.departureDates || ['2026-10-15'],
  };

  localPackages = [newPkg, ...localPackages];
  return newPkg;
};

export const deletePackage = async (id: string): Promise<boolean> => {
  try {
    await apiClient.delete(`/packages/${id}`);
    return true;
  } catch (err) {
    // Fallback
  }

  localPackages = localPackages.filter(p => p._id !== id);
  return true;
};
