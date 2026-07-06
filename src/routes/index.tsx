import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, ArrowUpRight, Download, Menu, X } from "lucide-react";
import headshotAsset from "@/assets/maya-headshot.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#narrative", label: "Narrative" },
  { href: "#expertise", label: "Expertise" },
  { href: "#history", label: "History" },
  { href: "#contact", label: "Contact" },
];

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

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="label-eyebrow text-primary tracking-[0.12em]">
            DIMITROVA.MD
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="label-eyebrow nav-link text-foreground">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="label-eyebrow inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-primary-foreground hover:bg-primary-variant"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={2} />
              Download CV
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
              {NAV.map((n) => (
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
                <Download className="h-3.5 w-3.5" /> Download CV
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
                Profile — MMXXVI
              </div>
              <h1 className="mt-8 text-[36px] font-medium leading-[1.02] tracking-tight text-foreground md:text-[48px] lg:text-[64px]">
                Maya
                <br />
                Dimitrova
              </h1>
              <p className="mt-6 max-w-md text-base text-secondary md:text-lg">
                IT Project Officer, Luxembourg. Delivering programmes at the
                intersection of public institutions, higher education and
                telecommunications.
              </p>
              <p className="mt-2 label-eyebrow text-primary">
                MBA · MMIS · CSM®
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {[
                "CSM®",
                "ITIL 4 Foundation",
                "ITIL 4 HVIT",
                "ITIL 4 DSV",
                "Agile Scrum",
                "Power BI",
                "SQL",
              ].map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="border border-hairline">
              <img
                src={headshot}
                alt="Portrait of Maya Dimitrova"
                width={896}
                height={1152}
                className="block h-auto w-full grayscale-[15%]"
              />
              <div className="flex items-center justify-between border-t border-hairline px-4 py-3 label-eyebrow text-secondary">
                <span>Plate 01</span>
                <span>Luxembourg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section id="narrative" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number="01" label="The Narrative" />
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
                A project practice built across three worlds — European
                institutions, American academia and European telecom.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-7 space-y-6 text-base leading-[1.6] text-foreground md:text-[18px]">
              <p>
                For the past two decades my work has moved between very
                different operating cultures. In each one, the constant has
                been the same discipline: translating strategy into delivery,
                and delivery into evidence. Whether inside a Directorate-General
                in Luxembourg, a research university in Atlanta or a national
                mobile operator in Sofia, the mandate has always been to keep
                complex programmes moving without losing their intent.
              </p>
              <p>
                I lead with quiet structure — clear sprint cadence, honest
                stakeholder conversations, budgets that behave, dashboards that
                are actually read. My education (MBA, MSc Management Information
                Systems, MSc Marketing) and certifications (CSM®, three ITIL 4
                credentials) sit underneath that: a toolkit, not a badge
                collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-b border-hairline bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel number="02" label="The Expertise" />
          <h2 className="mt-10 max-w-3xl text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
            Three columns of practice, held together by the same taste for
            structure.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
            {[
              {
                title: "Methodology",
                items: [
                  ["Agile Scrum", "Expert"],
                  ["Kanban", "Advanced"],
                  ["Sprint planning & retros", "Expert"],
                  ["ITIL 4 service management", "Certified"],
                  ["Waterfall for regulated delivery", "Advanced"],
                ],
              },
              {
                title: "Leadership",
                items: [
                  ["Stakeholder management", "Expert"],
                  ["Cross-functional coordination", "Expert"],
                  ["Budget & vendor control", "Advanced"],
                  ["Team supervision", "Advanced"],
                  ["Executive reporting", "Advanced"],
                ],
              },
              {
                title: "Tools & Stack",
                items: [
                  ["Power BI", "Advanced"],
                  ["SQL", "Advanced"],
                  ["SDMX", "Advanced"],
                  ["Atlassian Suite (Jira, Confluence)", "Expert"],
                  ["MS Project & MS 365", "Advanced"],
                ],
              },
            ].map((col) => (
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
          <SectionLabel number="03" label="Professional History" />
          <h2 className="mt-10 max-w-3xl text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px] lg:text-[40px]">
            Twenty years of delivery, in reverse.
          </h2>

          <div className="mt-14 flex flex-col">
            {[
              {
                org: "European Commission",
                place: "Luxembourg",
                role: "IT Project Officer",
                dates: "2021 — Present",
                bullets: [
                  "Coordinate delivery of institutional statistical IT projects, aligning business owners, developers and external contractors against multi-year roadmaps.",
                  "Introduced Agile ceremonies and Power BI reporting that gave management a shared, near-real-time view of scope, risk and burn.",
                ],
                tags: ["Agile", "SDMX", "Power BI", "Vendor management"],
              },
              {
                org: "Emory University",
                place: "Atlanta, USA",
                role: "Associate Director, Prospect Management",
                dates: "2019 — 2021",
                bullets: [
                  "Led a team responsible for the prospect pipeline underpinning a multi-billion-dollar comprehensive campaign.",
                  "Rebuilt the operating model around SQL-driven segmentation and clear service SLAs with front-line fundraisers.",
                ],
                tags: ["Team leadership", "SQL", "Data operations"],
              },
              {
                org: "Emory University",
                place: "Atlanta, USA",
                role: "Prospect Management Analyst",
                dates: "2016 — 2018",
                bullets: [
                  "Designed analytical products that turned donor and alumni data into actionable prospect portfolios.",
                  "Partnered with development officers to translate data findings into campaign strategy.",
                ],
                tags: ["Analytics", "Reporting", "Higher education"],
              },
              {
                org: "Mobiltel EAD (A1 Bulgaria)",
                place: "Sofia, Bulgaria",
                role: "Team Leader / Supervisor",
                dates: "2005 — 2012",
                bullets: [
                  "Supervised a customer-facing operations team for a leading national mobile operator, owning KPIs, scheduling and quality.",
                  "Coached team members into senior positions and rolled out process improvements adopted across sister teams.",
                ],
                tags: ["Operations", "Telecom", "People management"],
              },
            ].map((job, i) => (
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

      {/* Education & Credentials */}
      <section id="credentials" className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
          <div className="px-6 py-20 md:px-10 md:py-28 md:border-r md:border-hairline">
            <SectionLabel number="04" label="Academic" />
            <h2 className="mt-10 text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[32px]">
              Degrees
            </h2>
            <ul className="mt-10 flex flex-col">
              {[
                ["MSc Management Information Systems", "MMIS"],
                ["Master of Business Administration", "MBA"],
                ["MSc Marketing", "Postgraduate"],
                ["BSc Marketing", "Undergraduate"],
              ].map(([name, tag]) => (
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
              <span>05</span>
              <span className="h-px flex-1" style={{ background: "#5a5a35" }} />
              <span>Credentials</span>
            </div>
            <h2 className="mt-10 text-[24px] font-medium leading-tight tracking-tight md:text-[32px]">
              Certifications
            </h2>
            <ul className="mt-10 flex flex-col">
              {[
                ["Certified Scrum Master", "CSM®"],
                ["ITIL 4 Foundation", "Foundation"],
                ["ITIL 4 Specialist", "High-Velocity IT"],
                ["ITIL 4 Specialist", "Drive Stakeholder Value"],
              ].map(([name, tag], i) => (
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

      {/* Contact */}
      <section id="contact" className="bg-inverse-surface text-inverse-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
          <div className="flex items-baseline gap-4 label-eyebrow" style={{ color: "#cac7b2" }}>
            <span>06</span>
            <span className="h-px flex-1" style={{ background: "#5a5a35" }} />
            <span>Contact</span>
          </div>

          <h2 className="mt-12 text-[44px] font-medium leading-[1.02] tracking-tight md:text-[96px] lg:text-[128px]">
            Let's
            <br />
            connect.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: "#5a5a35" }}>
            <a
              href="mailto:maya.dimitrova@example.com"
              className="group flex items-center justify-between gap-6 bg-inverse-surface px-6 py-8 md:px-10"
            >
              <div className="flex items-center gap-5">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
                <div>
                  <div className="label-eyebrow" style={{ color: "#cac7b2" }}>
                    Email
                  </div>
                  <div className="mt-1 text-lg md:text-xl">
                    maya.dimitrova@example.com
                  </div>
                </div>
              </div>
              <ArrowUpRight
                className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 bg-inverse-surface px-6 py-8 md:px-10"
            >
              <div className="flex items-center gap-5">
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
                <div>
                  <div className="label-eyebrow" style={{ color: "#cac7b2" }}>
                    LinkedIn
                  </div>
                  <div className="mt-1 text-lg md:text-xl">
                    linkedin.com/in/maya-dimitrova
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
            <span>© MMXXVI Maya Dimitrova — Luxembourg</span>
            <span>Designed & set in Geist</span>
          </div>
        </div>
      </section>
    </div>
  );
}
