import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import CTA from "@/components/CTA";
import { pricing } from "@/lib/data";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Starting prices, agreed upfront"
            subtitle="Prices are starting points. We confirm the final scope and price with you before work begins."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
          <ul className="mx-auto mt-10 max-w-2xl list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Websites start with a 50% deposit before customization begins.</li>
            <li>Advertising spend, domain renewals, paid third-party services and major revisions are not included unless agreed.</li>
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}