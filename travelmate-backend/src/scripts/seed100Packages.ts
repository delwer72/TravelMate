// src/scripts/seed100Packages.ts
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const client = new MongoClient(process.env.MONGODB_URI!);

const rawPackages = [
  // 1 - 10
  {
    title: "Bali Tropical Paradise & Nusa Penida",
    slug: "bali-tropical-paradise-nusa-penida",
    destination: "Bali & Nusa Penida",
    country: "Indonesia",
    category: "Beach",
    description: "Experience crystal beaches, sacred water temples, lush Ubud rice terraces, and private catamaran cruises.",
    price: 850,
    discountPrice: 720,
    durationDays: 7,
    maxGroupSize: 12,
    ratingsAverage: 4.92,
    ratingsQuantity: 184,
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Nusa Penida Kelingking Beach", "Ubud Monkey Forest", "Jimbaran Sunset Seafood", "Balinese Spa Retreat"],
    included: ["4-Star Boutique Resort", "Daily Breakfast Buffet", "Airport Transfers", "English Speaking Guide"],
    excluded: ["International Airfare", "Personal Expenses"],
    startLocation: "Denpasar, Bali",
    departureDates: ["2026-09-15", "2026-10-01", "2026-10-20"]
  },
  {
    title: "Swiss Alps & Glacier Express Panorama",
    slug: "swiss-alps-glacier-express-panorama",
    destination: "Interlaken & Zermatt",
    country: "Switzerland",
    category: "Mountain",
    description: "Ride the legendary Glacier Express train, hike beneath the iconic Matterhorn, and gaze over majestic snowy peaks.",
    price: 1890,
    discountPrice: 1650,
    durationDays: 8,
    maxGroupSize: 10,
    ratingsAverage: 4.95,
    ratingsQuantity: 120,
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["1st Class Glacier Express Train", "Matterhorn Glacier Cable Car", "Jungfraujoch Top of Europe", "Lake Brienz Boat Cruise"],
    included: ["Swiss Travel Pass 1st Class", "Alpine Hotels", "Daily Breakfasts", "Fondue Tasting Dinner"],
    excluded: ["International Flights", "Lunches"],
    startLocation: "Zurich, Switzerland",
    departureDates: ["2026-09-20", "2026-10-10", "2026-11-15"]
  },
  {
    title: "Kyoto Ancient Temples & Neon Tokyo",
    slug: "kyoto-ancient-temples-neon-tokyo",
    destination: "Tokyo & Kyoto",
    country: "Japan",
    category: "Cultural",
    description: "Explore electric Tokyo streets, Fushimi Inari torii gates, tranquil Arashiyama bamboo groves, and Osaka food markets.",
    price: 1450,
    discountPrice: 1299,
    durationDays: 9,
    maxGroupSize: 14,
    ratingsAverage: 4.89,
    ratingsQuantity: 245,
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Shinkansen Bullet Train", "Fushimi Inari Shrine", "TeamLab Borderless", "Authentic Tea Ceremony"],
    included: ["7-Day JR Rail Pass", "4-Star Hotels & Ryokan", "Daily Breakfast & Kaiseki Dinner"],
    excluded: ["International Flights", "Personal Shopping"],
    startLocation: "Tokyo, Japan",
    departureDates: ["2026-09-18", "2026-10-05", "2026-10-25"]
  },
  {
    title: "Serengeti Great Migration & Ngorongoro Crater",
    slug: "serengeti-great-migration-ngorongoro",
    destination: "Serengeti & Ngorongoro",
    country: "Tanzania",
    category: "Wildlife",
    description: "Witness the legendary Great Migration, track the Big Five across open savannahs, and stay in luxury tented camps.",
    price: 2400,
    discountPrice: 2150,
    durationDays: 6,
    maxGroupSize: 6,
    ratingsAverage: 4.98,
    ratingsQuantity: 95,
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["4x4 Custom Safari Cruisers", "Ngorongoro Crater Descent", "Bush Dinners under Stars", "Maasai Village Cultural Visit"],
    included: ["Luxury Safari Lodges", "All Park Entry Fees", "Full Board Meals", "Expert Tracker"],
    excluded: ["International Airfare", "Visa Fees"],
    startLocation: "Kilimanjaro, Tanzania",
    departureDates: ["2026-09-25", "2026-10-15", "2026-11-20"]
  },
  {
    title: "Santorini Cliffside Luxury & Mykonos Odyssey",
    slug: "santorini-cliffside-luxury-mykonos",
    destination: "Santorini & Mykonos",
    country: "Greece",
    category: "Luxury",
    description: "Whitewashed infinity pools, azure Aegean waters, iconic blue domes, and private sunset catamaran cruises.",
    price: 1680,
    discountPrice: 1490,
    durationDays: 7,
    maxGroupSize: 10,
    ratingsAverage: 4.93,
    ratingsQuantity: 210,
    coverImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Sunset Catamaran Cruise with BBQ", "Oia Walking Tour", "Mykonos Windmills Cocktail", "Akrotiri Guided Tour"],
    included: ["Caldera View Boutique Hotels", "High-Speed Ferry", "Daily Greek Breakfast", "Airport Transfers"],
    excluded: ["International Airfare", "Personal Expenses"],
    startLocation: "Santorini, Greece",
    departureDates: ["2026-09-10", "2026-09-28", "2026-10-18"]
  },
  {
    title: "Classic Inca Trail & Machu Picchu Wonder",
    slug: "classic-inca-trail-machu-picchu-wonder",
    destination: "Cusco & Machu Picchu",
    country: "Peru",
    category: "Adventure",
    description: "Trek ancient Incan stone trails through high Andean cloud forests, reaching the breathtaking Lost City at sunrise.",
    price: 1250,
    discountPrice: 1100,
    durationDays: 6,
    maxGroupSize: 12,
    ratingsAverage: 4.96,
    ratingsQuantity: 195,
    coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Sunrise at Sun Gate", "Vistadome Scenic Train", "Pisac Artisan Market", "Sacred Valley Guided Trek"],
    included: ["Official Trail & Machu Picchu Permits", "Quechua Guide", "Camping Equipment", "All Trek Meals"],
    excluded: ["International Flights", "Sleeping Bag Rental"],
    startLocation: "Cusco, Peru",
    departureDates: ["2026-09-12", "2026-10-08", "2026-11-04"]
  },
  {
    title: "Amalfi Coast Scenic Drive & Capri Island",
    slug: "amalfi-coast-scenic-drive-capri",
    destination: "Positano, Amalfi & Capri",
    country: "Italy",
    category: "Luxury",
    description: "Marvel at dramatic cliffside coastal villages, sail to the Blue Grotto in Capri, and savor authentic Limoncello tastings.",
    price: 1550,
    discountPrice: 1390,
    durationDays: 6,
    maxGroupSize: 12,
    ratingsAverage: 4.88,
    ratingsQuantity: 140,
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"],
    featured: false,
    highlights: ["Private Capri Speedboat Tour", "Path of the Gods Cliff Hike", "Positano Sunset Wine Tasting", "Ravello Gardens Excursion"],
    included: ["Seaview Hotels", "Private Van Transfers", "Daily Italian Breakfast", "Boat Charters"],
    excluded: ["Flights", "City Tourist Tax"],
    startLocation: "Naples, Italy",
    departureDates: ["2026-09-14", "2026-10-02", "2026-10-22"]
  },
  {
    title: "Iceland Ring Road & Aurora Borealis Hunt",
    slug: "iceland-ring-road-aurora-borealis",
    destination: "Reykjavik & South Coast",
    country: "Iceland",
    category: "Adventure",
    description: "Explore volcanic waterfalls, soak in geothermal Blue Lagoon springs, hike blue ice glaciers, and hunt the Northern Lights.",
    price: 1980,
    discountPrice: 1750,
    durationDays: 8,
    maxGroupSize: 10,
    ratingsAverage: 4.97,
    ratingsQuantity: 160,
    coverImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Blue Lagoon Comfort Entry", "Vatnajokull Ice Cave Trek", "Skogafoss & Seljalandsfoss", "Diamond Beach Icebergs"],
    included: ["Custom 4x4 Winter Coach", "Nordic Country Hotels", "Daily Breakfast", "Glacier Safety Gear"],
    excluded: ["Flights", "Optional Snowmobiling"],
    startLocation: "Reykjavik, Iceland",
    departureDates: ["2026-10-01", "2026-10-20", "2026-11-10"]
  },
  {
    title: "Maldives Overwater Bungalow & Coral Reefs",
    slug: "maldives-overwater-bungalow-coral-reefs",
    destination: "Male & Baa Atoll",
    country: "Maldives",
    category: "Beach",
    description: "Stay suspended over turquoise lagoons, snorkel with manta rays, and enjoy world-class private dining on pristine sandbanks.",
    price: 2350,
    discountPrice: 2100,
    durationDays: 6,
    maxGroupSize: 8,
    ratingsAverage: 4.99,
    ratingsQuantity: 110,
    coverImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Overwater Villa with Glass Floor", "Manta Ray Snorkeling Safari", "Sunset Dolphin Cruise", "Private Sandbank Lunch"],
    included: ["All-Inclusive 5-Star Resort", "Seaplane Transfers", "All Meals & Premium Beverages", "Snorkeling Equipment"],
    excluded: ["International Airfare", "Spa Treatments"],
    startLocation: "Male, Maldives",
    departureDates: ["2026-09-18", "2026-10-12", "2026-11-05"]
  },
  {
    title: "Patagonia Glaciers & Torres del Paine Trek",
    slug: "patagonia-glaciers-torres-del-paine",
    destination: "El Calafate & Torres del Paine",
    country: "Chile & Argentina",
    category: "Mountain",
    description: "Hike past jagged granite towers, witness the roaring Perito Moreno glacier calving, and explore remote Patagonian wilderness.",
    price: 2150,
    discountPrice: 1920,
    durationDays: 9,
    maxGroupSize: 12,
    ratingsAverage: 4.94,
    ratingsQuantity: 88,
    coverImage: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    highlights: ["Perito Moreno Ice Trek", "Torres Base Granite Towers", "French Valley Panoramic Views", "Lago Grey Boat Cruise"],
    included: ["Mountain Eco-Lodges & Refugios", "Park Entry Permits", "Certified Mountain Guides", "All Transfers"],
    excluded: ["International Flights", "Personal Trek Gear"],
    startLocation: "El Calafate, Argentina",
    departureDates: ["2026-10-15", "2026-11-05", "2026-12-01"]
  },
];

