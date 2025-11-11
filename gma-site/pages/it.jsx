import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const IT_TRACKS = [
  {
    id: "computing-fundamentals",
    title: "Computing Fundamentals",
    description:
      "Strengthen core computational thinking, programming, and database principles with hands-on challenges.",
    bullets: [
      "Python masterclass: algorithms, functions, OOP fundamentals, and error handling with exam-style tasks.",
      "Data structures: arrays, dictionaries, stacks, and queues with real-world problems.",
      "Relational databases: SQL CRUD operations, joins, normalisation, and ERD design.",
    ],
    resources: [
      "Coding sprint planner (Coming Soon)",
      "Database schema template",
      "Debugging challenge sheet (placeholder)",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering Studio",
    description:
      "Learn agile workflows, version control, and full-stack fundamentals through guided projects and code reviews.",
    bullets: [
      "Git/GitHub workflow: branching strategy, pull requests, code review etiquette.",
      "Frontend accelerator: React component architecture, responsive Tailwind design, accessibility checks.",
      "Backend primer: REST APIs with Node.js/Express, authentication concepts, testing strategies.",
    ],
    resources: [
      "Project management board (Coming Soon)",
      "Code review checklist",
      "CI/CD pipeline overview (placeholder)",
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI Exploration",
    description:
      "Introduce data science, visualisation, and machine learning foundations to future software engineers.",
    bullets: [
      "Data wrangling with pandas: cleaning datasets, descriptive statistics, and visual insights.",
      "Introductory machine learning: supervised vs unsupervised, training vs testing, bias & fairness discussions.",
      "AI ethics: responsible AI principles, GDPR awareness, and algorithmic accountability.",
    ],
    resources: [
      "Jupyter notebook starter pack (Coming Soon)",
      "Visualisation style guide",
      "Ethics debate prompts (placeholder)",
    ],
  },
  {
    id: "career-readiness",
    title: "Career Readiness & Industry Insight",
    description:
      "Craft a compelling portfolio, understand tech roles, and prepare for apprenticeships or university interviews.",
    bullets: [
      "Digital portfolio blueprint: project storytelling, GitHub README artistry, and live demos.",
      "Interview preparation: STAR technique, technical interview katas, and online assessment strategies.",
      "Industry pathways: software engineer, DevOps engineer, data analyst, product manager—day-in-the-life snapshots.",
    ],
    resources: [
      "Portfolio content planner (Coming Soon)",
      "Mock interview question bank",
      "Networking outreach scripts (placeholder)",
    ],
  },
];

export default function ITAndSoftwareEngineeringPage() {
  const [query, setQuery] = useState("");

  const filteredTracks = useMemo(() => {
    if (!query) return IT_TRACKS;
    return IT_TRACKS.filter((track) => {
      const haystack = [track.title, track.description, ...(track.bullets ?? []), ...(track.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>IT & Software Engineering | GCSE Master Academy</title>
        <meta
          name="description"
          content="Develop software engineering mastery with coding sprints, agile workflows, data & AI modules, and career readiness resources."
        />
        <meta
          name="keywords"
          content="IT and software engineering course, GCSE coding, agile workflow, portfolio building, data science intro"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/it" />
      </Head>

      <Script id="ld-json-it" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "IT & Software Engineering Studio",
          description:
            "A practical IT and software engineering programme covering programming, software delivery, data & AI, and tech career readiness.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: IT_TRACKS.map((track) => ({
            "@type": "CourseInstance",
            name: track.title,
            description: track.description,
            url: `https://www.gcsemasteracademy.com/it#${track.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">IT & Software Engineering</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Ship Real Software. Lead Real Teams.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Gain production-ready skills across the software development lifecycle. Build portfolio-ready
            projects, master agile delivery, and explore data & AI pathways alongside university and
            apprenticeship preparation.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Weekly shipping sprints with live stand-up placeholders.",
              "Mentored Git/GitHub workflow walk-throughs.",
              "AI exploration lab with ethical guardrails.",
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
          placeholder="Search coding, agile, data, career…"
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
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Studio Track</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{track.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{track.description}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Skills Focus
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
              No IT tracks match that search. Try “GitHub”, “SQL”, or “portfolio”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
