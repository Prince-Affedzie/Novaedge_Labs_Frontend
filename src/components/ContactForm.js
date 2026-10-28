"use client";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const options = ["Business landing page", "Mini e-commerce store", "Social media content", "Custom software", "Something else"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", service: options[0], message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi NovaEdge Labs, my name is ${form.name}.\nService: ${form.service}\n${form.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field = "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-slate-700">Your name</label>
        <input id="name" name="name" required value={form.name} onChange={update} className={field} />
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-medium text-slate-700">What do you need?</label>
        <select id="service" name="service" value={form.service} onChange={update} className={field}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Tell us about your business</label>
        <textarea id="message" name="message" rows={4} required value={form.message} onChange={update} className={field} />
      </div>
      <button type="submit" className="btn btn-whatsapp w-full">Send via WhatsApp</button>
    </form>
  );
}