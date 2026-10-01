import { Link } from "react-router-dom";
import { Check, ArrowRight, Info } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const PLAN_1 = [
"Professional website",
"Customised to the business",
"Mobile responsive",
"Contact / enquiry functionality",
"Website deployment",
"Includes hosting",
"No JSP Web Lab monthly website subscription"];


const PLAN_2 = [
"Professional website",
"Customised to the business",
"Mobile responsive",
"Contact / enquiry functionality",
"Website deployment",
"Ongoing hosting",
"Full Design Control",
"£15 refunded in months where no updates are requested"];


export default function Pricing() {
  useSEO(
    "Website Pricing | Affordable Website Design | JSP Web Lab Solihull",
    "Affordable website pricing from JSP Web Lab in Solihull. A one-off professional website for £140, or a website plus hosting for £115 upfront and £20/month. No agency prices."
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
            backgroundSize: "64px 64px"
          }} />
        
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Pricing
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Websites
            <br />
            <span className="text-[#FF6A00]">Without</span> Agency Prices
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Clear, transparent pricing with no hidden costs. Based in Solihull,
            JSP Web Lab provides a professional and personal service — and you
            can review your website and request changes before committing to
            the final build.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Website Mockup offer */}
          <div className="mb-12 overflow-hidden rounded-2xl border-2 border-[#FF6A00] bg-[#FF6A00]/[0.03] shadow-[0_30px_60px_-30px_rgba(255,106,0,0.45)]">
            <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                  Website Mockup
                </span>
                <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
                  Website Mockup — From £30
                </h2>
                <p className="mt-3 text-lg font-semibold text-[#0A0A0A]">
                  See your website before it's built.
                </p>
                <p className="mt-4 leading-relaxed text-[#595E63]">
                  If you proceed with the website build, your £30 mockup payment
                  is deducted from the final website package price.
                </p>
              </div>
              <div className="rounded-xl bg-[#0A0A0A] p-6">
                <div className="flex items-center justify-center gap-3 text-center text-sm font-semibold text-white sm:gap-2">
                  <span className="rounded-md bg-[#FF6A00] px-3 py-2 text-black">
                    £30 mockup
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#FF6A00]" />
                  <span className="rounded-md border border-white/20 px-3 py-2">
                    choose a package
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#FF6A00]" />
                  <span className="rounded-md border border-[#FF6A00]/40 px-3 py-2 text-[#FF6A00]">
                    £30 deducted
                  </span>
                </div>
                <p className="mt-4 text-center text-xs leading-relaxed text-white/60">
                  You don't pay £30 on top of the website cost — it's deducted
                  from the package price.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]">
                  
                  Request a Website Mockup
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Website design from £115
            </p>
            <p className="mt-2 text-[#595E63]">
              Choose the option that works best for your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Plan 1 */}
            <div className="flex flex-col rounded-2xl border border-[#0A0A0A]/15 bg-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#0A0A0A]">One-Off Website + Hosting</h2>
              <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-[#595E63]">
                One-Time Payment
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-bold tracking-tight text-[#0A0A0A]">
                  £140
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-[#595E63]">
                A professional website with a one-off payment, designed around
                your business.
              </p>
              <ul className="mt-7 space-y-3.5 border-t border-[#0A0A0A]/10 pt-7 text-sm text-[#0A0A0A]">
                {PLAN_1.map((f) =>
                <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                    {f}
                  </li>
                )}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-[#0A0A0A] px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#0A0A0A] transition-all hover:bg-[#0A0A0A] hover:text-white">
                
                Get Your Free Quote
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="relative flex flex-col rounded-2xl border-2 border-[#FF6A00] bg-white p-8 shadow-[0_30px_60px_-30px_rgba(255,106,0,0.55)] sm:p-10">
              <span className="absolute -top-3.5 left-8 rounded-full bg-[#FF6A00] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black">
                Lower Upfront Cost
              </span>
              <h2 className="text-2xl font-bold text-[#0A0A0A]">Fully Tailored Website + Hosting + Monthly Updates</h2>
              <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-[#595E63]">
                Lower Initial Cost
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-bold tracking-tight text-[#0A0A0A]">
                  £115
                </span>
                <span className="mb-3 text-lg font-bold text-[#FF6A00]">
                  + £20/month
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-[#595E63]">
                A professional website with a lower initial cost, combined with
                ongoing hosting.
              </p>
              <ul className="mt-7 space-y-3.5 border-t border-[#0A0A0A]/10 pt-7 text-sm text-[#0A0A0A]">
                {PLAN_2.map((f) =>
                <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                    {f}
                  </li>
                )}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-[#FF7A1A]">
                
                Get Your Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Other services & add-ons */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
            { label: "Website Management", price: "From £20/month" },
            { label: "Google Business Profile Setup", price: "£25" },
            { label: "Google Business Profile Updates", price: "£10–£15" }].
            map((item) =>
            <div
              key={item.label}
              className="rounded-xl border border-[#0A0A0A]/15 bg-white p-5">
              
                <p className="text-sm font-semibold text-[#0A0A0A]">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold text-[#FF6A00]">
                  {item.price}
                </p>
              </div>
            )}
          </div>

          {/* Why JSP / honest note */}
          <div className="mt-16 rounded-2xl bg-[#0A0A0A] p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Why JSP Web Lab?
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-white/70">
              Traditional web agencies can charge significantly more for small
              business websites. JSP Web Lab is designed to provide professional
              results without traditional agency pricing.
            </p>
            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                <p className="text-sm leading-relaxed text-white/80">
                  Optional services such as a custom domain name or third-party
                  services may have additional costs. Neither plan includes
                  unlimited future edits or unlimited ongoing support. Need
                  something more specific?{" "}
                  <Link to="/contact" className="font-semibold text-[#FF6A00] hover:underline">
                    Contact us
                  </Link>{" "}
                  and we'll discuss your requirements.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A00]" />
                <p className="text-sm leading-relaxed text-white/80">
                  You can review your website and request changes before
                  committing to the final build — so nothing goes live until
                  you're happy with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

}