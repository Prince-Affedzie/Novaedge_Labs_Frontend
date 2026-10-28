export default function ServiceCard({ service }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="text-3xl">{service.icon}</div>
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
  );
}