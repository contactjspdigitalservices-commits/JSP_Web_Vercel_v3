import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useSEO } from "@/lib/useSEO";

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.37v13.67a2.89 2.89 0 0 1-2.89 2.5 2.89 2.89 0 1 1 .6-5.73V9.02a6.33 6.33 0 0 0-.6-.03A6.34 6.34 0 0 0 3.2 15.33a6.34 6.34 0 0 0 10.81 4.48V9.69a8.16 8.16 0 0 0 4.83 1.56V7.88a4.85 4.85 0 0 1-1.25-.05V6.69z" />
    </svg>
  );
}

const INITIAL = {
  name: "",
  business_name: "",
  email: "",
  phone: "",
  contact_method: "Email",
  message: "",
};

export default function Contact() {
  useSEO(
    "Contact JSP Web Lab | Website Enquiries",
    "Get in touch with JSP Web Lab for a free website quote. Call 07845 177707 or email JSP.WebLab@outlook.com. Based in Solihull, West Midlands, UK."
  );

  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    // Clear contact_method-required error when either field changes
    if (name === "email" || name === "phone") {
      setErrors((er) => ({ ...er, contact: undefined }));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Please enter your name.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please enter a message (at least 10 characters).";

    const hasEmail = form.email.trim().length > 0;
    const hasPhone = form.phone.trim().length > 0;
    if (!hasEmail && !hasPhone)
      e.contact = "Please provide either an email address or a phone number.";
    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (hasPhone && form.phone.replace(/\s/g, "").length < 7)
      e.phone = "Please enter a valid phone number.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name.trim(),
    business_name: form.business_name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    contact_method: form.contact_method,
    message: form.message.trim(),
  }),
});

if (!response.ok) {
  throw new Error("Failed to send enquiry");
}
      setSubmitted(true);
      setForm(INITIAL);
    } catch (err) {
      setErrors({
        submit:
          "Sorry, something went wrong sending your enquiry. Please try again, or contact us directly by phone or email.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-16 sm:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF6A00]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Contact / Enquiry
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Your Website
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Have an idea for a website or want to improve your current online
            presence? Get in touch with JSP Web Lab.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0A0A0A]">Get in touch</h2>
              <p className="mt-3 leading-relaxed text-[#595E63]">
                Prefer to talk directly? Reach JSP Web Lab using the details
                below — we'll get back to you as soon as possible.
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={BRAND.phoneHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#0A0A0A]/10 p-5 transition-all hover:border-[#FF6A00] hover:shadow-[0_12px_30px_-18px_rgba(255,106,0,0.5)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A0A0A] text-[#FF6A00]">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#595E63]">
                        Phone
                      </span>
                      <span className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#FF6A00]">
                        {BRAND.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.emailHref}
                    className="group flex items-start gap-4 rounded-xl border border-[#0A0A0A]/10 p-5 transition-all hover:border-[#FF6A00] hover:shadow-[0_12px_30px_-18px_rgba(255,106,0,0.5)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A0A0A] text-[#FF6A00]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#595E63]">
                        Email
                      </span>
                      <span className="block break-all text-lg font-bold text-[#0A0A0A] group-hover:text-[#FF6A00]">
                        {BRAND.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-xl border border-[#0A0A0A]/10 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A0A0A] text-[#FF6A00]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-[#595E63]">
                      Location
                    </span>
                    <span className="text-lg font-bold text-[#0A0A0A]">
                      {BRAND.location}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="JSP Web Lab on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[#0A0A0A]/15 text-[#0A0A0A] transition-all hover:border-[#FF6A00] hover:text-[#FF6A00]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="JSP Web Lab on TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[#0A0A0A]/15 text-[#0A0A0A] transition-all hover:border-[#FF6A00] hover:text-[#FF6A00]"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <span className="text-sm text-[#595E63]">
                  Follow JSP Web Lab
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-[#0A0A0A]/10 bg-white p-6 shadow-sm sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-14 w-14 text-[#FF6A00]" />
                    <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">
                      Thank you for your enquiry
                    </h3>
                    <p className="mt-3 max-w-md text-[#595E63]">
                      We've received your message and will get back to you as
                      soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-md border border-[#0A0A0A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0A0A0A] transition-all hover:bg-[#0A0A0A] hover:text-white"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A0A0A]">
                        Send an enquiry
                      </h3>
                      <p className="mt-1 text-sm text-[#595E63]">
                        Fields marked with * are required. Please provide either
                        an email or a phone number.
                      </p>
                    </div>

                    {/* Name */}
                    <Field
                      label="Name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Your full name"
                    />

                    {/* Business */}
                    <Field
                      label="Business Name"
                      name="business_name"
                      value={form.business_name}
                      onChange={handleChange}
                      error={errors.business_name}
                      placeholder="Your business (optional)"
                    />

                    {/* Email + Phone */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="you@example.com"
                      />
                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                    {errors.contact && (
                      <p className="-mt-2 text-sm font-medium text-[#D95D1A]">
                        {errors.contact}
                      </p>
                    )}

                    {/* Preferred contact method */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#0A0A0A]">
                        Preferred contact method
                      </label>
                      <div className="flex gap-3">
                        {["Email", "Phone"].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({ ...f, contact_method: m }))
                            }
                            className={
                              "flex-1 rounded-md border px-4 py-2.5 text-sm font-semibold transition-all " +
                              (form.contact_method === m
                                ? "border-[#FF6A00] bg-[#FF6A00] text-black"
                                : "border-[#0A0A0A]/15 text-[#595E63] hover:border-[#0A0A0A]/40")
                            }
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-[#0A0A0A]"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business and what you're looking for..."
                        className="w-full resize-y rounded-md border border-[#0A0A0A]/15 bg-white px-4 py-3 text-[#0A0A0A] placeholder:text-[#595E63]/50 focus:border-[#FF6A00] focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm font-medium text-[#D95D1A]">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {errors.submit && (
                      <div className="rounded-lg border border-[#D95D1A]/40 bg-[#D95D1A]/10 px-4 py-3 text-sm font-medium text-[#D95D1A]">
                        {errors.submit}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF6A00] px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-[0_0_24px_-6px_rgba(255,106,0,0.6)] transition-all hover:bg-[#FF7A1A] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, error, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-[#0A0A0A]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#0A0A0A]/15 bg-white px-4 py-3 text-[#0A0A0A] placeholder:text-[#595E63]/50 focus:border-[#FF6A00] focus:outline-none focus:ring-1 focus:ring-[#FF6A00]"
      />
      {error && <p className="mt-1.5 text-sm font-medium text-[#D95D1A]">{error}</p>}
    </div>
  );
}
