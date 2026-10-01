import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import WebsiteExamples from "@/components/home/WebsiteExamples";
import PricingPreview from "@/components/home/PricingPreview";
import CTABanner from "@/components/CTABanner";
import { useSEO } from "@/lib/useSEO";

export default function Home() {
  useSEO(
    "JSP Web Lab | Professional Website Design in Solihull",
    "JSP Web Lab creates professional, affordable websites for small and independent businesses in Solihull, the West Midlands and across the UK."
  );
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhatWeBuild />
      <WebsiteExamples />
      <PricingPreview />
      <CTABanner
        title="Let's build your website"
        subtitle="Tell us about your business and we'll put together a free quote — with no obligation and no agency prices."
      />
    </>
  );
}