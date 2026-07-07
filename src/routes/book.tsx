import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import content from "@/content";

export const Route = createFileRoute("/book")({
  component: BookCall,
  head: () => ({
    meta: [
      { title: "Book a call — Maya Dimitrova" },
      {
        name: "description",
        content: "Schedule a 30-minute call with Maya Dimitrova.",
      },
    ],
  }),
});

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      loaded?: boolean;
      q?: unknown[][];
    };
  }
}

// Cal.com's documented bootstrap: installs `window.Cal` as a queueing stub
// before the real embed script loads, so calls made immediately below are
// queued and replayed once app.cal.com/embed/embed.js finishes loading.
// Calling Cal(...) directly in a script.onload handler (without this stub)
// silently does nothing — the real script expects this shape to already exist.
// (Namespaced init — Cal("init", "someNamespace", {...}) — is intentionally
// not handled here since this page only ever makes single, unnamespaced calls.)
function loadCalEmbed() {
  if (window.Cal) return;
  const globalCal: Window["Cal"] = function (...args: unknown[]) {
    const cal = window.Cal!;
    if (!cal.loaded) {
      cal.q = cal.q ?? [];
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      document.head.appendChild(script);
      cal.loaded = true;
    }
    cal.q!.push(args);
  };
  window.Cal = globalCal;
}

function BookCall() {
  const { bookCall } = content.contact;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    loadCalEmbed();
    window.Cal!("init", { origin: "https://cal.com" });
    window.Cal!("inline", {
      elementOrSelector: containerRef.current,
      calLink: bookCall.calLink,
      config: { layout: "month_view" },
    });
  }, [bookCall.calLink]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-hairline">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-6 md:px-10">
          <Link
            to="/"
            className="label-eyebrow inline-flex items-center gap-2 text-secondary hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Back to profile
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="label-eyebrow text-secondary">Scheduling</div>
        <h1 className="mt-6 text-[32px] font-medium leading-tight tracking-tight text-primary md:text-[44px]">
          {bookCall.heading}
        </h1>
        <p className="mt-4 max-w-xl text-base text-secondary md:text-lg">
          {bookCall.description}
        </p>

        <div
          ref={containerRef}
          className="mt-12 min-h-[600px] w-full border border-hairline bg-surface-1"
        />
      </main>
    </div>
  );
}
