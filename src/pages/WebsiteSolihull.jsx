
import { Link } from "react-router-dom";
import {
  MapPin,
  PenTool,
  Smartphone,
  RefreshCw,
  ArrowRight,
  Check,
} from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const BENEFITS = [
  {
    icon: PenTool,
    title: "Professional Website Design",
    desc: "Modern websites designed around your business, services and branding.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Websites",
    desc: "Responsive designs that work across phones, tablets and computers.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    desc: "Give an existing website a refreshed appearance and improved usability.",
  },
];

export default function WebsiteDesignSolihull() {
  useSEO(
    "Affordable Website Design in Solihull | JSP Web Lab",
    "Affordable website design and redesign services in Solihull. Professional websites from £115, personalised £30 mockups and one-to-one support."
  );

  return (
    <>
      <section className="bg-[#0A0A0A] px-4 pb-20 pt-36 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex items-center justify-center gap-2 text-[#FF6A00]">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Solihull, West Midlands
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Affordable Website Design in Solihull
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Looking for a professional website for your business?
            JSP Web Lab provides affordable website design and
            redesign services for small businesses in Solihull
            and the surrounding areas.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FF6A00] px-8 py-4 font-bold text-black hover:bg-[#FF7A1A]"
          >
            Get Your Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#0A0A0A]">
            Website Services for Solihull Businesses
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-black/10 p-7 transition-all hover:border-[#FF6A00]"
              >
                <Icon className="h-8 w-8 text-[#FF6A00]" />

                <h3 className="mt-5 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#595E63]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A0A0A]">
            Affordable Websites Without Agency Prices
          </h2>

          <p className="mt-5 leading-relaxed text-[#595E63]">
            Whether you're starting a new business or updating
            an existing website, JSP Web Lab provides a personal,
            one-to-one service tailored to your requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Website packages from £115",
              "Personalised website mockups for £30",
              "£30 mockup cost deducted from your website price",
              "Direct one-to-one communication",
              "Responsive, mobile-friendly designs",
              "Website redesigns available",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#FF6A00]" />
                <span className="text-[#0A0A0A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A0A0A]">
            Supporting Businesses Across Solihull
          </h2>

          <p className="mt-5 leading-relaxed text-[#595E63]">
            JSP Web Lab works with small and independent businesses
            across Solihull, including Shirley, Knowle, Dorridge,
            Cheswick Green and surrounding areas.
          </p>

          <p className="mt-4 leading-relaxed text-[#595E63]">
            From tradespeople and salons to independent shops and
            service providers, we can help you establish a
            professional online presence.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A] px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white">
            Ready to Build Your Website?
          </h2>

          <p className="mt-5 text-white/70">
            Get in touch with JSP Web Lab for a free,
            no-obligation quote.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FF6A00] px-8 py-4 font-bold text-black hover:bg-[#FF7A1A]"
          >
            Contact JSP Web Lab
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
