export interface ContactInfo {
  businessName: string;
  tagline: string;
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  whatsappNumber: string;
  email: string;
  mapsUrl: string;
  city: string;
  state: string;
  pincode: string;
}

export const BUSINESS_INFO: ContactInfo = {
  businessName: 'Nafees Paints',
  tagline: 'Colours That Transform Your Space.',
  address: 'Nai Abadi Gol Chouraha, Banswara, Rajasthan 327001',
  phoneDisplay: '094142 37282',
  phoneTel: 'tel:+919414237282',
  whatsappDisplay: '+91 86902 19213',
  whatsappUrl: 'https://wa.me/918690219213',
  whatsappNumber: '918690219213',
  email: 'contact.nafeespaints@gmail.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nafees+Paints+Nai+Abadi+Gol+Chouraha+Banswara+Rajasthan+327001',
  city: 'Banswara',
  state: 'Rajasthan',
  pincode: '327001',
};

export interface BrandPartner {
  id: string;
  name: string;
  relationship: 'Authorized Dealer' | 'Franchise Store';
  description: string;
}

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: 'asian-paints',
    name: 'Asian Paints',
    relationship: 'Authorized Dealer',
    description: 'India’s premier paint manufacturer. Full access to Royale, Apex Ultima, and complete interior & exterior emulsions.',
  },
  {
    id: 'nerolac',
    name: 'Nerolac Paints',
    relationship: 'Authorized Dealer',
    description: 'Trusted high-performance coatings with Japanese technology, HD finishes, and eco-friendly low-VOC solutions.',
  },
  {
    id: 'birla-opus',
    name: 'Birla Opus',
    relationship: 'Franchise Store',
    description: 'Official Birla Opus franchise offering revolutionary next-generation paint formulations, superior coverage, and enduring aesthetics.',
  },
];

export interface ProductCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'interior-paints',
    title: 'Interior Wall Paints',
    tagline: 'Velvet, silk & ultra-matte formulations',
    description: 'High-opacity, washable emulsions designed for interior comfort, rich shade depth, and stain resistance in living and bedroom spaces.',
    highlights: ['Luxury Silk & Matte Emulsions', 'Stain Resistant & Washable', 'Low Odour & Non-Toxic'],
    imageUrl: '/assets/images/project_modern_interior_1793509020821.jpg',
  },
  {
    id: 'exterior-paints',
    title: 'Exterior Wall Paints',
    tagline: 'Weather-proof, heat & rain resilience',
    description: 'Heavy-duty exterior acrylic coatings formulated to withstand harsh desert sunlight, heavy monsoon moisture, and exterior algae.',
    highlights: ['All-Weather UV Defense', 'Anti-Fungal & Dirt Pick-up Resistance', 'Long-lasting Sheen & Coverage'],
    imageUrl: '/assets/images/project_exterior_facade_1793509021783.jpg',
  },
  {
    id: 'primers-prep',
    title: 'Primers & Wall Preparation',
    tagline: 'Enduring foundation for flawless finishes',
    description: 'Deep-penetrating acrylic wall primers, water-thinnable sealers, and smooth white cement putty for long-lasting paint adhesion.',
    highlights: ['Moisture Barrier Primers', 'Ultra-Fine Surface Putty', 'Pore-Filling Masonry Sealers'],
    imageUrl: '/assets/images/hero_modern_home_1793509020126.jpg',
  },
  {
    id: 'wood-metal',
    title: 'Wood and Metal Paints',
    tagline: 'Protective gloss and satin coatings',
    description: 'Specialized solvent and water-based enamels providing corrosion protection for iron gates, grills, and mirror finishes for woodwork.',
    highlights: ['Anti-Rust Primer & Enamel', 'Polyurethane Wood Varnishes', 'Smooth Satin & High Gloss'],
    imageUrl: '/assets/images/storefront_nafees_paints_1793509021777.jpg',
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing Solutions',
    tagline: 'Advanced damp and leakage prevention',
    description: 'Elastomeric membranes and specialized crystalline waterproofing compounds for terrace roofs, parapets, and exterior wall cracks.',
    highlights: ['Terrace Elastomeric Coatings', 'Interior Dampness Blocker', 'Crack Fillers & Joint Sealants'],
    imageUrl: '/assets/images/hero_modern_home_1793509020126.jpg',
  },
  {
    id: 'wall-textures',
    title: 'Wall Textures & Decorative Finishes',
    tagline: 'Artisanal tactile statement surfaces',
    description: 'Designer trowel textures, metallic glazes, Venetian plasters, and architectural feature wall effects that bring dimension to rooms.',
    highlights: ['Artisanal Metallic Sheens', 'Venetian & Stucco Plasters', 'Custom Feature Wall Textures'],
    imageUrl: '/assets/images/project_wall_texture_1793509022220.jpg',
  },
];

