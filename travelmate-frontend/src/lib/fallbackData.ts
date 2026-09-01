// src/lib/fallbackData.ts
import { TourPackage, AdminStats, UserStats } from './api';

export const FALLBACK_PACKAGES: TourPackage[] = [
  {
    "_id": "pkg-1",
    "title": "Bali Tropical Paradise & Nusa Penida",
    "slug": "bali-tropical-paradise-nusa-penida",
    "destination": "Bali & Nusa Penida",
    "country": "Indonesia",
    "category": "Beach",
    "description": "Experience crystal beaches, sacred water temples, lush Ubud rice terraces, and private catamaran cruises.",
    "price": 850,
    "discountPrice": 720,
    "durationDays": 7,
    "maxGroupSize": 12,
    "ratingsAverage": 4.92,
    "ratingsQuantity": 184,
    "coverImage": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Nusa Penida Kelingking Beach",
      "Ubud Monkey Forest",
      "Jimbaran Sunset Seafood",
      "Balinese Spa Retreat"
    ],
    "included": [
      "4-Star Boutique Resort",
      "Daily Breakfast Buffet",
      "Airport Transfers",
      "English Speaking Guide"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome Dinner",
        "description": "Arrive at Ngurah Rai International Airport, transfer to resort."
      },
      {
        "day": 2,
        "title": "Ubud Cultural Tour",
        "description": "Explore Ubud, Tegallalang rice terraces, and coffee plantation."
      },
      {
        "day": 3,
        "title": "Nusa Penida Island Cruise",
        "description": "Speedboat to Nusa Penida to visit Kelingking cliff and snorkel."
      },
      {
        "day": 4,
        "title": "Uluwatu Temple & Fire Dance",
        "description": "Cliffside temple views followed by mystical sunset fire dance."
      },
      {
        "day": 5,
        "title": "Spa & Wellness Day",
        "description": "Enjoy complimentary spa treatment and shopping in Canggu."
      },
      {
        "day": 6,
        "title": "Mount Batur Sunrise Trek",
        "description": "Early morning hike for breathtaking volcanic sunrise."
      },
      {
        "day": 7,
        "title": "Departure",
        "description": "Check out and private transfer to airport."
      }
    ],
    "startLocation": "Denpasar, Bali",
    "departureDates": [
      "2026-09-15",
      "2026-10-01",
      "2026-10-20"
    ]
  },
  {
    "_id": "pkg-2",
    "title": "Swiss Alps & Glacier Express Panorama",
    "slug": "swiss-alps-glacier-express-panorama",
    "destination": "Interlaken & Zermatt",
    "country": "Switzerland",
    "category": "Mountain",
    "description": "Ride the legendary Glacier Express train, hike beneath the iconic Matterhorn, and gaze over majestic snowy peaks.",
    "price": 1890,
    "discountPrice": 1650,
    "durationDays": 8,
    "maxGroupSize": 10,
    "ratingsAverage": 4.95,
    "ratingsQuantity": 120,
    "coverImage": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "1st Class Glacier Express Train",
      "Matterhorn Glacier Cable Car",
      "Jungfraujoch Top of Europe",
      "Lake Brienz Boat Cruise"
    ],
    "included": [
      "Swiss Travel Pass 1st Class",
      "Alpine Hotels",
      "Daily Breakfasts",
      "Fondue Tasting Dinner"
    ],
    "excluded": [
      "International Flights",
      "Lunches"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zurich to Lucerne",
        "description": "Arrive in Zurich and train to picturesque Lucerne."
      },
      {
        "day": 2,
        "title": "Lucerne to Interlaken",
        "description": "GoldenPass scenic railway and Lake Brienz cruise."
      },
      {
        "day": 3,
        "title": "Jungfraujoch Top of Europe",
        "description": "Ascend to Europe highest railway station."
      },
      {
        "day": 4,
        "title": "Lauterbrunnen Valley",
        "description": "Hike among 72 roaring waterfalls in glacier valley."
      },
      {
        "day": 5,
        "title": "Glacier Express to Zermatt",
        "description": "Panoramic train ride through breathtaking mountain passes."
      },
      {
        "day": 6,
        "title": "Matterhorn Glacier Paradise",
        "description": "Highest cable car station in Europe with 360 views."
      },
      {
        "day": 7,
        "title": "Gornergrat Railway",
        "description": "Cogwheel train ride and reflection photos in Riffelsee."
      },
      {
        "day": 8,
        "title": "Departure",
        "description": "Return train to airport."
      }
    ],
    "startLocation": "Zurich, Switzerland",
    "departureDates": [
      "2026-09-20",
      "2026-10-10",
      "2026-11-15"
    ]
  },
  {
    "_id": "pkg-3",
    "title": "Kyoto Ancient Temples & Neon Tokyo",
    "slug": "kyoto-ancient-temples-neon-tokyo",
    "destination": "Tokyo & Kyoto",
    "country": "Japan",
    "category": "Cultural",
    "description": "Explore electric Tokyo streets, Fushimi Inari torii gates, tranquil Arashiyama bamboo groves, and Osaka food markets.",
    "price": 1450,
    "discountPrice": 1299,
    "durationDays": 9,
    "maxGroupSize": 14,
    "ratingsAverage": 4.89,
    "ratingsQuantity": 245,
    "coverImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Shinkansen Bullet Train",
      "Fushimi Inari Shrine",
      "TeamLab Borderless",
      "Authentic Tea Ceremony"
    ],
    "included": [
      "7-Day JR Rail Pass",
      "4-Star Hotels & Ryokan",
      "Daily Breakfast & Kaiseki Dinner"
    ],
    "excluded": [
      "International Flights",
      "Personal Shopping"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tokyo Arrival",
        "description": "Touch down in Tokyo and explore illuminated neon alleys."
      },
      {
        "day": 2,
        "title": "Asakusa & Akihabara",
        "description": "Ancient temple juxtaposed with electric city tech culture."
      },
      {
        "day": 3,
        "title": "Shibuya & Meiji Shrine",
        "description": "Iconic scramble crossing and tranquil forest shrine."
      },
      {
        "day": 4,
        "title": "Bullet Train to Kyoto",
        "description": "Speed across Japan past Mount Fuji into ancient Kyoto."
      },
      {
        "day": 5,
        "title": "Golden Pavilion & Arashiyama",
        "description": "Marvel at golden architecture and bamboo paths."
      },
      {
        "day": 6,
        "title": "Fushimi Inari & Gion",
        "description": "Sunrise gate walk followed by traditional tea ceremony."
      },
      {
        "day": 7,
        "title": "Nara Deer Park",
        "description": "Feed friendly bowing sika deer and visit giant Buddha."
      },
      {
        "day": 8,
        "title": "Osaka Food Tour",
        "description": "Takoyaki, okonomiyaki, and Osaka castle."
      },
      {
        "day": 9,
        "title": "Departure",
        "description": "Kansai Airport departure."
      }
    ],
    "startLocation": "Tokyo, Japan",
    "departureDates": [
      "2026-09-18",
      "2026-10-05",
      "2026-10-25"
    ]
  },
  {
    "_id": "pkg-4",
    "title": "Serengeti Great Migration & Ngorongoro Crater",
    "slug": "serengeti-great-migration-ngorongoro",
    "destination": "Serengeti & Ngorongoro",
    "country": "Tanzania",
    "category": "Wildlife",
    "description": "Witness the legendary Great Migration, track the Big Five across open savannahs, and stay in luxury tented camps.",
    "price": 2400,
    "discountPrice": 2150,
    "durationDays": 6,
    "maxGroupSize": 6,
    "ratingsAverage": 4.98,
    "ratingsQuantity": 95,
    "coverImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "4x4 Custom Safari Cruisers",
      "Ngorongoro Crater Descent",
      "Bush Dinners under Stars",
      "Maasai Village Cultural Visit"
    ],
    "included": [
      "Luxury Safari Lodges",
      "All Park Entry Fees",
      "Full Board Meals",
      "Expert Tracker"
    ],
    "excluded": [
      "International Airfare",
      "Visa Fees"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arusha to Tarangire",
        "description": "Elephant herds and iconic giant baobab trees."
      },
      {
        "day": 2,
        "title": "Lake Manyara",
        "description": "Tree-climbing lions and thousands of pink flamingos."
      },
      {
        "day": 3,
        "title": "Serengeti Plains",
        "description": "Drive into predator country with cheetahs and lion prides."
      },
      {
        "day": 4,
        "title": "Migration Safari",
        "description": "Witness the great migration and elusive leopards."
      },
      {
        "day": 5,
        "title": "Ngorongoro Crater",
        "description": "Descend 600m into wildlife paradise with black rhinos."
      },
      {
        "day": 6,
        "title": "Departure",
        "description": "Morning Maasai visit and return transfer."
      }
    ],
    "startLocation": "Kilimanjaro, Tanzania",
    "departureDates": [
      "2026-09-25",
      "2026-10-15",
      "2026-11-20"
    ]
  },
  {
    "_id": "pkg-5",
    "title": "Santorini Cliffside Luxury & Mykonos Odyssey",
    "slug": "santorini-cliffside-luxury-mykonos",
    "destination": "Santorini & Mykonos",
    "country": "Greece",
    "category": "Luxury",
    "description": "Whitewashed infinity pools, azure Aegean waters, iconic blue domes, and private sunset catamaran cruises.",
    "price": 1680,
    "discountPrice": 1490,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.93,
    "ratingsQuantity": 210,
    "coverImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Sunset Catamaran Cruise with BBQ",
      "Oia Walking Tour",
      "Mykonos Windmills Cocktail",
      "Akrotiri Guided Tour"
    ],
    "included": [
      "Caldera View Boutique Hotels",
      "High-Speed Ferry",
      "Daily Greek Breakfast",
      "Airport Transfers"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Welcome to Santorini",
        "description": "Check into cliffside hotel and take in panoramic views."
      },
      {
        "day": 2,
        "title": "Oia Hike & Sunset",
        "description": "Stroll scenic cobblestone lanes and blue domes."
      },
      {
        "day": 3,
        "title": "Catamaran Cruise",
        "description": "Sail volcanic hot springs, snorkel, and enjoy feast."
      },
      {
        "day": 4,
        "title": "Ferry to Mykonos",
        "description": "Arrive in Mykonos and check in to beachside resort."
      },
      {
        "day": 5,
        "title": "Windmills & Little Venice",
        "description": "Explore the labyrinth of Chora and sunset cocktails."
      },
      {
        "day": 6,
        "title": "Delos Island Sanctuary",
        "description": "Boat excursion to birthplace of Apollo with ancient ruins."
      },
      {
        "day": 7,
        "title": "Departure",
        "description": "Transfer to airport for return flight."
      }
    ],
    "startLocation": "Santorini, Greece",
    "departureDates": [
      "2026-09-10",
      "2026-09-28",
      "2026-10-18"
    ]
  },
  {
    "_id": "pkg-6",
    "title": "Classic Inca Trail & Machu Picchu Wonder",
    "slug": "classic-inca-trail-machu-picchu-wonder",
    "destination": "Cusco & Machu Picchu",
    "country": "Peru",
    "category": "Adventure",
    "description": "Trek ancient Incan stone trails through high Andean cloud forests, reaching the breathtaking Lost City at sunrise.",
    "price": 1250,
    "discountPrice": 1100,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.96,
    "ratingsQuantity": 195,
    "coverImage": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Sunrise at Sun Gate",
      "Vistadome Scenic Train",
      "Pisac Artisan Market",
      "Sacred Valley Guided Trek"
    ],
    "included": [
      "Official Trail & Machu Picchu Permits",
      "Quechua Guide",
      "Camping Equipment",
      "All Trek Meals"
    ],
    "excluded": [
      "International Flights",
      "Sleeping Bag Rental"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Cusco City Tour",
        "description": "Explore Plaza de Armas and ancient Incan stonework."
      },
      {
        "day": 2,
        "title": "Sacred Valley",
        "description": "Visit Pisac ruins and massive Incan fortress."
      },
      {
        "day": 3,
        "title": "Inca Trail Trek",
        "description": "Begin trek along the Urubamba river to Wayllabamba."
      },
      {
        "day": 4,
        "title": "Dead Woman Pass",
        "description": "Conquer the highest mountain pass with stunning Andes views."
      },
      {
        "day": 5,
        "title": "Sun Gate Entry",
        "description": "Descend into the citadel at golden afternoon light."
      },
      {
        "day": 6,
        "title": "Machu Picchu & Return",
        "description": "Guided history tour and return train to Cusco."
      }
    ],
    "startLocation": "Cusco, Peru",
    "departureDates": [
      "2026-09-12",
      "2026-10-08",
      "2026-11-04"
    ]
  },
  {
    "_id": "pkg-7",
    "title": "Breathtaking Phuket & Phi Phi Island Escapes Expedition 7",
    "slug": "breathtaking-phuket-phi-phi-island-escapes-expedition-7",
    "destination": "Phuket & Phi Phi Island Escapes",
    "country": "Thailand",
    "category": "Beach",
    "description": "Immerse yourself in Phuket & Phi Phi Island Escapes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 840,
    "discountPrice": 735,
    "durationDays": 6,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 118,
    "coverImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Phuket",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-8",
    "title": "Grand Cairo Pyramids & Nile Luxury Cruise Expedition 8",
    "slug": "grand-cairo-pyramids-nile-luxury-cruise-expedition-8",
    "destination": "Cairo Pyramids & Nile Luxury Cruise",
    "country": "Egypt",
    "category": "Cultural",
    "description": "Immerse yourself in Cairo Pyramids & Nile Luxury Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1450,
    "discountPrice": 1268,
    "durationDays": 7,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 131,
    "coverImage": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cairo Pyramids",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-9",
    "title": "Authentic Rio de Janeiro & Iguazu Falls Expedition 9",
    "slug": "authentic-rio-de-janeiro-iguazu-falls-expedition-9",
    "destination": "Rio de Janeiro & Iguazu Falls",
    "country": "Brazil",
    "category": "Adventure",
    "description": "Immerse yourself in Rio de Janeiro & Iguazu Falls. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1630,
    "discountPrice": 1422,
    "durationDays": 7,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 144,
    "coverImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rio de Janeiro",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-10",
    "title": "Private Sydney Harbour & Great Barrier Reef Expedition 10",
    "slug": "private-sydney-harbour-great-barrier-reef-expedition-10",
    "destination": "Sydney Harbour & Great Barrier Reef",
    "country": "Australia",
    "category": "Adventure",
    "description": "Immerse yourself in Sydney Harbour & Great Barrier Reef. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2008,
    "durationDays": 9,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 157,
    "coverImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 9,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Sydney Harbour",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-11",
    "title": "Ultimate Galapagos Islands Wildlife Cruise Expedition 11",
    "slug": "ultimate-galapagos-islands-wildlife-cruise-expedition-11",
    "destination": "Galapagos Islands Wildlife Cruise",
    "country": "Ecuador",
    "category": "Wildlife",
    "description": "Immerse yourself in Galapagos Islands Wildlife Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2600,
    "discountPrice": 2288,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 170,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Galapagos Islands Wildlife Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-12",
    "title": "Magical Norwegian Fjords & Bergen Rail Expedition 12",
    "slug": "magical-norwegian-fjords-bergen-rail-expedition-12",
    "destination": "Norwegian Fjords & Bergen Rail",
    "country": "Norway",
    "category": "Mountain",
    "description": "Immerse yourself in Norwegian Fjords & Bergen Rail. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1800,
    "discountPrice": 1580,
    "durationDays": 7,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 183,
    "coverImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Norwegian Fjords",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-13",
    "title": "Hidden Prague, Vienna & Budapest Triple Gem Expedition 13",
    "slug": "hidden-prague-vienna-budapest-triple-gem-expedition-13",
    "destination": "Prague, Vienna & Budapest Triple Gem",
    "country": "Czech Republic & Austria",
    "category": "Cultural",
    "description": "Immerse yourself in Prague, Vienna & Budapest Triple Gem. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1380,
    "discountPrice": 1206,
    "durationDays": 8,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 196,
    "coverImage": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Prague, Vienna",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-14",
    "title": "Royal Costa Rica Volcanoes & Cloud Forests Expedition 14",
    "slug": "royal-costa-rica-volcanoes-cloud-forests-expedition-14",
    "destination": "Costa Rica Volcanoes & Cloud Forests",
    "country": "Costa Rica",
    "category": "Adventure",
    "description": "Immerse yourself in Costa Rica Volcanoes & Cloud Forests. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1167,
    "durationDays": 7,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 209,
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Costa Rica Volcanoes",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-15",
    "title": "Exclusive Barcelona Modernism & Costa Brava Expedition 15",
    "slug": "exclusive-barcelona-modernism-costa-brava-expedition-15",
    "destination": "Barcelona Modernism & Costa Brava",
    "country": "Spain",
    "category": "Cultural",
    "description": "Immerse yourself in Barcelona Modernism & Costa Brava. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1350,
    "discountPrice": 1172,
    "durationDays": 6,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 222,
    "coverImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Barcelona Modernism",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-16",
    "title": "Scenic Marrakech Souks & Sahara Desert Dunes Expedition 16",
    "slug": "scenic-marrakech-souks-sahara-desert-dunes-expedition-16",
    "destination": "Marrakech Souks & Sahara Desert Dunes",
    "country": "Morocco",
    "category": "Cultural",
    "description": "Immerse yourself in Marrakech Souks & Sahara Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 980,
    "discountPrice": 862,
    "durationDays": 6,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 235,
    "coverImage": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Marrakech Souks",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-17",
    "title": "Breathtaking Petra Lost City & Wadi Rum Camp Expedition 17",
    "slug": "breathtaking-petra-lost-city-wadi-rum-camp-expedition-17",
    "destination": "Petra Lost City & Wadi Rum Camp",
    "country": "Jordan",
    "category": "Cultural",
    "description": "Immerse yourself in Petra Lost City & Wadi Rum Camp. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1270,
    "discountPrice": 1114,
    "durationDays": 6,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 248,
    "coverImage": "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Petra Lost City",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-18",
    "title": "Grand Bora Bora Overwater Lagoon Bliss Expedition 18",
    "slug": "grand-bora-bora-overwater-lagoon-bliss-expedition-18",
    "destination": "Bora Bora Overwater Lagoon Bliss",
    "country": "French Polynesia",
    "category": "Luxury",
    "description": "Immerse yourself in Bora Bora Overwater Lagoon Bliss. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2950,
    "discountPrice": 2588,
    "durationDays": 6,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 51,
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Bora Bora Overwater Lagoon Bliss",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-19",
    "title": "Authentic Amsterdam Canals & Windmill Villages Expedition 19",
    "slug": "authentic-amsterdam-canals-windmill-villages-expedition-19",
    "destination": "Amsterdam Canals & Windmill Villages",
    "country": "Netherlands",
    "category": "Cultural",
    "description": "Immerse yourself in Amsterdam Canals & Windmill Villages. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1200,
    "discountPrice": 1044,
    "durationDays": 5,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 64,
    "coverImage": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Amsterdam Canals",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-20",
    "title": "Private Maui Road to Hana & Haleakala Volcano Expedition 20",
    "slug": "private-maui-road-to-hana-haleakala-volcano-expedition-20",
    "destination": "Maui Road to Hana & Haleakala Volcano",
    "country": "United States",
    "category": "Beach",
    "description": "Immerse yourself in Maui Road to Hana & Haleakala Volcano. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1647,
    "durationDays": 7,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 77,
    "coverImage": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Maui Road to Hana",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-21",
    "title": "Ultimate Dubrovnik Old Walls & Korcula Island Expedition 21",
    "slug": "ultimate-dubrovnik-old-walls-korcula-island-expedition-21",
    "destination": "Dubrovnik Old Walls & Korcula Island",
    "country": "Croatia",
    "category": "Beach",
    "description": "Immerse yourself in Dubrovnik Old Walls & Korcula Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1120,
    "discountPrice": 986,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 90,
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubrovnik Old Walls",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-22",
    "title": "Magical Taj Mahal & Royal Rajasthan Palaces Expedition 22",
    "slug": "magical-taj-mahal-royal-rajasthan-palaces-expedition-22",
    "destination": "Taj Mahal & Royal Rajasthan Palaces",
    "country": "India",
    "category": "Cultural",
    "description": "Immerse yourself in Taj Mahal & Royal Rajasthan Palaces. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1000,
    "discountPrice": 876,
    "durationDays": 8,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 103,
    "coverImage": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Taj Mahal",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-23",
    "title": "Hidden Grand Canyon & Zion National Parks Expedition 23",
    "slug": "hidden-grand-canyon-zion-national-parks-expedition-23",
    "destination": "Grand Canyon & Zion National Parks",
    "country": "United States",
    "category": "Adventure",
    "description": "Immerse yourself in Grand Canyon & Zion National Parks. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1420,
    "discountPrice": 1242,
    "durationDays": 6,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 116,
    "coverImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Grand Canyon",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-24",
    "title": "Royal Ha Long Bay Emerald Cruise & Hanoi Expedition 24",
    "slug": "royal-ha-long-bay-emerald-cruise-hanoi-expedition-24",
    "destination": "Ha Long Bay Emerald Cruise & Hanoi",
    "country": "Vietnam",
    "category": "Adventure",
    "description": "Immerse yourself in Ha Long Bay Emerald Cruise & Hanoi. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 930,
    "discountPrice": 806,
    "durationDays": 6,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 129,
    "coverImage": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Ha Long Bay Emerald Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-25",
    "title": "Exclusive Cappadocia Hot Air Balloons & Cave Suites Expedition 25",
    "slug": "exclusive-cappadocia-hot-air-balloons-cave-suites-expedition-25",
    "destination": "Cappadocia Hot Air Balloons & Cave Suites",
    "country": "Turkey",
    "category": "Adventure",
    "description": "Immerse yourself in Cappadocia Hot Air Balloons & Cave Suites. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1163,
    "durationDays": 5,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 142,
    "coverImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cappadocia Hot Air Balloons",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-26",
    "title": "Scenic Zanzibar White Sands & Spice Island Expedition 26",
    "slug": "scenic-zanzibar-white-sands-spice-island-expedition-26",
    "destination": "Zanzibar White Sands & Spice Island",
    "country": "Tanzania",
    "category": "Beach",
    "description": "Immerse yourself in Zanzibar White Sands & Spice Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 871,
    "durationDays": 6,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 155,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Zanzibar White Sands",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-27",
    "title": "Breathtaking Seoul Palaces & K-Culture Experience Expedition 27",
    "slug": "breathtaking-seoul-palaces-k-culture-experience-expedition-27",
    "destination": "Seoul Palaces & K-Culture Experience",
    "country": "South Korea",
    "category": "Cultural",
    "description": "Immerse yourself in Seoul Palaces & K-Culture Experience. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1300,
    "discountPrice": 1140,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 168,
    "coverImage": "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Seoul Palaces",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-28",
    "title": "Grand Cancun Maya Ruins & Hidden Cenotes Expedition 28",
    "slug": "grand-cancun-maya-ruins-hidden-cenotes-expedition-28",
    "destination": "Cancun Maya Ruins & Hidden Cenotes",
    "country": "Mexico",
    "category": "Beach",
    "description": "Immerse yourself in Cancun Maya Ruins & Hidden Cenotes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 863,
    "durationDays": 6,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 181,
    "coverImage": "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cancun Maya Ruins",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-29",
    "title": "Authentic Lapland Reindeer Safari & Aurora Glass Igloo Expedition 29",
    "slug": "authentic-lapland-reindeer-safari-aurora-glass-igloo-expedition-29",
    "destination": "Lapland Reindeer Safari & Aurora Glass Igloo",
    "country": "Finland",
    "category": "Adventure",
    "description": "Immerse yourself in Lapland Reindeer Safari & Aurora Glass Igloo. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2012,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 194,
    "coverImage": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Lapland Reindeer Safari",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-30",
    "title": "Private Mount Kilimanjaro Machame Route Summit Expedition 30",
    "slug": "private-mount-kilimanjaro-machame-route-summit-expedition-30",
    "destination": "Mount Kilimanjaro Machame Route Summit",
    "country": "Tanzania",
    "category": "Mountain",
    "description": "Immerse yourself in Mount Kilimanjaro Machame Route Summit. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2650,
    "discountPrice": 2316,
    "durationDays": 7,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 207,
    "coverImage": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Mount Kilimanjaro Machame Route Summit",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-31",
    "title": "Ultimate Paris & French Riviera Expedition 31",
    "slug": "ultimate-paris-french-riviera-expedition-31",
    "destination": "Paris & French Riviera",
    "country": "France",
    "category": "Luxury",
    "description": "Immerse yourself in Paris & French Riviera. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1540,
    "durationDays": 7,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 220,
    "coverImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Paris",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-32",
    "title": "Magical Rome, Florence & Venice Expedition 32",
    "slug": "magical-rome-florence-venice-expedition-32",
    "destination": "Rome, Florence & Venice",
    "country": "Italy",
    "category": "Cultural",
    "description": "Immerse yourself in Rome, Florence & Venice. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1470,
    "discountPrice": 1290,
    "durationDays": 8,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 233,
    "coverImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rome, Florence",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-33",
    "title": "Hidden Cape Town & Garden Route Expedition 33",
    "slug": "hidden-cape-town-garden-route-expedition-33",
    "destination": "Cape Town & Garden Route",
    "country": "South Africa",
    "category": "Wildlife",
    "description": "Immerse yourself in Cape Town & Garden Route. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1532,
    "durationDays": 8,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 246,
    "coverImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cape Town",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-34",
    "title": "Royal Dubai Marina & Desert Dunes Expedition 34",
    "slug": "royal-dubai-marina-desert-dunes-expedition-34",
    "destination": "Dubai Marina & Desert Dunes",
    "country": "United Arab Emirates",
    "category": "Luxury",
    "description": "Immerse yourself in Dubai Marina & Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1540,
    "discountPrice": 1343,
    "durationDays": 5,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 49,
    "coverImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubai Marina",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-35",
    "title": "Exclusive Banff & Canadian Rockies Expedition 35",
    "slug": "exclusive-banff-canadian-rockies-expedition-35",
    "destination": "Banff & Canadian Rockies",
    "country": "Canada",
    "category": "Mountain",
    "description": "Immerse yourself in Banff & Canadian Rockies. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1780,
    "discountPrice": 1550,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 62,
    "coverImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Banff",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-36",
    "title": "Scenic Queenstown & Milford Sound Expedition 36",
    "slug": "scenic-queenstown-milford-sound-expedition-36",
    "destination": "Queenstown & Milford Sound",
    "country": "New Zealand",
    "category": "Adventure",
    "description": "Immerse yourself in Queenstown & Milford Sound. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1663,
    "durationDays": 8,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 75,
    "coverImage": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Queenstown",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-37",
    "title": "Breathtaking Phuket & Phi Phi Island Escapes Expedition 37",
    "slug": "breathtaking-phuket-phi-phi-island-escapes-expedition-37",
    "destination": "Phuket & Phi Phi Island Escapes",
    "country": "Thailand",
    "category": "Beach",
    "description": "Immerse yourself in Phuket & Phi Phi Island Escapes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 840,
    "discountPrice": 735,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 88,
    "coverImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Phuket",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-38",
    "title": "Grand Cairo Pyramids & Nile Luxury Cruise Expedition 38",
    "slug": "grand-cairo-pyramids-nile-luxury-cruise-expedition-38",
    "destination": "Cairo Pyramids & Nile Luxury Cruise",
    "country": "Egypt",
    "category": "Cultural",
    "description": "Immerse yourself in Cairo Pyramids & Nile Luxury Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1450,
    "discountPrice": 1268,
    "durationDays": 7,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 101,
    "coverImage": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cairo Pyramids",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-39",
    "title": "Authentic Rio de Janeiro & Iguazu Falls Expedition 39",
    "slug": "authentic-rio-de-janeiro-iguazu-falls-expedition-39",
    "destination": "Rio de Janeiro & Iguazu Falls",
    "country": "Brazil",
    "category": "Adventure",
    "description": "Immerse yourself in Rio de Janeiro & Iguazu Falls. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1630,
    "discountPrice": 1422,
    "durationDays": 7,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 114,
    "coverImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rio de Janeiro",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-40",
    "title": "Private Sydney Harbour & Great Barrier Reef Expedition 40",
    "slug": "private-sydney-harbour-great-barrier-reef-expedition-40",
    "destination": "Sydney Harbour & Great Barrier Reef",
    "country": "Australia",
    "category": "Adventure",
    "description": "Immerse yourself in Sydney Harbour & Great Barrier Reef. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2008,
    "durationDays": 9,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 127,
    "coverImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 9,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Sydney Harbour",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-41",
    "title": "Ultimate Galapagos Islands Wildlife Cruise Expedition 41",
    "slug": "ultimate-galapagos-islands-wildlife-cruise-expedition-41",
    "destination": "Galapagos Islands Wildlife Cruise",
    "country": "Ecuador",
    "category": "Wildlife",
    "description": "Immerse yourself in Galapagos Islands Wildlife Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2600,
    "discountPrice": 2288,
    "durationDays": 7,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 140,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Galapagos Islands Wildlife Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-42",
    "title": "Magical Norwegian Fjords & Bergen Rail Expedition 42",
    "slug": "magical-norwegian-fjords-bergen-rail-expedition-42",
    "destination": "Norwegian Fjords & Bergen Rail",
    "country": "Norway",
    "category": "Mountain",
    "description": "Immerse yourself in Norwegian Fjords & Bergen Rail. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1800,
    "discountPrice": 1580,
    "durationDays": 7,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 153,
    "coverImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Norwegian Fjords",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-43",
    "title": "Hidden Prague, Vienna & Budapest Triple Gem Expedition 43",
    "slug": "hidden-prague-vienna-budapest-triple-gem-expedition-43",
    "destination": "Prague, Vienna & Budapest Triple Gem",
    "country": "Czech Republic & Austria",
    "category": "Cultural",
    "description": "Immerse yourself in Prague, Vienna & Budapest Triple Gem. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1380,
    "discountPrice": 1206,
    "durationDays": 8,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 166,
    "coverImage": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Prague, Vienna",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-44",
    "title": "Royal Costa Rica Volcanoes & Cloud Forests Expedition 44",
    "slug": "royal-costa-rica-volcanoes-cloud-forests-expedition-44",
    "destination": "Costa Rica Volcanoes & Cloud Forests",
    "country": "Costa Rica",
    "category": "Adventure",
    "description": "Immerse yourself in Costa Rica Volcanoes & Cloud Forests. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1167,
    "durationDays": 7,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 179,
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Costa Rica Volcanoes",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-45",
    "title": "Exclusive Barcelona Modernism & Costa Brava Expedition 45",
    "slug": "exclusive-barcelona-modernism-costa-brava-expedition-45",
    "destination": "Barcelona Modernism & Costa Brava",
    "country": "Spain",
    "category": "Cultural",
    "description": "Immerse yourself in Barcelona Modernism & Costa Brava. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1350,
    "discountPrice": 1172,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 192,
    "coverImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Barcelona Modernism",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-46",
    "title": "Scenic Marrakech Souks & Sahara Desert Dunes Expedition 46",
    "slug": "scenic-marrakech-souks-sahara-desert-dunes-expedition-46",
    "destination": "Marrakech Souks & Sahara Desert Dunes",
    "country": "Morocco",
    "category": "Cultural",
    "description": "Immerse yourself in Marrakech Souks & Sahara Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 980,
    "discountPrice": 862,
    "durationDays": 6,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 205,
    "coverImage": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Marrakech Souks",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-47",
    "title": "Breathtaking Petra Lost City & Wadi Rum Camp Expedition 47",
    "slug": "breathtaking-petra-lost-city-wadi-rum-camp-expedition-47",
    "destination": "Petra Lost City & Wadi Rum Camp",
    "country": "Jordan",
    "category": "Cultural",
    "description": "Immerse yourself in Petra Lost City & Wadi Rum Camp. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1270,
    "discountPrice": 1114,
    "durationDays": 6,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 218,
    "coverImage": "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Petra Lost City",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-48",
    "title": "Grand Bora Bora Overwater Lagoon Bliss Expedition 48",
    "slug": "grand-bora-bora-overwater-lagoon-bliss-expedition-48",
    "destination": "Bora Bora Overwater Lagoon Bliss",
    "country": "French Polynesia",
    "category": "Luxury",
    "description": "Immerse yourself in Bora Bora Overwater Lagoon Bliss. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2950,
    "discountPrice": 2588,
    "durationDays": 6,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 231,
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Bora Bora Overwater Lagoon Bliss",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-49",
    "title": "Authentic Amsterdam Canals & Windmill Villages Expedition 49",
    "slug": "authentic-amsterdam-canals-windmill-villages-expedition-49",
    "destination": "Amsterdam Canals & Windmill Villages",
    "country": "Netherlands",
    "category": "Cultural",
    "description": "Immerse yourself in Amsterdam Canals & Windmill Villages. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1200,
    "discountPrice": 1044,
    "durationDays": 5,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 244,
    "coverImage": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Amsterdam Canals",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-50",
    "title": "Private Maui Road to Hana & Haleakala Volcano Expedition 50",
    "slug": "private-maui-road-to-hana-haleakala-volcano-expedition-50",
    "destination": "Maui Road to Hana & Haleakala Volcano",
    "country": "United States",
    "category": "Beach",
    "description": "Immerse yourself in Maui Road to Hana & Haleakala Volcano. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1647,
    "durationDays": 7,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 47,
    "coverImage": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Maui Road to Hana",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-51",
    "title": "Ultimate Dubrovnik Old Walls & Korcula Island Expedition 51",
    "slug": "ultimate-dubrovnik-old-walls-korcula-island-expedition-51",
    "destination": "Dubrovnik Old Walls & Korcula Island",
    "country": "Croatia",
    "category": "Beach",
    "description": "Immerse yourself in Dubrovnik Old Walls & Korcula Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1120,
    "discountPrice": 986,
    "durationDays": 6,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 60,
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubrovnik Old Walls",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-52",
    "title": "Magical Taj Mahal & Royal Rajasthan Palaces Expedition 52",
    "slug": "magical-taj-mahal-royal-rajasthan-palaces-expedition-52",
    "destination": "Taj Mahal & Royal Rajasthan Palaces",
    "country": "India",
    "category": "Cultural",
    "description": "Immerse yourself in Taj Mahal & Royal Rajasthan Palaces. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1000,
    "discountPrice": 876,
    "durationDays": 8,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 73,
    "coverImage": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Taj Mahal",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-53",
    "title": "Hidden Grand Canyon & Zion National Parks Expedition 53",
    "slug": "hidden-grand-canyon-zion-national-parks-expedition-53",
    "destination": "Grand Canyon & Zion National Parks",
    "country": "United States",
    "category": "Adventure",
    "description": "Immerse yourself in Grand Canyon & Zion National Parks. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1420,
    "discountPrice": 1242,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 86,
    "coverImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Grand Canyon",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-54",
    "title": "Royal Ha Long Bay Emerald Cruise & Hanoi Expedition 54",
    "slug": "royal-ha-long-bay-emerald-cruise-hanoi-expedition-54",
    "destination": "Ha Long Bay Emerald Cruise & Hanoi",
    "country": "Vietnam",
    "category": "Adventure",
    "description": "Immerse yourself in Ha Long Bay Emerald Cruise & Hanoi. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 930,
    "discountPrice": 806,
    "durationDays": 6,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 99,
    "coverImage": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Ha Long Bay Emerald Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-55",
    "title": "Exclusive Cappadocia Hot Air Balloons & Cave Suites Expedition 55",
    "slug": "exclusive-cappadocia-hot-air-balloons-cave-suites-expedition-55",
    "destination": "Cappadocia Hot Air Balloons & Cave Suites",
    "country": "Turkey",
    "category": "Adventure",
    "description": "Immerse yourself in Cappadocia Hot Air Balloons & Cave Suites. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1163,
    "durationDays": 5,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 112,
    "coverImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cappadocia Hot Air Balloons",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-56",
    "title": "Scenic Zanzibar White Sands & Spice Island Expedition 56",
    "slug": "scenic-zanzibar-white-sands-spice-island-expedition-56",
    "destination": "Zanzibar White Sands & Spice Island",
    "country": "Tanzania",
    "category": "Beach",
    "description": "Immerse yourself in Zanzibar White Sands & Spice Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 871,
    "durationDays": 6,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 125,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Zanzibar White Sands",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-57",
    "title": "Breathtaking Seoul Palaces & K-Culture Experience Expedition 57",
    "slug": "breathtaking-seoul-palaces-k-culture-experience-expedition-57",
    "destination": "Seoul Palaces & K-Culture Experience",
    "country": "South Korea",
    "category": "Cultural",
    "description": "Immerse yourself in Seoul Palaces & K-Culture Experience. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1300,
    "discountPrice": 1140,
    "durationDays": 7,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 138,
    "coverImage": "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Seoul Palaces",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-58",
    "title": "Grand Cancun Maya Ruins & Hidden Cenotes Expedition 58",
    "slug": "grand-cancun-maya-ruins-hidden-cenotes-expedition-58",
    "destination": "Cancun Maya Ruins & Hidden Cenotes",
    "country": "Mexico",
    "category": "Beach",
    "description": "Immerse yourself in Cancun Maya Ruins & Hidden Cenotes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 863,
    "durationDays": 6,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 151,
    "coverImage": "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cancun Maya Ruins",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-59",
    "title": "Authentic Lapland Reindeer Safari & Aurora Glass Igloo Expedition 59",
    "slug": "authentic-lapland-reindeer-safari-aurora-glass-igloo-expedition-59",
    "destination": "Lapland Reindeer Safari & Aurora Glass Igloo",
    "country": "Finland",
    "category": "Adventure",
    "description": "Immerse yourself in Lapland Reindeer Safari & Aurora Glass Igloo. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2012,
    "durationDays": 6,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 164,
    "coverImage": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Lapland Reindeer Safari",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-60",
    "title": "Private Mount Kilimanjaro Machame Route Summit Expedition 60",
    "slug": "private-mount-kilimanjaro-machame-route-summit-expedition-60",
    "destination": "Mount Kilimanjaro Machame Route Summit",
    "country": "Tanzania",
    "category": "Mountain",
    "description": "Immerse yourself in Mount Kilimanjaro Machame Route Summit. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2650,
    "discountPrice": 2316,
    "durationDays": 7,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 177,
    "coverImage": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Mount Kilimanjaro Machame Route Summit",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-61",
    "title": "Ultimate Paris & French Riviera Expedition 61",
    "slug": "ultimate-paris-french-riviera-expedition-61",
    "destination": "Paris & French Riviera",
    "country": "France",
    "category": "Luxury",
    "description": "Immerse yourself in Paris & French Riviera. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1540,
    "durationDays": 7,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 190,
    "coverImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Paris",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-62",
    "title": "Magical Rome, Florence & Venice Expedition 62",
    "slug": "magical-rome-florence-venice-expedition-62",
    "destination": "Rome, Florence & Venice",
    "country": "Italy",
    "category": "Cultural",
    "description": "Immerse yourself in Rome, Florence & Venice. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1470,
    "discountPrice": 1290,
    "durationDays": 8,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 203,
    "coverImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rome, Florence",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-63",
    "title": "Hidden Cape Town & Garden Route Expedition 63",
    "slug": "hidden-cape-town-garden-route-expedition-63",
    "destination": "Cape Town & Garden Route",
    "country": "South Africa",
    "category": "Wildlife",
    "description": "Immerse yourself in Cape Town & Garden Route. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1532,
    "durationDays": 8,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 216,
    "coverImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cape Town",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-64",
    "title": "Royal Dubai Marina & Desert Dunes Expedition 64",
    "slug": "royal-dubai-marina-desert-dunes-expedition-64",
    "destination": "Dubai Marina & Desert Dunes",
    "country": "United Arab Emirates",
    "category": "Luxury",
    "description": "Immerse yourself in Dubai Marina & Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1540,
    "discountPrice": 1343,
    "durationDays": 5,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 229,
    "coverImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubai Marina",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-65",
    "title": "Exclusive Banff & Canadian Rockies Expedition 65",
    "slug": "exclusive-banff-canadian-rockies-expedition-65",
    "destination": "Banff & Canadian Rockies",
    "country": "Canada",
    "category": "Mountain",
    "description": "Immerse yourself in Banff & Canadian Rockies. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1780,
    "discountPrice": 1550,
    "durationDays": 7,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 242,
    "coverImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Banff",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-66",
    "title": "Scenic Queenstown & Milford Sound Expedition 66",
    "slug": "scenic-queenstown-milford-sound-expedition-66",
    "destination": "Queenstown & Milford Sound",
    "country": "New Zealand",
    "category": "Adventure",
    "description": "Immerse yourself in Queenstown & Milford Sound. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1663,
    "durationDays": 8,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 45,
    "coverImage": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Queenstown",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-67",
    "title": "Breathtaking Phuket & Phi Phi Island Escapes Expedition 67",
    "slug": "breathtaking-phuket-phi-phi-island-escapes-expedition-67",
    "destination": "Phuket & Phi Phi Island Escapes",
    "country": "Thailand",
    "category": "Beach",
    "description": "Immerse yourself in Phuket & Phi Phi Island Escapes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 840,
    "discountPrice": 735,
    "durationDays": 6,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 58,
    "coverImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Phuket",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-68",
    "title": "Grand Cairo Pyramids & Nile Luxury Cruise Expedition 68",
    "slug": "grand-cairo-pyramids-nile-luxury-cruise-expedition-68",
    "destination": "Cairo Pyramids & Nile Luxury Cruise",
    "country": "Egypt",
    "category": "Cultural",
    "description": "Immerse yourself in Cairo Pyramids & Nile Luxury Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1450,
    "discountPrice": 1268,
    "durationDays": 7,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 71,
    "coverImage": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cairo Pyramids",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-69",
    "title": "Authentic Rio de Janeiro & Iguazu Falls Expedition 69",
    "slug": "authentic-rio-de-janeiro-iguazu-falls-expedition-69",
    "destination": "Rio de Janeiro & Iguazu Falls",
    "country": "Brazil",
    "category": "Adventure",
    "description": "Immerse yourself in Rio de Janeiro & Iguazu Falls. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1630,
    "discountPrice": 1422,
    "durationDays": 7,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 84,
    "coverImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rio de Janeiro",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-70",
    "title": "Private Sydney Harbour & Great Barrier Reef Expedition 70",
    "slug": "private-sydney-harbour-great-barrier-reef-expedition-70",
    "destination": "Sydney Harbour & Great Barrier Reef",
    "country": "Australia",
    "category": "Adventure",
    "description": "Immerse yourself in Sydney Harbour & Great Barrier Reef. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2008,
    "durationDays": 9,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 97,
    "coverImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 9,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Sydney Harbour",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-71",
    "title": "Ultimate Galapagos Islands Wildlife Cruise Expedition 71",
    "slug": "ultimate-galapagos-islands-wildlife-cruise-expedition-71",
    "destination": "Galapagos Islands Wildlife Cruise",
    "country": "Ecuador",
    "category": "Wildlife",
    "description": "Immerse yourself in Galapagos Islands Wildlife Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2600,
    "discountPrice": 2288,
    "durationDays": 7,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 110,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Galapagos Islands Wildlife Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-72",
    "title": "Magical Norwegian Fjords & Bergen Rail Expedition 72",
    "slug": "magical-norwegian-fjords-bergen-rail-expedition-72",
    "destination": "Norwegian Fjords & Bergen Rail",
    "country": "Norway",
    "category": "Mountain",
    "description": "Immerse yourself in Norwegian Fjords & Bergen Rail. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1800,
    "discountPrice": 1580,
    "durationDays": 7,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 123,
    "coverImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Norwegian Fjords",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-73",
    "title": "Hidden Prague, Vienna & Budapest Triple Gem Expedition 73",
    "slug": "hidden-prague-vienna-budapest-triple-gem-expedition-73",
    "destination": "Prague, Vienna & Budapest Triple Gem",
    "country": "Czech Republic & Austria",
    "category": "Cultural",
    "description": "Immerse yourself in Prague, Vienna & Budapest Triple Gem. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1380,
    "discountPrice": 1206,
    "durationDays": 8,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 136,
    "coverImage": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Prague, Vienna",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-74",
    "title": "Royal Costa Rica Volcanoes & Cloud Forests Expedition 74",
    "slug": "royal-costa-rica-volcanoes-cloud-forests-expedition-74",
    "destination": "Costa Rica Volcanoes & Cloud Forests",
    "country": "Costa Rica",
    "category": "Adventure",
    "description": "Immerse yourself in Costa Rica Volcanoes & Cloud Forests. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1167,
    "durationDays": 7,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 149,
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Costa Rica Volcanoes",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-75",
    "title": "Exclusive Barcelona Modernism & Costa Brava Expedition 75",
    "slug": "exclusive-barcelona-modernism-costa-brava-expedition-75",
    "destination": "Barcelona Modernism & Costa Brava",
    "country": "Spain",
    "category": "Cultural",
    "description": "Immerse yourself in Barcelona Modernism & Costa Brava. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1350,
    "discountPrice": 1172,
    "durationDays": 6,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 162,
    "coverImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Barcelona Modernism",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-76",
    "title": "Scenic Marrakech Souks & Sahara Desert Dunes Expedition 76",
    "slug": "scenic-marrakech-souks-sahara-desert-dunes-expedition-76",
    "destination": "Marrakech Souks & Sahara Desert Dunes",
    "country": "Morocco",
    "category": "Cultural",
    "description": "Immerse yourself in Marrakech Souks & Sahara Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 980,
    "discountPrice": 862,
    "durationDays": 6,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 175,
    "coverImage": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Marrakech Souks",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-77",
    "title": "Breathtaking Petra Lost City & Wadi Rum Camp Expedition 77",
    "slug": "breathtaking-petra-lost-city-wadi-rum-camp-expedition-77",
    "destination": "Petra Lost City & Wadi Rum Camp",
    "country": "Jordan",
    "category": "Cultural",
    "description": "Immerse yourself in Petra Lost City & Wadi Rum Camp. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1270,
    "discountPrice": 1114,
    "durationDays": 6,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 188,
    "coverImage": "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579606032834-dcdc0425c270?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Petra Lost City",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-78",
    "title": "Grand Bora Bora Overwater Lagoon Bliss Expedition 78",
    "slug": "grand-bora-bora-overwater-lagoon-bliss-expedition-78",
    "destination": "Bora Bora Overwater Lagoon Bliss",
    "country": "French Polynesia",
    "category": "Luxury",
    "description": "Immerse yourself in Bora Bora Overwater Lagoon Bliss. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2950,
    "discountPrice": 2588,
    "durationDays": 6,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 201,
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Bora Bora Overwater Lagoon Bliss",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-79",
    "title": "Authentic Amsterdam Canals & Windmill Villages Expedition 79",
    "slug": "authentic-amsterdam-canals-windmill-villages-expedition-79",
    "destination": "Amsterdam Canals & Windmill Villages",
    "country": "Netherlands",
    "category": "Cultural",
    "description": "Immerse yourself in Amsterdam Canals & Windmill Villages. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1200,
    "discountPrice": 1044,
    "durationDays": 5,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 214,
    "coverImage": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Amsterdam Canals",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-80",
    "title": "Private Maui Road to Hana & Haleakala Volcano Expedition 80",
    "slug": "private-maui-road-to-hana-haleakala-volcano-expedition-80",
    "destination": "Maui Road to Hana & Haleakala Volcano",
    "country": "United States",
    "category": "Beach",
    "description": "Immerse yourself in Maui Road to Hana & Haleakala Volcano. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1647,
    "durationDays": 7,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 227,
    "coverImage": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Maui Road to Hana",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-81",
    "title": "Ultimate Dubrovnik Old Walls & Korcula Island Expedition 81",
    "slug": "ultimate-dubrovnik-old-walls-korcula-island-expedition-81",
    "destination": "Dubrovnik Old Walls & Korcula Island",
    "country": "Croatia",
    "category": "Beach",
    "description": "Immerse yourself in Dubrovnik Old Walls & Korcula Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1120,
    "discountPrice": 986,
    "durationDays": 6,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 240,
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubrovnik Old Walls",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-82",
    "title": "Magical Taj Mahal & Royal Rajasthan Palaces Expedition 82",
    "slug": "magical-taj-mahal-royal-rajasthan-palaces-expedition-82",
    "destination": "Taj Mahal & Royal Rajasthan Palaces",
    "country": "India",
    "category": "Cultural",
    "description": "Immerse yourself in Taj Mahal & Royal Rajasthan Palaces. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1000,
    "discountPrice": 876,
    "durationDays": 8,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 43,
    "coverImage": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Taj Mahal",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-83",
    "title": "Hidden Grand Canyon & Zion National Parks Expedition 83",
    "slug": "hidden-grand-canyon-zion-national-parks-expedition-83",
    "destination": "Grand Canyon & Zion National Parks",
    "country": "United States",
    "category": "Adventure",
    "description": "Immerse yourself in Grand Canyon & Zion National Parks. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1420,
    "discountPrice": 1242,
    "durationDays": 6,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 56,
    "coverImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Grand Canyon",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-84",
    "title": "Royal Ha Long Bay Emerald Cruise & Hanoi Expedition 84",
    "slug": "royal-ha-long-bay-emerald-cruise-hanoi-expedition-84",
    "destination": "Ha Long Bay Emerald Cruise & Hanoi",
    "country": "Vietnam",
    "category": "Adventure",
    "description": "Immerse yourself in Ha Long Bay Emerald Cruise & Hanoi. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 930,
    "discountPrice": 806,
    "durationDays": 6,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 69,
    "coverImage": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Ha Long Bay Emerald Cruise",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-85",
    "title": "Exclusive Cappadocia Hot Air Balloons & Cave Suites Expedition 85",
    "slug": "exclusive-cappadocia-hot-air-balloons-cave-suites-expedition-85",
    "destination": "Cappadocia Hot Air Balloons & Cave Suites",
    "country": "Turkey",
    "category": "Adventure",
    "description": "Immerse yourself in Cappadocia Hot Air Balloons & Cave Suites. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1340,
    "discountPrice": 1163,
    "durationDays": 5,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 82,
    "coverImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cappadocia Hot Air Balloons",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-86",
    "title": "Scenic Zanzibar White Sands & Spice Island Expedition 86",
    "slug": "scenic-zanzibar-white-sands-spice-island-expedition-86",
    "destination": "Zanzibar White Sands & Spice Island",
    "country": "Tanzania",
    "category": "Beach",
    "description": "Immerse yourself in Zanzibar White Sands & Spice Island. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 871,
    "durationDays": 6,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 95,
    "coverImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Zanzibar White Sands",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-87",
    "title": "Breathtaking Seoul Palaces & K-Culture Experience Expedition 87",
    "slug": "breathtaking-seoul-palaces-k-culture-experience-expedition-87",
    "destination": "Seoul Palaces & K-Culture Experience",
    "country": "South Korea",
    "category": "Cultural",
    "description": "Immerse yourself in Seoul Palaces & K-Culture Experience. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1300,
    "discountPrice": 1140,
    "durationDays": 7,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 108,
    "coverImage": "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Seoul Palaces",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-88",
    "title": "Grand Cancun Maya Ruins & Hidden Cenotes Expedition 88",
    "slug": "grand-cancun-maya-ruins-hidden-cenotes-expedition-88",
    "destination": "Cancun Maya Ruins & Hidden Cenotes",
    "country": "Mexico",
    "category": "Beach",
    "description": "Immerse yourself in Cancun Maya Ruins & Hidden Cenotes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 990,
    "discountPrice": 863,
    "durationDays": 6,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 121,
    "coverImage": "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512813389649-acb9131ced20?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cancun Maya Ruins",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-89",
    "title": "Authentic Lapland Reindeer Safari & Aurora Glass Igloo Expedition 89",
    "slug": "authentic-lapland-reindeer-safari-aurora-glass-igloo-expedition-89",
    "destination": "Lapland Reindeer Safari & Aurora Glass Igloo",
    "country": "Finland",
    "category": "Adventure",
    "description": "Immerse yourself in Lapland Reindeer Safari & Aurora Glass Igloo. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2012,
    "durationDays": 6,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 134,
    "coverImage": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Lapland Reindeer Safari",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-90",
    "title": "Private Mount Kilimanjaro Machame Route Summit Expedition 90",
    "slug": "private-mount-kilimanjaro-machame-route-summit-expedition-90",
    "destination": "Mount Kilimanjaro Machame Route Summit",
    "country": "Tanzania",
    "category": "Mountain",
    "description": "Immerse yourself in Mount Kilimanjaro Machame Route Summit. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2650,
    "discountPrice": 2316,
    "durationDays": 7,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 147,
    "coverImage": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Mount Kilimanjaro Machame Route Summit",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-91",
    "title": "Ultimate Paris & French Riviera Expedition 91",
    "slug": "ultimate-paris-french-riviera-expedition-91",
    "destination": "Paris & French Riviera",
    "country": "France",
    "category": "Luxury",
    "description": "Immerse yourself in Paris & French Riviera. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1540,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 160,
    "coverImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Paris",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-92",
    "title": "Magical Rome, Florence & Venice Expedition 92",
    "slug": "magical-rome-florence-venice-expedition-92",
    "destination": "Rome, Florence & Venice",
    "country": "Italy",
    "category": "Cultural",
    "description": "Immerse yourself in Rome, Florence & Venice. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1470,
    "discountPrice": 1290,
    "durationDays": 8,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 173,
    "coverImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rome, Florence",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-93",
    "title": "Hidden Cape Town & Garden Route Expedition 93",
    "slug": "hidden-cape-town-garden-route-expedition-93",
    "destination": "Cape Town & Garden Route",
    "country": "South Africa",
    "category": "Wildlife",
    "description": "Immerse yourself in Cape Town & Garden Route. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1750,
    "discountPrice": 1532,
    "durationDays": 8,
    "maxGroupSize": 12,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 186,
    "coverImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cape Town",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-94",
    "title": "Royal Dubai Marina & Desert Dunes Expedition 94",
    "slug": "royal-dubai-marina-desert-dunes-expedition-94",
    "destination": "Dubai Marina & Desert Dunes",
    "country": "United Arab Emirates",
    "category": "Luxury",
    "description": "Immerse yourself in Dubai Marina & Desert Dunes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1540,
    "discountPrice": 1343,
    "durationDays": 5,
    "maxGroupSize": 13,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 199,
    "coverImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 5,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Dubai Marina",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-95",
    "title": "Exclusive Banff & Canadian Rockies Expedition 95",
    "slug": "exclusive-banff-canadian-rockies-expedition-95",
    "destination": "Banff & Canadian Rockies",
    "country": "Canada",
    "category": "Mountain",
    "description": "Immerse yourself in Banff & Canadian Rockies. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1780,
    "discountPrice": 1550,
    "durationDays": 7,
    "maxGroupSize": 14,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 212,
    "coverImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Banff",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-96",
    "title": "Scenic Queenstown & Milford Sound Expedition 96",
    "slug": "scenic-queenstown-milford-sound-expedition-96",
    "destination": "Queenstown & Milford Sound",
    "country": "New Zealand",
    "category": "Adventure",
    "description": "Immerse yourself in Queenstown & Milford Sound. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1890,
    "discountPrice": 1663,
    "durationDays": 8,
    "maxGroupSize": 15,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 225,
    "coverImage": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": true,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 8,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Queenstown",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-97",
    "title": "Breathtaking Phuket & Phi Phi Island Escapes Expedition 97",
    "slug": "breathtaking-phuket-phi-phi-island-escapes-expedition-97",
    "destination": "Phuket & Phi Phi Island Escapes",
    "country": "Thailand",
    "category": "Beach",
    "description": "Immerse yourself in Phuket & Phi Phi Island Escapes. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 840,
    "discountPrice": 735,
    "durationDays": 6,
    "maxGroupSize": 8,
    "ratingsAverage": 4.7,
    "ratingsQuantity": 238,
    "coverImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 6,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Phuket",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-98",
    "title": "Grand Cairo Pyramids & Nile Luxury Cruise Expedition 98",
    "slug": "grand-cairo-pyramids-nile-luxury-cruise-expedition-98",
    "destination": "Cairo Pyramids & Nile Luxury Cruise",
    "country": "Egypt",
    "category": "Cultural",
    "description": "Immerse yourself in Cairo Pyramids & Nile Luxury Cruise. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1450,
    "discountPrice": 1268,
    "durationDays": 7,
    "maxGroupSize": 9,
    "ratingsAverage": 4.77,
    "ratingsQuantity": 41,
    "coverImage": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Cairo Pyramids",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-99",
    "title": "Authentic Rio de Janeiro & Iguazu Falls Expedition 99",
    "slug": "authentic-rio-de-janeiro-iguazu-falls-expedition-99",
    "destination": "Rio de Janeiro & Iguazu Falls",
    "country": "Brazil",
    "category": "Adventure",
    "description": "Immerse yourself in Rio de Janeiro & Iguazu Falls. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 1630,
    "discountPrice": 1422,
    "durationDays": 7,
    "maxGroupSize": 10,
    "ratingsAverage": 4.84,
    "ratingsQuantity": 54,
    "coverImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 7,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Rio de Janeiro",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  },
  {
    "_id": "pkg-100",
    "title": "Private Sydney Harbour & Great Barrier Reef Expedition 100",
    "slug": "private-sydney-harbour-great-barrier-reef-expedition-100",
    "destination": "Sydney Harbour & Great Barrier Reef",
    "country": "Australia",
    "category": "Adventure",
    "description": "Immerse yourself in Sydney Harbour & Great Barrier Reef. A comprehensive travel itinerary filled with world-class guided excursions, boutique accommodations, and breathtaking sights.",
    "price": 2300,
    "discountPrice": 2008,
    "durationDays": 9,
    "maxGroupSize": 11,
    "ratingsAverage": 4.91,
    "ratingsQuantity": 67,
    "coverImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "featured": false,
    "highlights": [
      "Expert Local English Guide",
      "Handpicked Boutique Hotels",
      "Daily Gourmet Meals",
      "All Monument & Park Permits"
    ],
    "included": [
      "Hotel Accommodations",
      "Daily Breakfast",
      "Airport Transfers",
      "Activity Tickets"
    ],
    "excluded": [
      "International Airfare",
      "Personal Expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Check-in and orientation dinner."
      },
      {
        "day": 2,
        "title": "Guided Exploration",
        "description": "Full-day tour with local certified guide."
      },
      {
        "day": 3,
        "title": "Scenic Discovery",
        "description": "Visit top rated viewpoints and landmarks."
      },
      {
        "day": 4,
        "title": "Cultural Immersion",
        "description": "Local gastronomy and artisan workshop visits."
      },
      {
        "day": 9,
        "title": "Farewell & Departure",
        "description": "Private transfer to airport."
      }
    ],
    "startLocation": "Sydney Harbour",
    "departureDates": [
      "2026-09-20",
      "2026-10-15",
      "2026-11-10"
    ]
  }
];

