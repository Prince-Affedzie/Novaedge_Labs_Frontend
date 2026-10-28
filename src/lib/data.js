
export const SITE = {
  name: "NovaEdge Labs",
  tagline:
    "Launch online. Grow your audience. Generate more business.",
  email: "contact@novaedgelabs.com",
  url: "https://novaedgelabs.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Demos & Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    priority: "core",
    icon: "🛍️",
    title: "Ready-to-Launch Online Stores",
    description:
      "Get a branded, mobile-friendly online store without building everything from scratch. We customize and deploy your storefront so customers can browse your products and place orders.",
    points: [
      "Product catalogue and product details",
      "Shopping cart and WhatsApp ordering",
      "Mobile-friendly design",
      "Store branding and initial product setup",
      "Deployment and basic handover",
    ],
  },
  {
    priority: "core",
    icon: "🎬",
    title: "Social Media & Content Growth",
    description:
      "Build a consistent social media presence with a strategy tailored to your business, products, audience and goals. We plan and produce content under an agreed service contract.",
    points: [
      "Business and target-audience research",
      "Content strategy and monthly calendar",
      "Short-form video and branded graphics",
      "Captions and content planning",
      "Performance reviews and recommendations",
    ],
  },
  {
    priority: "core",
    icon: "🎯",
    title: "Targeted Social Media Advertising",
    description:
      "Reach potential customers with focused advertising campaigns designed around your business goals, whether you want more qualified enquiries, leads or sales.",
    points: [
      "Campaign objectives and audience targeting",
      "Ad creative and campaign setup",
      "Lead or sales-focused campaign structure",
      "Performance monitoring and optimization",
      "Reporting and next-step recommendations",
    ],
  },
  {
    priority: "specialized",
    icon: "💻",
    title: "Custom Software Solutions",
    description:
      "Replace manual processes with practical digital tools built around how your business operates. Every project begins with understanding the problem and agreeing on a realistic scope.",
    points: [
      "Business dashboards and admin tools",
      "Inventory and order management systems",
      "Booking and workflow applications",
      "Custom web applications and integrations",
      "Phased development and handover",
    ],
  },
];

export const pricing = [
  {
    name: "Online Store Launch",
    price: "GHS 1000 – 3000",
    description:
      "A customized online storefront for sellers who are ready to move beyond social media-only selling.",
    features: [
      "Branded, mobile-friendly storefront",
      "Product catalogue and detail pages",
      "Shopping cart",
      "WhatsApp order submission",
      "Initial product upload",
      "Deployment and handover",
    ],
    message:
      "Hi NovaEdge Labs, I'd like to launch an affordable online store for my business.",
    popular: true,
  },
  {
    name: "Content Growth Partnership",
    price: "GHS 1,500 – 3,000 / month",
    description:
      "Consistent, strategy-led content designed around your business, target audience and marketing goals.",
    features: [
      "Business and audience discovery",
      "Content strategy and calendar",
      "Agreed short-form video deliverables",
      "Branded graphics and captions",
      "Performance review",
      "Ongoing production under contract",
    ],
    message:
      "Hi NovaEdge Labs, I'd like to discuss a content strategy and monthly content production for my business.",
  },
  {
    name: "Targeted Ad Campaign",
    price: "GHS 600 – 1,500",
    description:
      "Campaign planning and management focused on generating relevant enquiries, leads or sales.",
    features: [
      "Campaign goal and audience definition",
      "Ad creative and campaign setup",
      "Campaign monitoring",
      "Optimization during the agreed period",
      "Performance report",
    ],
    message:
      "Hi NovaEdge Labs, I'd like to discuss targeted social media advertising for my business.",
  },
  {
    name: "Business Landing Page",
    price: "GHS 600 – 900",
    description:
      "A focused business website that explains your offer and makes it easy for customers to contact you.",
    features: [
      "One-page responsive website",
      "Business services or product information",
      "Contact details",
      "WhatsApp call to action",
      "Deployment and basic handover",
    ],
    message:
      "Hi NovaEdge Labs, I'm interested in a business landing page.",
  },
  {
    name: "Custom Software",
    price: "Custom quote",
    description:
      "A tailored digital solution for a specific business process, operational challenge or workflow.",
    features: [
      "Initial requirements discussion",
      "Defined scope and written proposal",
      "Agreed delivery milestones",
      "Testing and handover",
    ],
    message:
      "Hi NovaEdge Labs, I'd like to discuss a custom software project.",
  },
];

export const steps = [
  {
    title: "Understand your business",
    text:
      "We learn about your business, target audience, current challenges and desired outcomes before recommending a solution.",
  },
  {
    title: "Agree on the plan",
    text:
      "We define the deliverables, timeline, price and responsibilities. For projects, work begins after the agreed deposit. Ongoing services follow a written contract.",
  },
  {
    title: "Deliver and improve",
    text:
      "We build, launch or produce the agreed work, review results where applicable, and identify practical next steps.",
  },
];

// Used when the API is unreachable or the database is empty.
export const fallbackProjects = [
  {
    _id: "demo-fashion",
    title: "Online Fashion Store",
    slug: "fashion-store-demo",
    category: "ecommerce",
    summary:
      "An illustrative online store with product browsing, product details, a shopping cart and WhatsApp order submission.",
    liveUrl: "/demo/fashion",
    isDemo: true,
    featured: true,
  },
  {
    _id: "demo-landing",
    title: "Business Landing Page",
    slug: "service-landing-demo",
    category: "website",
    summary:
      "An illustrative business website with a clear offer, service information and direct customer enquiries.",
    liveUrl: "/demo/landing",
    isDemo: true,
  },
  {
    _id: "demo-social",
    title: "Social Media Campaign Samples",
    slug: "social-ad-sample",
    category: "social",
    summary:
      "Illustrative promotional creatives demonstrating how content can communicate a product offer and encourage customer action.",
    isDemo: true,
  },
];
