import { whatsappLink } from "@/lib/whatsapp";

export default function CTA({ title = "Ready to get your business online?", text = "Message us on WhatsApp and we'll recommend the right starting point." }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{text}</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-8">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}