export interface GalleryProject {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'texture' | 'renovation';
  categoryLabel: string;
  location: string;
  description: string;
  imageUrl: string;
  keyFeature: string;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Contemporary Residence Facade',
    category: 'exterior',
    categoryLabel: 'Exterior Facade',
    location: 'Residential Villa, Banswara',
    description: 'Dual-tone exterior protection with high UV reflectance and waterproof elastomeric base coats.',
    imageUrl: '/assets/images/project_exterior_facade_1793509021783.jpg',
    keyFeature: 'Weather-Shield Dual-Tone Finish',
  },
  {
    id: 'proj-2',
    title: 'Minimalist Living Room & Accent Wall',
    category: 'interior',
    categoryLabel: 'Modern Living Room',
    location: 'Private Home, Banswara',
    description: 'Seamless warm ivory wall emulsion complemented by a handcrafted deep charcoal hearth accent.',
    imageUrl: '/assets/images/project_modern_interior_1793509020821.jpg',
    keyFeature: 'Washable Silk Emulsion',
  },
  {
    id: 'proj-3',
    title: 'Venetian Plaster Artisanal Texture',
    category: 'texture',
    categoryLabel: 'Designer Textures',
    location: 'Feature Wall, Banswara',
    description: 'Trowel-applied custom textured plaster with subtle metallic highlights responding to directional lighting.',
    imageUrl: '/assets/images/project_wall_texture_1793509022220.jpg',
    keyFeature: 'Tactile Metallic Lustre',
  },
  {
    id: 'proj-4',
    title: 'Modern Architecture Twilight Villa',
    category: 'exterior',
    categoryLabel: 'Full House Project',
    location: 'Luxury Bungalow, Banswara',
    description: 'Full-estate exterior repainting and masonry protection with stone-look textured boundary walls.',
    imageUrl: '/assets/images/hero_modern_home_1793509020126.jpg',
    keyFeature: 'Architectural Stone & Paint Synergy',
  },
  {
    id: 'proj-5',
    title: 'Nafees Paints Storefront & Tinting Center',
    category: 'interior',
    categoryLabel: 'Showroom & Tinting Studio',
    location: 'Nai Abadi Gol Chouraha, Banswara',
    description: 'Our retail center equipped with computerized tinting machines and shade exploration galleries.',
    imageUrl: '/assets/images/storefront_nafees_paints_1793509021777.jpg',
    keyFeature: 'Official Dealer Showroom',
  },
];

