import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";

const PHYSICS_TOPICS = [
  {
    id: "energy",
    heading: "Energy & Power Mastery",
    summary:
      "Secure marks on energy stores, transfers, efficiency, and power with data-led questions and Grade 9 commentary.",
    bullets: [
      "Energy stores: chemical, kinetic, gravitational potential, thermal, elastic, nuclear. Link transfers via mechanical, electrical, heating, and radiation pathways.",
      "Work done = force × distance. Apply to lifting, braking, and energy dissipation contexts with unit conversions.",
      "Power = energy ÷ time. Use domestic appliance data and interpret energy bills (kWh).",
      "Efficiency calculations with Sankey diagrams. Provide improvement suggestions referencing insulation or lubrication.",
      "Required practical: specific heat capacity and thermal insulation – include equipment diagrams, safety, and evaluation.",
    ],
    download: { label: "Energy Calculations Pack (Coming Soon)", anchor: "#energy-pack" },
  },
  {
    id: "electricity",
    heading: "Electricity & Circuits",
    summary:
      "Understand charge flow, potential difference, resistance, and series/parallel circuit behaviour in depth.",
    bullets: [
      "Current (I), potential difference (V), resistance (R) triangles and unit conversions (coulombs, volts, ohms).",
      "Series vs parallel: current and potential difference rules, practical calculations, and troubleshooting exam questions.",
      "Required practical: investigate resistance using filament bulbs, resistors, and wire length; include anomalies and accuracy improvements.",
      "Mains electricity: live, neutral, earth wires; safety devices (fuses, circuit breakers).",
      "National Grid: transformers (step-up/down), efficiency, and reasons for high-voltage transmission.",
    ],
    download: { label: "Circuit Questions Workbook (Coming Soon)", anchor: "#circuit-workbook" },
  },
  {
    id: "particle-model",
    heading: "Particle Model & Thermodynamics",
    summary:
      "Link particle motion to pressure, density, and phase change with required practical coverage.",
    bullets: [
      "Density = mass ÷ volume. Required practical using irregular objects and displacement can.",
      "Particle model: change of state, internal energy, latent heat, and heating/cooling curves.",
      "Pressure in gases: relationship with temperature, volume, and collisions (pV constant).",
      "Gas laws: applying pressure × volume = constant for fixed mass at constant temperature.",
      "Specific latent heat calculations with energy = mass × specific latent heat.",
    ],
    download: { label: "Particle Model Revision Cards (Coming Soon)", anchor: "#particle-cards" },
  },
  {
    id: "forces",
    heading: "Forces, Motion & Momentum",
    summary:
      "Graph interpretation, Newton’s laws, momentum conservation, and Hooke’s law with Grade 9 evaluation points.",
    bullets: [
      "Vector vs scalar quantities. Draw free-body diagrams and resolve forces.",
      "Speed = distance ÷ time. Velocity-time graph analysis for acceleration and distance (area under graph).",
      "Newton’s laws: inertia, F = ma, action-reaction. Car safety features and stopping distance factors.",
      "Hooke’s law: force = spring constant × extension. Required practical with risk assessment and extension limit.",
      "Momentum = mass × velocity; conservation in collisions/explosions. Use algebraic substitution for unknowns.",
    ],
    download: { label: "Forces & Motion Problem Bank (Coming Soon)", anchor: "#forces-bank" },
  },
  {
    id: "waves",
    heading: "Waves & Electromagnetic Spectrum",
    summary:
      "Analyse transverse vs longitudinal waves, wave equations, and EM spectrum applications with risk awareness.",
    bullets: [
      "Wave equation: wave speed = frequency × wavelength. Measure using ripple tanks and wave on string practical.",
      "Reflection, refraction, and diffraction diagrams with ray box experiments.",
      "Sound waves: ultrasound, medical imaging, and SONAR applications.",
      "Electromagnetic spectrum: order, uses, dangers mitigation (e.g., UV protection).",
      "Required practical: investigating refraction in glass blocks and measuring frequency/wavelength.",
    ],
    download: { label: "Wave Phenomena Visual Guide (Coming Soon)", anchor: "#waves-guide" },
  },
  {
    id: "magnetism",
    heading: "Magnetism & Electromagnetism",
    summary:
      "From permanent magnets to transformers, master the physics behind electromagnets and electric motors.",
    bullets: [
      "Magnetic fields around bar magnets and current-carrying wires. Fleming’s left-hand rule explained.",
      "Electromagnets: factors affecting strength, uses in relays and cranes.",
      "Electric motors: explain the motor effect with force = magnetic flux density × current × length.",
      "Generators: electromagnetic induction, alternating vs direct current, dynamo vs alternator.",
      "Transformers: Vp/Vs = Np/Ns. Explain step-up/down and efficiency assumptions (100%).",
    ],
    download: { label: "Electromagnetism Lab Planner (Coming Soon)", anchor: "#magnetism-planner" },
  },
  {
    id: "space-physics",
    heading: "Space Physics (Triple Only)",
    summary:
      "Understand life cycle of stars, red shift evidence, and orbital mechanics for high-tier triple scientists.",
    bullets: [
      "Star life cycle: nebula → protostar → main sequence → red giant/supergiant → white dwarf/neutron star/black hole.",
      "Nuclear fusion in stars and balance between radiation pressure and gravity.",
      "Red shift: evidence for expanding universe and the Big Bang theory.",
      "Satellites: circular vs geostationary orbits, gravitational field strength, centripetal force.",
      "Dark matter and dark energy: current evidence and unanswered questions for evaluation answers.",
    ],
    download: { label: "Space Physics Revision Checklist (Coming Soon)", anchor: "#space-checklist" },
  },
];

export default function PhysicsPage() {
  const [query, setQuery] = useState("");

  const filteredTopics = useMemo(() => {
    if (!query) return PHYSICS_TOPICS;
    return PHYSICS_TOPICS.filter((topic) => {
      const haystack = [topic.heading, topic.summary, ...(topic.bullets ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE Physics | GCSE Master Academy</title>
        <meta
          name="description"
          content="Comprehensive GCSE Physics notes covering energy, electricity, forces, waves, particle model, magnetism, and space physics with practicals and Grade 9 guidance."
        />
        <meta
          name="keywords"
          content="GCSE Physics energy calculations, circuits revision, forces and motion, waves practical, space physics notes"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/physics" />
      </Head>

      <Script id="ld-json-physics" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE Physics Elite Programme",
          description:
            "GCSE Physics course offering energy, electricity, forces, waves, magnetism, and space physics with downloadable planners and practical notes.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: PHYSICS_TOPICS.map((topic) => ({
            "@type": "CourseInstance",
            name: topic.heading,
            description: topic.summary,
            url: `https://www.gcsemasteracademy.com/physics#${topic.id}`,
            courseMode: "online",
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE Physics</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">Physics for Future Innovators</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Dive into high-grade energy, forces, and electromagnetism with interactive planners,
            annotated calculations, and ready-to-run practical templates designed for aspiring
            engineers and physicists.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Energy calculations with fully worked Grade 9 solutions.",
              "Circuit analysis cheat sheets and diagnostic questions.",
              "Space physics timelines and red-shift interpretation tasks.",
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
          placeholder="Search Energy, Forces, Waves…"
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
              No physics topics match that search. Try “momentum”, “circuits”, or “waves”.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
