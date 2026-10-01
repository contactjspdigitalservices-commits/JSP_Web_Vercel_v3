import { Link } from "react-router-dom";
import { Target, Check, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { BRAND } from "@/lib/brand";
import { useSEO } from "@/lib/useSEO";

const FOUNDER_GOALS = [
  "Build practical experience",
  "Help small businesses improve their online presence",
  "Develop long-term web development skills",
  "Build professional websites that provide real value",
  "Grow JSP Web Lab into a trusted small-business web development service",
];

const HOPES = [
  "Help small businesses establish a professional online presence",
  "Make professional websites more accessible",
  "Build long-term relationships with customers",
  "Continue improving web development and digital skills",
  "Grow through real projects and customer success",
];

export default function About() {
  useSEO(
    "About JSP Web Lab | Affordable Web Design in Solihull",
    "JSP Web Lab was founded by Jaiden in Solihull to help small businesses access professional, affordable websites without traditional agency prices, while developing real web-development skills."
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
        <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            About
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About JSP Web Lab
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            JSP Web Lab was founded by Jaiden to help small businesses access
            professional websites without traditional agency prices — while
            developing the business and real web-development skills along the
            way.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Terminal-style story */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                About the Founder
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
                Hi, I'm Jaiden
              </h2>

              <div className="mt-6 overflow-hidden rounded-xl border border-[#0A0A0A]/10 bg-[#0A0A0A] font-mono text-sm shadow-lg">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#FF6A00]" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="ml-2 text-xs text-white/50">~/jsp-weblab</span>
                </div>
                <div className="space-y-2 p-5 leading-relaxed text-white/80">
                  <p>
                    <span className="text-[#FF6A00]">$</span> JSP Web Lab was
                    founded by Jaiden, who has developed an interest in web
                    development, technology and digital solutions.
                  </p>
                  <p>
                    The business was created to help small businesses access
                    professional websites without traditional agency prices —
                    turning those skills into practical solutions.
                  </p>
                  <p className="text-white/50">
                    <span className="text-[#FF6A00]">›</span> Mission:
                    professional websites, honest pricing.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-[#595E63]">
                The aim is to help small businesses improve their online
                presence while developing the business and web-development
                skills — building practical experience, creating professional
                websites that provide real value, and growing JSP Web Lab into
                a trusted small-business web development service.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-1">
                {FOUNDER_GOALS.map((g) => (
                  <div
                    key={g}
                    className="flex items-start gap-3 rounded-lg bg-[#0A0A0A]/[0.03] px-4 py-3"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                    <span className="text-sm text-[#0A0A0A]">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we hope to achieve */}
      <section className="bg-[#0A0A0A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              What We Hope to Achieve
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built on honesty and growth
            </h2>
          </div>

          <div className="mt-12 grid gap-5">
            {HOPES.map((g) => (
              <div
                key={g}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#FF6A00]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00] text-black">
                  <Target className="h-5 w-5" />
                </div>
                <p className="pt-1.5 text-lg text-white">{g}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-8 text-center">
            <p className="mx-auto max-w-2xl text-lg text-white">
              No exaggerated qualifications, no false claims — just honest,
              professional web development for small businesses.
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

      <CTABanner
        title="Let's build your website"
        subtitle={`Based in ${BRAND.location}. Get in touch for a free quote with no obligation.`}
      />
    </>
  );
}