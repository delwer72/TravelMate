import dotenv from "dotenv";
dotenv.config();
import { connectDB, getDb } from "../src/config/db.js";

interface TourItemSeed {
  title: string;
  slug: string;
  destination: string;
  country: string;
  category: "Adventure" | "Beach" | "Cultural" | "Wildlife" | "Luxury" | "City" | "Mountain";
  description: string;
  price: number;
  discountPrice?: number;
  durationDays: number;
  maxGroupSize: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  coverImage: string;
  images: string[];
  featured?: boolean;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  startLocation: string;
  departureDates: string[];
  createdAt: Date;
}

const DESTINATIONS: {
  title: string;
  destination: string;
  country: string;
  category: "Adventure" | "Beach" | "Cultural" | "Wildlife" | "Luxury" | "City" | "Mountain";
  description: string;
  price: number;
  durationDays: number;
  img: string;
  highlights: string[];
}[] = [
  // 1-10: Europe Classic
  {
    title: "Paris Lights & Louvre Art Splendor",
    destination: "Paris & Versailles",
    country: "France",
    category: "City",
    description: "Explore the Eiffel Tower, private Louvre museum tour, Seine river dinner cruise, and golden halls of Versailles.",
    price: 1350,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Eiffel Tower Summit Access", "Louvre Private Guided Walk", "Seine River Evening Dinner Cruise", "Palace of Versailles"]
  },
  {
    title: "Rome Colosseum & Vatican Highlights",
    destination: "Rome & Vatican City",
    country: "Italy",
    category: "Cultural",
    description: "Walk in the footsteps of gladiators at the Colosseum, marvel at the Sistine Chapel, and toss coins into Trevi Fountain.",
    price: 1290,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Colosseum & Roman Forum VIP Access", "Vatican Museums & Sistine Chapel", "Trastevere Food & Wine Walk", "Pantheon Tour"]
  },
  {
    title: "Barcelona Gaudi Architecture & Tapas",
    destination: "Barcelona & Costa Brava",
    country: "Spain",
    category: "City",
    description: "Discover Sagrada Familia, Park Guell, vibrant Gothic Quarter alleys, and seaside Mediterranean tapas bars.",
    price: 1150,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sagrada Familia Tower Access", "Park Guell Mosaic Tour", "Gothic Quarter Tapas Evening", "Costa Brava Day Excursion"]
  },
  {
    title: "Venice Gondola & Murano Glass Odyssey",
    destination: "Venice & Islands",
    country: "Italy",
    category: "Luxury",
    description: "Glide through shimmering canals on a private gondola, visit Murano glassmakers, and savor prosecco in St. Mark's Square.",
    price: 1420,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Private Grand Canal Gondola Ride", "Doge's Palace Secret Itinerary", "Murano & Burano Island Cruise", "Cicchetti & Wine Tasting"]
  },
  {
    title: "Amsterdam Canals & Van Gogh Experience",
    destination: "Amsterdam & Zaanse Schans",
    country: "Netherlands",
    category: "Cultural",
    description: "Cruise charming UNESCO canal rings, explore world-renowned Rijksmuseum, and visit historic windmills at Zaanse Schans.",
    price: 1100,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["UNESCO Canal Dinner Cruise", "Rijksmuseum & Van Gogh Museum Pass", "Zaanse Schans Windmills Excursion", "Jordaan District Bike Tour"]
  },
  {
    title: "Prague Old Town & Castle Marvels",
    destination: "Prague & Cesky Krumlov",
    country: "Czech Republic",
    category: "Cultural",
    description: "Cross Charles Bridge at sunrise, wander through fairytale Prague Castle, and journey to UNESCO-listed Cesky Krumlov.",
    price: 980,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Prague Castle & St. Vitus Cathedral", "Charles Bridge Sunset Walk", "Cesky Krumlov Day Trip", "Traditional Czech Brewery Tour"]
  },
  {
    title: "Vienna Imperial Palaces & Classical Concert",
    destination: "Vienna & Wachau Valley",
    country: "Austria",
    category: "Cultural",
    description: "Step into imperial grandeur at Schonbrunn Palace, attend a Mozart symphony concert, and cruise the Danube Valley.",
    price: 1250,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Schonbrunn & Hofburg Palaces", "Kursalon Strauss & Mozart Concert", "Wachau Valley Danube Cruise", "Historic Viennese Coffeehouse Tour"]
  },
  {
    title: "Dubrovnik Adriatic Pearl & Island Cruise",
    destination: "Dubrovnik & Lokrum",
    country: "Croatia",
    category: "Beach",
    description: "Walk ancient stone city walls towering over turquoise waters, kayak around Lokrum Island, and swim at secluded coves.",
    price: 1180,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Dubrovnik Medieval Walls Walk", "Elaphiti Islands Yacht Tour", "Sea Kayaking to Betina Cave", "Sunset Mount Srd Cable Car"]
  },
  {
    title: "Edinburgh Royal Mile & Scottish Highlands",
    destination: "Edinburgh & Isle of Skye",
    country: "United Kingdom",
    category: "Adventure",
    description: "Discover brooding Edinburgh Castle, search for Nessie at Loch Ness, and hike dramatic dramatic cliffs on the Isle of Skye.",
    price: 1480,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Edinburgh Castle & Royal Mile", "Isle of Skye Fairy Pools", "Loch Ness & Glen Coe Valley", "Highland Single Malt Tasting"]
  },
  {
    title: "Lisbon Tram Escapes & Sintra Palaces",
    destination: "Lisbon & Sintra",
    country: "Portugal",
    category: "City",
    description: "Ride historic Tram 28 through Alfama, taste warm Pastel de Nata, and marvel at fairytale Pena Palace in misty Sintra.",
    price: 1050,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Pena Palace & Quinta da Regaleira", "Historic Tram 28 & Alfama Walk", "Belem Tower & Pastéis de Belém", "Cabo da Roca Atlantic Views"]
  },

  // 11-20: Asia & Middle East
  {
    title: "Tokyo Shinjuku Lights & Mount Fuji Views",
    destination: "Tokyo & Hakone",
    country: "Japan",
    category: "City",
    description: "Immerse yourself in Shibuya crossing, Akihabara tech, peaceful Meiji shrine, and hot spring onsen overlooking Mount Fuji.",
    price: 1680,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Hakone Mount Fuji Ropeway & Cruise", "Shibuya Sky Observation Deck", "TeamLab Borderless Digital Art", "Tsukiji Outer Market Food Tour"]
  },
  {
    title: "Bangkok Grand Palace & Floating Markets",
    destination: "Bangkok & Ayutthaya",
    country: "Thailand",
    category: "Cultural",
    description: "Marvel at shimmering Wat Phra Kaew, ride longtail boats through floating markets, and explore ancient Ayutthaya temple ruins.",
    price: 880,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Grand Palace & Emerald Buddha", "Damnoen Saduak Floating Market", "Ayutthaya UNESCO Temple Ruins", "Chao Phraya River Dinner Cruise"]
  },
  {
    title: "Ha Long Bay Emerald Cruise & Hanoi",
    destination: "Hanoi & Ha Long Bay",
    country: "Vietnam",
    category: "Adventure",
    description: "Cruise among thousands of limestone karsts on a luxury junk boat, kayak through hidden lagoons, and taste pho in Hanoi Old Quarter.",
    price: 940,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Overnight Luxury Ha Long Cruise", "Sung Sot Cave & Ti Top Island Hike", "Hanoi Old Quarter Street Food Tour", "Trang An Cave Boat Exploration"]
  },
  {
    title: "Seoul Palaces & Gangnam K-Wave",
    destination: "Seoul & Nami Island",
    country: "South Korea",
    category: "City",
    description: "Wear traditional Hanbok at Gyeongbokgung palace, shop vibrant Myeongdong street markets, and take scenic rides to Nami Island.",
    price: 1280,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Gyeongbokgung Palace & Bukchon Village", "N Seoul Tower Panoramic Views", "Myeongdong Night Food Market", "Nami Island Scenic Day Tour"]
  },
  {
    title: "Dubai Desert Safari & Burj Khalifa Luxury",
    destination: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    category: "Luxury",
    description: "Stand atop Burj Khalifa level 148, dune bash in 4x4 across red sands, and visit Sheikh Zayed Grand Mosque in Abu Dhabi.",
    price: 1590,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Burj Khalifa At The Top Access", "Luxury Red Dune Safari & BBQ Camp", "Sheikh Zayed Grand Mosque Tour", "Dubai Marina Yacht Cruise"]
  },
  {
    title: "Petra Lost City & Wadi Rum Starry Camp",
    destination: "Petra & Wadi Rum",
    country: "Jordan",
    category: "Adventure",
    description: "Walk through the Siq to the Treasury carved in rose-red rock, sleep under desert stars in a bubble dome, and float in the Dead Sea.",
    price: 1450,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1579606032834-de0fa6a7f805?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Petra Treasury & Monastery Hike", "Wadi Rum 4x4 Bedouin Jeep Tour", "Dead Sea Floating Experience", "Overnight Stargazing Martian Camp"]
  },
  {
    title: "Cappadocia Hot Air Balloon & Cave Suites",
    destination: "Cappadocia & Istanbul",
    country: "Turkey",
    category: "Adventure",
    description: "Soar above fairy chimneys in a hot air balloon at sunrise, stay in authentic cave suites, and browse Istanbul's Grand Bazaar.",
    price: 1390,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sunrise Hot Air Balloon Flight", "Underground City of Derinkuyu", "Goreme Open Air Museum", "Hagia Sophia & Blue Mosque"]
  },
  {
    title: "Singapore Marina Bay & Gardens by the Bay",
    destination: "Singapore & Sentosa",
    country: "Singapore",
    category: "City",
    description: "Witness Supertree Grove illuminated light shows, stroll the futuristic Cloud Forest dome, and relax on Sentosa Island beaches.",
    price: 1220,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Gardens by the Bay & Cloud Forest", "Marina Bay Sands SkyPark Deck", "Night Safari Wildlife Tram", "Chinatown & Hawker Center Feast"]
  },
  {
    title: "Taj Mahal Sunrise & Rajasthan Forts",
    destination: "Agra & Jaipur",
    country: "India",
    category: "Cultural",
    description: "Gaze at the white marble Taj Mahal at sunrise, visit Amber Fort in the Pink City Jaipur, and stay in royal palace heritage hotels.",
    price: 1080,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Taj Mahal Sunrise Guided Visit", "Jaipur Amber Fort & City Palace", "Hawa Mahal Palace of Winds", "Royal Heritage Haveli Stay"]
  },
  {
    title: "Phuket Phi Phi Islands & Sea Caves",
    destination: "Phuket & Krabi",
    country: "Thailand",
    category: "Beach",
    description: "Speedboat across emerald waters to Maya Bay, snorkel among colorful tropical coral reefs, and canoe through limestone caves.",
    price: 980,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Phi Phi Don & Maya Bay Cruise", "James Bond Island & Phang Nga Bay", "Sea Cave Kayaking Expedition", "Sunset Beachfront Seafood Dinner"]
  },

  // 21-30: Africa & Safari
  {
    title: "Cape Town Table Mountain & Cape Point",
    destination: "Cape Town & Winelands",
    country: "South Africa",
    category: "Adventure",
    description: "Ascend Table Mountain by revolving cable car, meet Boulders Beach African penguins, and sip Pinotage in Stellenbosch vineyards.",
    price: 1540,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Table Mountain Cable Car Ride", "Boulders Beach Penguin Colony", "Cape of Good Hope Oceanic Hike", "Stellenbosch Wine & Cheese Tour"]
  },
  {
    title: "Marrakech Medina & Sahara Desert Luxury Camp",
    destination: "Marrakech & Merzouga",
    country: "Morocco",
    category: "Cultural",
    description: "Get lost in vibrant souks of Jemaa el-Fnaa, ride camels into Erg Chebbi golden dunes, and sleep under millions of stars.",
    price: 1190,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sahara Desert Camel Trek & Glamping", "Jemaa el-Fnaa & Bahia Palace", "Ait Ben Haddou UNESCO Kasbah", "High Atlas Mountain Pass Drive"]
  },
  {
    title: "Cairo Giza Pyramids & Nile Luxury Cruise",
    destination: "Cairo & Luxor",
    country: "Egypt",
    category: "Cultural",
    description: "Stand before the Great Pyramid and Sphinx, cruise the legendary Nile River, and explore the Valley of the Kings tomb frescoes.",
    price: 1480,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Great Pyramids of Giza & Sphinx", "Nile 5-Star River Cruise", "Valley of the Kings & Karnak Temple", "Egyptian Museum & King Tut Gold"]
  },
  {
    title: "Mount Kilimanjaro Machame Route Trek",
    destination: "Kilimanjaro & Moshi",
    country: "Tanzania",
    category: "Mountain",
    description: "Conquer the Roof of Africa via the scenic Machame route, passing through rainforests, moorlands, and arctic summit glaciers.",
    price: 2450,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1650668301548-52b8eb583344?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Uhuru Peak 5,895m Sunrise Summit", "Lava Tower Acclimatization Hike", "Full Porter & Chef Camp Support", "Shira Plateau Panoramic Views"]
  },
  {
    title: "Zanzibar White Sands & Stone Town Spices",
    destination: "Zanzibar & Nungwi",
    country: "Tanzania",
    category: "Beach",
    description: "Bask on powder-white sands in Nungwi, snorkel Mnemba Atoll turquoise reef, and smell cloves and vanilla in historic Stone Town.",
    price: 1150,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Mnemba Atoll Dolphin & Snorkel Safari", "Stone Town Historic Walking Tour", "Tropical Spice Farm Experience", "Sunset Dhow Sailboat Cruise"]
  },
  {
    title: "Victoria Falls Thunder & Zambezi River",
    destination: "Livingstone & Victoria Falls",
    country: "Zimbabwe",
    category: "Adventure",
    description: "Feel the mist of the Smoke That Thunders, take a sunset cruise on the Zambezi River with hippos, and fly over falls in helicopter.",
    price: 1350,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Victoria Falls National Park Walk", "Zambezi River Sunset Cruise", "Helicopter Flight of Angels", "Devil's Pool Natural Swim Experience"]
  },
  {
    title: "Namibia Sossusvlei Dunes & Deadvlei",
    destination: "Sossusvlei & Swakopmund",
    country: "Namibia",
    category: "Adventure",
    description: "Climb Dune 45 at dawn, photograph 900-year-old dead camel thorn trees in white clay pans, and explore coastal desert dunes.",
    price: 1850,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sunrise Climb on Dune 45", "Deadvlei White Clay Pan Exploration", "Sesriem Canyon Geological Walk", "Living Desert 4x4 Safari"]
  },
  {
    title: "Madagascar Baobabs & Lemur Rainforest",
    destination: "Morondava & Andasibe",
    country: "Madagascar",
    category: "Wildlife",
    description: "Walk the iconic Avenue of the Baobabs at sunset, track rare Indri lemurs calling through misty rainforests, and see chameleons.",
    price: 1980,
    durationDays: 8,
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Avenue of the Baobabs Sunset Walk", "Andasibe Indri Lemur Tracking", "Night Walk for Mouse Lemurs", "Kirindy Reserve Wildlife Safari"]
  },
  {
    title: "Seychelles Praslin & La Digue Granitic Beaches",
    destination: "Mahe, Praslin & La Digue",
    country: "Seychelles",
    category: "Luxury",
    description: "Relax on world-famous Anse Source d'Argent framed by giant granite boulders, cycle car-free La Digue, and see Coco de Mer palms.",
    price: 2650,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Anse Source d'Argent Beach Day", "Vallee de Mai UNESCO Palm Forest", "Curieuse Giant Tortoise Sanctuary", "Catamaran Island Hopping Tour"]
  },
  {
    title: "Mauritius Chamarel Dunes & Coral Lagoons",
    destination: "Chamarel & Grand Baie",
    country: "Mauritius",
    category: "Beach",
    description: "Marvel at Seven Colored Earths volcanic sands, swim in crystalline coral lagoons, and cruise past volcanic Le Morne Brabant.",
    price: 1720,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Seven Colored Earths & Waterfall", "Le Morne UNESCO Mountain Hike", "Ile aux Cerfs Speedboat & BBQ", "Wild Dolphin Swimming Cruise"]
  },

  // 31-40: North America
  {
    title: "Banff Lake Louise & Canadian Rockies",
    destination: "Banff & Jasper",
    country: "Canada",
    category: "Mountain",
    description: "Paddle cyan waters of Lake Louise and Moraine Lake, traverse Columbia Icefield on an Ice Explorer, and watch for grizzly bears.",
    price: 1750,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Lake Louise & Moraine Lake Canoeing", "Columbia Icefield Glacier Walk", "Icefields Parkway Scenic Drive", "Banff Gondola Mountain Views"]
  },
  {
    title: "Grand Canyon & Zion National Parks",
    destination: "Arizona & Utah",
    country: "United States",
    category: "Adventure",
    description: "Gaze into the mile-deep Grand Canyon abyss, hike between towering sandstone cliffs in Zion Narrows, and visit Horseshoe Bend.",
    price: 1450,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Grand Canyon South Rim Sunrise", "Zion National Park Narrows Trek", "Bryce Canyon Hoodoos Trail", "Antelope Canyon & Horseshoe Bend"]
  },
  {
    title: "New York Manhattan Skyline & Broadway",
    destination: "New York City",
    country: "United States",
    category: "City",
    description: "Experience the energy of Times Square, ferry to Statue of Liberty, walk the High Line park, and see an award-winning Broadway show.",
    price: 1650,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Summit One Vanderbilt Observation", "Statue of Liberty & Ellis Island", "Central Park Guided Bike Tour", "Top-tier Broadway Musical Seat"]
  },
  {
    title: "Cancun Mayan Pyramids & Cenote Dives",
    destination: "Cancun & Tulum",
    country: "Mexico",
    category: "Beach",
    description: "Climb ancient Chichen Itza pyramid, snorkel inside crystal-clear underground cenotes, and sip margaritas on Tulum white sands.",
    price: 1120,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Chichen Itza Wonder of the World", "Sacred Cenote Ik Kil Swimming", "Tulum Cliffside Mayan Ruins", "Isla Mujeres Catamaran Cruise"]
  },
  {
    title: "Yellowstone Geysers & Grand Teton Wildlife",
    destination: "Wyoming & Montana",
    country: "United States",
    category: "Wildlife",
    description: "Witness Old Faithful erupt high into the blue sky, photograph prismatic hot springs, and spot bison herds across Lamar Valley.",
    price: 1680,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Grand Prismatic Spring & Old Faithful", "Lamar Valley Bison & Wolf Safari", "Grand Teton Jenny Lake Boat Cruise", "Yellowstone Grand Canyon Falls"]
  },
  {
    title: "Hawaii Maui Road to Hana & Haleakala",
    destination: "Maui & Molokini",
    country: "United States",
    category: "Beach",
    description: "Drive the thrilling winding Road to Hana past 50 waterfalls, watch sunrise above clouds at Haleakala, and snorkel Molokini crater.",
    price: 1890,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Haleakala Crater Sunrise Viewing", "Road to Hana Waterfall Expedition", "Molokini Crater Turtle Snorkel", "Traditional Polynesian Luau Feast"]
  },
  {
    title: "Costa Rica Arenal Volcano & Cloud Forest",
    destination: "Arenal & Monteverde",
    country: "Costa Rica",
    category: "Adventure",
    description: "Zipline over lush rainforest canopy, soak in natural volcanic thermal springs, and spot sloths and toucans in Monteverde.",
    price: 1250,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Monteverde Hanging Bridges Canopy", "Arenal Volcano & Tabacon Hot Springs", "Canopy Zipline Superman Experience", "Sloth & Tree Frog Wildlife Night Tour"]
  },
  {
    title: "Alaska Glaciers & Kenai Fjords Wildlife",
    destination: "Anchorage & Seward",
    country: "United States",
    category: "Wildlife",
    description: "Cruise past calving tidewater glaciers, watch humpback whales breach, and ride the scenic Alaska Railroad across mountain passes.",
    price: 2150,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Kenai Fjords Whale & Glacier Cruise", "Scenic Coastal Alaska Railroad", "Exit Glacier Guided Ice Walk", "Denali Tundra Wildlife Search"]
  },
  {
    title: "Vancouver & Whistler Sea to Sky Highway",
    destination: "Vancouver & Whistler",
    country: "Canada",
    category: "Mountain",
    description: "Ride Peak 2 Peak gondola between Whistler mountains, stroll Stanley Park seawall, and cross Capilano Suspension Bridge.",
    price: 1390,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1559511260-66a65e0982d5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Peak 2 Peak Gondola in Whistler", "Capilano Suspension Bridge Treetops", "Sea to Sky Highway Scenic Stops", "Granville Island & Stanley Park Tour"]
  },
  {
    title: "Oaxaca Culinary Gastronomy & Mezcal Trails",
    destination: "Oaxaca & Hierve el Agua",
    country: "Mexico",
    category: "Cultural",
    description: "Taste seven distinct moles, visit artisanal copper pot mezcal distilleries, and swim in petrified waterfall cliff pools.",
    price: 1050,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Hierve el Agua Petrified Springs", "Traditional Mole Cooking Masterclass", "Artisanal Mezcal Distillery Tasting", "Monte Alban Zapotec Ruins"]
  },

  // 41-50: South America
  {
    title: "Rio de Janeiro Christ the Redeemer & Copacabana",
    destination: "Rio de Janeiro",
    country: "Brazil",
    category: "City",
    description: "Take the cog train to Christ the Redeemer, ride cable cars to Sugarloaf Mountain, and dance samba along Copacabana beach.",
    price: 1280,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Christ the Redeemer Monument", "Sugarloaf Mountain Sunset Cable Car", "Copacabana & Ipanema Beaches", "Lapa Arches & Selaron Steps"]
  },
  {
    title: "Iguazu Falls Wonder & Devil's Throat",
    destination: "Iguazu Falls",
    country: "Argentina",
    category: "Adventure",
    description: "Walk catwalks right over the roaring Devil's Throat, ride speedboats directly beneath waterfalls, and spot toucans in the jungle.",
    price: 1180,
    durationDays: 4,
    img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Devil's Throat Balcony Walk", "Argentine & Brazilian Sides Tour", "Gran Aventura Waterfall Boat Ride", "Subtropical Rainforest Bird Watching"]
  },
  {
    title: "Buenos Aires Tango & Mendoza Wine Valleys",
    destination: "Buenos Aires & Mendoza",
    country: "Argentina",
    category: "Cultural",
    description: "Attend an authentic tango show in San Telmo, tour grand avenues of Recoleta, and taste world-class Malbec beneath the Andes.",
    price: 1450,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
    highlights: ["VIP Tango Show & 3-Course Dinner", "Mendoza Malbec Vineyard Tastings", "La Boca Caminito Colorful Alleys", "High Andes Mountain Lookout"]
  },
  {
    title: "Galapagos Islands Giant Tortoises & Sea Lions",
    destination: "Santa Cruz & San Cristobal",
    country: "Ecuador",
    category: "Wildlife",
    description: "Snorkel alongside marine iguanas and playful sea lions, encounter giant tortoises in the highlands, and walk volcanic craters.",
    price: 2850,
    durationDays: 7,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Kicker Rock Snorkeling with Sharks", "Highlands Giant Tortoise Reserve", "Bartolome Island Pinnacle Rock", "Charles Darwin Research Station"]
  },
  {
    title: "Atacama Desert Geysers & Stargazing",
    destination: "San Pedro de Atacama",
    country: "Chile",
    category: "Adventure",
    description: "Float in salty Laguna Cejar, explore moon-like landscapes in Valle de la Luna, and stargaze under the clearest skies on Earth.",
    price: 1380,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Valle de la Luna Sunset Walk", "El Tatio Geysers at Dawn", "Laguna Cejar Salt Floating", "Astronomical Night Sky Tour"]
  },
  {
    title: "Cartagena Colonial Walled City & Rosario Islands",
    destination: "Cartagena & Rosario Islands",
    country: "Colombia",
    category: "Beach",
    description: "Stroll vibrant bougainvillea-lined colonial streets, taste ceviche, and escape by speedboat to Rosario Island coral reefs.",
    price: 1090,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cartagena Walled City Architecture", "Rosario Islands Coral Beach Day", "San Felipe Castle Fortress", "Getsemani Street Art Walking Tour"]
  },
  {
    title: "Salar de Uyuni Salt Flats & Red Lagoon",
    destination: "Uyuni & Eduardo Avaroa",
    country: "Bolivia",
    category: "Adventure",
    description: "Take perspective photos on the world's largest salt mirror, see thousands of pink flamingos at Laguna Colorada, and soak in hot springs.",
    price: 1190,
    durationDays: 4,
    img: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Salar de Uyuni Infinite Mirror", "Laguna Colorada Flamingos", "Incahuasi Giant Cactus Island", "Dali Desert & Sol de Manana Geysers"]
  },
  {
    title: "Cusco Rainbow Mountain & Sacred Valley",
    destination: "Cusco & Vinicunca",
    country: "Peru",
    category: "Mountain",
    description: "Hike to the breathtaking mineral-striped summit of Rainbow Mountain at 5,200m and explore Ollantaytambo Incan fortress.",
    price: 890,
    durationDays: 4,
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Vinicunca Rainbow Mountain Hike", "Maras Salt Mines & Moray Terraces", "Ollantaytambo Incan Fortress", "Cusco Plaza de Armas Historic Walk"]
  },
  {
    title: "Amazon Rainforest Wildlife Lodge & Canopy",
    destination: "Puerto Maldonado",
    country: "Peru",
    category: "Wildlife",
    description: "Sleep in an eco-lodge surrounded by rainforest sounds, see macaws at clay licks, and spot caimans during nighttime boat safaris.",
    price: 1250,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Chuncho Macaw Clay Lick", "Canopy Walkway 30m Above Ground", "Night Caiman River Safari", "Oxbow Lake Piranha Fishing"]
  },
  {
    title: "Bariloche Lake District & Swiss Chocolate Town",
    destination: "San Carlos de Bariloche",
    country: "Argentina",
    category: "Mountain",
    description: "Sail across glacial Lake Nahuel Huapi, hike forest paths overlooking snow-capped peaks, and indulge in artisan chocolate shops.",
    price: 1220,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Circuito Chico Panoramic Tour", "Nahuel Huapi Lake Navigation", "Cerro Campanario Chairlift Views", "Swiss Colony & Chocolate Tasting"]
  },

  // 51-60: Oceania & Pacific
  {
    title: "Sydney Opera House & Blue Mountains",
    destination: "Sydney & Blue Mountains",
    country: "Australia",
    category: "City",
    description: "Tour inside the iconic Sydney Opera House, ferry past Sydney Harbour Bridge, and hike beneath the Three Sisters in Blue Mountains.",
    price: 1520,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sydney Opera House Guided Inside Tour", "Blue Mountains Three Sisters Lookout", "Bondi to Coogee Coastal Walk", "Sydney Harbour Sunset Catamaran"]
  },
  {
    title: "Great Barrier Reef Outer Coral Reef Dive",
    destination: "Cairns & Port Douglas",
    country: "Australia",
    category: "Beach",
    description: "Board a luxury catamaran to the outer Great Barrier Reef, snorkel among sea turtles and clownfish, and wander Daintree Rainforest.",
    price: 1680,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Outer Barrier Reef Pontoon & Snorkel", "Daintree Rainforest & Mossman Gorge", "Semi-Submersible Reef Tour", "Kuranda Scenic Railway Excursion"]
  },
  {
    title: "Queenstown Fiordland & Milford Sound",
    destination: "Queenstown & Milford Sound",
    country: "New Zealand",
    category: "Adventure",
    description: "Cruise beneath sheer glacier-carved peaks in Milford Sound, ride the Skyline gondola, and experience the adventure capital of the world.",
    price: 1790,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Milford Sound Nature Cruise", "Skyline Gondola & Luge Rides", "Lake Wakatipu TSS Earnslaw Cruise", "Arrowtown Historic Gold Mining Walk"]
  },
  {
    title: "Rotorua Geothermal & Hobbiton Movie Set",
    destination: "Auckland, Rotorua & Matamata",
    country: "New Zealand",
    category: "Cultural",
    description: "Walk the green Shire hills at the authentic Hobbiton Movie Set, witness bubbling mud pools and geysers, and experience a Maori Hangi feast.",
    price: 1390,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Hobbiton Movie Set Guided Tour", "Te Puia Geysers & Maori Village", "Waitomo Glowworm Caves Boat Ride", "Polynesian Spa Mineral Baths"]
  },
  {
    title: "Bora Bora Overwater Bungalow & Manta Ray Lagoon",
    destination: "Bora Bora & Tahiti",
    country: "French Polynesia",
    category: "Luxury",
    description: "Stay in a romantic overwater bungalow over translucent turquoise lagoon, snorkel with friendly stingrays, and dine on private beaches.",
    price: 3450,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["5-Star Overwater Bungalow with Glass Floor", "Lagoon Snorkeling with Rays & Reef Sharks", "Mount Otemanu 4x4 Jeep Safari", "Candlelight Beachfront Polynesian Dinner"]
  },
  {
    title: "Fiji Mamanuca Islands Coral Escape",
    destination: "Nadi & Mamanuca Islands",
    country: "Fiji",
    category: "Beach",
    description: "Experience genuine Bula hospitality, sail between secluded tropical islands, snorkel vibrant coral gardens, and join a Kava ceremony.",
    price: 1350,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Mamanuca Islands Sailing Cruise", "Traditional Kava Welcome Ceremony", "Castaway Island Snorkeling Reef", "Sunset Fire Dancing Feast"]
  },
  {
    title: "Melbourne Great Ocean Road & Twelve Apostles",
    destination: "Melbourne & Great Ocean Road",
    country: "Australia",
    category: "Adventure",
    description: "Drive along dramatic coastal cliffs to the Twelve Apostles limestone stacks, walk ancient rainforests, and explore Melbourne's coffee lanes.",
    price: 1290,
    durationDays: 5,
    img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Twelve Apostles Sunset Lookout", "Loch Ard Gorge Coastal Trail", "Wild Koala Spotting at Kennett River", "Melbourne Laneways Street Art Tour"]
  },
  {
    title: "Tasmania Cradle Mountain & Wineglass Bay",
    destination: "Hobart & Cradle Mountain",
    country: "Australia",
    category: "Mountain",
    description: "Hike around alpine Dove Lake beneath rugged Cradle Mountain, stand on pristine white sands of Wineglass Bay, and meet Tasmanian devils.",
    price: 1480,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cradle Mountain & Dove Lake Circuit", "Wineglass Bay Freycinet Lookout", "Tasmanian Devil Wildlife Sanctuary", "Salamanca Market in Hobart"]
  },
  {
    title: "Uluru Sacred Red Center & Kata Tjuta",
    destination: "Yulara & Alice Springs",
    country: "Australia",
    category: "Cultural",
    description: "Witness the sacred red sandstone monolith of Uluru change colors at sunrise and sunset, and walk between 36 domed rocks of Kata Tjuta.",
    price: 1580,
    durationDays: 4,
    img: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Uluru Sunrise & Base Walking Tour", "Field of Light Art Installation", "Kata Tjuta Walpa Gorge Hike", "Sounds of Silence Outbacks Dinner"]
  },
  {
    title: "Moorea Lagoon Paradise & Pineapple Valleys",
    destination: "Moorea & Papeete",
    country: "French Polynesia",
    category: "Beach",
    description: "Scooter through emerald volcanic valleys lined with pineapples, snorkel with sea turtles in turquoise bays, and hike Belvedere lookout.",
    price: 2150,
    durationDays: 6,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Lagoon Boat Safari with Rays & Sharks", "Belvedere Lookout Panoramic Hike", "Cook's Bay & Opunohu Bay Cruise", "Polynesian Cultural Center Visit"]
  }
];

