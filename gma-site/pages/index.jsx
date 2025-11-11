import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import {
  ArrowDownCircleIcon,
  BookOpenIcon,
  GlobeEuropeAfricaIcon,
  AcademicCapIcon,
  CpuChipIcon,
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const SUBJECT_CARDS = [
  {
    href: "/biology",
    title: "GCSE Biology",
    description: "Grade 9 annotated notes, cell biology masterclass, and synoptic recall drills.",
    icon: BeakerIcon,
  },
  {
    href: "/chemistry",
    title: "GCSE Chemistry",
    description: "Atomic structure, chemical changes, and thermodynamics explained with exam hacks.",
    icon: BoltIcon,
  },
  {
    href: "/physics",
    title: "GCSE Physics",
    description: "Forces, waves, particle physics and space – visualised with high-impact diagrams.",
    icon: RocketLaunchIcon,
  },
  {
    href: "/combined-science",
    title: "GCSE Combined Science",
    description: "Integrated triple-science tracker, mastery checklists, and crossover challenges.",
    icon: ShieldCheckIcon,
  },
  {
    href: "/a-level-science",
    title: "A-Level Science Suite",
    description: "Accelerated bridging content for Biology, Chemistry, and Physics specialists.",
    icon: AcademicCapIcon,
  },
  {
    href: "/cybersecurity",
    title: "Cyber Security",
    description: "Live threat labs, SOC analyst playbooks, and certification-ready case studies.",
    icon: ShieldCheckIcon,
    badge: "New",
  },
  {
    href: "/it",
    title: "IT & Software Engineering",
    description: "Industry build challenges, AI-ready coding sprints, and agile skill blueprints.",
    icon: CpuChipIcon,
  },
  {
    href: "/ethical-hacking",
    title: "Ethical Hacking",
    description: "Recon to privilege escalation with legal frameworks and red-team tooling.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    href: "/history",
    title: "GCSE History",
    description: "Timeline mastery, causation grids, and essay scaffolds for every exam board.",
    icon: BookOpenIcon,
  },
  {
    href: "/re",
    title: "GCSE Religious Education",
    description: "10-marker argument banks, theological comparisons, and ethics debates.",
    icon: ArrowDownCircleIcon,
  },
  {
    href: "/careers",
    title: "Career Pathways",
    description: "Doctor, Lawyer, and Cyber Engineer roadmap with micro-credential signposts.",
    icon: BriefcaseIcon,
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filteredCards = useMemo(() => {
    if (!query) return SUBJECT_CARDS;
    return SUBJECT_CARDS.filter((card) =>
      [card.title, card.description]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [query]);

  const handleScrollToSubjects = () => {
    const section = document.getElementById("subjects-grid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>GCSE Master Academy | Premium GCSE & A-Level Science Revision Hub</title>
        <meta
          name="description"
          content="Discover GCSE Master Academy — an elite dark-mode platform offering high-grade GCSE science, A-Level bridge programmes, cyber security, IT pathways, and curated career roadmaps."
        />
        <meta
          name="keywords"
          content="GCSE revision, A-Level science, cyber security course, ethical hacking, doctor pathway, lawyer pathway, combined science notes"
        />
        <meta name="author" content="GCSE Master Academy" />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/" />
      </Head>

      <Script id="ld-json-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "GCSE Master Academy",
          url: "https://www.gcsemasteracademy.com/",
          logo: "https://www.gcsemasteracademy.com/logo.png",
          sameAs: [
            "https://www.linkedin.com",
            "https://www.youtube.com",
            "https://www.instagram.com",
          ],
          description:
            "Premium GCSE and A-Level science learning hub with cyber security, ethical hacking, and elite career pathways.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Innovation Campus",
            addressLocality: "London",
            addressCountry: "GB",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "hello@gcsemasteracademy.com",
            },
          ],
          offers: SUBJECT_CARDS.slice(0, 4).map((card) => ({
            "@type": "Offer",
            name: card.title,
            description: card.description,
            url: `https://www.gcsemasteracademy.com${card.href}`,
            availability: "https://schema.org/InStock",
          })),
        })}
      </Script>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top,rgba(0,255,127,0.17),transparent_55%)]" />
        <section className="gma-container grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4rem] text-[#00ff7f]">
              Elite Revision Engine
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-5xl">
              GCSE Master Academy
            </h1>
            <p className="text-lg text-slate-300">
              Unlock Your Future. Learn. Revise. Achieve. Tailored for Grade 9 aspirants, early-entry
              prodigies, and aspiring STEM leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleScrollToSubjects}
                className="inline-flex items-center justify-center rounded-full border border-[#00ff7f]/50 bg-[#00ff7f]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
              >
                Start Learning
              </button>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-slate-800/60 bg-slate-950/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-slate-100 transition hover:border-[#00ff7f]/40 hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
              >
                Career Pathways
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "132+ HD Masterclasses", sub: "Interactive follows + quizzes" },
                { label: "STEM Career Studios", sub: "Mentor-led progression maps" },
                { label: "AI Revision Coach", sub: "Adaptive review journeys" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4"
                >
                  <p className="text-sm font-semibold text-[#00ff7f]">{stat.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-[#00ff7f]/20 blur-3xl" />
            <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 p-8">
              <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">Premium Access</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-100">
                Interactive Pathways to Grade 9 Mastery
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Structured notes, exam-board aligned quizzes, downloadable practice packs, and
                real-world STEM projects—all within a responsive dark-mode interface.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-[#00ff7f]" />
                  Live progress analytics dashboard
                </li>
                <li className="flex items-center gap-3">
                  <AcademicCapIcon className="h-5 w-5 text-[#00ff7f]" />
                  Weekly Grade 9 strategy bulletins
                </li>
                <li className="flex items-center gap-3">
                  <BookOpenIcon className="h-5 w-5 text-[#00ff7f]" />
                  Syllabus-matched revision sheets & cheat codes
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                  Downloadables
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {["Biology Master Deck", "Chemistry Calculations", "Physics Paper Tracker", "Career Interview Prep"].map(
                    (resource) => (
                      <button
                        key={resource}
                        type="button"
                        className="rounded-xl border border-slate-800/60 bg-slate-950/70 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2rem] text-slate-200 transition hover:border-[#00ff7f]/40 hover:text-[#00ff7f]"
                      >
                        {resource} (PDF)
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="subjects-grid" className="gma-container py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">
              Subjects & Pathways
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-100">Choose your mastery track</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              From GCSE sciences to specialist cyber security labs, every course comes with
              revision-grade notes, quizzes, and downloadable exam packs.
            </p>
          </div>
          <SearchBar
            placeholder="Search for subjects, pathways, or resources…"
            onSearch={setQuery}
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => <Card key={card.href} {...card} />)
          ) : (
            <div className="md:col-span-2 xl:col-span-3 rounded-3xl border border-slate-800/60 bg-slate-950/70 p-10 text-center text-sm text-slate-400">
              No matches found. Try searching for “biology”, “careers”, or “cyber”.
            </div>
          )}
        </div>
      </section>

      <section className="gma-container grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">Career Launchpad</p>
          <h2 className="text-3xl font-semibold text-slate-100">
            Step-by-step pathways into elite future careers
          </h2>
          <p className="text-sm text-slate-300">
            Whether you’re targeting medicine, law, or cyber engineering, our pathway blueprints
            align GCSE success with A-Level subject choices, work experience, and professional
            certification milestones.
          </p>
          <ul className="grid gap-3 text-sm text-slate-300">
            {[
              "Doctor Pathway: Clinical shadowing matrix, UCAT mastery plan, and BMAT drills.",
              "Lawyer Pathway: Debate societies, mock trials, and Oxford-style essay clinics.",
              "Cyber Engineer Pathway: Capture-the-flag (CTF) labs, CompTIA Security+ alignment, and GitHub portfolio prompts.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#00ff7f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-[#00ff7f]/50 bg-[#00ff7f]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
            >
              Explore Pathways
            </Link>
            <Link
              href="/ethical-hacking"
              className="inline-flex items-center justify-center rounded-full border border-slate-800/60 bg-slate-950/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-slate-100 transition hover:border-[#00ff7f]/40 hover:text-[#00ff7f]"
            >
              Join Cyber Studio
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-[#00ff7f]/30 bg-[#00ff7f]/5 p-8">
          <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]">Weekly Flow</p>
          <div className="mt-4 space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
              <p className="font-semibold text-[#00ff7f]">Monday</p>
              <p className="mt-1 text-slate-300">STEM Masterclass Drop + downloadable revision sheets.</p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
              <p className="font-semibold text-[#00ff7f]">Wednesday</p>
              <p className="mt-1 text-slate-300">Interactive quiz night: live leaderboard and feedback loops.</p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
              <p className="font-semibold text-[#00ff7f]">Saturday</p>
              <p className="mt-1 text-slate-300">Career clinic featuring NHS mentors, barristers, and SOC analysts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
