import { Link } from "react-router-dom";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG =
  "https://media.base44.com/images/public/6a80bcedb3e067ccdf8ba02d/c157fb9d0_generated_6b68d380.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-20">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Orange glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-[#FF6A00]/25 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-[#FF6A00]/10 blur-[120px]" />

      {/* From £115 badge */}
      <div className="absolute right-8 top-24 z-10 hidden lg:block">
        <span className="inline-block rounded-full bg-[#FF6A00] px-10 py-6 text-4xl font-extrabold uppercase tracking-wide text-black shadow-[0_0_40px_-6px_rgba(255,106,0,0.85)]">
          From £115
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
            <Sparkles className="h-3.5 w-3.5" />
            Solihull · West Midlands · UK
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Professional Websites.
            <br />
            <span className="text-[#FF6A00]">Without</span> Agency Prices.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
            JSP Web Lab creates modern, professional websites for small and
            independent businesses — designed around your business, your
            customers and your goals.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_30px_-6px_rgba(255,106,0,0.7)] transition-all hover:bg-[#FF7A1A] hover:shadow-[0_0_36px_-2px_rgba(255,106,0,0.9)] sm:w-auto"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/#website-examples"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/25 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all hover:border-[#FF6A00] hover:bg-white/5 sm:w-auto"
            >
              <Eye className="h-5 w-5" />
              View Website Examples
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50 lg:justify-start">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              Custom-built
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              Mobile-friendly
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              No agency price tag
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-[#FF6A00]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] shadow-2xl">
            <Image
              src={HERO_IMG}
              alt="Modern web development workspace with dark burnt-orange lighting"
              fittingType="fill"
              className="aspect-[4/3] w-full"
            />
            {/* Code overlay badge */}
            <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
              <code className="font-mono text-xs text-[#FF6A00]">
                &lt;jsp-weblab /&gt;
              </code>
              <p className="mt-0.5 font-mono text-[10px] text-white/50">
                build: professional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}