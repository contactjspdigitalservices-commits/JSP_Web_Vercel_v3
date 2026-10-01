import { Link } from "react-router-dom";
import {
  Coffee,
  Scissors,
  Wrench,
  ShoppingBag,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Coffee,
    title: "Cafés & Restaurants",
    desc: "Menus, opening hours, galleries, location and contact/enquiry options.",
  },
  {
    icon: Scissors,
    title: "Barbers & Hairdressers",
    desc: "Services, pricing, gallery, opening hours and booking/contact options.",
  },
  {
    icon: Wrench,
    title: "Trades & Services",
    desc: "Services, areas covered, previous work, reviews and quote enquiries.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Businesses",
    desc: "Products, services, business information and customer enquiries.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Professional company information, services, contact details and enquiries.",
  },
  {
    icon: Sparkles,
    title: "Other Small Businesses",
    desc: "Custom websites based on the individual requirements of the business.",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            What Can We Build?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built around your business
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Every website is customised to the individual business. These are
            just examples of what can be built — JSP Web Lab works with all
            kinds of small and independent businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-[#1A1A1A] p-7 transition-all duration-300 hover:border-[#FF6A00]"
            >
              <Icon className="h-8 w-8 text-[#FF6A00]" />
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-8 text-center sm:p-10">
          <p className="mx-auto max-w-2xl text-lg text-white">
            Don't see your industry? That's fine — JSP Web Lab builds custom
            websites around what your business actually needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]"
          >
            Contact JSP Web Lab
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}