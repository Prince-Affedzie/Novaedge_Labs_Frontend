import Image from "next/image";

export default function ServiceCard({ service }) {
const Icon = service.icon;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {service.image && (
        <div className="relative h-44 w-full">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{service.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          {service.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-indigo-600">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}