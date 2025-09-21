export type Project = {
  slug: string;
  title: string;
  url: string;
  category: 'Food & Hospitality' | 'Business & Professional' | 'Retail & E-commerce' | 'Health & Beauty' | 'Lifestyle & Services';
  summary: string;
  tags: string[];
  image: string; // главное изображение
  images?: string[]; // дополнительные изображения
  goals?: string[];
  contribution?: string[];
  outcome?: string[];
  // Украинские переводы
  summary_uk?: string;
  goals_uk?: string[];
  contribution_uk?: string[];
  outcome_uk?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'bonds-city',
    title: 'Bonds city',
    url: 'https://www.bonds.city',
    category: 'Food & Hospitality',
    summary:
      'Contemporary urban bistro in Luxembourg offering modern European cuisine with carefully curated wine selection and sophisticated city atmosphere.',
    tags: ['PHP', 'CSS', 'MySQL'],
    image: '/images/bonds.jpg',
    images: ['/images/bonds.jpg', '/images/bonds-2.jpg', '/images/bonds-3.jpg', '/images/bonds-4.jpg'],
    goals: [
      'Establish strong digital presence for upscale dining destination in Luxembourg City',
      'Showcase seasonal menu, sommelier-selected wines, and contemporary interior design',
      'Enable seamless online reservations and event bookings for business and leisure guests',
    ],
    contribution: [
      'Custom responsive website with interactive menu display and wine pairing suggestions',
      'Integrated reservation system with real-time table availability',
      'Multi-language support (French, English, Luxembourgish) for diverse clientele',
    ],
    outcome: [
      'Increased online visibility resulting in 40% more reservations',
      'Enhanced brand recognition as premium dining destination',
      'Streamlined operations with automated booking confirmations and customer communications',
    ],
    // Украинские переводы
    summary_uk:
      'Сучасне міське бістро в Люксембурзі, що пропонує модерну європейську кухню з ретельно підібраною винною картою та витонченою міською атмосферою.',
    goals_uk: [
      'Створити потужну цифрову присутність для елітного ресторану в місті Люксембург',
      "Продемонструвати сезонне меню, вина від сомельє та сучасний дизайн інтер'єру",
      'Забезпечити безперебійне онлайн-бронювання та замовлення заходів для бізнес та приватних гостей',
    ],
    contribution_uk: [
      'Кастомний адаптивний веб-сайт з інтерактивним відображенням меню та рекомендаціями винних пар',
      'Інтегрована система бронювання з відображенням доступності столиків в реальному часі',
      'Багатомовна підтримка (французька, англійська, люксембурзька) для різноманітної клієнтури',
    ],
    outcome_uk: [
      'Підвищення онлайн-видимості, що призвело до збільшення бронювань на 40%',
      'Посилення впізнаваності бренду як преміального ресторану',
      'Оптимізація операцій з автоматичними підтвердженнями бронювань та комунікацією з клієнтами',
    ],
  },
  {
    slug: 'al-bacio',
    title: 'Al Bacio',
    url: 'https://www.albacio.lu',
    category: 'Food & Hospitality',
    summary:
      'Authentic Italian restaurant, specialty coffee bar, and gourmet épicerie bringing traditional Tuscan flavors and artisanal products to Luxembourg.',
    tags: ['PHP', 'CSS', 'jQuery'],
    image: '/images/albacio.jpg',
    images: ['/images/albacio.jpg', '/images/albacio-2.jpg', '/images/albacio-3.jpg', '/images/albacio-4.jpg'],
    goals: [
      'Create immersive Italian culinary experience combining restaurant, café, and specialty food retail',
      'Showcase authentic recipes, imported ingredients, and traditional Italian coffee culture',
      'Build community hub for Italian food enthusiasts and local gourmets',
    ],
    contribution: [
      'Multi-section website featuring restaurant menus, coffee offerings, and retail product catalog',
      'Interactive daily specials board and seasonal menu updates',
      'E-commerce integration for specialty Italian products and gift baskets',
    ],
    outcome: [
      'Established as go-to destination for authentic Italian dining in Luxembourg',
      'Successful launch of retail component with 200+ specialty products',
      'Built loyal customer base through combination of dining and shopping experience',
    ],
    // Украинские переводы
    summary_uk:
      "Автентичний італійський ресторан, спеціалізована кав'ярня та гурманський épicerie, що приносить традиційні тосканські смаки та ремісничі продукти до Люксембурга.",
    goals_uk: [
      'Створити захоплюючий італійський кулінарний досвід, що поєднує ресторан, кафе та спеціалізовану торгівлю продуктами',
      'Продемонструвати автентичні рецепти, імпортні інгредієнти та традиційну італійську кавову культуру',
      'Побудувати громадський центр для любителів італійської їжі та місцевих гурманів',
    ],
    contribution_uk: [
      'Багатосекційний веб-сайт з меню ресторану, каво пропозиціями та каталогом роздрібних продуктів',
      'Інтерактивна дошка щоденних спеціальних пропозицій та сезонні оновлення меню',
      'Інтеграція електронної комерції для спеціалізованих італійських продуктів та подарункових кошиків',
    ],
    outcome_uk: [
      'Утвердився як провідне місце для автентичної італійської кухні в Люксембурзі',
      'Успішний запуск роздрібного компоненту з 200+ спеціалізованими продуктами',
      'Побудував лояльну клієнтську базу через поєднання досвіду обідів та покупок',
    ],
  },
  {
    slug: 'crechearia',
    title: 'Crechearia',
    url: 'https://www.crechearia.lu',
    category: 'Lifestyle & Services',
    summary: 'Multilingual kindergarten and nursery center in Luxembourg.',
    tags: ['PHP', 'CSS'],
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
    // Украинские переводы
    summary_uk: 'Багатомовний дитячий садок та центр догляду в Люксембурзі.',
    goals_uk: [
      'Побудувати довіру з батьками через теплу та інформативну презентацію',
      'Надати чітку інформацію про багатомовні програми догляду за дітьми',
      'Дозволити легкий контакт та реєстрацію для сімей',
    ],
    contribution_uk: [
      'Дитячо-дружній дизайн з яскравими та привітними візуальними елементами',
      'Описи програм кількома мовами',
      'Прості контактні та реєстраційні форми, інтегровані в сайт',
    ],
    outcome_uk: [
      'Збільшення сімейних запитів та заявок на реєстрацію',
      'Чітке спілкування цінностей та щоденних активностей',
      'Зручний досвід для батьків на мобільних та настільних пристроях',
    ],
  },
  {
    slug: 'metacomm',
    title: 'Metacomm',
    url: 'https://www.metacomm.lu',
    category: 'Business & Professional',
    summary: 'Automation and industrial communication services.',
    tags: ['PHP', 'CSS'],
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
    category: 'Business & Professional',
    summary: 'Steel fabrication and industrial construction portfolio.',
    tags: ['PHP', 'CSS'],
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
    category: 'Business & Professional',
    summary: 'Ventilation system maintenance and hygiene services.',
    tags: ['PHP', 'CSS'],
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
    category: 'Lifestyle & Services',
    summary: 'Private concierge and luxury lifestyle management.',
    tags: ['PHP', 'CSS'],
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
    category: 'Health & Beauty',
    summary: 'Physiotherapy clinic with individual approach.',
    tags: ['PHP', 'CSS', 'MySQL'],
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
    category: 'Business & Professional',
    summary: 'Intellectual property and commercial mediation services.',
    tags: ['PHP', 'CSS'],
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
    category: 'Food & Hospitality',
    summary: 'Trendy restaurant and bar with urban nightlife concept.',
    tags: ['Vue', 'CSS'],
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
    category: 'Business & Professional',
    summary: 'Contemporary architecture and interior design studio.',
    tags: ['PHP', 'CSS', 'jQuery', 'Lightbox'],
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
    category: 'Health & Beauty',
    summary: 'Hair salon offering styling and cosmetic services.',
    tags: ['PHP', 'CSS', 'MySQL', 'jQuery'],
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
    category: 'Retail & E-commerce',
    summary:
      'Premium Swiss watch boutique specializing in luxury timepieces from renowned manufacturers including Rolex, Patek Philippe, and Audemars Piguet.',
    tags: ['Vue', 'Firebase', 'Stripe'],
    image: '/images/duke.jpg',
    images: ['/images/duke.jpg', '/images/duke-2.jpg', '/images/duke-3.jpg'],
    goals: [
      'Create sophisticated e-commerce platform for high-value luxury watches',
      'Showcase heritage brands with detailed specifications and authentication certificates',
      'Provide secure purchasing experience with white-glove customer service',
    ],
    contribution: [
      'Premium e-commerce platform with advanced product filtering and comparison tools',
      'Integrated authentication system and warranty tracking',
      'Secure payment processing with insurance and international shipping options',
    ],
    outcome: [
      'Achieved €2M+ in online sales within first year',
      'Established trust with collectors through transparent authentication process',
      'Expanded customer base beyond Luxembourg to international markets',
    ],
    // Украинские переводы
    summary_uk:
      'Преміальний швейцарський годинниковий бутік, що спеціалізується на розкішних годинниках від відомих виробників, включаючи Rolex, Patek Philippe та Audemars Piguet.',
    goals_uk: [
      'Створити витончену e-commerce платформу для дорогих розкішних годинників',
      'Продемонструвати спадкові бренди з детальними специфікаціями та сертифікатами автентичності',
      'Забезпечити безпечний досвід покупок з першокласним обслуговуванням клієнтів',
    ],
    contribution_uk: [
      'Преміальна e-commerce платформа з розширеними інструментами фільтрації та порівняння продуктів',
      'Інтегрована система автентифікації та відстеження гарантії',
      'Безпечна обробка платежів зі страхуванням та міжнародними варіантами доставки',
    ],
    outcome_uk: [
      'Досягнуто €2М+ онлайн-продажів протягом першого року',
      'Встановлено довіру з колекціонерами через прозорий процес автентифікації',
      'Розширено клієнтську базу за межі Люксембурга на міжнародні ринки',
    ],
  },
  {
    slug: 'kriva-mosaica',
    title: 'Kriva Mosaica',
    url: 'https://kriva-mosaica.com/',
    category: 'Retail & E-commerce',
    summary:
      'Artisanal mosaic craft company offering premium DIY kits, tools, and materials for creating beautiful home decorations and artistic installations.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe'],
    image: '/images/kriva.jpg',
    images: ['/images/kriva.jpg', '/images/kriva-2.jpg', '/images/kriva-3.jpg', '/images/kriva-4.jpg'],
    goals: [
      'Launch e-commerce platform for premium mosaic craft kits and artisan tools',
      'Build community of mosaic artists through tutorials and project galleries',
      'Expand from custom installations to accessible DIY market',
    ],
    contribution: [
      'Full-stack e-commerce solution with custom product configurator',
      'Interactive tutorial platform with video guides and project templates',
      'Community features including user galleries and technique sharing',
    ],
    outcome: [
      'Generated €150K+ in first-year sales across Europe',
      'Built community of 5,000+ active mosaic enthusiasts',
      'Successfully pivoted business model from B2B installations to B2C retail',
    ],
    // Украинские переводы
    summary_uk:
      'Реміснича мозаїчна компанія, що пропонує преміальні DIY набори, інструменти та матеріали для створення красивих домашніх прикрас та художніх інсталяцій.',
    goals_uk: [
      'Запустити e-commerce платформу для преміальних мозаїчних наборів та ремісничих інструментів',
      'Побудувати спільноту художників-мозаїчників через навчальні матеріали та галереї проектів',
      'Розширитися від індивідуальних інсталяцій до доступного DIY ринку',
    ],
    contribution_uk: [
      'Повноцінне e-commerce рішення з кастомним конфігуратором продуктів',
      'Інтерактивна навчальна платформа з відео-гідами та шаблонами проектів',
      'Функції спільноти, включаючи користувацькі галереї та обмін технікою',
    ],
    outcome_uk: [
      'Згенеровано €150К+ продажів за перший рік по всій Європі',
      'Побудовано спільноту з 5,000+ активних ентузіастів мозаїки',
      'Успішно змінено бізнес-модель з B2B інсталяцій на B2C роздрібну торгівлю',
    ],
  },
];

export const CATEGORIES = [
  'All',
  'Food & Hospitality',
  'Business & Professional',
  'Retail & E-commerce',
  'Health & Beauty',
  'Lifestyle & Services',
] as const;

export type Category = (typeof CATEGORIES)[number];
