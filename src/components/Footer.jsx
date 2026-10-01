import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";
import { BRAND, NAV_LINKS } from "@/lib/brand";

// Custom TikTok glyph (lucide has none)
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.37v13.67a2.89 2.89 0 0 1-2.89 2.5 2.89 2.89 0 1 1 .6-5.73V9.02a6.33 6.33 0 0 0-.6-.03A6.34 6.34 0 0 0 3.2 15.33a6.34 6.34 0 0 0 10.81 4.48V9.69a8.16 8.16 0 0 0 4.83 1.56V7.88a4.85 4.85 0 0 1-1.25-.05V6.69z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-[#FF6A00] via-[#595E63] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size={48} />
            <p className="mt-6 max-w-sm text-lg font-semibold text-white">
              Professional Websites. Without Agency Prices.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              JSP Web Lab designs, develops and hosts professional websites for
              small and independent businesses in Solihull, the West Midlands
              and across the UK.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.emailHref}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                {BRAND.location}
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JSP Web Lab on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 transition-all hover:border-[#FF6A00] hover:text-[#FF6A00]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JSP Web Lab on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 transition-all hover:border-[#FF6A00] hover:text-[#FF6A00]"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2026 JSP Web Lab. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#FF6A00]"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}