export const FALLBACK_USER_STATS: UserStats = {
  totalTrips: 3,
  activeTrips: 1,
  savedPlaces: 6,
  savedPackageIds: ["pkg-1", "pkg-2"],
  totalSpent: 3870,
  rewardPoints: 480,
  recentBookings: [
    {
      _id: "bk-101",
      packageId: "pkg-1",
      packageTitle: "Bali Tropical Paradise & Nusa Penida",
      packageCoverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      destination: "Bali & Nusa Penida",
      travelerName: "Demo User",
      travelerEmail: "user@travelmate.com",
      travelerPhone: "+1 (555) 234-5678",
      guestsCount: 2,
      startDate: "2026-10-01",
      totalPrice: 1440,
      status: "confirmed",
      paymentStatus: "paid",
      createdAt: new Date().toISOString(),
    }
  ]
};

export const FALLBACK_ADMIN_STATS: AdminStats = {
  totalRevenue: 48950,
  totalBookings: 38,
  totalUsers: 142,
  totalPackages: 100,
  monthlyRevenue: [
    { month: "Jan", revenue: 5400, bookings: 4 },
    { month: "Feb", revenue: 6800, bookings: 5 },
    { month: "Mar", revenue: 7900, bookings: 6 },
    { month: "Apr", revenue: 8400, bookings: 7 },
    { month: "May", revenue: 10200, bookings: 8 },
    { month: "Jun", revenue: 10250, bookings: 8 },
  ],
  statusBreakdown: [
    { name: "Confirmed", value: 24, color: "#10b981" },
    { name: "Pending", value: 8, color: "#f59e0b" },
    { name: "Completed", value: 4, color: "#3b82f6" },
    { name: "Cancelled", value: 2, color: "#ef4444" },
  ],
  recentBookings: [
    {
      _id: "bk-101",
      packageId: "pkg-1",
      packageTitle: "Bali Tropical Paradise & Nusa Penida",
      packageCoverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      destination: "Bali & Nusa Penida",
      travelerName: "Demo User",
      travelerEmail: "user@travelmate.com",
      travelerPhone: "+1 (555) 234-5678",
      guestsCount: 2,
      startDate: "2026-10-01",
      totalPrice: 1440,
      status: "confirmed",
      paymentStatus: "paid",
      createdAt: new Date().toISOString(),
    }
  ]
};
