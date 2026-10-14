
import { Link } from "react-router-dom";
import {
  MapPin,
  PenTool,
  Server,
  RefreshCw,
  ArrowRight,
  Check,
  ContactRound,
  Palette,
} from "lucide-react";

import { useSEO } from "@/lib/useSEO";

const BENEFITS = [
  {
    icon: PenTool,
    title: "Website Design & Development",
    desc: "Professional, mobile-friendly websites designed and developed around your business, services and branding.",
  },
  {
    icon: Server,
    title: "Website Hosting & Maintenance",
    desc: "Reliable hosting options, website updates and ongoing support to keep your website running smoothly.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Google Business Profile setup and optimisation to help eligible businesses become more visible on Google Search and Maps.",
  },
  {
    icon: ContactRound,
    title: "Flyer & Business Card Design",
    desc: "Professional flyers and business cards designed to promote your business and showcase your branding. Printing can be arranged separately.",
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

const FEATURES = [
  "Website packages from £115",
  "Personalised website mockups for £30",
  "£30 mockup cost deducted from the final website price",
  "Direct one-to-one communication",
  "Responsive, mobile-friendly website designs",
  "Website redesigns and branding services available",
];

const FAQS = [
  {
    question: "How much does a website cost in Solihull?",
    answer:
      "Website packages at JSP Web Lab start from £115. The final price depends on your business requirements, website features and the amount of work involved.",
  },
  {
    question: "Can I see a website preview before committing?",
    answer:
      "Yes. We offer personalised website mockups from £30, allowing you to see a design concept before proceeding. If you go ahead with the full website, the £30 is deducted from the final website price.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. JSP Web Lab can help modernise existing websites with updated designs, improved navigation and mobile-friendly layouts.",
  },
  {
    question: "Do you only work with businesses in Solihull?",
    answer:
      "No. Although we support businesses in Solihull and the surrounding areas, we can also work with businesses elsewhere in the UK.",
  },
];

export default function WebsiteSolihull() {
  useSEO(
    "Affordable Website Design Solihull | JSP Web Lab",
    "Affordable website design in Solihull from £115. JSP Web Lab offers website development, redesigns, hosting, Google Business Profile and branding services."
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#0A0A0A] px-4 pb-20 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex items-center justify-center gap-2 text-[#FF6A00]">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Solihull, West Midlands
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Affordable Website Design in{" "}
            <span className="text-[#FF6A00]">
              Solihull
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Looking for a professional website for your business?
            JSP Web Lab provides affordable website design,
            development, redesign and branding services for
            small businesses in Solihull and the surrounding areas.
          </p>

          <p className="mt-5 text-xl font-bold text-white">
            Professional Websites From{" "}
            <span className="text-[#FF6A00]">£115</span>
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FF6A00] px-8 py-4 font-bold text-black transition-colors hover:bg-[#FF7A1A]"
          >
            Get Your Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#FF6A00]">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0A0A0A] sm:text-4xl">
              Digital Services for Solihull Businesses
            </h2>

            <p className="mt-5 text-lg text-[#595E63]">
              From creating your first website to improving your
              existing branding, JSP Web Lab offers services
              to help your business establish a professional presence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
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

                <p className="mt-3 leading-relaxed text-[#595E63]">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-[#0A0A0A] hover:text-[#FF6A00]"
            >
              Explore All Services
              <ArrowRight className="h-5 w-5 text-[#FF6A00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING AND BENEFITS */}
      <section className="bg-[#F7F7F7] px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF6A00]">
            Affordable Web Design
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0A0A0A] sm:text-4xl">
            Professional Websites Without Agency Prices
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#595E63]">
            Whether you're starting a new business in Solihull
            or looking to improve an existing website, JSP Web Lab
            offers affordable solutions tailored to your requirements.
            We focus on personal communication, clear pricing and
            websites that reflect your business.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-5"
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#FF6A00]" />
                <span className="font-medium text-[#0A0A0A]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[#FF6A00]/30 bg-white p-8">
            <h3 className="text-2xl font-bold text-[#0A0A0A]">
              Personalised Website Mockups From £30
            </h3>

            <p className="mt-4 leading-relaxed text-[#595E63]">
              Want to see how your business website could look?
              We can create a personalised website mockup
              before you commit to the full project.
              If you decide to proceed, the £30 mockup fee
              is deducted from the final website price.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#0A0A0A] hover:text-[#FF6A00]"
            >
              Enquire About a Mockup
              <ArrowRight className="h-5 w-5 text-[#FF6A00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL AREA */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 text-[#FF6A00]">
            <MapPin className="h-7 w-7" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Local Website Design
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold text-[#0A0A0A] sm:text-4xl">
            Supporting Businesses Across Solihull
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#595E63]">
            JSP Web Lab provides website design and digital
            services for businesses across Solihull, including
            Shirley, Knowle, Dorridge, Cheswick Green and
            surrounding areas.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#595E63]">
            Whether you run a salon, dog grooming business,
            independent shop, trade service or another small
            business, we can help you build a professional
            online presence tailored to your customers.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#595E63]">
            We also work remotely with businesses throughout
            the UK, offering direct communication and
            personalised support throughout the project.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F7F7] px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-[#0A0A0A] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">
            {FAQS.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-xl border border-black/10 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-[#0A0A0A]">
                  {question}
                </h3>

                <p className="mt-3 leading-relaxed text-[#595E63]">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A0A0A] px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Grow Your Business Online?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Looking for affordable website design in Solihull?
            Contact JSP Web Lab for a free, no-obligation quote
            tailored to your business.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FF6A00] px-8 py-4 font-bold text-black transition-colors hover:bg-[#FF7A1A]"
          >
            Contact JSP Web Lab
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
