export type Project = {
  slug: string;
  title: string;
  url: string;
  category:
    | 'Restaurant'
    | 'Retail'
    | 'Real Estate'
    | 'Industrial'
    | 'Healthcare'
    | 'Legal'
    | 'Education'
    | 'Beauty'
    | 'Architecture'
    | 'Lifestyle';
  summary: string;
  tags: string[];
  image: string; // главное изображение
  images?: string[]; // дополнительные изображения
  goals?: string[];
  contribution?: string[];
  outcome?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'bonds-city',
    title: 'Bonds city',
    url: 'https://www.bonds.city',
    category: 'Restaurant',
    summary: 'Urban food bistro with elegant and vibrant atmosphere.',
    tags: ['Website', 'Frontend'],
    image: '/images/bonds.jpg',
    images: ['/images/bonds.jpg', '/images/bonds-2.jpg', '/images/bonds-3.jpg', '/images/bonds-4.jpg'],
    goals: [
      'Create a stylish digital presence for an urban bistro in Luxembourg',
      'Highlight chef-driven cuisine, wine list and interior atmosphere',
      'Allow users to explore menu, gallery, and reserve a table online',
    ],
    contribution: [
      'Responsive website layout with dynamic gallery and menu showcase',
      'Integration with booking/contact forms',
      'Optimization for mobile and desktop browsing',
    ],
    outcome: [
      'Modern digital look & feel matching the interior',
      'Increased visibility among locals and tourists',
      'Streamlined online table reservations',
    ],
  },
  {
    slug: 'al-bacio',
    title: 'Al Bacio',
    url: 'https://www.albacio.lu',
    category: 'Restaurant',
    summary: 'Authentic Italian restaurant, café and épicerie in Luxembourg.',
    tags: ['Website', 'Design'],
    image: '/images/albacio.jpg',
    images: ['/images/albacio.jpg', '/images/albacio-2.jpg', '/images/albacio-3.jpg', '/images/albacio-4.jpg'],
    goals: [
      'Showcase Italian culinary culture with refined elegance',
      'Display multi-functional space: restaurant, coffee bar and product store',
      'Highlight menu, chef creations and Italian wines',
    ],
    contribution: [
      'Design focused on Italian lifestyle and gastronomy',
      'Visual presentation of multiple menus and product sections',
      'Interactive interface for browsing and discovering daily offerings',
    ],
    outcome: [
      'Increase in online table bookings and product inquiries',
      'Visually immersive experience attracting premium clientele',
      'Successful merge of dining, shopping and discovery on one site',
    ],
  },
  {
    slug: 'crechearia',
    title: 'Crechearia',
    url: 'https://www.crechearia.lu',
    category: 'Education',
    summary: 'Multilingual kindergarten and nursery center in Luxembourg.',
    tags: ['Website', 'Frontend'],
    image: '/images/crechearia.jpg',
    images: ['/images/crechearia.jpg', '/images/crechearia-2.jpg', '/images/crechearia-3.jpg'],
    goals: [
      'Build trust with parents through warm and informative presentation',
      'Provide clear information about multilingual childcare programs',
      'Allow easy contact and registration for families',
    ],
    contribution: [
      'Child-friendly design with bright and welcoming visuals',
      'Program descriptions in multiple languages',
      'Simple contact and registration forms integrated into the site',
    ],
    outcome: [
      'Increased family inquiries and registration applications',
      'Clear communication of values and daily activities',
      'User-friendly experience for parents on mobile and desktop',
    ],
  },
  {
    slug: 'metacomm',
    title: 'Metacomm',
    url: 'https://www.metacomm.lu',
    category: 'Industrial',
    summary: 'Automation and industrial communication services.',
    tags: ['Website', 'Corporate'],
    image: '/images/metacomm.jpg',
    images: ['/images/metacomm.jpg', '/images/metacomm-2.jpg', '/images/metacomm-3.jpg'],
    goals: [
      'Present automation and communication solutions in a clear format',
      'Highlight services like cabling, network design, and PLC programming',
      'Provide B2B contact and inquiry capabilities',
    ],
    contribution: [
      'Technical layout tailored to industrial communication topics',
      'Service-focused sections for engineering and IT integration',
      'Contact forms for business project requests',
    ],
    outcome: [
      'Improved clarity of technical offering to industrial clients',
      'More qualified B2B inquiries via website',
      'Professional branding in a highly specialized sector',
    ],
  },
  {
    slug: 'marinhosteel',
    title: 'MarinhoSteel',
    url: 'https://www.marinhosteel.com',
    category: 'Industrial',
    summary: 'Steel fabrication and industrial construction portfolio.',
    tags: ['Website', 'Catalog'],
    image: '/images/marinhosteel.jpg',
    images: ['/images/marinhosteel.jpg', '/images/marinhosteel-2.jpg', '/images/marinhosteel-3.jpg'],
    goals: [
      'Showcase capabilities in metal structures, staircases, and custom steelwork',
      'Provide credibility for clients in construction and public works',
      'Offer visual insight into previous industrial projects',
    ],
    contribution: [
      'Bilingual layout (French & English) for broader audience',
      'Gallery of steelwork projects with technical annotations',
      'Presentation of services and contact for project discussions',
    ],
    outcome: [
      'Increased inbound project proposals via site',
      'Professional showcase of steel construction portfolio',
      'Better communication of industrial expertise',
    ],
  },
  {
    slug: 'venticlean',
    title: 'VentiClean',
    url: 'https://www.venticlean.lu',
    category: 'Industrial',
    summary: 'Ventilation system maintenance and hygiene services.',
    tags: ['Website', 'Services'],
    image: '/images/venticlean.jpg',
    images: ['/images/venticlean.jpg', '/images/venticlean-2.jpg', '/images/venticlean-3.jpg'],
    goals: [
      'Present professional air duct and ventilation cleaning services',
      'Enable service requests from B2B and residential clients',
      'Demonstrate hygiene certifications and reliability',
    ],
    contribution: ['Service-focused interface with clear CTAs', 'Multilingual layout (FR/EN)', 'Visuals of team and equipment in action'],
    outcome: [
      'Stronger online visibility in hygiene services niche',
      'More accurate quote requests and consultations',
      'Clear positioning as a certified ventilation expert',
    ],
  },
  {
    slug: 'gcl-prive',
    title: 'GCL Privé',
    url: 'https://gclprive.com',
    category: 'Lifestyle',
    summary: 'Private concierge and luxury lifestyle management.',
    tags: ['Website', 'Luxury'],
    image: '/images/gclprive.jpg',
    images: ['/images/gclprive.jpg', '/images/gclprive-2.jpg', '/images/gclprive-3.jpg'],
    goals: [
      'Position the brand as high-end lifestyle manager',
      'Enable confidential service inquiries',
      'Emphasize exclusivity and premium experience',
    ],
    contribution: ['Minimalist luxury web design', 'Discreet contact system', 'Presentation of personalized concierge offerings'],
    outcome: [
      'Improved brand trust among affluent users',
      'Higher conversion from qualified prospects',
      'Elegant digital identity for offline luxury services',
    ],
  },
  {
    slug: 'nidderkuererkine',
    title: 'Nidderkuererkine',
    url: 'https://nidderkuererkine.lu',
    category: 'Healthcare',
    summary: 'Physiotherapy clinic with individual approach.',
    tags: ['Website', 'Clinic'],
    image: '/images/nidder.jpg',
    images: ['/images/nidder.jpg', '/images/nidder-2.jpg', '/images/nidder-3.jpg'],
    goals: [
      'Show availability of physiotherapists and clinic services',
      'Enable appointment booking for new and returning patients',
      'Explain specialties and rehabilitation options',
    ],
    contribution: [
      'Patient-centric layout and UX',
      'Staff introductions and treatment explanation',
      'Embedded appointment scheduling tools',
    ],
    outcome: [
      'Greater patient trust and transparency',
      'Increase in online appointment use',
      'More informed decisions by visitors about services',
    ],
  },
  {
    slug: 'ip-mediation',
    title: 'IP Mediation',
    url: 'https://ipmediate.com',
    category: 'Legal',
    summary: 'Intellectual property and commercial mediation services.',
    tags: ['Website', 'Services'],
    image: '/images/ipmediation.jpg',
    images: ['/images/ipmediation.jpg', '/images/ipmediation-2.jpg', '/images/ipmediation-3.jpg'],
    goals: [
      'Clearly describe mediation approach and legal domains',
      'Convert visitors into qualified consultation leads',
      'Support credibility with testimonials and use cases',
    ],
    contribution: [
      'Structured content with legal readability in mind',
      'Highlighting of core services: patents, IP, disputes',
      'Contact form for initial conflict consultation',
    ],
    outcome: [
      'Stronger online trust with legal clients',
      'Increase in direct consultation requests',
      'Effective positioning for IP conflict resolution',
    ],
  },
  {
    slug: 'coppers',
    title: 'Coppers',
    url: 'https://coppersbelval.lu',
    category: 'Restaurant',
    summary: 'Trendy restaurant and bar with urban nightlife concept.',
    tags: ['Website', 'Menu'],
    image: '/images/coppers.jpg',
    images: ['/images/coppers.jpg', '/images/coppers-2.jpg', '/images/coppers-3.jpg', '/images/coppers-4.jpg'],
    goals: [
      'Attract young professionals and event-goers',
      'Promote cocktail menu, DJs and food sharing concept',
      'Enable bookings and event visibility',
    ],
    contribution: ['Nightlife-themed design', 'Integrated music / event highlight section', 'Responsive menu layout and reservation tool'],
    outcome: ['More weekend bookings', 'Increased social shares and visual appeal', 'Recognition as urban dining destination in Belval'],
  },
  {
    slug: 'bottom-up',
    title: 'Bottom-Up',
    url: 'https://bottom-up.lu',
    category: 'Architecture',
    summary: 'Contemporary architecture and interior design studio.',
    tags: ['Website', 'Portfolio'],
    image: '/images/bottomup.jpg',
    images: ['/images/bottomup.jpg', '/images/bottomup-2.jpg', '/images/bottomup-3.jpg'],
    goals: [
      'Present architectural philosophy and studio vision',
      'Showcase portfolio through immersive visuals',
      'Connect with developers and private clients',
    ],
    contribution: ['Modern layout with focus on imagery', 'Bilingual support (EN/FR)', 'Project categorization for intuitive navigation'],
    outcome: [
      'Stronger portfolio presence online',
      'New collaborations initiated via contact form',
      'Well-positioned studio identity in design field',
    ],
  },
  {
    slug: 'la-coiffe',
    title: 'La Coiffe',
    url: 'https://www.lacoiffe.lu',
    category: 'Beauty',
    summary: 'Hair salon offering styling and cosmetic services.',
    tags: ['Website', 'Booking'],
    image: '/images/lacoiffe.jpg',
    images: ['/images/lacoiffe.jpg', '/images/lacoiffe-2.jpg', '/images/lacoiffe-3.jpg'],
    goals: [
      'Display stylist expertise and available treatments',
      'Allow customers to book appointments online',
      'Create sense of style, elegance, and trust',
    ],
    contribution: ['Elegant design tailored to female clientele', 'Stylist profiles and beauty menu', 'Booking form with dynamic calendar'],
    outcome: ['Boost in online appointment bookings', 'Positive impression from stylish layout', 'Enhanced trust with returning customers'],
  },
  {
    slug: 'duke-horlogerie',
    title: 'Duke Horlogerie',
    url: 'https://dukehorlogerie.com',
    category: 'Retail',
    summary: 'Luxury watch boutique and authorized retailer.',
    tags: ['Website', 'E-commerce'],
    image: '/images/duke.jpg',
    images: ['/images/duke.jpg', '/images/duke-2.jpg', '/images/duke-3.jpg'],
    goals: [
      'Display luxury timepieces with brand storytelling',
      'Enable e-commerce with detailed product view',
      'Build trust with high-end customers',
    ],
    contribution: [
      'Clean layout with large imagery and brand icons',
      'Product detail pages and secure cart integration',
      'Luxury branding adapted to web format',
    ],
    outcome: [
      'High engagement from collectors and fans',
      'Online purchase increase',
      'Prestigious visual identity aligned with watches offered',
    ],
  },
  {
    slug: 'kriva-mosaica',
    title: 'Kriva Mosaica',
    url: 'https://kriva-mosaica.com/',
    category: 'Architecture',
    summary: 'Artisan mosaic and surface design studio.',
    tags: ['Website', 'Catalog'],
    image: '/images/kriva.jpg',
    images: ['/images/kriva.jpg', '/images/kriva-2.jpg', '/images/kriva-3.jpg', '/images/kriva-4.jpg'],
    goals: [
      'Present original mosaic works and materials',
      'Allow designers to inquire about collaborations',
      'Highlight creative philosophy and tradition',
    ],
    contribution: ['Gallery-focused layout for art pieces', 'Catalog of materials and finishes', 'Contact tools for bespoke commissions'],
    outcome: [
      'Increased project requests from designers and architects',
      'Showcased artistic identity online',
      'Enhanced appreciation of hand-crafted mosaic work',
    ],
  },
];

export const CATEGORIES = [
  'All',
  'Restaurant',
  'Retail',
  'Industrial',
  'Healthcare',
  'Legal',
  'Education',
  'Beauty',
  'Architecture',
  'Lifestyle',
] as const;

export type Category = (typeof CATEGORIES)[number];
