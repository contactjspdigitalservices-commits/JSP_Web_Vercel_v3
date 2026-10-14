
import { Link } from "react-router-dom";
import {
  PenTool,
  Server,
  RefreshCw,
  MapPin,
  Palette,
  ContactRound,
  ArrowRight,
} from "lucide-react";

const ITEMS = [
  {
    icon: PenTool,
    title: "Website Design & Development",
    desc: "Modern, professional websites designed and developed around your business, fully responsive across phones, tablets and computers.",
  },
  {
    icon: Server,
    title: "Website Hosting & Maintenance",
    desc: "Reliable hosting options, website updates and ongoing support to keep your website running smoothly.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Set up and optimise your Google Business Profile to help customers find you on Google Search and Maps.",
  },
  {
    icon: ContactRound,
    title: "Flyer & Business Card Design",
    desc: "Professional flyers and business cards designed to promote your business and showcase your branding.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Custom logo designs tailored to your business, helping you build a recognisable and professional brand identity.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    desc: "Transform an existing website with a refreshed design, improved usability and a modern, mobile-friendly layout.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl">
            Helping small businesses grow
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#595E63]">
            JSP Web Lab helps small businesses build their online presence
            and professional brand through affordable website design,
            Google Business Profile services and business branding —
            without the complexity or price tag of a traditional agency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-[#0A0A0A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00] hover:shadow-[0_20px_40px_-20px_rgba(255,106,0,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A0A0A] text-[#FF6A00] transition-all group-hover:bg-[#FF6A00] group-hover:text-black">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0A0A0A]">
                {title}
              </h3>

              <p className="mt-2 leading-relaxed text-[#595E63]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-base font-bold text-[#0A0A0A] transition-colors hover:text-[#FF6A00]"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 text-[#FF6A00]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
