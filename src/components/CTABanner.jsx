import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Reusable call-to-action banner used at the bottom of pages.
export default function CTABanner({
  title = "Ready to build your website?",
  subtitle = "Tell us about your business and we'll put together a free quote — with no obligation and no agency prices.",
  buttonLabel = "Get Your Free Quote",
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Orange glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#FF6A00]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          {subtitle}
        </p>
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_30px_-6px_rgba(255,106,0,0.7)] transition-all hover:bg-[#FF7A1A] hover:shadow-[0_0_36px_-2px_rgba(255,106,0,0.9)]"
        >
          {buttonLabel}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}