import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const COMBINED_CLUSTERS = [
  {
    id: "synergy-planner",
    heading: "Synergy Planner: Biology × Chemistry × Physics",
    description:
      "Integrated revision maps aligning overlapping content such as energy transfers, enzymes, particle theory, and rates of reaction.",
    takeaways: [
      "Cross-topic flashcards linking respiration (biology) with combustion (chemistry) and energy dissipation (physics).",
      "Examiner commentary on crossover 6-mark questions requiring multidisciplinary reasoning.",
      "Command word toolkit: analyse, evaluate, compare with scaffolds for combined science responses.",
    ],
    resources: [
      "Crossover Master Checklist (Coming Soon)",
      "Daily 20-minute recall drills",
      "Auto-marking combined quiz (in development)",
    ],
  },
  {
    id: "required-practicals",
    heading: "Required Practicals Hub",
    description:
      "Side-by-side required practical walkthroughs with risk assessments, data tables, and evaluation prompts across all three sciences.",
    takeaways: [
      "Interactive timeline to schedule 21 required practicals with space for class teacher feedback.",
      "Comparison tables for equipment, variable control, and accuracy improvements.",
      "Downloadable observation sheets with model data and uncertainty calculations.",
    ],
    resources: [
      "Practical Evidence Logbook (Coming Soon)",
      "Questions by specification (AQA / OCR / Edexcel)",
      "Practicals video playlist placeholder",
    ],
  },
  {
    id: "exam-clinic",
    heading: "Exam Clinic & Retrieval Practice",
    description:
      "High-leverage exam skills for Foundation and Higher tiers with cumulative retrieval and mock analysis templates.",
    takeaways: [
      "Foundation vs Higher tier strategy grid with targeted grade boundaries.",
      "SPaG and maths skill boosters: significant figures, standard form, percentages, and ratios.",
      "Exam paper debrief protocol to convert mistakes into next-step actions.",
    ],
    resources: [
      "Combined Science Weekly Planner (Coming Soon)",
      "Mock Tracker dashboard template",
      "Downloadable warm-up quizzes (coming soon)",
    ],
  },
];

export default function CombinedSciencePage() {
  const [query, setQuery] = useState("");

  const filteredClusters = useMemo(() => {
    if (!query) return COMBINED_CLUSTERS;
    return COMBINED_CLUSTERS.filter((cluster) => {
      const haystack = [cluster.heading, cluster.description, ...(cluster.takeaways ?? []), ...(cluster.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE Combined Science | GCSE Master Academy</title>
        <meta
          name="description"
          content="Master GCSE Combined Science with crossover revision planners, required practical walkthroughs, and blended exam strategy guides."
        />
        <meta
          name="keywords"
          content="GCSE Combined Science crossover revision, required practicals combined science, foundation higher strategy, synergy planner"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/combined-science" />
      </Head>

      <Script id="ld-json-combined" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE Combined Science Synergy",
          description:
            "Integrated GCSE Combined Science course blending biology, chemistry, and physics with crossover revision maps and practical guides.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: COMBINED_CLUSTERS.map((cluster) => ({
            "@type": "CourseInstance",
            name: cluster.heading,
            description: cluster.description,
            url: `https://www.gcsemasteracademy.com/combined-science#${cluster.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE Combined Science</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Crossover Revision. One Elite Hub.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Streamline biology, chemistry, and physics revision with integrated roadmaps, required
            practical trackers, and exam clinics tailored to Combined Science (Trilogy/Synergy) students.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "35 crossover exam questions linked to on-demand solutions.",
              "Blended retrieval roadmap mixing biology, chemistry, and physics.",
              "Foundation & Higher tier adaptive revision templates.",
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
          placeholder="Search crossover skills, practicals, exam strategy…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredClusters.length > 0 ? (
            filteredClusters.map((cluster) => (
              <article
                key={cluster.id}
                id={cluster.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Integrated Focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{cluster.heading}</h2>
                <p className="mt-2 text-sm text-slate-300">{cluster.description}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Key Takeaways
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {cluster.takeaways.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Resource Placeholders
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {cluster.resources.map((item, index) => (
                        <li key={index} className="rounded-xl border border-slate-800/60 bg-slate-950/70 px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-12 text-center text-sm text-slate-400">
              No combined science resources match that search. Try “practicals”, “exam clinic”, or “synergy”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