// Replicate and generate rich variations to reach 100 high quality distinct packages
const EXTENDED_NAMES: { prefix: string; modifier: string; catBonus: any }[] = [
  { prefix: "Ultimate", modifier: "Exclusive Private Journey", catBonus: "Luxury" },
  { prefix: "Grand", modifier: "Complete Heritage Expedition", catBonus: "Cultural" },
  { prefix: "Signature", modifier: "Boutique Small Group Escape", catBonus: "Adventure" },
];

async function seed() {
  await connectDB();
  const db = getDb();
  console.log("Checking existing packages...");
  const currentCount = await db.collection("packages").countDocuments();
  console.log(`Current packages count: ${currentCount}`);

  const newPackages: TourItemSeed[] = [];
  const baseTime = Date.now() - 3600 * 1000 * 48; // 2 days ago so Cox's Bazar remains at the top

  let idCount = 1;

  // Add all 40 curated destinations as prime packages
  for (const item of DESTINATIONS) {
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const discount = Math.round(item.price * 0.88);
    const dateOffset = idCount * 3600 * 1000 * 4; // spaced hours

    newPackages.push({
      title: item.title,
      slug: `${slug}-${idCount}`,
      destination: item.destination,
      country: item.country,
      category: item.category,
      description: item.description,
      price: item.price,
      discountPrice: discount,
      durationDays: item.durationDays,
      maxGroupSize: Math.floor(8 + (idCount % 8)),
      ratingsAverage: Number((4.75 + (idCount % 5) * 0.05).toFixed(2)),
      ratingsQuantity: 45 + (idCount * 7) % 180,
      coverImage: item.img,
      images: [item.img],
      featured: idCount % 4 === 0,
      highlights: item.highlights,
      included: ["Boutique Hotel Accommodations", "Daily Gourmet Breakfast", "Expert English Guide", "Airport Transfers"],
      excluded: ["International Airfare", "Personal Expenses"],
      itinerary: [
        { day: 1, title: `Welcome to ${item.destination.split('&')[0].trim()}`, description: `Arrive, airport transfer, hotel check-in, and welcome dinner.` },
        { day: 2, title: "Iconic Sights & Guided Exploration", description: `Visit ${item.highlights[0]} and historic city center.` },
        { day: 3, title: "Scenic Nature & Hidden Gems", description: `Excursion to ${item.highlights[1]} with local culinary tasting.` },
        { day: 4, title: "Cultural Discovery & Local Life", description: `Experience ${item.highlights[2]} and artisanal workshops.` },
        { day: item.durationDays, title: "Farewell & Departure", description: "Leisure morning, souvenir shopping, and departure transfer." },
      ],
      startLocation: item.destination.split('&')[0].trim(),
      departureDates: ["2026-10-05", "2026-10-25", "2026-11-15"],
      createdAt: new Date(baseTime - dateOffset),
    });
    idCount++;
  }

  // Generate the remaining 60 packages from diverse curated destination variations
  while (newPackages.length < 100) {
    const template = DESTINATIONS[(newPackages.length - 40) % DESTINATIONS.length];
    const variation = EXTENDED_NAMES[newPackages.length % EXTENDED_NAMES.length];
    const title = `${variation.prefix} ${template.title.split(' ')[0]} ${template.destination.split('&')[0].trim()} ${variation.modifier}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const priceAdjust = 50 * ((newPackages.length % 7) - 3);
    const finalPrice = Math.max(790, template.price + priceAdjust);
    const dateOffset = idCount * 3600 * 1000 * 3;

    newPackages.push({
      title,
      slug: `${slug}-${idCount}`,
      destination: template.destination,
      country: template.country,
      category: template.category,
      description: `Embark on a ${variation.prefix.toLowerCase()} exploration of ${template.destination}. ${template.description}`,
      price: finalPrice,
      discountPrice: Math.round(finalPrice * 0.89),
      durationDays: template.durationDays + (newPackages.length % 3),
      maxGroupSize: Math.floor(6 + (newPackages.length % 10)),
      ratingsAverage: Number((4.78 + (newPackages.length % 4) * 0.05).toFixed(2)),
      ratingsQuantity: 30 + (newPackages.length * 6) % 190,
      coverImage: template.img,
      images: [template.img],
      featured: newPackages.length % 5 === 0,
      highlights: template.highlights,
      included: ["4-Star & Boutique Accommodations", "Daily Breakfasts & 2 Dinners", "Private Transfers", "Admission to All Itinerary Attractions"],
      excluded: ["International Airfare", "Travel Insurance"],
      itinerary: [
        { day: 1, title: "Arrival & Orientation", description: `Touch down in ${template.destination}, private check-in, and sunset welcome cocktail.` },
        { day: 2, title: "Key Highlights & Guided Walking Tour", description: `Explore ${template.highlights[0]} with insider local tips.` },
        { day: 3, title: "Deep Dive Experience", description: `In-depth visit to ${template.highlights[1]} and leisure afternoon.` },
        { day: 4, title: "Panoramic Excursion", description: `Breathtaking views at ${template.highlights[2]}.` },
        { day: template.durationDays + (newPackages.length % 3), title: "Farewell Transfer", description: "Private airport transfer for homeward flights." },
      ],
      startLocation: template.destination.split('&')[0].trim(),
      departureDates: ["2026-10-10", "2026-11-01", "2026-11-20"],
      createdAt: new Date(baseTime - dateOffset),
    });
    idCount++;
  }

  console.log(`Prepared ${newPackages.length} realistic tour packages to insert...`);
  const result = await db.collection("packages").insertMany(newPackages as any);
  console.log(`✅ Successfully inserted ${result.insertedCount} new tour packages!`);

  const totalNow = await db.collection("packages").countDocuments();
  console.log(`Total packages in database now: ${totalNow}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
