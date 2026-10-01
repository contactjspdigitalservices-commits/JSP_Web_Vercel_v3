import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { BRAND, NAV_LINKS } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleHomeAnchor = (e, path) => {
    if (path === "/#what-we-do") {
      e.preventDefault();
      if (location.pathname !== "/") {
        window.location.href = "/#what-we-do";
      } else {
        document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        open
          ? "bg-[#FF6A00]"
          : scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center pr-6" aria-label="JSP Web Lab home">
          <Logo size={42} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                onClick={(e) => handleHomeAnchor(e, link.path)}
                className="whitespace-nowrap rounded-md px-3.5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BRAND.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-[#FF6A00]"
          >
            <Phone className="h-4 w-4 shrink-0 text-[#FF6A00]" />
            {BRAND.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-[#FF6A00] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_20px_-4px_rgba(255,106,0,0.6)] transition-all hover:bg-[#FF7A1A] hover:shadow-[0_0_28px_-2px_rgba(255,106,0,0.8)]"
          >
            Get Your Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden",
            open ? "text-black hover:bg-black/10" : "text-white hover:bg-white/10"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-[#FF6A00] backdrop-blur-xl lg:hidden">
          <div className="flex h-[calc(100vh-5rem)] flex-col px-6 py-8">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleHomeAnchor(e, link.path)}
                    className="block border-b border-black/15 py-4 text-2xl font-semibold text-black transition-colors hover:text-black/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 pt-8">
              <Link
                to="/contact"
                className="rounded-md bg-black px-5 py-4 text-center text-base font-bold uppercase tracking-wide text-white"
              >
                Get Your Free Quote
              </Link>
              <a
                href={BRAND.phoneHref}
                className="flex items-center justify-center gap-2 text-lg font-semibold text-black"
              >
                <Phone className="h-5 w-5 text-black" />
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}