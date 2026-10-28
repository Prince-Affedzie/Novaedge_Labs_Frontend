import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import PricingCard from "@/components/PricingCard";
import CTA from "@/components/CTA";
import { services, pricing, steps } from "@/lib/data";
import { getProjects } from "@/lib/api";
import { whatsappLink } from "@/lib/whatsapp";

export default async function HomeClient() {
  const projects = (await getProjects()).slice(0, 3);

  const coreServices = services.filter(
    (service) => service.priority === "core"
  );

  const specializedServices = services.filter(
    (service) => service.priority !== "core"
  );

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-slate-950">
        <div className="container-x py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            Digital growth & technology agency · Ghana
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Grab your storefront. Reach the right people. Grow your sales.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            NovaEdge Labs helps businesses launch ready-to-use online
            stores, create content that connects with their audience,
            and run targeted social media campaigns designed to generate
            leads and sales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Discuss your business
            </a>

            <Link
              href="/portfolio"
              className="btn border border-slate-600 text-white hover:bg-slate-800"
            >
              Explore our demos
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Launch online</p>
              <p className="mt-1 text-sm text-slate-400">
                Your own branded online store.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Build your audience</p>
              <p className="mt-1 text-sm text-slate-400">
                Consistent, strategic content.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Generate enquiries</p>
              <p className="mt-1 text-sm text-slate-400">
                Targeted campaigns with measurable goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our core services"
            title="Practical solutions for your next stage of growth"
            subtitle="Whether you are starting to sell online or trying to grow an existing business, we help you build the right foundation and reach more potential customers."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized service */}
      {specializedServices.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-x">
            <SectionHeading
              eyebrow="Additional capabilities"
              title="Technology built around your business"
              subtitle="For businesses with specific operational needs, we also develop custom software and digital tools."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {specializedServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How we work */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our approach"
            title="Understand the goal. Build the solution. Improve with results."
            subtitle="We start with your business needs and agree on a clear scope before work begins."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="See what we can build"
            title="Explore our demos and sample work"
            subtitle="Preview our approach to online stores, websites and marketing creatives. Demo projects are illustrative unless explicitly identified as client work."
          />

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <h3 className="font-semibold text-slate-900">
                Our demo collection is growing
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Contact us to discuss a solution for your business.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-semibold text-teal-700 hover:underline"
              >
                Discuss a project →
              </a>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-teal-700 hover:underline"
            >
              Explore our portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Transparent starting prices"
            title="Choose the support your business needs"
            subtitle="Start with a clearly scoped service. We'll confirm deliverables, timelines and the final price before work begins."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Advertising spend, domain fees and other third-party
            charges are separate unless explicitly included in your quote.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}