import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const CHEMISTRY_TOPICS = [
  {
    id: "atomic-structure",
    heading: "Atomic Structure & Periodicity",
    summary:
      "Explore the evolution of the atomic model, subatomic particles, electronic structure, and periodic trends tailored to Grade 9 responses.",
    bullets: [
      "Timeline: Dalton → Thomson → Rutherford → Bohr → Chadwick. Evaluate experimental evidence supporting each model.",
      "Isotopes: calculate relative atomic mass using abundance data. Explain uses such as medical tracers and carbon dating.",
      "Electronic configuration shortcuts (2,8,8…) with orbital model reinforcement for higher-tier stretch.",
      "Group trends: link reactivity patterns in Group 1 (alkali metals) and halogens to electron shells and shielding.",
      "Transition metals: catalytic properties, coloured compounds, and variable oxidation states.",
    ],
    download: {
      label: "Atomic Structure Master Notes (Coming Soon)",
      anchor: "#atomic-download",
    },
  },
  {
    id: "bonding-structure",
    heading: "Bonding, Structure & Properties",
    summary:
      "Master ionic, covalent, metallic, and giant covalent structures. Justify properties with particle-level language.",
    bullets: [
      "Ionic lattices vs simple covalent molecules: compare melting points and conductivity using electrostatic forces.",
      "Giant covalent crystals (diamond, graphite, graphene) vs fullerenes and nanotubes – link structure to properties.",
      "Metallic bonding: delocalised electrons, layers, alloys preventing layer sliding, and real-world applications.",
      "Intermolecular forces vs covalent bonds: explain boiling point differences in alkanes and polymers.",
      "Required practical: investigate properties of different substances; include PPE and hazard symbol analysis.",
    ],
    download: { label: "Bonding Practicals Pack (Coming Soon)", anchor: "#bonding-pack" },
  },
  {
    id: "quantitative",
    heading: "Quantitative Chemistry",
    summary:
      "Perform moles calculations, concentration conversions, and percentage yields with exam-style multi-step questions.",
    bullets: [
      "Conservation of mass: explain mass changes with open systems (gas escape or entry).",
      "Moles triangle: moles = mass ÷ Mr; apply to limiting reactant calculations and scaling equations.",
      "Titration mastery: burette precision, concordant results, mean titre, and indicator choice.",
      "Percentage yield vs atom economy: evaluation question planning using bullet-structured answers.",
      "Gas volume calculations: use 24 dm³/mol at room conditions; include step-by-step example.",
    ],
    download: { label: "Quantitative Chemistry Workbook (Coming Soon)", anchor: "#quantitative-workbook" },
  },
  {
    id: "chemical-changes",
    heading: "Chemical Changes",
    summary:
      "Electrolysis, reactivity series, and Redox explained with required practical walkthroughs.",
    bullets: [
      "Reactivity series: potassium to platinum. Link to displacement reactions and extraction methods.",
      "Electrolysis: ionic half-equations, inert vs reactive electrodes, purification of copper.",
      "Strong vs weak acids: ionisation differences, pH scale, and titration curve interpretation.",
      "Required practical: copper sulfate electrolysis, copper plating, and hazard evaluation.",
      "Energy changes: exothermic vs endothermic, reaction profiles, and bond energy calculations.",
    ],
    download: { label: "Electrolysis Lab Planner (Coming Soon)", anchor: "#electrolysis-lab" },
  },
  {
    id: "energy-rate",
    heading: "Rate & Extent of Chemical Change",
    summary:
      "Analyse factors affecting reaction rate and apply equilibrium principles (Le Chatelier) to exam data.",
    bullets: [
      "Collision theory: effect of surface area, temperature, concentration, and catalysts.",
      "Required practical: measuring rate via gas syringe or disappearing cross. Evaluate anomalies.",
      "Reversible reactions: dynamic equilibrium, endothermic vs exothermic directions, energy transfers.",
      "Le Chatelier scenarios: pressure, temperature, concentration – link to Haber process.",
      "Practical applications: catalysts in industry, fertiliser production, sustainable chemistry.",
    ],
    download: { label: "Rate of Reaction Exam Pack (Coming Soon)", anchor: "#rate-pack" },
  },
  {
    id: "organic-chemistry",
    heading: "Organic Chemistry & Analysis",
    summary:
      "Hydrocarbons, polymers, and chemical analysis with chromatography & spectroscopy foundations.",
    bullets: [
      "Alkanes vs alkenes: general formulas, addition reactions, and polymerisation.",
      "Alcohols & carboxylic acids: properties, reactions, and ester formation (higher tier).",
      "Crude oil fractional distillation: fractions, uses, and cracking (thermal vs catalytic).",
      "Chromatography: Rf calculations, hazard controls, and identifying components.",
      "Gas tests: oxygen, hydrogen, CO₂, chlorine; flame tests and cation/anion analysis.",
    ],
    download: { label: "Organic Reaction Pathways Map (Coming Soon)", anchor: "#organic-map" },
  },
];

export default function ChemistryPage() {
  const [query, setQuery] = useState("");

  const filteredTopics = useMemo(() => {
    if (!query) return CHEMISTRY_TOPICS;
    return CHEMISTRY_TOPICS.filter((topic) => {
      const haystack = [topic.heading, topic.summary, ...(topic.bullets ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE Chemistry | GCSE Master Academy</title>
        <meta
          name="description"
          content="Premium GCSE Chemistry hub with Grade 9 notes on atomic structure, bonding, quantitative chemistry, chemical changes, rates, equilibrium, and organic analysis."
        />
        <meta
          name="keywords"
          content="GCSE Chemistry atomic structure revision, titration practical notes, chemical changes, Le Chatelier, organic chemistry analysis"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/chemistry" />
      </Head>

      <Script id="ld-json-chemistry" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE Chemistry Masterclass",
          description:
            "Advanced GCSE Chemistry course covering atomic structure, bonding, quantitative chemistry, chemical changes, rates, and organic analysis.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: CHEMISTRY_TOPICS.map((topic) => ({
            "@type": "CourseInstance",
            name: topic.heading,
            description: topic.summary,
            url: `https://www.gcsemasteracademy.com/chemistry#${topic.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE Chemistry</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">High-Impact Chemistry Revision</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Unlock exam-grade chemistry with structured notes, model calculations, practical planners,
            and downloadable assets. Each topic connects theory, data interpretation, and real-world
            applications to secure Grade 9 responses.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Atomic model walk-through with examiner annotations.",
              "Quantitative chemistry calculator templates.",
              "Organic functional group mastery flashcards (coming soon).",
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
          placeholder="Search Atomic Structure, Bonding, Quantitative..."
          onSearch={setQuery}
        />

        <div className="grid gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <article
                key={topic.id}
                id={topic.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Grade 9 Focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{topic.heading}</h2>
                <p className="mt-2 text-sm text-slate-300">{topic.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {topic.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={topic.download.anchor}
                    className="inline-flex items-center rounded-lg border border-slate-800/70 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-slate-200 transition hover:border-[#00ff7f]/40 hover:text-[#00ff7f]"
                  >
                    {topic.download.label}
                  </a>
                  <span className="inline-flex items-center rounded-lg border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-[#00ff7f]">
                    Quiz coming soon
                  </span>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-12 text-center text-sm text-slate-400">
              No chemistry topics match that search. Try “moles”, “electrolysis”, or “organic”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
