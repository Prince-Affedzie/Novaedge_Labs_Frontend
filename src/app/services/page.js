
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Services | NovaEdge Labs",
  description:
    "Launch an online store, grow your audience with strategic content, and generate leads and sales through targeted advertising with NovaEdge Labs.",
};

const coreOffers = [
  {
    number: "01",
    key: "Ready-to-Launch Online Stores",
    eyebrow: "E-COMMERCE SOLUTIONS",
    headline: "Start selling online without building a store from scratch.",
    intro:
      "You already have products to sell. What you need is a professional place where customers can browse your products, understand your offers and place orders.",
    problem:
      "Selling exclusively through social media can make it difficult to present your full catalogue, organize product information and manage customer orders.",
    solution:
      "We customize and deploy an affordable online store around your brand, products and ordering process, so you can start selling through a dedicated storefront.",
    outcomes: [
      "A branded storefront built for mobile shoppers",
      "Organized product catalogue and product details",
      "Shopping cart and WhatsApp order submission",
      "Initial product setup and deployment",
    ],
    bestFor:
      "Fashion sellers, beauty businesses, gadget vendors, foodstuff sellers and other social-commerce businesses.",
    action: "Launch my online store",
    href: "/portfolio",
    actionLabel: "Explore store demos",
    featured: true,
  },
  {
    number: "02",
    key: "Social Media & Content Growth",
    eyebrow: "CONTENT & AUDIENCE GROWTH",
    headline: "Stop posting just to stay active. Give your content a purpose.",
    intro:
      "Effective content starts with understanding your business, your customers and why they should choose you. Then comes the strategy and consistent execution.",
    problem:
      "Inconsistent posting, generic creatives and content without a clear direction can make it difficult for businesses to build an engaged audience or turn attention into enquiries.",
    solution:
      "We learn about your business, research your target audience and develop a practical content strategy. Under an agreed contract, we produce content consistently and review performance to guide improvements.",
    outcomes: [
      "Business and audience discovery",
      "Content strategy and publishing calendar",
      "Short-form videos and branded graphics",
      "Captions, content planning and agreed publishing support",
      "Performance reviews and recommendations",
    ],
    bestFor:
      "Businesses with good products or services that need a stronger, more consistent social media presence.",
    action: "Discuss a content strategy",
    href: "/contact",
    actionLabel: "Discuss your goals",
    featured: false,
  },
  {
    number: "03",
    key: "Targeted Social Media Advertising",
    eyebrow: "PAID SOCIAL CAMPAIGNS",
    headline: "Put your offer in front of people more likely to take action.",
    intro:
      "Reach alone isn't the goal. Your campaigns should support a clear business objective, whether that's generating enquiries, collecting leads or increasing purchases.",
    problem:
      "Boosting posts without a clear objective, relevant audience or conversion path can consume an advertising budget without giving you useful business results.",
    solution:
      "We help define your campaign objective, develop the advertising approach, set up campaigns and monitor performance so decisions can be based on evidence rather than guesswork.",
    outcomes: [
      "Campaign goals and audience targeting",
      "Ad creative and campaign setup",
      "Lead or sales-focused campaign structure",
      "Performance monitoring and optimization",
      "Reporting and next-step recommendations",
    ],
    bestFor:
      "Businesses with a clear offer, an appropriate budget and the capacity to respond to enquiries or fulfil orders.",
    action: "Plan my ad campaign",
    href: "/contact",
    actionLabel: "Explore campaign support",
    featured: false,
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We discuss your products, customers, challenges, budget and goals before recommending an approach.",
  },
  {
    number: "02",
    title: "Agree on the plan",
    description:
      "You receive a clear scope, deliverables, timeline and price before work begins. Ongoing services follow agreed contract terms.",
  },
  {
    number: "03",
    title: "Execute and improve",
    description:
      "We deliver the agreed work, review results where applicable, and use what we learn to identify practical improvements.",
  },
];

export default function ServicesPage() {
  const specializedService = services.find(
    (service) => service.priority !== "core"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div className="container-x relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            What we do
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Build your online presence.
            <span className="block text-teal-400">
              Turn attention into opportunity.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need your first online store, a content strategy
            that connects with your audience, or advertising designed to
            generate leads and sales, NovaEdge Labs helps you move from
            scattered efforts to a clearer plan of action.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Let's discuss your goals
            </a>

            <a
              href="#our-services"
              className="btn border border-slate-700 text-white hover:bg-slate-800"
            >
              Explore our services
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl gap-6 border-t border-slate-800 pt-7 sm:grid-cols-3">
            {[
              {
                title: "Launch",
                text: "Get your business online.",
              },
              {
                title: "Engage",
                text: "Create content with purpose.",
              },
              {
                title: "Convert",
                text: "Reach prospects with targeted ads.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-lg font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section id="our-services" className="section scroll-mt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our core services"
            title="Choose the solution your business needs"
            subtitle="Three focused services. One goal: helping your business build a stronger online presence and create more opportunities for growth."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {coreOffers.map((offer) => (
              <a
                key={offer.number}
                href={`#service-${offer.number}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-teal-700">
                    {offer.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700"
                  >
                    →
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-bold text-slate-900">
                  {offer.key}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {offer.headline}
                </p>

                <p className="mt-4 text-sm font-semibold text-teal-700">
                  Learn more
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed core services */}
      <section className="bg-slate-50">
        {coreOffers.map((offer, index) => (
          <div
            key={offer.number}
            id={`service-${offer.number}`}
            className={`scroll-mt-20 py-16 sm:py-24 ${
              index !== 0 ? "border-t border-slate-200" : ""
            }`}
          >
            <div className="container-x">
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-teal-700">
                    {offer.eyebrow}
                  </p>

                  <div className="mt-5 flex items-start gap-4">
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-lg font-bold text-teal-700 sm:flex">
                      {offer.number}
                    </span>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                      {offer.headline}
                    </h2>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-700">
                    {offer.intro}
                  </p>

                  <div className="mt-7">
                    <h3 className="font-semibold text-slate-900">
                      The challenge
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {offer.problem}
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-semibold text-slate-900">
                      How we help
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {offer.solution}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      {offer.action}
                    </a>

                    <Link
                      href={offer.href}
                      className="btn border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                    >
                      {offer.actionLabel}
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
                    What you get
                  </p>

                  <ul className="mt-6 space-y-4">
                    {offer.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700"
                        >
                          ✓
                        </span>

                        <span className="text-sm leading-6 text-slate-700">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Ideal for
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {offer.bestFor}
                    </p>
                  </div>

                  {offer.number === "01" && (
                    <p className="mt-5 rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
                      Our starter store uses WhatsApp to submit orders.
                      Online payments, advanced inventory management and
                      other integrations can be scoped separately.
                    </p>
                  )}

                  {offer.number === "03" && (
                    <p className="mt-5 rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
                      Advertising spend is separate from our management
                      fee. Campaign results depend on the offer, audience,
                      budget, competition and customer experience.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Specialized capability */}
      {specializedService && (
        <section className="section">
          <div className="container-x">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
              <p className="text-xs font-bold tracking-[0.16em] text-teal-700">
                BEYOND OUR CORE SERVICES
              </p>

              <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {specializedService.title}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    {specializedService.description}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {specializedService.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="text-teal-700">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-slate-300 text-slate-900 hover:bg-slate-50"
                >
                  Discuss a project
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Engagement process */}
      <section className="section bg-slate-950">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
              Working with us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A clear plan before the work begins.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              We want you to understand what you're paying for, what
              we'll deliver and how the work will support your business.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {engagementSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm font-bold text-teal-400">
                  {step.number}
                </p>

                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}
