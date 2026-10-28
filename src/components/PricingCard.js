import { whatsappLink } from "@/lib/whatsapp";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
        plan.popular ? "border-indigo-600 ring-2 ring-indigo-600" : "border-slate-200"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Starting from</p>
      <p className="text-2xl font-bold text-slate-900">{plan.price}</p>
      <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-indigo-600">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink(plan.message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-6 ${plan.popular ? "btn-primary" : "btn-outline"}`}
      >
        Get started
      </a>
    </div>
  );
}