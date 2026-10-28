import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { getProjects } from "@/lib/api";

const portfolioHighlights = [
  {
    number: "01",
    title: "Online stores",
    description:
      "Branded shopping experiences that help customers browse products and place orders.",
  },
  {
    number: "02",
    title: "Business websites",
    description:
      "Professional websites that communicate your offer and make it easier for customers to contact you.",
  },
  {
    number: "03",
    title: "Marketing creatives",
    description:
      "Promotional content designed to communicate value and encourage customers to take action.",
  },
];

export default async function PortfolioClient() {
  const data = await getProjects();
  const projects = Array.isArray(data) ? data : [];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="container-x py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Our portfolio
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Ideas made practical.
            <span className="block text-teal-400">
              Digital experiences built for business.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore examples of what NovaEdge Labs can create for your
            business, from online stores and business websites to digital
            marketing creatives. Each solution starts with your goals and
            the customers you want to reach.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn bg-teal-500 text-slate-950 hover:bg-teal-400"
            >
              Explore our work
            </a>

            <Link
              href="/contact"
              className="btn border border-slate-700 text-white hover:bg-slate-800"
            >
              Discuss your project
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl gap-6 border-t border-slate-800 pt-7 sm:grid-cols-3">
            {portfolioHighlights.map((item) => (
              <div key={item.number}>
                <p className="text-xs font-bold tracking-[0.16em] text-teal-400">
                  {item.number}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white">
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

      {/* Project showcase */}
      <section id="projects" className="section scroll-mt-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Selected projects & demos
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                See what your business could look like online.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore example layouts, features and creative directions.
                Whether you are launching a new business or improving an
                existing one, we can tailor a solution to your requirements.
              </p>
            </div>
          </div>

          {/* Transparency note */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5m0-8h.01" />
              </svg>
            </span>

            <div>
              <p className="font-semibold text-slate-900">
                Clear examples. Honest representation.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Projects labelled “Demo project” are illustrative examples
                created to demonstrate possible solutions. They are not
                presented as completed client projects.
              </p>
            </div>
          </div>

          {/* Projects */}
          {projects.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id || project.slug || project.title}
                  project={project}
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {projects.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center sm:px-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18M8 4v5m8-5v5" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Have a project in mind?
              </h3>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
                Tell us what you want to build. We can discuss your
                requirements, recommend a practical approach and agree on
                the scope before work begins.
              </p>

              <Link
                href="/contact"
                className="btn mt-6 inline-flex bg-slate-950 text-white hover:bg-slate-800"
              >
                Start a conversation
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* How we approach projects */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Beyond the design
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Your business needs more than something that simply looks good.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We focus on the purpose behind every project. Your online
                store should make it easier to present products and receive
                orders. Your content should communicate value. Your
                advertising should have a clear objective.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We work with you to understand the problem, agree on
                deliverables and build around your actual business needs.
                No unnecessary complexity, and no promises of guaranteed
                sales.
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800"
              >
                Explore our services
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl" aria-hidden="true">🎯</span>
                <h3 className="mt-4 font-bold text-slate-950">
                  Built around your goals
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We start by understanding what you need to achieve and
                  who you need to reach.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:mt-8">
                <span className="text-2xl" aria-hidden="true">🧩</span>
                <h3 className="mt-4 font-bold text-slate-950">
                  Practical solutions
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We prioritize useful features and clear deliverables
                  instead of adding complexity you do not need.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl" aria-hidden="true">🤝</span>
                <h3 className="mt-4 font-bold text-slate-950">
                  Clear expectations
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Scope, timeline, pricing and responsibilities are
                  discussed before work begins.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:mt-8">
                <span className="text-2xl" aria-hidden="true">📈</span>
                <h3 className="mt-4 font-bold text-slate-950">
                  Room to grow
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Start with what matters now and expand your solution
                  as your business needs evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}