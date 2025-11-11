import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const CAREER_PATHWAYS = [
  {
    id: "doctor-pathway",
    title: "Doctor Pathway",
    overview:
      "A staged roadmap from GCSE science mastery through to medical school admission and early clinical exposure.",
    milestones: [
      "GCSE & A-Level choices: Biology, Chemistry, Maths or Physics with Grade 8/9 targets and super-curricular science reading.",
      "Work experience: shadowing GP/hospital placements, volunteering in care environments, and reflective journaling.",
      "Admissions testing: UCAT strategy blocks, BMAT scientific reasoning workouts, interview MMI practice circuits.",
      "University applications: crafting personal statements, reference curation, and portfolio of reflection evidence.",
    ],
    resources: [
      "UCAT practice tracker (Coming Soon)",
      "Clinical reflection template",
      "Interview scenario bank (placeholder)",
    ],
  },
  {
    id: "lawyer-pathway",
    title: "Lawyer Pathway",
    overview:
      "Position yourself for top law programmes with debate, analytical writing, and legal insight experiences.",
    milestones: [
      "Academic programme: GCSE English/History excellence; A-Level focus on essay subjects (History, Politics, English Lit).",
      "Super-curricular engagements: mock trials, debating societies, Model UN, essay competitions (Bar Mock Trial, ESU).",
      "Law admissions: LNAT preparation, critical reasoning drills, case analysis, personal statement legal hooks.",
      "Professional exposure: mini pupillages, law firm open days, mentoring with barristers/solicitors.",
    ],
    resources: [
      "LNAT reading list (Coming Soon)",
      "Debate feedback sheet",
      "Legal work experience tracker (placeholder)",
    ],
  },
  {
    id: "cyber-engineer-pathway",
    title: "Cyber Engineer Pathway",
    overview:
      "Blend technical mastery with security certifications to fast-track into cyber engineering and SOC roles.",
    milestones: [
      "Academic foundations: GCSE Computer Science/Maths, A-Level Computer Science or Maths/Further Maths/Physics.",
      "Technical build: coding projects, home lab infrastructure, networking certifications (Cisco, CompTIA).",
      "Certifications: Security+, CySA+, AWS Security Specialist, CREST CPSA progression plan.",
      "Experience: capture-the-flag competitions, open-source contributions, security internships/apprenticeships.",
    ],
    resources: [
      "Certification roadmap board (Coming Soon)",
      "Portfolio showcase template",
      "CTF practice log (placeholder)",
    ],
  },
];

export default function CareersPage() {
  const [query, setQuery] = useState("");

  const filteredPathways = useMemo(() => {
    if (!query) return CAREER_PATHWAYS;
    return CAREER_PATHWAYS.filter((pathway) => {
      const haystack = [pathway.title, pathway.overview, ...(pathway.milestones ?? []), ...(pathway.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>Careers Hub | GCSE Master Academy</title>
        <meta
          name="description"
          content="Doctor, Lawyer, and Cyber Engineer pathways with milestone planners, exam prep strategies, and work experience templates."
        />
        <meta
          name="keywords"
          content="doctor career pathway, lawyer pathway, cyber engineer roadmap, UCAT planning, LNAT prep, cybersecurity apprenticeship"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/careers" />
      </Head>

      <Script id="ld-json-careers" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalProgram",
          name: "GCSE Master Academy Career Pathways",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          timeToComplete: "P2Y",
          occupationalCategory: ["Doctor", "Lawyer", "Cyber Security Engineer"],
          hasCourse: CAREER_PATHWAYS.map((pathway) => ({
            "@type": "Course",
            name: pathway.title,
            description: pathway.overview,
            url: `https://www.gcsemasteracademy.com/careers#${pathway.id}`,
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">Career Accelerator</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Strategise Your Future Career Now.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Align GCSE and A-Level choices with elite professional ambitions. Each pathway provides academic
            milestones, experience plans, admissions prep, and skill-building prompts tailored to your next step.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Curated reading/watch lists and work experience trackers.",
              "Exam preparation frameworks (UCAT, LNAT, Security Certifications).",
              "Mentor outreach scripts and reflective journal templates.",
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
          placeholder="Search doctor, lawyer, cyber engineer milestones…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredPathways.length > 0 ? (
            filteredPathways.map((pathway) => (
              <article
                key={pathway.id}
                id={pathway.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">Career Pathway</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{pathway.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{pathway.overview}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Key Milestones
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {pathway.milestones.map((milestone, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Resource Placeholders
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {pathway.resources.map((resource, index) => (
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
              No pathways match that search. Try “UCAT”, “LNAT”, or “Security+”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
