import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";
import { useMemo, useState } from "react";

const A_LEVEL_TRACKS = [
  {
    id: "biology-bridge",
    title: "A-Level Biology Bridge",
    summary:
      "Transition modules covering biochemistry, genetics, and advanced practical skills to prepare GCSE students for A-Level Biology success.",
    pillars: [
      "Biological molecules: deep dive into amino acids, polypeptide structure, and enzyme kinetics (Michaelis-Menten intro).",
      "Genetics stretch: chi-squared analysis, linkage, and epistasis explained through scaffolded problems.",
      "Core practical upgrade: aseptic technique, colorimetry, serial dilution with statistical treatment.",
    ],
    resources: [
      "Summer mastery workbook (Coming Soon)",
      "Virtual lab simulations (placeholder)",
      "Exam-style comprehension tasks",
    ],
  },
  {
    id: "chemistry-bridge",
    title: "A-Level Chemistry Bridge",
    summary:
      "Advance your chemical intuition with full mole recalibration, organic reaction mechanisms, and thermodynamics foundations.",
    pillars: [
      "Stoichiometry upgrade: limiting reagents, empirical formula derivations, and volumetric analysis accuracy.",
      "Organic mechanisms primer: nucleophilic substitution, electrophilic addition, and curly arrow conventions.",
      "Energetics: Hess cycles, enthalpy of formation, and Born-Haber discussions to build conceptual resilience.",
    ],
    resources: [
      "Mechanism flashcards (Coming Soon)",
      "Energetics calculation tracker",
      "Practicals video walkthroughs (placeholder)",
    ],
  },
  {
    id: "physics-bridge",
    title: "A-Level Physics Bridge",
    summary:
      "Bridge energy, mechanics, and electricity into calculus-ready modules with modelling tasks for Grade 8-9 students shifting to A-Level Physics.",
    pillars: [
      "Mathematical methods: vectors, resolving forces, logarithms, and graph linearisation.",
      "Mechanics: SUVAT applied to projectile motion and circular motion glimpses.",
      "Electricity: Kirchhoff’s laws, internal resistance experiments, and data logger integrations.",
    ],
    resources: [
      "Mathematics for Physicists booklet (Coming Soon)",
      "Logger Pro / PhET experiment placeholders",
      "Exam-style bridging questions",
    ],
  },
  {
    id: "study-skills",
    title: "Study Skills & Academic Wellness",
    summary:
      "Protect wellbeing while scaling to A-Level intensity with elite study systems, productivity sprints, and mentorship libraries.",
    pillars: [
      "Study architecture: spaced repetition, interleaving schedules, and custom Trello roadmap template.",
      "Wellbeing: sleep hygiene, nutrition, and accountability pods for consistent performance.",
      "Personal statement bank and super-curricular reading portfolio for early UCAS preparation.",
    ],
    resources: [
      "Notion workspace template (Coming Soon)",
      "Curated reading list (placeholder)",
      "Accountability sprint checklist",
    ],
  },
];

export default function ALevelSciencePage() {
  const [query, setQuery] = useState("");

  const filteredTracks = useMemo(() => {
    if (!query) return A_LEVEL_TRACKS;
    return A_LEVEL_TRACKS.filter((track) => {
      const haystack = [track.title, track.summary, ...(track.pillars ?? []), ...(track.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>A-Level Science Transition | GCSE Master Academy</title>
        <meta
          name="description"
          content="Elite A-Level transition hub for Biology, Chemistry, and Physics with bridging modules, advanced practical skills, and study strategy playbooks."
        />
        <meta
          name="keywords"
          content="A-Level science transition course, bridging GCSE to A-Level, biology bridge, chemistry bridge, physics mechanics intro"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/a-level-science" />
      </Head>

      <Script id="ld-json-a-level" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "A-Level Science Transition Programme",
          description:
            "A bridging programme supporting students moving from GCSE to A-Level Biology, Chemistry, and Physics with advanced content and study skills.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: A_LEVEL_TRACKS.map((track) => ({
            "@type": "CourseInstance",
            name: track.title,
            description: track.summary,
            url: `https://www.gcsemasteracademy.com/a-level-science#${track.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">A-Level Transition</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Launchpad to A-Level Excellence</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Build confidence before September with curated transition modules, lab-ready practical
            skills, and productivity systems engineered for STEM success. Designed for students
            targeting the toughest sixth-form programmes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Biology, Chemistry & Physics bridging content aligned to top colleges.",
              "Downloadable summer prep projects and skill trackers.",
              "Mentor-curated reading lists and super-curricular prompts.",
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
          placeholder="Search Biology bridge, mechanisms, study skills…"
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
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Bridge Module</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{track.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{track.summary}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      What You’ll Master
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {track.pillars.map((pillar, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{pillar}</span>
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
              No transition modules match that search. Try “mechanisms”, “vectors”, or “wellbeing”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
