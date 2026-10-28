
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import CTA from "@/components/CTA";
import { pricing } from "@/lib/data";

export const metadata = {
  title: "Pricing | NovaEdge Labs",
  description:
    "Explore affordable online store, content marketing, social advertising, website and custom software pricing from NovaEdge Labs in Ghana.",
};

const pricingPrinciples = [
  {
    number: "01",
    title: "Clear deliverables",
    description:
      "Understand what is included in your package before work begins.",
  },
  {
    number: "02",
    title: "Agreed pricing",
    description:
      "We confirm the scope and total price with you before starting.",
  },
  {
    number: "03",
    title: "Built around your needs",
    description:
      "Choose a practical starting point and discuss additional requirements separately.",
  },
];

const faqs = [
  {
    question: "Are these the final prices?",
    answer:
      "These are starting prices or indicative ranges. Your final quote depends on the agreed scope, features, content requirements and project complexity. We confirm the price before work begins.",
  },
  {
    question: "Do I need to pay everything upfront?",
    answer:
      "For website and online-store projects, the standard arrangement is a 50% deposit before customization begins, with the remaining payment agreed in advance. Ongoing services follow their agreed contract and payment terms.",
  },
  {
    question: "Is advertising spend included?",
    answer:
      "No. The fee for managing a campaign is separate from the money paid to advertising platforms. We discuss the recommended advertising budget before a campaign starts.",
  },
  {
    question: "Can I request additional features?",
    answer:
      "Yes. We can discuss additional features, integrations and changes. Work outside the agreed scope may require a revised quote and timeline.",
  },
  {
    question: "What if I don't know which service I need?",
    answer:
      "You can contact us with your business goals and challenges. We'll discuss your needs and help you identify a practical starting point before you commit.",
  },
];

export default function PricingPage() {
  const corePricing = pricing.filter(
    (plan) =>
      plan.name === "Online Store Launch" ||
      plan.name === "Content Growth Partnership" ||
      plan.name === "Targeted Ad Campaign"
  );

  const otherPricing = pricing.filter(
    (plan) =>
      ![
        "Online Store Launch",
        "Content Growth Partnership",
        "Targeted Ad Campaign",
      ].includes(plan.name)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div className="container-x py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Straightforward pricing
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Invest in your next stage of growth.
            <span className="block text-teal-400">
              Start with what you need.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Whether you're launching your first online store, building a
            consistent content strategy or running targeted campaigns,
            explore our starting prices and choose a service that fits
            your current goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing-options"
              className="btn bg-teal-500 text-slate-950 hover:bg-teal-400"
            >
              Explore pricing
            </a>

            <Link
              href="/contact"
              className="btn border border-slate-700 text-white hover:bg-slate-800"
            >
              Request a tailored quote
            </Link>
          </div>

          <div className="mt-14 grid max-w-4xl gap-6 border-t border-slate-800 pt-8 sm:grid-cols-3">
            {pricingPrinciples.map((item) => (
              <div key={item.number}>
                <p className="text-xs font-bold tracking-[0.16em] text-teal-400">
                  {item.number}
                </p>
                <h2 className="mt-3 font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main pricing */}
      <section id="pricing-options" className="section scroll-mt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our core services"
            title="Choose your starting point"
            subtitle="Three focused services for businesses that want a stronger online presence, better content or more targeted customer acquisition."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corePricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-semibold text-slate-950">
                Need something more specific?
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                We can discuss your requirements and prepare a quote
                around your business needs.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
            >
              Discuss your project →
            </Link>
          </div>
        </div>
      </section>

      {/* Additional services */}
      {otherPricing.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="container-x">
            <SectionHeading
              eyebrow="Additional solutions"
              title="Other ways we can help"
              subtitle="For businesses that need a dedicated website or a more tailored technology solution."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {otherPricing.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to know */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Before you get started
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Know exactly what you're paying for.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We want you to understand the scope, costs and expectations
                before making a commitment. Here's how we approach pricing.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800"
              >
                Ask us a question
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Deposits and payments",
                  text: "Website and online-store projects start with a 50% deposit before customization begins. Remaining payments and milestones are agreed before work starts.",
                },
                {
                  title: "Third-party costs",
                  text: "Domain registration and renewals, hosting where chargeable, paid software subscriptions, and other third-party fees are separate unless explicitly included in your quote.",
                },
                {
                  title: "Advertising budget",
                  text: "Our campaign management fee does not include the amount you pay Meta or another advertising platform to run your ads.",
                },
                {
                  title: "Changes and additional work",
                  text: "Major revisions, new features and work outside the agreed scope may affect the final price and delivery timeline. We'll discuss these changes with you first.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-5 sm:p-6"
                >
                  <h3 className="font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Questions about pricing?"
              subtitle="A few useful details before you choose a service."
            />

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-teal-200 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                    {faq.question}

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pr-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
