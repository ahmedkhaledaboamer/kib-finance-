import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Logo from "./logo";

interface FooterLink {
  label: string;
  href: string;
}

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const contact = {
    title: t("contact.title"),
    phone: t("contact.phone"),
    email: t("contact.email"),
    location: t("contact.location"),
  };

  const quickLinksRaw = t.raw("quickLinks.links");
  const quickLinks: FooterLink[] = Array.isArray(quickLinksRaw)
    ? quickLinksRaw
        .map((link: unknown) => {
          const l = link as { label?: unknown; href?: unknown };
          return { label: String(l.label || ""), href: String(l.href || "") };
        })
        .filter((link) => link.href && link.href !== "[object Object]")
    : [];

  const socialLinks = [
    { name: "LinkedIn",  icon: Linkedin,  href: "https://linkedin.com",  ariaLabel: t("socialMedia.linkedin")  },
    { name: "Twitter",   icon: Twitter,   href: "https://twitter.com",   ariaLabel: t("socialMedia.twitter")   },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", ariaLabel: t("socialMedia.instagram") },
    { name: "Facebook",  icon: Facebook,  href: "https://facebook.com",  ariaLabel: t("socialMedia.facebook")  },
  ];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#0b1628] text-white"
    >
      {/* Subtle dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(91,155,213,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom-left glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(91,155,213,0.12) 0%, transparent 70%)" }}
      />

      {/* Corner triangle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[280px] w-[280px] opacity-[0.04]"
        style={{ background: "#5b9bd5", clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent, #5b9bd5 30%, #7fb8e8 60%, transparent)",
          opacity: 0.7,
        }}
      />

      <div className="relative z-10 mx-auto px-[5%]">

        {/* ── MAIN COLUMNS ── */}
        <div
          className={cn(
            "grid grid-cols-1 gap-10 py-12",
            "md:grid-cols-2",
            "lg:grid-cols-[2fr_1fr_1fr] lg:gap-16",
          )}
        >

          {/* ── Col 1: Brand + Social ── */}
          <div
            className={cn(
              "flex flex-col items-center text-center gap-5",
              "md:items-start md:text-start",
            )}
          >
            <Logo size={110} className="w-fit transition-opacity hover:opacity-75" />

            <p className="font-light leading-relaxed text-white/50 home-body-large">
              {t("description")}
            </p>

            {/* Social icons */}
            <div
              className={cn(
                "flex flex-wrap gap-2 pt-1",
                "justify-center",
                "md:justify-start",
              )}
              aria-label="Social media"
            >
              {socialLinks.map(({ name, icon: Icon, href, ariaLabel }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={cn(
                    "group flex h-9 w-9 items-center justify-center rounded-lg",
                    "border border-white/[0.08] bg-[#152040] text-white/50",
                    "transition-all duration-200",
                    "hover:-translate-y-0.5 hover:bg-[#5b9bd5] hover:border-[#5b9bd5] hover:text-white",
                    "hover:shadow-[0_6px_16px_rgba(91,155,213,0.35)]",
                  )}
                >
                  <Icon className="h-[14px] w-[14px]" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div
            className={cn(
              "flex flex-col items-center text-center gap-5",
              "md:items-start md:text-start",
            )}
          >
            <h3
              className={cn(
                "relative w-full pb-3 font-bold uppercase tracking-[0.22em] text-[#7fb8e8] home-badge-text",
                /* underline: centered on mobile */
                "after:absolute after:bottom-0 after:h-0.5 after:w-6 after:rounded after:bg-[#5b9bd5]",
                "after:shadow-[0_0_8px_rgba(91,155,213,0.6)]",
                "after:left-1/2 after:-translate-x-1/2",
                /* underline: start-aligned on md+ (left in LTR, right in RTL) */
                isRTL ? "md:after:right-0 md:after:translate-x-0" : "md:after:left-0 md:after:translate-x-0",
              )}
            >
              {t("quickLinks.title")}
            </h3>

            <ul className="flex w-full flex-col gap-0.5">
              {quickLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className={cn(
                      "group flex items-center gap-2 py-1.5",
                      "font-light text-white/50 transition-colors duration-200 hover:text-white home-body-large",
                      "justify-center md:justify-start",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md",
                        "border border-white/[0.08] bg-[#152040] font-bold text-white/25 home-small-label",
                        "transition-colors duration-200",
                        "group-hover:bg-[#5b9bd5] group-hover:border-[#5b9bd5] group-hover:text-white",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                    <span
                      className={cn(
                        "ml-auto text-[#5b9bd5] home-small-label",
                        "opacity-0 transition-all duration-200",
                        "group-hover:opacity-100 group-hover:translate-x-0",
                        "hidden md:inline",
                        isRTL ? "translate-x-1" : "-translate-x-1",
                      )}
                      aria-hidden="true"
                    >
                      {!isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact (row 2 on md, spanning 2 cols, centered) ── */}
          <div
            className={cn(
              "flex flex-col items-center text-center gap-5",
              "md:col-span-2 md:items-center md:text-center",
              "lg:col-span-1 lg:items-start lg:text-start",
            )}
          >
            <h3
              className={cn(
                "relative w-full pb-3 font-bold uppercase tracking-[0.22em] text-[#7fb8e8] home-badge-text",
                "after:absolute after:bottom-0 after:h-0.5 after:w-6 after:rounded after:bg-[#5b9bd5]",
                "after:shadow-[0_0_8px_rgba(91,155,213,0.6)]",
                "after:left-1/2 after:-translate-x-1/2",
                isRTL ? "lg:after:right-0 lg:after:translate-x-0" : "lg:after:left-0 lg:after:translate-x-0",
              )}
            >
              {contact.title}
            </h3>

            <div className="flex w-full flex-col gap-3">

              {/* Phone */}
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                aria-label={`Call us: ${contact.phone}`}
                className={cn(
                  "group flex items-center gap-3 font-light text-white/50 transition-colors hover:text-white home-body-large",
                  "justify-center md:justify-center lg:justify-start",
                )}
              >
                <span
                  className={cn(
                    " flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    "border border-white/[0.08] bg-[#152040]",
                    "transition-all duration-200",
                    "group-hover:bg-[#5b9bd5] group-hover:shadow-[0_4px_12px_rgba(91,155,213,0.4)]",
                  )}
                >
                  <Phone className="h-[13px] w-[13px] text-[#5b9bd5] transition-colors group-hover:text-white" />
                </span>
                <span className="text-start">{contact.phone}</span>
              </Link>

              {/* Email */}
              <Link
                href={`mailto:${contact.email}`}
                aria-label={`Email us: ${contact.email}`}
                className={cn(
                  "group flex items-center gap-3 font-light text-white/50 transition-colors hover:text-white home-body-large",
                  "justify-center md:justify-center lg:justify-start",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    "border border-white/[0.08] bg-[#152040]",
                    "transition-all duration-200",
                    "group-hover:bg-[#5b9bd5] group-hover:shadow-[0_4px_12px_rgba(91,155,213,0.4)]",
                  )}
                >
                  <Mail className="h-[13px] w-[13px] text-[#5b9bd5] transition-colors group-hover:text-white" />
                </span>
                <span className="break-all text-start">{contact.email}</span>
              </Link>

              {/* Location */}
              <div
                className={cn(
                  "flex items-start gap-3 font-light text-white/50 home-body-large",
                  "justify-center md:justify-center lg:justify-start",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    "border border-white/[0.08] bg-[#152040]",
                  )}
                >
                  <MapPin className="h-[13px] w-[13px] text-[#5b9bd5]" />
                </span>
                <span className="text-start leading-relaxed">{contact.location}</span>
              </div>

            </div>
          </div>

        </div>{/* /columns */}

        {/* ── BOTTOM BAR ── */}
        <div
          className={cn(
            "flex flex-col items-center gap-3 border-t border-white/[0.08] py-6",
            "text-center",
            "md:flex-row md:justify-between md:text-start",
          )}
        >
          <p className="font-light tracking-wide text-white/25 home-small-label">
            {t("copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}