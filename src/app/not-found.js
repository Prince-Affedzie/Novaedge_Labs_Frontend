import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="text-sm font-semibold text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
        <Link href="/" className="btn btn-primary mt-6">Back home</Link>
      </div>
    </section>
  );
}