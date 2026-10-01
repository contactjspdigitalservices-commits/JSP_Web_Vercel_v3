import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl">
            Simple, honest pricing
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#595E63]">
            Two clear options for small businesses. No hidden fees, no agency
            price tag.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* One-Off */}
          <div className="rounded-xl border border-[#0A0A0A]/15 bg-white p-8">
            <h3 className="text-xl font-bold text-[#0A0A0A]">One-Off Website + Hosting</h3>
            <p className="mt-1 text-sm uppercase tracking-wide text-[#595E63]">
              One-Time Payment
            </p>
            <div className="mt-5 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight text-[#0A0A0A]">
                £140
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[#595E63]">
              {[
              "Professional website",
              "Customised to the business",
              "Mobile responsive",
              "Contact / enquiry functionality",
              "Website deployment",
              "No JSP Web Lab monthly website subscription"].
              map((f) =>
              <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                  {f}
                </li>
              )}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center rounded-md border border-[#0A0A0A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0A0A0A] transition-all hover:bg-[#0A0A0A] hover:text-white">
              
              Get Your Free Quote
            </Link>
          </div>

          {/* Hosting */}
          <div className="relative rounded-xl border-2 border-[#FF6A00] bg-white p-8 shadow-[0_24px_48px_-24px_rgba(255,106,0,0.5)]">
            <span className="absolute -top-3 left-8 rounded-full bg-[#FF6A00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              Lower Upfront Cost
            </span>
            <h3 className="text-xl font-bold text-[#0A0A0A]">Website + Hosting + Monthly Updates</h3>
            <p className="mt-1 text-sm uppercase tracking-wide text-[#595E63]">
              Lower Initial Cost
            </p>
            <div className="mt-5 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight text-[#0A0A0A]">
                £115
              </span>
              <span className="mb-2 text-sm font-semibold text-[#FF6A00]">
                + £20/month
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[#595E63]">
              {[
              "Professional website",
              "Customised to the business",
              "Mobile responsive",
              "Contact / enquiry functionality",
              "Website deployment",
              "Ongoing hosting"].
              map((f) =>
              <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                  {f}
                </li>
              )}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]">
              
              Get Your Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-base font-bold text-[#0A0A0A] transition-colors hover:text-[#FF6A00]">
            
            See Our Pricing
            <ArrowRight className="h-4 w-4 text-[#FF6A00]" />
          </Link>
        </div>
      </div>
    </section>);

}