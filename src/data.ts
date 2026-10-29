// All site copy lives here so the CV can be updated without touching layout.

const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Matthew Waldeck',
  role: 'Full-stack developer',
  city: 'Cape Town',
  location: 'Durbanville, Cape Town, South Africa',
  email: 'waldeck.mk@gmail.com',
  phone: '078 921 3169',
  whatsapp: 'https://wa.me/27789213169',
  linkedin: 'https://www.linkedin.com/in/matthew-waldeck-a77884255/',
  github: 'https://github.com/MattWaldeck',
  githubHandle: 'MattWaldeck',
  photo: `${base}assets/img/ProfilePic2.jpg`,
  cv: `${base}assets/documents/Matthew_Waldeck_CV_2026.pdf`,
  current: 'Full Stack Developer at eCommerceAfrica',
  degree: 'BSc IT (Cum Laude)',
  languages: 'English, Afrikaans (conversational)',
};

// The hero headline finishes with each of these in turn.
export const heroWords = ['launch day.', 'Black Friday.', 'payday weekend.', 'the big sale.'];

// What kind of work Matthew is looking for.
export const availability = {
  summary: 'Open to remote or hybrid roles: permanent, part-time or contract, plus freelance projects.',
  short: 'Open to remote & hybrid roles',
  modes: ['Remote', 'Hybrid'],
  types: ['Permanent', 'Part-time', 'Contract', 'Freelance'],
};

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const brands = [
  {
    name: 'Jonsson Workwear',
    kind: 'B2B commerce',
    via: 'eCommerceAfrica',
    text: 'Enterprise B2B platform across Shopify and Magento, with ERP, CRM and Plytix PIM integrations feeding it.',
    url: 'https://www.jonssonworkwear.com',
  },
  {
    name: 'DCC',
    kind: 'B2B commerce',
    via: 'eCommerceAfrica',
    text: 'Commerce platform work for DCC as part of the eCommerceAfrica client portfolio, from features to integrations.',
    url: null,
  },
  {
    name: 'Under Armour',
    kind: 'Web storefront',
    via: 'WBWR',
    text: 'Rebuilt the Under Armour web experience in Remix and TypeScript from Figma: video header, category showcases, featured products and promotions.',
    url: 'https://www.underarmour.co.za',
  },
  {
    name: 'Vans',
    kind: 'Headless storefront',
    via: 'WBWR',
    text: 'Migrated vans.co.za to Shopify Hydrogen for a faster headless shopping experience.',
    url: 'https://www.vans.co.za',
  },
  {
    name: 'Crocs',
    kind: 'Headless storefront',
    via: 'WBWR',
    text: 'Migrated crocssa.co.za to Shopify Hydrogen with dynamic components built on the Shopify APIs.',
    url: 'https://www.crocssa.co.za',
  },
  {
    name: 'Birkenstock',
    kind: 'Headless storefront',
    via: 'WBWR · bash',
    text: 'Moved the Birkenstock storefront on bashafrica.com to Shopify Hydrogen, aligned with Ares Holdings branding.',
    url: 'https://bashafrica.com',
  },
];

