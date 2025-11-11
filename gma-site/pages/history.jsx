import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const HISTORY_THEMES = [
  {
    id: "medicine",
    title: "Medicine Through Time",
    focus:
      "Track developments in medicine from medieval to modern eras with exam-ready essays and source analysis.",
    highlights: [
      "Chronology cheat sheet: key individuals from Hippocrates to Fleming with significance commentary.",
      "Thematic comparison: continuity vs change across surgery, public health, and disease understanding.",
      "Interpretations practice: analysing evidence, provenance, and evaluating usefulness.",
    ],
    resources: [
      "Medicine timeline wall (Coming Soon)",
      "Source analysis scaffold",
      "Practice essay planner (placeholder)",
    ],
  },
  {
    id: "weimar-nazi",
    title: "Weimar & Nazi Germany",
    focus:
      "Master the turbulent 1918-1939 period with political, social, and economic context integrated into high-grade responses.",
    highlights: [
      "Weimar strengths vs weaknesses: constitution, proportional representation, Treaty of Versailles impact.",
      "Rise of Hitler: Munich Putsch, Great Depression, political manoeuvring, and consolidation of power.",
      "Life in Nazi Germany: propaganda, youth, women, churches, opposition evaluation.",
    ],
    resources: [
      "Key dates tracker (Coming Soon)",
      "Propaganda poster analysis toolkit",
      "20-mark essay skeleton (placeholder)",
    ],
  },
  {
    id: "cold-war",
    title: "Cold War Superpower Relations",
    focus:
      "Follow the Cold War narrative from 1941 to 1991 with emphasis on cause, consequence, and interpretation questions.",
    highlights: [
      "Timeline arcs: Grand Alliance breakdown, crises (Berlin, Cuba), détente, Soviet collapse.",
      "Comparative tables for policies: Truman Doctrine vs Marshall Plan, Brezhnev Doctrine, Reagan’s SDI.",
      "Interpretation and narrative account practice for 8-marker questions.",
    ],
    resources: [
      "Crisis revision cards (Coming Soon)",
      "Cause/consequence planner",
      "Narrative account writing frame (placeholder)",
    ],
  },
  {
    id: "elizabeth",
    title: "Early Elizabethan England",
    focus:
      "Explore Elizabeth I’s reign, religious settlement, challenges at home and abroad, and the wider world (Drake/Raleigh).",
    highlights: [
      "Key problem-solving: marriage, succession, finance, and religious settlement evaluation.",
      "Plots and rebellions: Northern Rebellion, Ridolfi Plot, Babington Plot – compare aims and outcomes.",
      "Spanish Armada 1588: preparation, battle analysis, and reasons for English victory.",
    ],
    resources: [
      "Decision-making grid (Coming Soon)",
      "Armada storyboard template",
      "Exam practice pack (placeholder)",
    ],
  },
];

export default function HistoryPage() {
  const [query, setQuery] = useState("");

  const filteredThemes = useMemo(() => {
    if (!query) return HISTORY_THEMES;
    return HISTORY_THEMES.filter((theme) => {
      const haystack = [theme.title, theme.focus, ...(theme.highlights ?? []), ...(theme.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE History | GCSE Master Academy</title>
        <meta
          name="description"
          content="GCSE History high-grade hub covering Medicine Through Time, Weimar and Nazi Germany, Cold War relations, and Elizabethan England."
        />
        <meta
          name="keywords"
          content="GCSE History Medicine Through Time revision, Weimar Nazi Germany essays, Cold War interpretations, Elizabethan England notes"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/history" />
      </Head>

      <Script id="ld-json-history" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE History Masterclass",
          description:
            "GCSE History course with themed revision for Medicine Through Time, Weimar and Nazi Germany, Cold War relations, and Early Elizabethan England.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: HISTORY_THEMES.map((theme) => ({
            "@type": "CourseInstance",
            name: theme.title,
            description: theme.focus,
            url: `https://www.gcsemasteracademy.com/history#${theme.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE History</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Command the Past. Secure Grade 9.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Build synoptic understanding across Medicine Through Time, Germany, Cold War, and
            Elizabethan England. Access essay structures, retrieval drills, and interpretation practice
            to conquer every exam question type.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Essay writing clinic with model paragraphs and sentence starters.",
              "Interpretation analysis framework for paper-specific questions.",
              "Timed retrieval grids & warm-up quizzes for each unit.",
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
          placeholder="Search Medicine, Weimar, Cold War, Elizabeth…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredThemes.length > 0 ? (
            filteredThemes.map((theme) => (
              <article
                key={theme.id}
                id={theme.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">History Theme</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{theme.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{theme.focus}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      High-Impact Highlights
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {theme.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Resource Placeholders
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {theme.resources.map((resource, index) => (
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
              No history themes match that search. Try “medicine”, “Cold War”, or “Elizabeth”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
