import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const CYBER_MODULES = [
  {
    id: "foundations",
    title: "Foundations: Security Mindset & Networking",
    description:
      "Solidify networking, operating system, and threat landscape fundamentals with immersive labs and scenario-based tasks.",
    bullets: [
      "OSI vs TCP/IP stack walkthrough, packet inspection, and secure network design patterns.",
      "Linux essentials: bash navigation, permissions, service management, and log interpretation.",
      "Threat intelligence primer: MITRE ATT&CK, common adversary tactics, and open-source intel feeds.",
    ],
    resources: [
      "Lab environment: VirtualBox + Kali & Ubuntu templates (placeholder)",
      "Networking flashcards (Coming Soon)",
      "Mini SOC analyst quiz (in development)",
    ],
  },
  {
    id: "defensive",
    title: "Defensive Operations Lab",
    description:
      "Simulated Security Operations Centre (SOC) workflows with log triage, incident response, and playbook automation.",
    bullets: [
      "SIEM fundamentals: parsing Windows Event logs, using Elastic/Graylog queries, and correlation rules.",
      "Incident response lifecycle: preparation, identification, containment, eradication, recovery, lessons learned.",
      "Automation preview: introduce SOAR concepts, Python snippets for log enrichment, and Jupyter notebook templates.",
    ],
    resources: [
      "Incident response checklist (Coming Soon)",
      "Sample log datasets with answer keys",
      "Runbook template (placeholder)",
    ],
  },
  {
    id: "offensive",
    title: "Offensive Security Playground",
    description:
      "Guided recon-to-exploit pathways emphasising responsible disclosure and legal frameworks.",
    bullets: [
      "Recon: Nmap, RustScan, and subdomain enumeration. Map findings into a vulnerability matrix.",
      "Exploitation basics: Metasploit walkthrough, manual exploitation fundamentals, and privilege escalation checklists.",
      "Post-exploitation: persistence methods, credential harvesting, and clean-up procedures emphasising legality.",
    ],
    resources: [
      "Capture-the-flag (CTF) roadmap (Coming Soon)",
      "Exploit checklist template",
      "Legal/ethical briefing deck (placeholder)",
    ],
  },
  {
    id: "certifications",
    title: "Certification & Career Navigator",
    description:
      "Structured roadmap aligning GCSE/A-Level learners with foundational security certifications and future career milestones.",
    bullets: [
      "Certification ladder: CompTIA ITF+, CompTIA A+, CompTIA Security+, EC-Council CEH, CREST CPSA.",
      "Portfolio prompts: GitHub projects, blog write-ups, and responsible disclosure reports.",
      "Career profiles: SOC analyst, threat hunter, incident responder with salary insights and daily workflows.",
    ],
    resources: [
      "Certification planning spreadsheet (Coming Soon)",
      "Interview question bank",
      "Shadowing & mentoring outreach email templates",
    ],
  },
];

export default function CyberSecurityPage() {
  const [query, setQuery] = useState("");

  const filteredModules = useMemo(() => {
    if (!query) return CYBER_MODULES;
    return CYBER_MODULES.filter((module) => {
      const haystack = [module.title, module.description, ...(module.bullets ?? []), ...(module.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>Cyber Security Programme | GCSE Master Academy</title>
        <meta
          name="description"
          content="Launch a cyber security career with dark-themed labs covering networking, SOC operations, offensive security, and certification roadmaps."
        />
        <meta
          name="keywords"
          content="cyber security GCSE, SOC analyst training, cybersecurity labs, Security+ roadmap, incident response practice"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/cybersecurity" />
      </Head>

      <Script id="ld-json-cyber" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Cyber Security Foundations",
          description:
            "Cyber security training modules covering networking, defensive SOC workflows, offensive playgrounds, and certification planning.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: CYBER_MODULES.map((module) => ({
            "@type": "CourseInstance",
            name: module.title,
            description: module.description,
            url: `https://www.gcsemasteracademy.com/cybersecurity#${module.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">Cyber Security</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Build Your Cyber Defence Legacy</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Train like a modern analyst with virtual SOC scenarios, offensive playgrounds, and
            certification-aligned study plans. Designed for aspiring security engineers, ethical
            hackers, and digital defenders.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Hands-on labs with packet captures, SIEM dashboards, and exploit guides.",
              "Career-aligned roadmaps from GCSE to first cyber role.",
              "Weekly live threat briefings and patch review placeholders.",
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
          placeholder="Search networking, SOC, offensive, certifications…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredModules.length > 0 ? (
            filteredModules.map((module) => (
              <article
                key={module.id}
                id={module.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Cyber Module</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{module.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{module.description}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      What You’ll Practice
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {module.bullets.map((bullet, index) => (
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
                      {module.resources.map((resource, index) => (
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
              No cyber modules match that search. Try “SIEM”, “penetration testing”, or “certification”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
