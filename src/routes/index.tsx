import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, ArrowUpRight, Download, Menu, X } from "lucide-react";
import headshotAsset from "@/assets/maya-headshot.png.asset.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import content from "@/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-eyebrow inline-flex items-center border border-hairline px-3 py-1.5 text-foreground">
      {children}
    </span>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 label-eyebrow text-secondary">
      <span className="text-primary">{number}</span>
      <span className="h-px flex-1 bg-hairline" />
      <span>{label}</span>
    </div>
  );
}

function ContactFormPopup({ email }: { email: typeof content.contact.email }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("submitting");

    try {
      const response = await fetch(email.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setOpen(false);
          setStatus("idle");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="group flex w-full items-center justify-between gap-6 bg-inverse-surface px-6 py-8 md:px-10 text-left cursor-pointer hover:bg-inverse-surface/90"
        >
          <div className="flex items-center gap-5">
            <Mail className="h-6 w-6" strokeWidth={1.5} />
            <div>
              <div className="label-eyebrow" style={{ color: "#cac7b2" }}>
                {email.label}
              </div>
              <div className="mt-1 text-lg md:text-xl text-inverse-foreground">
                {email.value}
              </div>
            </div>
          </div>
          <ArrowUpRight
            className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-none border border-hairline bg-surface-1 text-foreground max-w-md p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium tracking-tight text-primary">
            {email.formTitle}
          </DialogTitle>
          <DialogDescription className="text-sm text-secondary mt-2">
            {email.formDescription}
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="mt-6 flex flex-col items-center justify-center py-8 text-center bg-surface-2 border border-hairline">
            <span className="text-lg font-medium text-primary">{email.successTitle}</span>
            <p className="text-sm text-secondary mt-2">{email.successBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="form-name" className="label-eyebrow text-xs text-secondary">
                {email.fields.name.label}
              </Label>
              <Input
                id="form-name"
                type="text"
                required
                disabled={status === "submitting"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-none border-hairline bg-background text-foreground focus-visible:ring-primary focus-visible:border-primary"
                placeholder={email.fields.name.placeholder}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-email" className="label-eyebrow text-xs text-secondary">
                {email.fields.email.label}
              </Label>
              <Input
                id="form-email"
                type="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-none border-hairline bg-background text-foreground focus-visible:ring-primary focus-visible:border-primary"
                placeholder={email.fields.email.placeholder}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-message" className="label-eyebrow text-xs text-secondary">
                {email.fields.message.label}
              </Label>
              <Textarea
                id="form-message"
                required
                rows={4}
                disabled={status === "submitting"}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-none border-hairline bg-background text-foreground focus-visible:ring-primary focus-visible:border-primary"
                placeholder={email.fields.message.placeholder}
              />
            </div>

            {status === "error" && (
              <div className="text-sm text-destructive bg-destructive/10 px-3 py-2 border border-destructive/20">
                {email.errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-primary-variant text-primary-foreground py-3 font-medium transition-colors cursor-pointer label-eyebrow text-center disabled:opacity-50"
              >
                {status === "submitting" ? email.submittingLabel : email.submitLabel}
              </button>
              <a
                href={email.href}
                className="text-center text-xs text-secondary hover:text-primary transition-colors underline"
              >
                {email.directEmailPrefix} {email.value}
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const { meta, nav, hero, narrative, expertise, history, testimonials, academic, credentials, faq, contact } =
    content;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="label-eyebrow text-primary tracking-[0.12em]">
            {meta.brand}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="label-eyebrow nav-link text-foreground">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="label-eyebrow inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-primary-foreground hover:bg-primary-variant"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={2} />
              {meta.downloadCvLabel}
            </a>
          </div>
          <button
            aria-label="Menu"
            className="md:hidden border border-hairline p-2"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-hairline bg-background md:hidden">
            <div className="flex flex-col px-6 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="label-eyebrow border-b border-hairline py-4 text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="label-eyebrow mt-4 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 text-primary-foreground"
              >
                <Download className="h-3.5 w-3.5" /> {meta.downloadCvLabel}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-14 md:grid-cols-12 md:gap-16 md:px-10 md:pb-24 md:pt-20">
          <div className="order-2 md:order-1 md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="label-eyebrow flex items-center gap-3 text-secondary">
                <span className="h-px w-10 bg-primary" />
                {meta.eyebrow}
              </div>
              <h1 className="mt-8 text-[36px] font-medium leading-[1.02] tracking-tight text-foreground md:text-[48px] lg:text-[64px]">
                {hero.name.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-md text-base text-secondary md:text-lg">{hero.tagline}</p>
              <p className="mt-2 label-eyebrow text-primary">{hero.credentials}</p>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {hero.pills.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="border border-hairline">
              <img
                src={headshotAsset.url}
                alt={hero.photo.alt}
                width={896}
                height={1152}
                className="block h-auto w-full grayscale-[15%]"
              />
              <div className="flex items-center justify-between border-t border-hairline px-4 py-3 label-eyebrow text-secondary">
                <span>{hero.photo.plate}</span>
                <span>{hero.photo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section id="narrative" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number={narrative.number} label={narrative.label} />
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
                {narrative.heading}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-7 space-y-6 text-base leading-[1.6] text-foreground md:text-[18px]">
              {narrative.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-b border-hairline bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number={expertise.number} label={expertise.label} />
          <h2 className="mt-10 max-w-3xl text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
            {expertise.heading}
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
            {expertise.columns.map((col) => (
              <div key={col.title} className="bg-surface-2 p-8 md:p-10">
                <div className="label-eyebrow text-secondary">{col.title}</div>
                <ul className="mt-6 flex flex-col">
                  {col.items.map(([name, level]) => (
                    <li
                      key={name}
                      className="flex items-center justify-between gap-4 border-b border-outline-variant py-4 last:border-b-0"
                    >
                      <span className="text-[15px] text-foreground md:text-base">
                        {name}
                      </span>
                      <span className="label-eyebrow shrink-0 text-primary">
                        {level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number={history.number} label={history.label} />
          <h2 className="mt-10 max-w-3xl text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
            {history.heading}
          </h2>

          <div className="mt-14 flex flex-col">
            {history.jobs.map((job, i) => (
              <article
                key={i}
                className="grid grid-cols-1 gap-6 border-t border-hairline py-10 md:grid-cols-12 md:gap-10 md:py-12"
              >
                <div className="md:col-span-3">
                  <div className="label-eyebrow text-secondary">{job.dates}</div>
                  <div className="mt-2 text-sm text-secondary">{job.place}</div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-[22px] font-medium leading-snug tracking-tight text-foreground md:text-[26px]">
                    {job.role}
                  </h3>
                  <div className="mt-1 text-primary">{job.org}</div>
                  <ul className="mt-6 space-y-3">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-[15px] leading-[1.6] text-foreground md:text-base"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3 flex flex-wrap content-start gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="label-eyebrow border border-outline-variant px-2.5 py-1 text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Recommendations */}
      <section id="testimonials" className="border-b border-hairline bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number={testimonials.number} label={testimonials.label} />
          {testimonials.items.length > 0 && (
            <>
              <h2 className="mt-10 max-w-3xl text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
                {testimonials.heading}
              </h2>

              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
                {testimonials.items.map((rec, i) => (
                  <div key={i} className="flex flex-col justify-between border border-hairline bg-surface-1 p-8 rounded-none">
                    <div>
                      <span className="text-[64px] font-serif leading-none text-primary/20 select-none block h-6 -mt-4 -ml-2">“</span>
                      <p className="text-[15px] leading-[1.6] text-foreground italic relative z-10">
                        {rec.quote}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-outline-variant">
                      <div className="font-medium text-base text-foreground">{rec.author}</div>
                      <div className="text-xs text-primary mt-1">{rec.role}</div>
                      <div className="text-xs text-secondary mt-0.5">{rec.org}</div>
                      <div className="mt-3 inline-flex items-center gap-1.5 label-eyebrow text-[10px] text-secondary bg-surface-2 border border-hairline px-2 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {rec.relationship}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="credentials" className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
          <div className="px-6 py-20 md:px-10 md:py-28 md:border-r md:border-hairline">
            <SectionLabel number={academic.number} label={academic.label} />
            <h2 className="mt-10 text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px]">
              {academic.heading}
            </h2>
            <ul className="mt-10 flex flex-col">
              {academic.degrees.map(([name, tag]) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-4 border-b border-hairline py-5 first:border-t"
                >
                  <span className="text-base text-foreground md:text-lg">{name}</span>
                  <span className="label-eyebrow text-secondary">{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-inverse-surface px-6 py-20 text-inverse-foreground md:px-10 md:py-28">
            <div className="flex items-baseline gap-4 label-eyebrow" style={{ color: "#cac7b2" }}>
              <span>{credentials.number}</span>
              <span className="h-px flex-1" style={{ background: "#5a5a35" }} />
              <span>{credentials.label}</span>
            </div>
            <h2 className="mt-10 text-[24px] font-medium leading-tight tracking-tight md:text-[32px]">
              {credentials.heading}
            </h2>
            <ul className="mt-10 flex flex-col">
              {credentials.items.map(([name, tag], i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 py-5"
                  style={{ borderTop: "1px solid #5a5a35" }}
                >
                  <span className="text-base md:text-lg">{name}</span>
                  <span className="label-eyebrow" style={{ color: "#cac7b2" }}>
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number={faq.number} label={faq.label} />
          {faq.items.length > 0 && (
            <div className="mt-14 flex flex-col">
              {faq.items.map((item, i) => (
                <div key={i} className="border-t border-hairline py-8 last:border-b">
                  <h3 className="text-[18px] font-medium text-foreground md:text-xl">
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-[1.6] text-secondary md:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-inverse-surface text-inverse-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
          <div className="flex items-baseline gap-4 label-eyebrow" style={{ color: "#cac7b2" }}>
            <span>{contact.number}</span>
            <span className="h-px flex-1" style={{ background: "#5a5a35" }} />
            <span>{contact.label}</span>
          </div>

          <h2 className="mt-12 text-[44px] font-medium leading-[1.02] tracking-tight md:text-[96px] lg:text-[128px]">
            {contact.heading.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: "#5a5a35" }}>
            <ContactFormPopup email={contact.email} />
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 bg-inverse-surface px-6 py-8 md:px-10"
            >
              <div className="flex items-center gap-5">
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
                <div>
                  <div className="label-eyebrow" style={{ color: "#cac7b2" }}>
                    {contact.linkedin.label}
                  </div>
                  <div className="mt-1 text-lg md:text-xl">
                    {contact.linkedin.value}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>

          <div
            className="mt-20 flex flex-col items-start justify-between gap-4 border-t pt-8 label-eyebrow md:flex-row md:items-center"
            style={{ borderColor: "#5a5a35", color: "#cac7b2" }}
          >
            <span>{contact.footer.copyright}</span>
            <span>{contact.footer.tagline}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