// Helper to generate 90 additional varied packages programmatically
const destinationsPool = [
  { dest: "Paris & French Riviera", country: "France", cat: "Luxury", price: 1750, days: 7, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Rome, Florence & Venice", country: "Italy", cat: "Cultural", price: 1420, days: 8, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Cape Town & Garden Route", country: "South Africa", cat: "Wildlife", price: 1650, days: 8, img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Dubai Marina & Desert Dunes", country: "United Arab Emirates", cat: "Luxury", price: 1390, days: 5, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Banff & Canadian Rockies", country: "Canada", cat: "Mountain", price: 1580, days: 7, img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Queenstown & Milford Sound", country: "New Zealand", cat: "Adventure", price: 1890, days: 8, img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Phuket & Phi Phi Island Escapes", country: "Thailand", cat: "Beach", price: 790, days: 6, img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Cairo Pyramids & Nile Luxury Cruise", country: "Egypt", cat: "Cultural", price: 1350, days: 7, img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Rio de Janeiro & Iguazu Falls", country: "Brazil", cat: "Adventure", price: 1480, days: 7, img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Sydney Harbour & Great Barrier Reef", country: "Australia", cat: "Adventure", price: 2100, days: 9, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Galapagos Islands Wildlife Cruise", country: "Ecuador", cat: "Wildlife", price: 2600, days: 7, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Norwegian Fjords & Bergen Rail", country: "Norway", cat: "Mountain", price: 1750, days: 7, img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Prague, Vienna & Budapest Triple Gem", country: "Czech Republic & Austria", cat: "Cultural", price: 1280, days: 8, img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Costa Rica Volcanoes & Cloud Forests", country: "Costa Rica", cat: "Adventure", price: 1190, days: 7, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Barcelona Modernism & Costa Brava", country: "Spain", cat: "Cultural", price: 1150, days: 6, img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Marrakech Souks & Sahara Desert Dunes", country: "Morocco", cat: "Cultural", price: 980, days: 6, img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Petra Lost City & Wadi Rum Camp", country: "Jordan", cat: "Cultural", price: 1220, days: 6, img: "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Bora Bora Overwater Lagoon Bliss", country: "French Polynesia", cat: "Luxury", price: 2850, days: 6, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Amsterdam Canals & Windmill Villages", country: "Netherlands", cat: "Cultural", price: 1050, days: 5, img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Maui Road to Hana & Haleakala Volcano", country: "United States", cat: "Beach", price: 1690, days: 7, img: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Dubrovnik Old Walls & Korcula Island", country: "Croatia", cat: "Beach", price: 1120, days: 6, img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Taj Mahal & Royal Rajasthan Palaces", country: "India", cat: "Cultural", price: 950, days: 8, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Grand Canyon & Zion National Parks", country: "United States", cat: "Adventure", price: 1320, days: 6, img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Ha Long Bay Emerald Cruise & Hanoi", country: "Vietnam", cat: "Adventure", price: 780, days: 6, img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Cappadocia Hot Air Balloons & Cave Suites", country: "Turkey", cat: "Adventure", price: 1140, days: 5, img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Zanzibar White Sands & Spice Island", country: "Tanzania", cat: "Beach", price: 990, days: 6, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Seoul Palaces & K-Culture Experience", country: "South Korea", cat: "Cultural", price: 1250, days: 7, img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Cancun Maya Ruins & Hidden Cenotes", country: "Mexico", cat: "Beach", price: 890, days: 6, img: "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Lapland Reindeer Safari & Aurora Glass Igloo", country: "Finland", cat: "Adventure", price: 2150, days: 6, img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80" },
  { dest: "Mount Kilimanjaro Machame Route Summit", country: "Tanzania", cat: "Mountain", price: 2450, days: 7, img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80" },
];

const prefixes = [
  "Ultimate", "Grand", "Exclusive", "Magical", "Authentic", "Scenic", "Hidden", "Private", "Breathtaking", "Royal"
];

const generatedPackages: any[] = [...rawPackages];

let count = generatedPackages.length;
while (generatedPackages.length < 100) {
  const poolItem = destinationsPool[generatedPackages.length % destinationsPool.length];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const title = `${prefix} ${poolItem.dest} Expedition ${count + 1}`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const discount = Math.round(poolItem.price * 0.88);
  const rating = Number((4.7 + Math.random() * 0.29).toFixed(2));
  const reviews = Math.floor(40 + Math.random() * 220);

  generatedPackages.push({
    title,
    slug,
    destination: poolItem.dest,
    country: poolItem.country,
    category: poolItem.cat,
    description: `Immerse yourself in ${poolItem.dest}. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.`,
    price: poolItem.price + (count % 5) * 50,
    discountPrice: discount + (count % 5) * 40,
    durationDays: poolItem.days,
    maxGroupSize: Math.floor(8 + Math.random() * 8),
    ratingsAverage: rating,
    ratingsQuantity: reviews,
    coverImage: poolItem.img,
    images: [poolItem.img],
    featured: count % 6 === 0,
    highlights: ["Expert Local English Guide", "Handpicked Boutique Hotels", "Daily Gourmet Meals", "All Monument & Park Permits"],
    included: ["Hotel Accommodations", "Daily Breakfast", "Airport Transfers", "Activity Tickets"],
    excluded: ["International Airfare", "Personal Expenses"],
    startLocation: poolItem.dest.split('&')[0].trim(),
    departureDates: ["2026-09-20", "2026-10-15", "2026-11-10"],
    createdAt: new Date(Date.now() - (100 - count) * 3600 * 1000 * 24),
  });
  count++;
}

async function main() {
  await client.connect();
  const db = client.db('travelmate_db');
  console.log(`Clearing old packages and seeding 100 packages into travelmate_db.packages...`);
  await db.collection('packages').deleteMany({});
  const result = await db.collection('packages').insertMany(generatedPackages as any);
  console.log(`✅ Successfully seeded ${result.insertedCount} packages into travelmate_db.packages!`);
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
