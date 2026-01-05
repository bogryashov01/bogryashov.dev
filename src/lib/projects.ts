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
  outcome?: string[]; // Legacy - kept for backward compatibility
  businessOutcome?: string[];
  technicalOutcome?: string[];
  legacyStackNote?: string;
  // Украинские переводы
  summary_uk?: string;
  goals_uk?: string[];
  contribution_uk?: string[];
  outcome_uk?: string[]; // Legacy
  businessOutcome_uk?: string[];
  technicalOutcome_uk?: string[];
  legacyStackNote_uk?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'bonds-city',
    title: 'Bonds city',
    url: 'https://www.bonds.city',
    category: 'Food & Hospitality',
    summary:
      'Full-stack development of a reservation and content management system for an upscale restaurant in Luxembourg. Built on a legacy PHP stack with focus on maintainable architecture and user experience.',
    tags: ['PHP', 'CSS', 'MySQL'],
    image: '/images/bonds.jpg',
    images: ['/images/bonds.jpg', '/images/bonds-2.jpg', '/images/bonds-3.jpg', '/images/bonds-4.jpg'],
    goals: [
      'Design and implement a reservation system with real-time table availability tracking',
      'Build a multilingual content management system for menu and wine catalog updates',
      'Create a responsive interface optimized for both desktop and mobile booking flows',
    ],
    contribution: [
      'Designed and implemented the database schema for reservations, tables, and menu items with proper relationships and constraints',
      'Built the reservation system backend with availability calculation logic and conflict prevention',
      'Structured the frontend with reusable components for menu display, wine pairing suggestions, and booking forms',
      'Implemented multilingual routing and content management (French, English, Luxembourgish)',
      'Optimized database queries and caching strategy for performance under peak booking times',
    ],
    businessOutcome: [
      'Increased online reservation volume',
      'Reduced manual booking management overhead',
      'Improved customer experience with streamlined booking process',
    ],
    technicalOutcome: [
      'Structured codebase with clear separation between data layer, business logic, and presentation',
      'Implemented reusable reservation components that handle edge cases (time conflicts, capacity limits)',
      'Designed database schema that supports future features like recurring reservations and waitlist management',
      'Built multilingual system that maintains consistency across language versions',
    ],
    legacyStackNote:
      'This project uses PHP with MySQL, a legacy stack. Focus was on clean architecture, maintainable code structure, and user experience rather than modern framework features.',
    // Украинские переводы
    summary_uk:
      'Повноцінна розробка системи бронювання та управління контентом для елітного ресторану в Люксембурзі. Побудовано на legacy PHP стекі з фокусом на підтримувану архітектуру та користувацький досвід.',
    goals_uk: [
      'Спроектувати та реалізувати систему бронювання з відстеженням доступності столиків в реальному часі',
      'Побудувати багатомовну систему управління контентом для оновлення меню та каталогу вин',
      'Створити адаптивний інтерфейс, оптимізований для потоків бронювання на десктопі та мобільних пристроях',
    ],
    contribution_uk: [
      "Спроектував та реалізував схему бази даних для бронювань, столиків та пунктів меню з правильними зв'язками та обмеженнями",
      'Побудував backend системи бронювання з логікою розрахунку доступності та запобігання конфліктів',
      'Структурував frontend з багаторазовими компонентами для відображення меню, рекомендацій винних пар та форм бронювання',
      'Реалізував багатомовну маршрутизацію та управління контентом (французька, англійська, люксембурзька)',
      'Оптимізував запити до бази даних та стратегію кешування для продуктивності під час пікових часів бронювання',
    ],
    businessOutcome_uk: [
      'Збільшення обсягу онлайн-бронювань',
      'Зменшення накладних витрат на ручне управління бронюваннями',
      'Покращення досвіду клієнтів завдяки оптимізованому процесу бронювання',
    ],
    technicalOutcome_uk: [
      'Структурована кодова база з чітким розділенням між шаром даних, бізнес-логікою та презентацією',
      'Реалізовано багаторазові компоненти бронювання, які обробляють крайні випадки (конфлікти часу, обмеження місткості)',
      'Спроектовано схему бази даних, яка підтримує майбутні функції, такі як повторювані бронювання та управління списком очікування',
      'Побудовано багатомовну систему, яка підтримує узгодженість між мовними версіями',
    ],
    legacyStackNote_uk:
      'Цей проект використовує PHP з MySQL, legacy стек. Фокус був на чистій архітектурі, підтримуваній структурі коду та користувацькому досвіду, а не на функціях сучасних фреймворків.',
  },
  {
    slug: 'al-bacio',
    title: 'Al Bacio',
    url: 'https://www.albacio.lu',
    category: 'Food & Hospitality',
    summary:
      'Frontend development of a multi-section website combining restaurant, café, and e-commerce functionality. Built on legacy PHP/jQuery stack with focus on maintainable component structure and seamless user experience across different sections.',
    tags: ['PHP', 'CSS', 'jQuery'],
    image: '/images/albacio.jpg',
    images: ['/images/albacio.jpg', '/images/albacio-2.jpg', '/images/albacio-3.jpg', '/images/albacio-4.jpg'],
    goals: [
      'Design unified navigation and component system across restaurant, café, and retail sections',
      'Implement dynamic content management for daily specials and seasonal menu updates',
      'Build e-commerce product catalog with filtering and cart functionality for specialty products',
    ],
    contribution: [
      'Structured the frontend architecture with reusable components for menus, product displays, and content sections',
      'Implemented dynamic daily specials system with admin interface for easy content updates',
      'Designed and built the e-commerce product catalog with category filtering and search functionality',
      'Created responsive layouts that maintain usability across desktop, tablet, and mobile devices',
      'Optimized asset loading and implemented progressive enhancement for better performance',
    ],
    businessOutcome: [
      'Unified online presence for restaurant, café, and retail operations',
      'Streamlined content management for menu and product updates',
      'Enabled online sales channel for specialty Italian products',
    ],
    technicalOutcome: [
      'Component-based architecture that allows independent updates to different sections',
      'Reusable UI patterns that maintain consistency across restaurant, café, and retail areas',
      'Structured codebase that supports future feature additions without major refactoring',
      'Responsive design system that adapts to different content types (menus, products, events)',
    ],
    legacyStackNote:
      'This project uses PHP with jQuery, a legacy stack. Focus was on clean component structure, maintainable code organization, and user experience rather than modern framework features.',
    // Украинские переводы
    summary_uk:
      'Frontend розробка багатосекційного веб-сайту, що поєднує функціональність ресторану, кафе та електронної комерції. Побудовано на legacy PHP/jQuery стекі з фокусом на підтримувану структуру компонентів та безперебійний користувацький досвід у різних секціях.',
    goals_uk: [
      'Спроектувати уніфіковану навігацію та систему компонентів для секцій ресторану, кафе та роздрібної торгівлі',
      'Реалізувати динамічне управління контентом для щоденних спеціальних пропозицій та сезонних оновлень меню',
      'Побудувати каталог продуктів електронної комерції з фільтрацією та функціональністю кошика для спеціалізованих продуктів',
    ],
    contribution_uk: [
      'Структурував frontend архітектуру з багаторазовими компонентами для меню, відображення продуктів та контентних секцій',
      'Реалізував систему динамічних щоденних спеціальних пропозицій з адмін-інтерфейсом для легкого оновлення контенту',
      'Спроектував та побудував каталог продуктів електронної комерції з фільтрацією за категоріями та функцією пошуку',
      'Створив адаптивні макети, які підтримують зручність використання на десктопі, планшеті та мобільних пристроях',
      'Оптимізував завантаження ресурсів та реалізував прогресивне покращення для кращої продуктивності',
    ],
    businessOutcome_uk: [
      "Об'єднана онлайн-присутність для ресторану, кафе та роздрібних операцій",
      'Оптимізоване управління контентом для оновлення меню та продуктів',
      'Увімкнено онлайн-канал продажів для спеціалізованих італійських продуктів',
    ],
    technicalOutcome_uk: [
      'Архітектура на основі компонентів, яка дозволяє незалежні оновлення різних секцій',
      'Багаторазові UI паттерни, які підтримують узгодженість між секціями ресторану, кафе та роздрібної торгівлі',
      'Структурована кодова база, яка підтримує майбутні додавання функцій без великого рефакторингу',
      'Система адаптивного дизайну, яка адаптується до різних типів контенту (меню, продукти, події)',
    ],
    legacyStackNote_uk:
      'Цей проект використовує PHP з jQuery, legacy стек. Фокус був на чистій структурі компонентів, підтримуваній організації коду та користувацькому досвіду, а не на функціях сучасних фреймворків.',
  },
  {
    slug: 'crechearia',
    title: 'Crechearia',
    url: 'https://www.crechearia.lu',
    category: 'Lifestyle & Services',
    summary:
      'Frontend development of a multilingual website for a kindergarten and nursery center. Built on PHP with focus on clear information architecture and accessible forms for parent inquiries and registrations.',
    tags: ['PHP', 'CSS'],
    image: '/images/crechearia.jpg',
    images: ['/images/crechearia.jpg', '/images/crechearia-2.jpg', '/images/crechearia-3.jpg'],
    goals: [
      'Design information architecture that clearly presents programs, schedules, and enrollment process',
      'Implement multilingual content system (French, English, Luxembourgish, Portuguese)',
      'Build accessible contact and registration forms with validation and confirmation workflows',
    ],
    contribution: [
      'Structured the content hierarchy to prioritize key information (programs, schedules, contact)',
      'Implemented multilingual routing and content management system',
      'Designed and built responsive forms with proper validation, error handling, and success states',
      'Created accessible UI components that work well for parents browsing on mobile devices',
      'Optimized page load times and implemented progressive enhancement for better performance',
    ],
    businessOutcome: [
      'Improved online presence for parent inquiries and registrations',
      'Clear communication of programs and services',
      'Streamlined contact and registration process',
    ],
    technicalOutcome: [
      'Clean information architecture that makes it easy to find key information',
      'Multilingual system that maintains content consistency across languages',
      'Form system with proper validation and user feedback',
      'Responsive design that works well across devices',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on clear information architecture, accessible forms, and user experience rather than modern framework features.',
    // Украинские переводы
    summary_uk:
      'Frontend розробка багатомовного веб-сайту для дитячого садка та центру догляду. Побудовано на PHP з фокусом на чітку інформаційну архітектуру та доступні форми для запитів та реєстрацій батьків.',
    goals_uk: [
      'Спроектувати інформаційну архітектуру, яка чітко представляє програми, розклади та процес зарахування',
      'Реалізувати багатомовну систему контенту (французька, англійська, люксембурзька, португальська)',
      'Побудувати доступні контактні та реєстраційні форми з валідацією та робочими процесами підтвердження',
    ],
    contribution_uk: [
      'Структурував ієрархію контенту для пріоритизації ключової інформації (програми, розклади, контакт)',
      'Реалізував багатомовну маршрутизацію та систему управління контентом',
      'Спроектував та побудував адаптивні форми з належною валідацією, обробкою помилок та станами успіху',
      'Створив доступні UI компоненти, які добре працюють для батьків, які переглядають на мобільних пристроях',
      'Оптимізував час завантаження сторінок та реалізував прогресивне покращення для кращої продуктивності',
    ],
    businessOutcome_uk: [
      'Покращена онлайн-присутність для запитів та реєстрацій батьків',
      'Чітке спілкування програм та послуг',
      'Оптимізований процес контакту та реєстрації',
    ],
    technicalOutcome_uk: [
      'Чітка інформаційна архітектура, яка полегшує пошук ключової інформації',
      'Багатомовна система, яка підтримує узгодженість контенту між мовами',
      "Система форм з належною валідацією та зворотним зв'язком користувача",
      'Адаптивний дизайн, який добре працює на різних пристроях',
    ],
    legacyStackNote_uk:
      'Цей проект використовує PHP з CSS, legacy стек. Фокус був на чіткій інформаційній архітектурі, доступних формах та користувацькому досвіду, а не на функціях сучасних фреймворків.',
  },
  {
    slug: 'metacomm',
    title: 'Metacomm',
    url: 'https://www.metacomm.lu',
    category: 'Business & Professional',
    summary:
      'Frontend development of a B2B website for industrial automation and communication services. Built on PHP with focus on clear presentation of technical services and streamlined inquiry process.',
    tags: ['PHP', 'CSS'],
    image: '/images/metacomm.jpg',
    images: ['/images/metacomm.jpg', '/images/metacomm-2.jpg', '/images/metacomm-3.jpg'],
    goals: [
      'Design information architecture that clearly presents technical services (cabling, network design, PLC programming)',
      'Create service-focused sections that explain complex industrial solutions',
      'Build inquiry system optimized for B2B project requests',
    ],
    contribution: [
      'Structured content hierarchy to present technical services in accessible format',
      'Designed service sections with clear explanations of engineering and IT integration offerings',
      'Implemented contact forms with project type categorization and detailed inquiry fields',
      'Created responsive layout that works well for technical professionals on various devices',
    ],
    businessOutcome: [
      'Improved online presence for B2B client inquiries',
      'Clearer communication of technical capabilities',
      'More qualified project inquiries',
    ],
    technicalOutcome: [
      'Clear information architecture that presents complex technical content accessibly',
      'Form system optimized for B2B inquiry workflow',
      'Responsive design that maintains readability for technical content',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on clear information architecture and user experience rather than modern framework features.',
  },
  {
    slug: 'marinhosteel',
    title: 'MarinhoSteel',
    url: 'https://www.marinhosteel.com',
    category: 'Business & Professional',
    summary:
      'Frontend development of a portfolio website for steel fabrication and industrial construction. Built on PHP with bilingual support, project galleries, and service presentation optimized for construction industry clients.',
    tags: ['PHP', 'CSS'],
    image: '/images/marinhosteel.jpg',
    images: ['/images/marinhosteel.jpg', '/images/marinhosteel-2.jpg', '/images/marinhosteel-3.jpg'],
    goals: [
      'Design portfolio gallery system that showcases steel fabrication projects with technical details',
      'Implement bilingual content system (French & English) for international clients',
      'Create service presentation that communicates capabilities to construction and public works clients',
    ],
    contribution: [
      'Structured project gallery with image optimization and technical annotation system',
      'Implemented bilingual routing and content management for French and English versions',
      'Designed service sections that clearly present capabilities (metal structures, staircases, custom steelwork)',
      'Built contact system optimized for project proposal inquiries',
      'Created responsive layout that showcases large project images effectively',
    ],
    businessOutcome: [
      'Improved online portfolio presence for project proposals',
      'Better communication of technical capabilities to potential clients',
      'Streamlined inquiry process for construction projects',
    ],
    technicalOutcome: [
      'Portfolio gallery system that handles large images efficiently',
      'Bilingual system that maintains content consistency',
      'Responsive design optimized for showcasing industrial project photography',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on portfolio presentation, image optimization, and user experience rather than modern framework features.',
  },
  {
    slug: 'venticlean',
    title: 'VentiClean',
    url: 'https://www.venticlean.lu',
    category: 'Business & Professional',
    summary:
      'Frontend development of a service website for ventilation system maintenance and hygiene services. Built on PHP with multilingual support, service request forms, and certification presentation.',
    tags: ['PHP', 'CSS'],
    image: '/images/venticlean.jpg',
    images: ['/images/venticlean.jpg', '/images/venticlean-2.jpg', '/images/venticlean-3.jpg'],
    goals: [
      'Design service presentation that clearly communicates air duct and ventilation cleaning offerings',
      'Build service request system for both B2B and residential clients',
      'Create certification and trust indicators section',
    ],
    contribution: [
      'Structured service sections with clear call-to-action placement',
      'Implemented multilingual content system (French & English)',
      'Designed service request forms with client type differentiation (B2B vs residential)',
      'Built certification display section with visual trust indicators',
      'Created responsive layout optimized for service information presentation',
    ],
    businessOutcome: [
      'Improved online presence for service inquiries',
      'More qualified quote requests',
      'Clear positioning as certified service provider',
    ],
    technicalOutcome: [
      'Service-focused information architecture',
      'Form system that handles different client types',
      'Multilingual system maintaining content consistency',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on service presentation, form functionality, and user experience rather than modern framework features.',
  },
  {
    slug: 'gcl-prive',
    title: 'GCL Privé',
    url: 'https://gclprive.com',
    category: 'Lifestyle & Services',
    summary:
      'Frontend development of a luxury concierge service website. Built on PHP with minimalist design approach, discreet contact system, and premium brand presentation.',
    tags: ['PHP', 'CSS'],
    image: '/images/gclprive.jpg',
    images: ['/images/gclprive.jpg', '/images/gclprive-2.jpg', '/images/gclprive-3.jpg'],
    goals: [
      'Design minimalist interface that communicates exclusivity and premium positioning',
      'Implement discreet contact system that maintains privacy for high-net-worth clients',
      'Create service presentation that emphasizes personalized concierge offerings',
    ],
    contribution: [
      'Designed minimalist UI with focus on typography, spacing, and premium aesthetics',
      'Built discreet contact system with privacy-focused form handling',
      'Structured service presentation to emphasize personalized and exclusive offerings',
      'Implemented responsive design that maintains luxury feel across devices',
      'Optimized for performance while maintaining visual elegance',
    ],
    businessOutcome: [
      'Improved brand positioning for luxury market',
      'Streamlined inquiry process for qualified prospects',
      'Professional digital presence for high-end services',
    ],
    technicalOutcome: [
      'Minimalist design system that maintains consistency',
      'Privacy-focused contact system',
      'Performance-optimized while maintaining visual quality',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on design aesthetics, user experience, and brand presentation rather than modern framework features.',
  },
  {
    slug: 'nidderkuererkine',
    title: 'Nidderkuererkine',
    url: 'https://nidderkuererkine.lu',
    category: 'Health & Beauty',
    summary:
      'Full-stack development of a physiotherapy clinic website with appointment booking system. Built on PHP/MySQL with focus on patient-centric UX and appointment management.',
    tags: ['PHP', 'CSS', 'MySQL'],
    image: '/images/nidder.jpg',
    images: ['/images/nidder.jpg', '/images/nidder-2.jpg', '/images/nidder-3.jpg'],
    goals: [
      'Design patient-centric information architecture for clinic services and specialties',
      'Build appointment booking system with availability checking and confirmation workflow',
      'Create staff and treatment presentation that builds patient trust',
    ],
    contribution: [
      'Designed database schema for appointments, staff schedules, and patient records',
      'Implemented appointment booking system with real-time availability checking',
      'Built patient-facing interface with clear service descriptions and staff profiles',
      'Structured content to prioritize key information (services, booking, contact)',
      'Created responsive design optimized for patients booking on mobile devices',
    ],
    businessOutcome: [
      'Streamlined appointment booking process',
      'Improved patient access to clinic information',
      'Reduced administrative overhead for appointment management',
    ],
    technicalOutcome: [
      'Appointment system with proper conflict prevention and availability management',
      'Database schema that supports appointment history and patient records',
      'Patient-centric UX that makes booking process straightforward',
      'Responsive design that works well for healthcare information access',
    ],
    legacyStackNote:
      'This project uses PHP with MySQL, a legacy stack. Focus was on appointment system functionality, patient UX, and maintainable code structure rather than modern framework features.',
  },
  {
    slug: 'ip-mediation',
    title: 'IP Mediation',
    url: 'https://ipmediate.com',
    category: 'Business & Professional',
    summary:
      'Frontend development of a professional services website for intellectual property and commercial mediation. Built on PHP with focus on clear presentation of legal services and consultation inquiry system.',
    tags: ['PHP', 'CSS'],
    image: '/images/ipmediation.jpg',
    images: ['/images/ipmediation.jpg', '/images/ipmediation-2.jpg', '/images/ipmediation-3.jpg'],
    goals: [
      'Design content structure that clearly presents mediation approach and legal service domains',
      'Build consultation inquiry system optimized for legal professionals and businesses',
      'Create credibility indicators section with testimonials and case studies',
    ],
    contribution: [
      'Structured content hierarchy optimized for legal readability and professional presentation',
      'Designed service sections that clearly explain core offerings (patents, IP, commercial disputes)',
      'Implemented consultation inquiry form with conflict type categorization',
      'Built testimonials and case studies presentation system',
      'Created responsive layout that maintains professional appearance across devices',
    ],
    businessOutcome: [
      'Improved online presence for consultation inquiries',
      'Clearer communication of mediation services',
      'More qualified consultation requests',
    ],
    technicalOutcome: [
      'Content architecture optimized for legal service presentation',
      'Form system designed for professional inquiry workflow',
      'Responsive design that maintains credibility and professionalism',
    ],
    legacyStackNote:
      'This project uses PHP with CSS, a legacy stack. Focus was on content structure, professional presentation, and user experience rather than modern framework features.',
  },
  {
    slug: 'coppers',
    title: 'Coppers',
    url: 'https://coppersbelval.lu',
    category: 'Food & Hospitality',
    summary:
      'Frontend development of a restaurant and bar website with event management features. Built with Vue.js, focusing on nightlife atmosphere, event promotion, and reservation system.',
    tags: ['Vue', 'CSS'],
    image: '/images/coppers.jpg',
    images: ['/images/coppers.jpg', '/images/coppers-2.jpg', '/images/coppers-3.jpg', '/images/coppers-4.jpg'],
    goals: [
      'Design interface that captures nightlife atmosphere and appeals to target audience',
      'Build event promotion system for DJ nights and special events',
      'Implement reservation system for table bookings',
      'Create menu presentation optimized for cocktail and food sharing concept',
    ],
    contribution: [
      'Designed nightlife-themed UI with dynamic visuals and event-focused layout',
      'Built event management system with calendar integration and event highlighting',
      'Implemented reservation system with table availability and booking confirmation',
      'Structured menu presentation with cocktail focus and food sharing concept',
      'Created responsive design that maintains visual impact across devices',
      'Optimized Vue application for performance with code splitting and lazy loading',
    ],
    businessOutcome: [
      'Improved online presence for event promotion and bookings',
      'Better communication of nightlife concept and offerings',
      'Streamlined reservation process',
    ],
    technicalOutcome: [
      'Vue.js application with component-based architecture',
      'Event management system with calendar integration',
      'Reservation system with proper availability handling',
      'Performance-optimized frontend with modern Vue patterns',
    ],
  },
  {
    slug: 'bottom-up',
    title: 'Bottom-Up',
    url: 'https://bottom-up.lu',
    category: 'Business & Professional',
    summary:
      'Frontend development of an architecture and interior design portfolio website. Built on PHP/jQuery with image-focused design, project galleries, and bilingual support.',
    tags: ['PHP', 'CSS', 'jQuery', 'Lightbox'],
    image: '/images/bottomup.jpg',
    images: ['/images/bottomup.jpg', '/images/bottomup-2.jpg', '/images/bottomup-3.jpg'],
    goals: [
      'Design image-focused layout that showcases architectural and interior design projects',
      'Build project gallery system with categorization and lightbox functionality',
      'Implement bilingual content system (English & French)',
      'Create contact system optimized for collaboration inquiries',
    ],
    contribution: [
      'Designed image-first layout that prioritizes visual portfolio presentation',
      'Implemented project gallery with lightbox functionality and image optimization',
      'Built project categorization system for intuitive navigation',
      'Structured bilingual content management (English & French)',
      'Created responsive design that maintains visual impact on all devices',
      'Optimized image loading and implemented lazy loading for gallery performance',
    ],
    businessOutcome: [
      'Improved online portfolio presence',
      'Streamlined inquiry process for collaborations',
      'Professional digital identity for design studio',
    ],
    technicalOutcome: [
      'Image-focused architecture optimized for portfolio presentation',
      'Gallery system with efficient image handling',
      'Bilingual system maintaining content consistency',
      'Responsive design that showcases architectural photography effectively',
    ],
    legacyStackNote:
      'This project uses PHP with jQuery, a legacy stack. Focus was on image presentation, gallery functionality, and user experience rather than modern framework features.',
  },
  {
    slug: 'la-coiffe',
    title: 'La Coiffe',
    url: 'https://www.lacoiffe.lu',
    category: 'Health & Beauty',
    summary:
      'Full-stack development of a hair salon website with appointment booking system. Built on PHP/MySQL/jQuery with focus on elegant design, stylist profiles, and appointment management.',
    tags: ['PHP', 'CSS', 'MySQL', 'jQuery'],
    image: '/images/lacoiffe.jpg',
    images: ['/images/lacoiffe.jpg', '/images/lacoiffe-2.jpg', '/images/lacoiffe-3.jpg'],
    goals: [
      'Design elegant interface that communicates style and professionalism',
      'Build appointment booking system with dynamic calendar and availability checking',
      'Create stylist profile system and service menu presentation',
    ],
    contribution: [
      'Designed elegant UI tailored to target clientele with focus on aesthetics and trust',
      'Implemented appointment booking system with dynamic calendar and time slot management',
      'Built stylist profile system with photos and specialization information',
      'Structured service menu presentation with clear treatment descriptions',
      'Created responsive design optimized for mobile booking',
      'Designed database schema for appointments, stylists, and services',
    ],
    businessOutcome: [
      'Streamlined appointment booking process',
      'Improved online presence for salon services',
      'Better communication of stylist expertise and treatments',
    ],
    technicalOutcome: [
      'Appointment system with calendar functionality and availability management',
      'Database schema supporting appointments, stylists, and service relationships',
      'Responsive design optimized for mobile-first booking experience',
      'Elegant UI system that maintains visual quality across devices',
    ],
    legacyStackNote:
      'This project uses PHP with MySQL and jQuery, a legacy stack. Focus was on appointment system functionality, elegant design, and user experience rather than modern framework features.',
  },
  {
    slug: 'duke-horlogerie',
    title: 'Duke Horlogerie',
    url: 'https://dukehorlogerie.com',
    category: 'Retail & E-commerce',
    summary:
      'Full-stack e-commerce platform for luxury watch retail. Built with Vue.js, Firebase, and Stripe. Designed for high-value transactions with authentication workflows, warranty tracking, and international shipping management.',
    tags: ['Vue', 'Firebase', 'Stripe'],
    image: '/images/duke.jpg',
    images: ['/images/duke.jpg', '/images/duke-2.jpg', '/images/duke-3.jpg'],
    goals: [
      'Design scalable product catalog system with advanced filtering, comparison, and search capabilities',
      'Implement secure authentication and user management for collectors and dealers',
      'Build payment processing workflow with insurance options and international shipping calculations',
      'Create warranty tracking system integrated with purchase history',
    ],
    contribution: [
      'Designed and implemented the product data structure with support for specifications, authentication certificates, and multi-image galleries',
      'Built advanced filtering system with price ranges, brand selection, movement types, and condition filters',
      'Implemented product comparison feature allowing side-by-side specification comparison',
      'Structured authentication system with role-based access (collectors, dealers, admins)',
      'Designed payment flow with Stripe integration, handling insurance add-ons and shipping cost calculations',
      'Built warranty tracking system that links purchases to warranty periods and service history',
      'Optimized image loading and implemented lazy loading for product galleries',
    ],
    businessOutcome: [
      'Established online sales channel for high-value luxury watches',
      'Enabled international customer reach beyond local market',
      'Streamlined authentication and warranty management processes',
    ],
    technicalOutcome: [
      'Scalable product catalog architecture that handles thousands of SKUs with complex metadata',
      'Efficient filtering system that performs well with large product datasets',
      'Secure payment integration with proper error handling and transaction logging',
      'User management system that supports multiple roles and permissions',
      'Warranty tracking system that maintains data integrity across purchase lifecycle',
      'Optimized frontend performance with code splitting and lazy loading strategies',
    ],
    // Украинские переводы
    summary_uk:
      'Повноцінна e-commerce платформа для роздрібної торгівлі розкішними годинниками. Побудовано з Vue.js, Firebase та Stripe. Спроектовано для високоцінних транзакцій з робочими процесами автентифікації, відстеження гарантії та управління міжнародною доставкою.',
    goals_uk: [
      'Спроектувати масштабовану систему каталогу продуктів з розширеними можливостями фільтрації, порівняння та пошуку',
      'Реалізувати безпечну автентифікацію та управління користувачами для колекціонерів та дилерів',
      'Побудувати робочий процес обробки платежів з опціями страхування та розрахунками міжнародної доставки',
      'Створити систему відстеження гарантії, інтегровану з історією покупок',
    ],
    contribution_uk: [
      'Спроектував та реалізував структуру даних продуктів з підтримкою специфікацій, сертифікатів автентичності та багато-зображеньних галерей',
      'Побудував розширену систему фільтрації з діапазонами цін, вибором брендів, типами механізмів та фільтрами стану',
      'Реалізував функцію порівняння продуктів, що дозволяє порівняння специфікацій поруч',
      'Структурував систему автентифікації з доступом на основі ролей (колекціонери, дилери, адміністратори)',
      'Спроектував платіжний потік з інтеграцією Stripe, обробляючи додаткові страховки та розрахунки вартості доставки',
      "Побудував систему відстеження гарантії, яка пов'язує покупки з періодами гарантії та історією обслуговування",
      'Оптимізував завантаження зображень та реалізував відкладене завантаження для галерей продуктів',
    ],
    businessOutcome_uk: [
      'Встановлено онлайн-канал продажів для високоцінних розкішних годинників',
      'Увімкнено міжнародний охоплення клієнтів за межами локального ринку',
      'Оптимізовано процеси автентифікації та управління гарантією',
    ],
    technicalOutcome_uk: [
      'Масштабована архітектура каталогу продуктів, яка обробляє тисячі SKU зі складними метаданими',
      'Ефективна система фільтрації, яка добре працює з великими наборами даних продуктів',
      'Безпечна інтеграція платежів з належною обробкою помилок та логуванням транзакцій',
      'Система управління користувачами, яка підтримує кілька ролей та дозволів',
      'Система відстеження гарантії, яка підтримує цілісність даних протягом життєвого циклу покупки',
      'Оптимізована продуктивність frontend з стратегіями розділення коду та відкладеного завантаження',
    ],
  },
  {
    slug: 'kriva-mosaica',
    title: 'Kriva Mosaica',
    url: 'https://kriva-mosaica.com/',
    category: 'Retail & E-commerce',
    summary:
      'Full-stack e-commerce platform with community features for DIY mosaic craft kits. Built with React, Node.js, Firebase, and Stripe. Includes custom product configurator, tutorial system, and user-generated content galleries.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe'],
    image: '/images/kriva.jpg',
    images: ['/images/kriva.jpg', '/images/kriva-2.jpg', '/images/kriva-3.jpg', '/images/kriva-4.jpg'],
    goals: [
      'Design and implement product configurator that allows customers to customize mosaic kit components',
      'Build tutorial platform with video integration, step-by-step guides, and downloadable templates',
      'Create user-generated content system for project galleries and community sharing',
      'Implement e-commerce functionality with cart, checkout, and order management',
    ],
    contribution: [
      'Designed and implemented the product configurator component with real-time preview and component selection logic',
      'Structured the tutorial system with video player integration, progress tracking, and template downloads',
      'Built user gallery system with image upload, moderation workflow, and social features (likes, comments)',
      'Implemented product catalog with filtering by skill level, project type, and kit size',
      'Designed cart and checkout flow with inventory validation and shipping calculations',
      'Created admin dashboard for managing products, tutorials, and moderating user content',
      'Optimized React application with code splitting, lazy loading, and performance monitoring',
    ],
    businessOutcome: [
      'Established online sales channel for DIY mosaic kits across European markets',
      'Built engaged community of craft enthusiasts',
      'Enabled business model transition from B2B to B2C',
    ],
    technicalOutcome: [
      'Modular React architecture with reusable components for products, tutorials, and galleries',
      'Scalable product configurator that handles complex customization rules',
      'User-generated content system with moderation tools and content management',
      'Efficient data structure in Firebase that supports real-time updates for galleries and tutorials',
      'Optimized image handling and CDN integration for fast gallery loading',
      'Admin dashboard that streamlines content and product management workflows',
    ],
    // Украинские переводы
    summary_uk:
      'Повноцінна e-commerce платформа з функціями спільноти для DIY наборів мозаїчного ремесла. Побудовано з React, Node.js, Firebase та Stripe. Включає кастомний конфігуратор продуктів, систему навчальних матеріалів та галереї контенту, створеного користувачами.',
    goals_uk: [
      'Спроектувати та реалізувати конфігуратор продуктів, який дозволяє клієнтам налаштовувати компоненти набору мозаїки',
      'Побудувати навчальну платформу з інтеграцією відео, покроковими гідами та завантажуваними шаблонами',
      'Створити систему контенту, створеного користувачами, для галерей проектів та обміну в спільноті',
      'Реалізувати функціональність електронної комерції з кошиком, оформленням замовлення та управлінням замовленнями',
    ],
    contribution_uk: [
      'Спроектував та реалізував компонент конфігуратора продуктів з попереднім переглядом в реальному часі та логікою вибору компонентів',
      'Структурував систему навчальних матеріалів з інтеграцією відеоплеєра, відстеженням прогресу та завантаженням шаблонів',
      'Побудував систему користувацьких галерей з завантаженням зображень, робочим процесом модерації та соціальними функціями (лайки, коментарі)',
      'Реалізував каталог продуктів з фільтрацією за рівнем навичок, типом проекту та розміром набору',
      'Спроектував потік кошика та оформлення замовлення з валідацією інвентарю та розрахунками доставки',
      'Створив адмін-панель для управління продуктами, навчальними матеріалами та модерації контенту користувачів',
      'Оптимізував React додаток з розділенням коду, відкладеним завантаженням та моніторингом продуктивності',
    ],
    businessOutcome_uk: [
      'Встановлено онлайн-канал продажів для DIY наборів мозаїки на європейських ринках',
      'Побудовано залучене співтовариство ентузіастів ремесла',
      'Увімкнено перехід бізнес-моделі з B2B на B2C',
    ],
    technicalOutcome_uk: [
      'Модульна React архітектура з багаторазовими компонентами для продуктів, навчальних матеріалів та галерей',
      'Масштабований конфігуратор продуктів, який обробляє складні правила налаштування',
      'Система контенту, створеного користувачами, з інструментами модерації та управління контентом',
      'Ефективна структура даних у Firebase, яка підтримує оновлення в реальному часі для галерей та навчальних матеріалів',
      'Оптимізована обробка зображень та інтеграція CDN для швидкого завантаження галерей',
      'Адмін-панель, яка оптимізує робочі процеси управління контентом та продуктами',
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
