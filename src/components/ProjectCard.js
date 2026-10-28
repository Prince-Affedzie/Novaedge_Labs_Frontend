import Link from "next/link";

const categoryLabels = {
  website: "Website",
  ecommerce: "E-commerce",
  software: "Software",
  social: "Social media",
};

export default function ProjectCard({ project }) {
  const isInternal = project.liveUrl?.startsWith("/");

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
      ) : (
        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-indigo-500 to-slate-800 text-4xl text-white/90">
          {project.category === "ecommerce" ? "🛍️" : project.category === "social" ? "📣" : project.category === "software" ? "⚙️" : "🌐"}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">
            {categoryLabels[project.category] || project.category}
          </span>
          {project.isDemo && (
            <span className="rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700">Demo project</span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{project.summary}</p>
        {project.liveUrl &&
          (isInternal ? (
            <Link href={project.liveUrl} className="mt-4 text-sm font-semibold text-indigo-600 hover:underline">
              View live demo →
            </Link>
          ) : (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold text-indigo-600 hover:underline">
              Visit site →
            </a>
          ))}
      </div>
    </div>
  );
}