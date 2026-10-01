import { Link } from "react-router-dom";
import {
  PenTool,
  Code2,
  Server,
  RefreshCw,
  ClipboardList,
  Boxes,
  ArrowRight,
  LayoutTemplate,
  Check,
  MapPin,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { useSEO } from "@/lib/useSEO";

const SERVICES = [
  {
    icon: PenTool,
    title: "Website Design",
    desc: "Professional layouts, branding, typography, images and user-friendly design.",
    points: ["Layout & structure", "Branding & colours", "Typography", "Imagery"],
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "Responsive websites designed to work across desktop, tablet and mobile.",
    points: ["Desktop, tablet & mobile", "Fast & clean code", "Accessible", "Standards-based"],
  },
  {
    icon: Server,
    title: "Website Hosting",
    desc: "Hosting solutions to keep your website available online.",
    points: ["Reliable hosting", "Online & accessible", "Managed options", "Ongoing support"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernise an outdated website and improve its appearance and usability.",
    points: ["Modern look & feel", "Better usability", "Updated content", "Mobile-friendly"],
  },
  {
    icon: ClipboardList,
    title: "Website Maintenance & Updates",
    desc: "Updates to content, images, services, contact information and other website elements.",
    points: ["Content updates", "Image changes", "Service info", "Contact details"],
  },
  {
    icon: Boxes,
    title: "Custom Website Solutions",
    desc: "Additional functionality and features based on your individual requirements.",
    points: ["Tailored features", "Built around you", "Flexible scope", "Quote on request"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Setup and updates for your Google Business Profile to help customers find you on Google Search and Maps.",
    points: ["Profile setup", "Business details", "Updates & edits", "Local visibility"],
  },
];

export default function Services() {
  useSEO(
    "Web Design & Development Services | JSP Web Lab Solihull",
    "JSP Web Lab offers affordable website design, development, hosting, redesigns, maintenance and custom solutions for small businesses in Solihull and the West Midlands."
  );
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-20 sm:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Our Services
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From idea to finished website
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Based in Solihull, JSP Web Lab provides a professional and personal
            service — affordable web solutions designed around your business,
            with the chance to review your website and request changes before
            it's completed.
          </p>
        </div>
      </section>

      {/* Website Mockups */}
      <section className="bg-white pb-4 pt-16 sm:pt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border-2 border-[#FF6A00] bg-[#FF6A00]/[0.03] shadow-[0_30px_60px_-30px_rgba(255,106,0,0.45)]">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6A00] text-black">
                    <LayoutTemplate className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                      Website Mockups
                    </span>
                    <h2 className="text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
                      Website Mockup — From £30
                    </h2>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-[#595E63]">
                  Want to see what your website could look like before
                  committing to the full build? We can create a custom website
                  mockup based around your business, branding and requirements.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-[#0A0A0A]">
                  {[
                    "Custom website concept",
                    "Designed around your business",
                    "Use the mockup to visualise your website before development",
                    "Can be used as the starting point for a full website",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl bg-[#0A0A0A] p-6 text-center">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    From £30
                  </span>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#FF6A00]">
                    Website Mockup
                  </p>
                  <div className="mt-5 rounded-lg border border-[#FF6A00]/30 bg-[#FF6A00]/10 p-4 text-left text-sm leading-relaxed text-white/90">
                    <strong className="text-white">Mockup: £30</strong>
                    <br />
                    If you decide to proceed with your website, this £30 is
                    deducted from the website package price, so you don't pay
                    the £30 on top of the website cost.
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]"
                  >
                    Request a Website Mockup
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc, points }) => (
              <div
                key={title}
                className="group flex flex-col rounded-xl border border-[#0A0A0A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00] hover:shadow-[0_20px_40px_-20px_rgba(255,106,0,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A0A0A] text-[#FF6A00] transition-all group-hover:bg-[#FF6A00] group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-[#0A0A0A]">{title}</h2>
                <p className="mt-2 leading-relaxed text-[#595E63]">{desc}</p>
                <ul className="mt-5 space-y-2 border-t border-[#0A0A0A]/10 pt-5 text-sm text-[#595E63]">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Need something specific */}
          <div className="mt-16 overflow-hidden rounded-2xl bg-[#0A0A0A]">
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Need something specific?
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">
                  Talk to us about what you need and we'll discuss a solution
                  around your business.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]"
                >
                  Contact JSP Web Lab
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to get started?"
        subtitle="Get in touch for a free quote tailored to your business — no obligation, no agency prices."
      />
    </>
  );
}