import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const ETHICAL_TRACKS = [
  {
    id: "legal-ethics",
    title: "Legal & Ethical Frameworks",
    description:
      "Understand the laws, standards, and professional codes that govern ethical hacking engagements.",
    bullets: [
      "UK Computer Misuse Act, GDPR, CFAA overview, and scope control.",
      "Responsible disclosure workflow: contacting vendors, embargo periods, CVE basics.",
      "Professional codes: CREST, EC-Council, and NCSC guidance for penetration testers.",
    ],
    resources: [
      "Engagement rules template (Coming Soon)",
      "Disclosure email scripts",
      "Ethics case study deck (placeholder)",
    ],
  },
  {
    id: "reconnaissance",
    title: "Reconnaissance & Enumeration",
    description:
      "Collect intelligence using open-source tools and targeted scanning while maintaining stealth and legality.",
    bullets: [
      "OSINT toolkit: Shodan, theHarvester, Maltego, and DNS reconnaissance.",
      "Network scanning: Nmap deep dive, service detection, and NSE scripting.",
      "Web enumeration: directory brute force, parameter discovery, and fingerprinting technologies.",
    ],
    resources: [
      "Recon checklist (Coming Soon)",
      "Sample scope of work (placeholder)",
      "Automation script snippets",
    ],
  },
  {
    id: "exploitation",
    title: "Exploitation & Post-Exploitation",
    description:
      "Move methodically from vulnerability identification to controlled exploitation with emphasis on safety.",
    bullets: [
      "Common vulnerability classes: injection, auth bypass, misconfiguration, and insecure deserialisation.",
      "Metasploit vs manual exploitation: when to choose each path, with payload safety tips.",
      "Privilege escalation: Windows vs Linux checklists, credential dumping, persistence strategies.",
    ],
    resources: [
      "Exploit decision tree (Coming Soon)",
      "Privilege escalation cheat sheet",
      "Payload testing lab guide (placeholder)",
    ],
  },
  {
    id: "reporting",
    title: "Reporting & Presentation",
    description:
      "Translate technical findings into executive-ready recommendations with remediation focus.",
    bullets: [
      "Penetration testing report anatomy: executive summary, methodology, findings, risk scoring, proof-of-concept.",
      "Remediation guidance: prioritisation matrices, quick wins vs long-term fixes.",
      "Presentation mastery: storytelling techniques, visual risk dashboards, stakeholder Q&A preparation.",
    ],
    resources: [
      "Report template (Coming Soon)",
      "Risk scoring reference",
      "Slide deck starter kit (placeholder)",
    ],
  },
];

export default function EthicalHackingPage() {
  const [query, setQuery] = useState("");

  const filteredTracks = useMemo(() => {
    if (!query) return ETHICAL_TRACKS;
    return ETHICAL_TRACKS.filter((track) => {
      const haystack = [track.title, track.description, ...(track.bullets ?? []), ...(track.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>Ethical Hacking Bootcamp | GCSE Master Academy</title>
        <meta
          name="description"
          content="Train as an ethical hacker with legal frameworks, reconnaissance playbooks, exploitation labs, and executive-level reporting drills."
        />
        <meta
          name="keywords"
          content="ethical hacking course, penetration testing roadmap, recon tools, exploit labs, report template"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/ethical-hacking" />
      </Head>

      <Script id="ld-json-ethical" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Ethical Hacking Bootcamp",
          description:
            "Ethical hacking training covering legal frameworks, reconnaissance, exploitation, and executive reporting.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: ETHICAL_TRACKS.map((track) => ({
            "@type": "CourseInstance",
            name: track.title,
            description: track.description,
            url: `https://www.gcsemasteracademy.com/ethical-hacking#${track.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">Ethical Hacking</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Hack with Purpose. Secure with Precision.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Walk through full engagement lifecycles—from scoping to reporting—inside a controlled,
            ethical hacking environment. Each module is engineered to sharpen judgement, technical skill,
            and stakeholder communication.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Hands-on labs with vulnerable-by-design environments.",
              "Legal and compliance frameworks woven into every lesson.",
              "Portfolio-ready reporting templates and presentation drills.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="gma-container space-y-6 pb-20">
        <SearchBar
          placeholder="Search legal, recon, exploits, reporting…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredTracks.length > 0 ? (
            filteredTracks.map((track) => (
              <article
                key={track.id}
                id={track.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Bootcamp Track</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{track.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{track.description}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Technical Focus
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {track.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Resource Placeholders
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {track.resources.map((resource, index) => (
                        <li key={index} className="rounded-xl border border-slate-800/60 bg-slate-950/70 px-4 py-3">
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-12 text-center text-sm text-slate-400">
              No ethical hacking tracks match that search. Try “CMA”, “enumeration”, or “report”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
