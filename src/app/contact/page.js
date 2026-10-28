
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact NovaEdge Labs",
  description:
    "Tell NovaEdge Labs about your business goals. Get in touch about online stores, content marketing, targeted advertising and custom software.",
};

const enquiryBenefits = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your business goals, current challenges and the solution you're considering.",
  },
  {
    number: "02",
    title: "Get a practical recommendation",
    description:
      "We'll discuss an approach that fits your requirements and available budget.",
  },
  {
    number: "03",
    title: "Agree on the next steps",
    description:
      "We'll clarify the scope, expected deliverables, timeline and pricing before work begins.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div className="container-x py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Let's work together
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Have a business goal?
            <span className="block text-teal-400">
              Let's work out how to get there.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Whether you're launching an online store, improving your social
            media presence, looking for more leads or building business
            software, tell us what you're working on. We'll help you explore
            the next practical step.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="btn bg-teal-500 text-slate-950 hover:bg-teal-400"
            >
              Send an enquiry
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-slate-700 text-white hover:bg-slate-800"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Contact information */}
            <aside>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Tell us where you want to go.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The more we understand about your business and what you
                want to achieve, the better we can assess how to help.
                You don't need a complete project plan to get started.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-teal-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <span className="block font-semibold text-slate-950">
                      Email us
                    </span>
                    <span className="mt-1 block break-all text-sm text-slate-600 group-hover:text-teal-700">
                      {SITE.email}
                    </span>
                    <span className="mt-2 block text-xs text-slate-500">
                      For project enquiries and detailed discussions
                    </span>
                  </span>
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                      <path d="M9 9c.5 2 2 3.5 4 4l1-1 2 1c-.2 1-1 2-2 2-3-.3-6-3.3-6-6 0-1 1-1.8 2-2l1 2-1 1Z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block font-semibold text-slate-950">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      Prefer a quick conversation? Message us directly.
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-teal-700">
                      Start a chat →
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Based in Ghana
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Based in Accra, working with businesses looking to
                      strengthen their digital presence.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                Not sure which service you need? That's fine. Describe the
                challenge, and we'll take it from there.
              </p>
            </aside>

            {/* Enquiry form */}
            <div
              id="contact-form"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
            >
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                  Project enquiry
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Tell us about your project
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Fill in the details below. Your enquiry will be sent to
                  our email so we can follow up with you.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What happens next"
            title="A straightforward process from the start"
            subtitle="We want you to know what to expect before committing to a project."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {enquiryBenefits.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-bold tracking-wider text-teal-700">
                  {item.number}
                </p>

                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