export const featuredProjects = [
  {
  demo: 'pothole' as const,
  name: 'Pothole Scanner',
  kind: 'Civic tech · Personal project · Private',
  status: 'In progress',
  pitch: 'Being prepared for the Western Cape Government',
  text: 'Anyone can photograph a pothole: the app pins the exact GPS location, records how bad it is, and sends it to a staff dashboard where road crews move each report from Reported to In progress to Fixed.',
  points: [
    'Photo + exact GPS location and address captured on the spot',
    'Severity rating, offline-first saving and background sync',
    'Hotspot tracker that ranks repeat locations by frequency × severity',
    'Staff dashboard with login, filters and status updates back to the reporter',
  ],
  next: 'Next: AI that reads the photo to estimate the pothole’s width and depth, so crews know how much sand and tar to bring.',
  stack: ['React Native', 'Expo', 'TypeScript', 'React', 'Vite', 'Firebase'],
  },
  {
    demo: 'proofmark' as const,
    name: 'Proofmark',
    kind: 'SaaS · Personal project · Beta',
    status: 'What’s next',
    pitch: 'Client feedback, pinned to the pixel',
    text: 'Design feedback usually arrives as screenshots, emails and chat messages. Proofmark gives every client company its own review dashboard: their team pins comments on the exact spot of a design, requests changes or approves a specific version, and the studio sees it live.',
    points: [
      'Pin comments by click or keyboard, tied to a person, a pixel and a version',
      'Roles enforced in the database: only approvers can sign off',
      'Clients join from an invite by magic link, no password',
      'Live inbox for studios, versioned uploads and approval history',
    ],
    next: 'Email notifications for new comments and approvals, paid plans after the free beta, and reviews for PDFs and video.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Postgres RLS', 'Tailwind CSS', 'Playwright', 'Vercel'],
  },
];

export const projectFilters = ['All', 'Client sites', 'Products', 'Personal'] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export const projects: {
  name: string;
  kind: string;
  group: ProjectFilter;
  text: string;
  stack: string[];
  status: string;
}[] = [
  {
    name: 'Werda Cabin',
    group: 'Client sites',
    kind: 'Airbnb / holiday cabin',
    text: 'Website I build and manage for a cabin retreat in the Tulbagh valley, with a Book Now section and booking links.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live · managed',
  },
  {
    name: 'Aspire Biokinetics',
    group: 'Client sites',
    kind: 'Client website',
    text: 'A practice website for a biokineticist, presenting services and making it easy for patients to get in touch.',
    stack: ['TypeScript', 'Tailwind CSS'],
    status: 'Client',
  },
  {
    name: 'Wedding websites',
    group: 'Products',
    kind: 'Product I sell',
    text: 'Digital wedding invitations for couples: our story, the day’s details, FAQ and a working RSVP form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'For sale',
  },
  {
    name: 'UGC portfolios',
    group: 'Client sites',
    kind: 'Client websites',
    text: 'Portfolio sites for user-generated-content creators to show their work and land brand deals.',
    stack: ['HTML', 'CSS'],
    status: 'Client · private',
  },
  {
    name: 'Vuka',
    group: 'Products',
    kind: 'SaaS MVP · Private',
    text: 'WhatsApp-native invoicing and bookings: businesses send a link that opens straight from WhatsApp, no app needed.',
    stack: ['React', 'Vite', 'Supabase', 'Vercel'],
    status: 'Building',
  },
  {
    name: 'Gym tracker',
    group: 'Personal',
    kind: 'Personal app',
    text: 'A progress tracker for logging workouts and seeing strength gains over time.',
    stack: ['TypeScript', 'React'],
    status: 'Live',
  },
];

export const experience = [
  {
    period: 'Dec 2025 – Present',
    year: '2025',
    title: 'Full Stack Developer',
    company: 'eCommerceAfrica',
    place: 'Western Cape',
    current: true,
    points: [
      'Architect and maintain B2B eCommerce platforms for enterprise clients including Jonsson Workwear and DCC, owning feature delivery end to end across Shopify and Magento.',
      'Integrate third-party systems (ERP, CRM, Plytix PIM) so data flows cleanly across each client’s ecosystem.',
      'Drive sprint-based delivery in Azure DevOps, keeping code quality high and release cycles short in an agile team.',
    ],
  },
  {
    period: 'Nov 2024 – Nov 2025',
    year: '2024',
    title: 'Full Stack Developer',
    company: 'WBWR',
    place: 'Somerset West, Western Cape',
    current: false,
    points: [
      'Migrated the Vans, Crocs and Birkenstock (bashafrica.com) storefronts to Shopify Hydrogen headless commerce.',
      'Built the Under Armour web update in Remix, TypeScript and Tailwind CSS, matched to the Figma design.',
      'Worked with marketing, design and Ares Holdings clients to align branding and features with business goals.',
      'Built dynamic components and integrated Shopify APIs, keeping products scalable and performant.',
    ],
  },
  {
    period: 'May 2024 – Aug 2024',
    year: '2024',
    title: 'Full Stack Developer',
    company: 'LOOM Property Insights',
    place: 'Pretoria, Gauteng',
    current: false,
    points: [
      'Built a live-data project across frontend and backend for property analytics systems.',
      'Worked Azure sprint tickets, ran system testing and assisted with deployments.',
    ],
  },
];

