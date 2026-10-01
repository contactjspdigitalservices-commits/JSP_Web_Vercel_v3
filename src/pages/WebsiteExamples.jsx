import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Play } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { useSEO } from "@/lib/useSEO";

const DEMOS = [
  {
    title: "Café Website Demo",
    label: "Demo Website",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/047545e1a_CafeDemoWebsite.mp4",
    description:
      "A modern café website example designed to showcase menus, opening hours, photos, location and customer enquiries.",
  },
  {
    title: "Barber Website Demo",
    label: "Demo Website",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/e3629cde5_BarberDemoWebsite.mp4",
    description:
      "A modern barber website example showcasing services, pricing, opening hours, photos and customer contact options.",
  },
  {
    title: "Bike Repair Website Demo",
    label: "Demo Website",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/ec2c2c2a3_BikeRepairWebsite.mp4",
    description:
      "A professional bike repair website example designed to showcase repair services, information, pricing and customer enquiries.",
  },
  {
    title: "Mobile Tyre Fitting Website Demo",
    label: "Demo Website",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/d2925bcbd_MobileTyreFittingDemoWebsite.mp4",
    description:
      "A mobile tyre fitting website example designed to showcase services, call-out information, areas covered and customer enquiries.",
  },
];

export default function WebsiteExamples() {
  useSEO(
    "Website Examples | JSP Web Lab",
    "Explore website examples created by JSP Web Lab for cafés, barbers, bike repair businesses, mobile tyre fitting and other small businesses."
  );

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Website Examples
          </h1>
          <p className="mt-4 text-xl font-semibold text-white/90">
            See what JSP Web Lab can create.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            These examples showcase the type of websites JSP Web Lab can build
            for small and independent businesses. Every website can be fully
            customised around your business, branding, services and
            requirements.
          </p>
          <div className="mt-9">
            <p className="text-base font-semibold uppercase tracking-wide text-white/60">
              Want a website like this?
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_30px_-6px_rgba(255,106,0,0.7)] transition-all hover:bg-[#FF7A1A] hover:shadow-[0_0_36px_-2px_rgba(255,106,0,0.9)]"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video showcase */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:gap-14">
            {DEMOS.map((demo, i) => (
              <DemoCard key={demo.title} demo={demo} index={i} id={`demo-${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Mockup pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-8 text-center sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Website Mockups
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
              Website mockups — £30
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#595E63]">
              Want to see a mockup of your own website first? JSP Web Lab can
              create a website mockup for <strong className="text-[#0A0A0A]">£30</strong>.
              If you then decide to have the website built and launched, that
              £30 is deducted from your website package — so you don't end up
              paying extra if JSP Web Lab builds and launches your website.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <span className="rounded-md bg-[#0A0A0A] px-5 py-2.5 text-sm font-bold text-white">
                Website build: £140
              </span>
              <span className="rounded-md bg-[#0A0A0A] px-5 py-2.5 text-sm font-bold text-white">
                Or £115 + £20/month
              </span>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_24px_-6px_rgba(255,106,0,0.6)] transition-all hover:bg-[#FF7A1A]"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built around your business */}
      <section className="bg-[#0A0A0A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Built Around Your Business
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tailored to you, not a template
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            These demos are examples of what is possible. Your website can be
            tailored to your business, including your branding, colours,
            services, images, contact details and functionality.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_30px_-6px_rgba(255,106,0,0.7)] transition-all hover:bg-[#FF7A1A] hover:shadow-[0_0_36px_-2px_rgba(255,106,0,0.9)]"
          >
            Contact JSP Web Lab
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <CTABanner
        title="Ready to build your website?"
        subtitle="Tell us about your business and we'll put together a free quote — with no obligation and no agency prices."
      />
    </>
  );
}

function DemoCard({ demo, index, id }) {
  return (
    <article id={id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#0A0A0A]/10 bg-white shadow-sm transition-shadow hover:border-[#FF6A00] hover:shadow-[0_20px_50px_-30px_rgba(255,106,0,0.4)]">
      {/* Browser-style frame */}
      <div className="bg-[#0A0A0A]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF6A00]" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="ml-2 hidden items-center gap-1.5 text-xs text-white/50 sm:flex">
            <Monitor className="h-3.5 w-3.5" />
            demo.jspweblab.co.uk
          </span>
          <span className="ml-auto rounded-full bg-[#FF6A00]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6A00]">
            {demo.label}
          </span>
        </div>
        <div className="relative aspect-video bg-black">
          <video
            src={demo.videoUrl}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
          >
            <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-white/70">
              Your browser does not support video playback.{" "}
              <a
                href={demo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#FF6A00] underline"
              >
                Open the demo video
              </a>
            </p>
          </video>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-sm font-bold text-[#FF6A00]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[#0A0A0A] sm:text-2xl">
            {demo.title}
          </h2>
        </div>
        <p className="mt-4 leading-relaxed text-[#595E63]">{demo.description}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0A0A0A]/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0A0A0A]/70">
          <Play className="h-3.5 w-3.5 text-[#FF6A00]" />
          Example website — not a live customer site
        </div>
      </div>
    </article>
  );
}