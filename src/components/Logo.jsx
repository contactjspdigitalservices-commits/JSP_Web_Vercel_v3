import { Image as ImageIcon } from "@/components/ui/image";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

// JSP Web Lab logo lockup.
// variant: "full" (logo + wordmark) | "mono-light" (logo + wordmark for dark bg)
// size: height in px
export default function Logo({ variant = "full", size = 44, className, showWordmark = true }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative shrink-0 overflow-hidden rounded-md bg-black ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <ImageIcon
          src={BRAND.logoUrl}
          alt="JSP Web Lab logo"
          fittingType="fill"
          className="h-full w-full object-contain"
        />
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-heading font-bold tracking-tight text-white"
            style={{ fontSize: size * 0.42 }}
          >
            JSP <span className="text-[#FF6A00]">WEB LAB</span>
          </span>
          <span
            className="font-body uppercase tracking-[0.3em] text-white/50"
            style={{ fontSize: size * 0.2 }}
          >
            Web Development
          </span>
        </div>
      )}
    </div>
  );
}