export const services = [
  { title: 'Headless commerce', text: 'Shopify Hydrogen storefronts that load fast and stay on brand.' },
  { title: 'Platform integrations', text: 'ERP, CRM and PIM data flowing into the store without manual work.' },
  { title: 'Web development', text: 'Responsive React and Next.js sites built around the business.' },
  { title: 'Backend & APIs', text: 'Node, Express and Spring Boot services, REST and GraphQL.' },
  { title: 'Databases', text: 'SQL and MongoDB schemas designed, tuned and maintained.' },
  { title: 'Mobile apps', text: 'Android apps in Kotlin, from idea to working build.' },
];

export const principles = [
  {
    title: 'Speed is a feature',
    text: 'A storefront that loads a second faster sells more. Performance is part of the brief, not a polish pass.',
  },
  {
    title: 'Data should just arrive',
    text: 'If someone is copying products between systems by hand, an integration is missing.',
  },
  {
    title: 'Ship in small steps',
    text: 'Sprint-sized changes, reviewed and released often, beat one big risky launch.',
  },
];

export const stack = [
  {
    title: 'Frontend',
    text: 'Interfaces and storefront experiences',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Remix', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Commerce',
    text: 'Platforms I build stores on',
    items: ['Shopify Hydrogen', 'Liquid', 'Shopify APIs', 'Magento', 'Adobe Commerce', 'Plytix PIM'],
  },
  {
    title: 'Backend',
    text: 'APIs, services and business logic',
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST', 'GraphQL', 'Python'],
  },
  {
    title: 'Data',
    text: 'Databases and analytics',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Supabase', 'Azure Synapse'],
  },
  {
    title: 'Cloud & delivery',
    text: 'Shipping and running software',
    items: ['DevOps', 'Azure', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    title: 'Mobile & design',
    text: 'Apps and the screens behind them',
    items: ['iOS', 'Android', 'Kotlin', 'Android Studio', 'Figma', 'UI design'],
  },
];

export const journey = [
  {
    year: '2021',
    where: 'Tygervalley',
    title: 'Starting a BSc in IT',
    text: 'I enrolled for a BSc in Information Technology at Eduvos in Tygervalley, Western Cape.',
  },
  {
    year: '2023',
    where: 'Eduvos',
    title: 'Cum Laude, and a project on show',
    text: 'I graduated Cum Laude. My final-year client project, a biometric facial recognition app for building access (Kotlin, Node.js, Express, MySQL), was selected to represent the department at a student tech expo.',
  },
  {
    year: '2024',
    where: 'Pretoria, then Somerset West',
    title: 'First production work',
    text: 'Live property analytics at LOOM, then WBWR, where I moved Vans, Crocs and Birkenstock onto Shopify Hydrogen.',
  },
  {
    year: '2025',
    where: 'Now',
    title: 'Enterprise B2B commerce',
    text: 'At eCommerceAfrica I own B2B platforms like Jonsson Workwear and DCC across Shopify and Magento. I’m open to remote or hybrid roles, permanent, part-time or contract.',
  },
];

export const certifications = [
  'Microsoft Certified: Azure Fundamentals',
  'Azure Synapse Analytics for Data Engineers',
  'MTA: Database Fundamentals',
  'C# Complete A–Z Masterclass',
  'Microsoft SQL Server for Beginners',
  'MS Access 2019 Certificate',
  'ML & GenAI (TensorFlow, GPT, OpenAI)',
];
