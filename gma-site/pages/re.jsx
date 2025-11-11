import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const RE_SECTIONS = [
  {
    id: "christian-beliefs",
    title: "Christian Beliefs & Teachings",
    summary:
      "Explore core doctrines, sources of wisdom, and denominational perspectives ready for 12-mark evaluation.",
    points: [
      "Nature of God: omnipotence, omnibenevolence, omniscience, and the problem of evil responses.",
      "Trinity, incarnation, crucifixion, resurrection, and salvation – link to the Nicene Creed and scripture references.",
      "Afterlife beliefs, judgement, heaven, hell, and purgatory contrasts within Christianity.",
    ],
    resources: [
      "Theology mind map (Coming Soon)",
      "12-mark evaluation scaffold",
      "Key quotes flashcards (placeholder)",
    ],
  },
  {
    id: "christian-practices",
    title: "Christian Practices",
    summary:
      "Cover worship, sacraments, pilgrimage, and the role of the Church in the local and worldwide community.",
    points: [
      "Liturgical vs non-liturgical worship, private devotion, and the importance of prayer.",
      "Sacraments: baptism, Eucharist, healing, reconciliation – denominational differences.",
      "Pilgrimage sites (Iona, Lourdes) and mission/evangelism including persecution support.",
    ],
    resources: [
      "Practice comparison chart (Coming Soon)",
      "Case study pack (Open Doors, CAFOD)",
      "Exam question generator (placeholder)",
    ],
  },
  {
    id: "islam-beliefs",
    title: "Islam Beliefs & Teachings",
    summary:
      "Understand Sunni and Shi’a perspectives, six articles of faith, five roots, and key theological concepts.",
    points: [
      "Tawhid, prophethood (Risalah), holy books, Malaikah (angels), al-Qadr (predestination), Akirah (life after death).",
      "Sunni vs Shi’a distinctions: imamate, authority, leadership succession.",
      "Nature of Allah: merciful, just, immanent, transcendent – link to the 99 names.",
    ],
    resources: [
      "Belief tree diagram (Coming Soon)",
      "Comparative theology notes",
      "Quote bank worksheet (placeholder)",
    ],
  },
  {
    id: "islam-practices",
    title: "Islam Practices",
    summary:
      "Examine the Five Pillars, Jihad, festivals, and the role of the mosque in Muslim communities.",
    points: [
      "Shahadah, Salah, Zakah, Sawm, Hajj – include intentions, significance, and practical realities.",
      "Greater vs lesser jihad, conditions for armed conflict, and pacifist interpretations.",
      "Eid-ul-Fitr, Eid-ul-Adha, Ashura; differences between Sunni and Shi’a observances.",
    ],
    resources: [
      "Pillars revision mat (Coming Soon)",
      "Festival diary planner",
      "Mosque virtual tour prompts (placeholder)",
    ],
  },
  {
    id: "themes",
    title: "Thematic Studies (Ethics)",
    summary:
      "Cover exam themes such as Relationships and Families, Religion and Life, Peace and Conflict, Crime and Punishment.",
    points: [
      "Relationship & Families: marriage, divorce, sexuality, gender roles (Christian/Islamic perspectives).",
      "Religion & Life: origins of the universe, stewardship, animal rights, sanctity vs quality of life.",
      "Peace & Conflict / Crime & Punishment: Just War, pacifism, capital punishment, forgiveness, restorative justice.",
    ],
    resources: [
      "Ethics debate cards (Coming Soon)",
      "12-mark essay bank",
      "Thematic quick quizzes (placeholder)",
    ],
  },
];

export default function ReligiousEducationPage() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    if (!query) return RE_SECTIONS;
    return RE_SECTIONS.filter((section) => {
      const haystack = [section.title, section.summary, ...(section.points ?? []), ...(section.resources ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE Religious Education | GCSE Master Academy</title>
        <meta
          name="description"
          content="GCSE Religious Education high-grade notes for Christianity and Islam beliefs, practices, and thematic ethical studies."
        />
        <meta
          name="keywords"
          content="GCSE RE Christianity Islam beliefs practices, thematic studies ethics, 12 mark question scaffold"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/re" />
      </Head>

      <Script id="ld-json-re" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE Religious Education Mastery",
          description:
            "GCSE RE course covering Christian and Islamic beliefs, practices, and thematic ethical studies with essay scaffolds.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: RE_SECTIONS.map((section) => ({
            "@type": "CourseInstance",
            name: section.title,
            description: section.summary,
            url: `https://www.gcsemasteracademy.com/re#${section.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE Religious Education</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Faith, Ethics, and Exam Excellence.</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Combine theological depth with ethical evaluation. Each section delivers scripture references,
            denominational perspectives, and structured 12-mark practice to maximise grades.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Scripture banks mapped to every specification bullet point.",
              "PEEL paragraph builder for evaluation questions.",
              "Digital flashcard decks (coming soon).",
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
          placeholder="Search Trinity, Sacraments, Tawhid, Ethics…"
          onSearch={setQuery}
        />
        <div className="grid gap-6">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 transition hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">RE Focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">{section.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{section.summary}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Key Learning Points
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {section.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                      Resource Placeholders
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {section.resources.map((resource, index) => (
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
              No RE sections match that search. Try “salvation”, “Hajj”, or “peace”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
