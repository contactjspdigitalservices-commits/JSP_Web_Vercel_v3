import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Play } from "lucide-react";

// Demo website examples. These are example/demo websites — NOT customer projects.
// Videos match the dedicated /website-examples page; "View Demo" links there.
const DEMOS = [
  {
    title: "Café Website",
    tag: "Demo Website",
    desc: "A demo café website with a menu, opening hours, gallery, location and contact options.",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/047545e1a_CafeDemoWebsite.mp4",
  },
  {
    title: "Barber Website",
    tag: "Demo Website",
    desc: "A demo barbershop website with services, pricing, gallery, opening hours and booking contact.",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/e3629cde5_BarberDemoWebsite.mp4",
  },
  {
    title: "Bike Repair Website",
    tag: "Demo Website",
    desc: "A demo bike repair website with services, repair pricing, contact and enquiry options.",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/ec2c2c2a3_BikeRepairWebsite.mp4",
  },
  {
    title: "Mobile Tyre Fitting Website",
    tag: "Demo Website",
    desc: "A demo mobile tyre fitting website with services, coverage area and a book-online contact option.",
    videoUrl:
      "https://media.base44.com/videos/public/6a80bcedb3e067ccdf8ba02d/d2925bcbd_MobileTyreFittingDemoWebsite.mp4",
  },
];

export default function WebsiteExamples() {
  return (
    <section id="website-examples" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Website Examples
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl">
            Demo websites we can build
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#595E63]">
            These are <strong>example websites</strong> created to show the kind
            of professional, customised website JSP Web Lab can build — they are
            not customer projects. Every website is tailored to the individual
            business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {DEMOS.map(({ title, tag, desc, videoUrl }, i) => (
            <div
              key={title}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#0A0A0A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00] hover:shadow-[0_24px_48px_-24px_rgba(255,106,0,0.4)]"
            >
              {/* Browser frame */}
              <div className="border-b border-[#0A0A0A]/10 bg-[#0A0A0A] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A00]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="ml-3 hidden items-center gap-1.5 text-xs text-white/40 sm:flex">
                    <Monitor className="h-3 w-3" />
                    demo.jspweblab.co.uk
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <video
                  src={videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                />
                <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] backdrop-blur-sm">
                  {tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-[#595E63]">
                  {desc}
                </p>
                <Link
                  to={`/website-examples#demo-${i + 1}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#0A0A0A] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0A0A0A] transition-all hover:bg-[#0A0A0A] hover:text-white"
                >
                  View Demo
                  <Play className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-8 text-center sm:p-10">
          <p className="mx-auto max-w-2xl text-lg text-[#0A0A0A]">
            Want a website like one of these for your business? Every website is
            customised to you — these are just starting points.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_24px_-6px_rgba(255,106,0,0.6)] transition-all hover:bg-[#FF7A1A] sm:w-auto"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#0A0A0A] px-8 py-4 text-base font-bold uppercase tracking-wide text-[#0A0A0A] transition-all hover:bg-[#0A0A0A] hover:text-white sm:w-auto"
            >
              See Our Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}