export interface PaintingService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export const PAINTING_SERVICES: PaintingService[] = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    tagline: 'Living rooms, bedrooms, and false ceilings',
    description: 'Clean, dust-controlled interior painting with edge masking, double-layer wall putty, and ultra-smooth topcoats.',
    features: ['Floor & furniture protective masking', 'Surface sanding & primer coat', 'Precision roller finish'],
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    tagline: 'Full facade weatherproofing & rejuvenation',
    description: 'Multi-stage exterior preparation, pressure washing, crack treatment, and high-durability weather-shield coatings.',
    features: ['High-pressure water washing', 'Anti-algal primer foundation', 'Heavy-duty weather emulsions'],
  },
  {
    id: 'new-home-painting',
    title: 'New Home Painting',
    tagline: 'Complete start-to-finish painting packages',
    description: 'End-to-end solutions for newly constructed buildings: raw plaster inspection, moisture testing, base putty, and top finishes.',
    features: ['Plaster curing check', '2-coat acrylic wall putty', 'Complete ceiling & woodwork coating'],
  },
  {
    id: 'repainting-renovation',
    title: 'Repainting & Renovation',
    tagline: 'Breathe new life into aging spaces',
    description: 'Scraping loose paint, dampness elimination, stain blocking, and fresh shade transformations with minimal disruption.',
    features: ['Old paint scraping & repair', 'Damp & efflorescence treatment', 'Quick turnaround schedule'],
  },
  {
    id: 'decorative-finishes',
    title: 'Decorative Wall Finishes',
    tagline: 'Statement walls & artisan textures',
    description: 'Custom handcrafted accent walls, metallic stuccos, rustic brick effects, and textured finishes for foyers and dining areas.',
    features: ['Specialized trowel artisans', 'Metallic & pearl sheens', 'Bespoke pattern sampling'],
  },
  {
    id: 'colour-consultation',
    title: 'Paint & Colour Consultation',
    tagline: 'Expert guidance on shades and lighting',
    description: 'In-store guidance on natural light interplay, room proportions, computerized colour matching, and sample test pots.',
    features: ['Computerized shade matching', 'Architectural palette pairing', 'Finish selection (Matte vs Silk)'],
  },
];

export interface SwatchColor {
  name: string;
  hex: string;
  textColor: string;
  finish: 'Matte' | 'Silk' | 'High Sheen';
  pairing: string;
  mood: string;
}

export const INSPIRATION_SWATCHES: SwatchColor[] = [
  {
    name: 'Banswara Marble White',
    hex: '#F4F3EE',
    textColor: '#17191B',
    finish: 'Silk',
    pairing: 'Graphite Hearth & Teak Wood',
    mood: 'Spacious, clean, tranquil daylight presence',
  },
  {
    name: 'Aravalli Slate Graphite',
    hex: '#303438',
    textColor: '#FFFFFF',
    finish: 'Matte',
    pairing: 'Mewar Ivory & Brushed Brass',
    mood: 'Architectural grounding, dramatic accent',
  },
  {
    name: 'Mewar Warm Ivory',
    hex: '#EFE8DC',
    textColor: '#17191B',
    finish: 'Silk',
    pairing: 'Whispering Sage & Warm Oak',
    mood: 'Warm welcoming hospitality, soft shadows',
  },
  {
    name: 'Desert Dune Sandstone',
    hex: '#D1BDA3',
    textColor: '#17191B',
    finish: 'Matte',
    pairing: 'Deep Charcoal & Linen Drapes',
    mood: 'Earthy organic warmth, tactile elegance',
  },
  {
    name: 'Whispering Sage',
    hex: '#8C9B89',
    textColor: '#FFFFFF',
    finish: 'Silk',
    pairing: 'Marble White & Fluted Glass',
    mood: 'Calming organic serenity, restful bedrooms',
  },
  {
    name: 'Lake Pichola Dusk',
    hex: '#536573',
    textColor: '#FFFFFF',
    finish: 'Matte',
    pairing: 'Warm Ivory & Black Metal',
    mood: 'Sophisticated cool tone for formal studies',
  },
  {
    name: 'Royal Indigo Breeze',
    hex: '#364759',
    textColor: '#FFFFFF',
    finish: 'Silk',
    pairing: 'Sandstone Dune & Gold Accents',
    mood: 'Regal depth for dining and statement walls',
  },
  {
    name: 'Terracotta Whisper',
    hex: '#B56E5A',
    textColor: '#FFFFFF',
    finish: 'Matte',
    pairing: 'Muted Grey & Terracotta Planters',
    mood: 'Rich artisanal craft, vibrant courtyard warmth',
  },
];
