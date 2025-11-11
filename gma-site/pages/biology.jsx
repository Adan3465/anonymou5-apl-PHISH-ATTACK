import { useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import SearchBar from "../components/SearchBar";
import TopicAccordion from "../components/TopicAccordion";
import Quiz from "../components/Quiz";

const CELL_SECTIONS = [
  {
    id: "cell-biology",
    title: "1. Cell Biology",
    subtitle: "Grade 9 mastery notes covering prokaryotic vs eukaryotic structure and microscopy.",
    summary:
      "Analyse how specialised animal and plant cells link structure to function, interpret microscopy data, and apply magnification calculations to real exam contexts.",
    points: [
      "Eukaryotic animal cells: nucleus for DNA, mitochondria for aerobic respiration, ribosomes for protein synthesis, cell membrane with selectively permeable phospholipid bilayer.",
      "Eukaryotic plant cells include chloroplasts with stacked thylakoids for photosynthesis, permanent vacuole maintaining turgor pressure, and cellulose cell wall for rigidity and defence.",
      "Prokaryotic bacterial cells lack a true nucleus; DNA is in a circular nucleoid with plasmids. Flagella provide movement, while slime capsules offer immune evasion.",
      "Microscopy magnification triangle: image size (I) = magnification (M) × actual size (A). For higher-tier questions, convert units carefully (µm ↔ mm ↔ nm).",
      "Cell cycle mastery: recognise interphase, mitosis stages (prophase to telophase), and cytokinesis. Link mitosis to growth, repair, and asexual reproduction scenarios.",
      "Stem cells: evaluate ethical debates, therapeutic cloning, and risk of rejection. Practise 6-mark discussions using PEEL (Point, Evidence, Explain, Link).",
    ],
    enrichment:
      "Examiner Insight: For 6 markers, compare animal and plant cells using explicit structural evidence. Always translate microscopy scale bar data into consistent units before substitution.",
    diagram: {
      src: "/images/animal-cell-diagram.svg",
      alt: "Annotated animal cell diagram placeholder highlighting organelles",
      caption: "Swap this placeholder for the official AQA/Edexcel diagram when assets are approved.",
    },
    quiz: {
      title: "Targeted Cell Biology Quiz",
      description: "Test understanding of organelles, microscopy, and mitosis control with 5 MCQs.",
      href: "#quiz",
    },
    download: {
      label: "Cell Biology Revision Sheet (Coming Soon)",
      href: "#cell-biology-sheet",
    },
  },
  {
    id: "organisation",
    title: "2. Organisation",
    subtitle: "Digestive, circulatory, and plant transport systems with data-linked practicals.",
    summary:
      "Link tissue, organ, and system structure to function. Master enzyme rate graphs, gas exchange adaptations, and two-way transport in xylem and phloem.",
    points: [
      "Enzyme lock-and-key, optimum temperature, and denaturation curves: annotate rate graphs and calculate gradient for required practicals.",
      "Digestive system: epithelial tissue (absorption), muscular tissue (peristalsis), glandular tissue (enzyme secretion). Adapt villi surface area calculations.",
      "Human heart: understand double circulation, valves, pacemakers; interpret ECG traces and the impact of coronary heart disease.",
      "Blood components: relate red blood cells, white blood cells, platelets, and plasma to their specialised adaptations.",
      "Plant transport: xylem (lignified, one-way support) vs phloem (sieve plates, companion cells, translocation via mass flow).",
      "Food tests required practical: Benedict’s for sugars, iodine for starch, Biuret for proteins, Sudan III for lipids. Record colour changes & safety notes.",
    ],
    diagram: {
      src: "/images/plant-cell-diagram.svg",
      alt: "Placeholder plant cell diagram emphasising transport tissues",
      caption: "Illustrate xylem, phloem, and stomata in your final design assets.",
    },
    quiz: {
      title: "Organisation Topic Quiz",
      description: "Short quiz exploring digestive enzymes, circulatory flow, and plant transport.",
      href: "#quiz",
    },
    download: {
      label: "Organisation Master Checklist (Coming Soon)",
      href: "#organisation-checklist",
    },
  },
  {
    id: "infection",
    title: "3. Infection & Response",
    subtitle: "Vaccination, antibiotics, and immune defence scenarios aligned to 6-mark exam questions.",
    summary:
      "Compare viral, bacterial, fungal, and protist pathogens. Evaluate immune responses, vaccination programmes, and drug discovery pathways.",
    points: [
      "Primary vs secondary immune response: role of memory lymphocytes, quick antibody production, and herd immunity thresholds.",
      "Vaccination data interpretation: calculating percentage effectiveness, evaluating risk-benefit, and discussing antigenic variability.",
      "Antibiotic resistance: MRSA case study, plasmid transfer, and stewardship strategies to slow resistance evolution.",
      "Plant diseases: tobacco mosaic virus (mosaic pattern), rose black spot (fungal), and nitrate deficiency (stunted growth).",
      "Monoclonal antibodies: hybridoma formation, pregnancy tests, targeted cancer therapies, and ethical/economic considerations.",
      "Required practical: aseptic technique, calculating mean inhibition zones, and evaluating reliability (repeatability, control variables).",
    ],
    quiz: {
      title: "Immunity & Disease Quiz",
      description: "Assess infection scenarios, immunity, and drug development processes.",
      href: "#quiz",
    },
    download: {
      label: "Infection & Response Flashcards (Coming Soon)",
      href: "#infection-flashcards",
    },
  },
  {
    id: "bioenergetics",
    title: "4. Bioenergetics",
    subtitle: "Photosynthesis and respiration data with limiting factors practised through graphs.",
    summary:
      "Master the equations for photosynthesis and respiration, apply limiting factor theory, and design experiments to test rate changes under different conditions.",
    points: [
      "Photosynthesis equation: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Link chloroplast adaptations to light capture and gas exchange.",
      "Limiting factors: interpret light intensity, CO₂ concentration, and temperature graphs. Identify plateaus and limiting factor transitions.",
      "Required practical: oxygen bubble counting with pondweed (Canadian pondweed). Use inverse square law for light intensity (1 / distance²).",
      "Aerobic respiration vs anaerobic (animals vs yeast): energy yields, lactic acid removal, and industrial fermenter examples.",
      "Metabolism concept: sum of all chemical reactions; link to conversions (glucose to starch, fatty acids to lipids).",
      "Exercise response: pulse rate data, oxygen debt explanation, and evaluation of training programmes.",
    ],
    quiz: {
      title: "Bioenergetics Quick Check",
      description: "Limiting factor data interpretations and respiration comparisons.",
      href: "#quiz",
    },
    download: {
      label: "Bioenergetics Data Pack (Coming Soon)",
      href: "#bioenergetics-pack",
    },
  },
  {
    id: "homeostasis",
    title: "5. Homeostasis & Response",
    subtitle: "Nervous vs hormonal control, reflex arcs, and endocrine master charts.",
    summary:
      "Explain how internal conditions are regulated using feedback loops. Interpret reflex pathways, endocrine gland functions, and fertility treatments.",
    points: [
      "Reflex arc: receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector. Draw synapse diagrams with neurotransmitter diffusion.",
      "Thermoregulation: vasodilation vs vasoconstriction, sweating vs shivering, role of hypothalamus, negative feedback loops.",
      "Endocrine system: pituitary ‘master gland’, thyroid (thyroxine & metabolism), pancreas (insulin & glucagon), adrenal glands (adrenaline), ovaries/testes (sex hormones).",
      "Menstrual cycle hormones: FSH (follicle growth), LH (ovulation), oestrogen (uterus lining), progesterone (maintenance). Evaluate fertility treatments (IVF).",
      "Blood glucose regulation: insulin lowers via glycogenesis; glucagon raises via glycogenolysis. Link to type 1 vs type 2 diabetes management.",
      "Brain scan techniques: MRI/CT benefits and risks; limited ability to treat brain damage due to complexity.",
    ],
    quiz: {
      title: "Homeostasis Diagnostic",
      description: "Control systems, hormones, and reflex arc application questions.",
      href: "#quiz",
    },
    download: {
      label: "Homeostasis Revision Map (Coming Soon)",
      href: "#homeostasis-map",
    },
  },
  {
    id: "inheritance",
    title: "6. Inheritance, Variation & Evolution",
    subtitle: "Genetics problem-solving, natural selection, and evidence for evolution.",
    summary:
      "Solve Punnett squares, interpret pedigree charts, and evaluate evolutionary evidence while referencing genomic technologies.",
    points: [
      "DNA structure: double helix of nucleotides (sugar, phosphate, base). Complementary base pairing (A-T, C-G).",
      "Protein synthesis: transcription (mRNA), translation (ribosomes), importance of triplet code, mutations and their phenotypic impact.",
      "Genetic diagrams: monohybrid inheritance, genotype vs phenotype, dominant vs recessive, sex determination (XX/XY).",
      "Variation sources: genetic (mutations) vs environmental (diet, climate). Discuss continuous vs discontinuous data.",
      "Selective breeding vs genetic engineering: benefits, risks, ethical considerations, and exam evaluation points.",
      "Evolution evidence: fossil record, antibiotic-resistant bacteria, Darwin vs Lamarck, modern classification (three-domain system).",
    ],
    quiz: {
      title: "Inheritance Challenge",
      description: "Practice genotypes, variation scenarios, and evolution evidence quick-fire.",
      href: "#quiz",
    },
    download: {
      label: "Genetics Practice Questions (Coming Soon)",
      href: "#genetics-practice",
    },
  },
  {
    id: "ecology",
    title: "7. Ecology",
    subtitle: "Ecosystems, trophic levels, and fieldwork techniques aligned to required practicals.",
    summary:
      "Analyse biotic and abiotic factors, energy transfers, and biodiversity monitoring. Execute quadrat and transect sampling with data handling confidence.",
    points: [
      "Ecosystems: define producers, primary/secondary consumers, decomposers. Evaluate predator-prey graphs and seasonal fluctuations.",
      "Adaptations: structural (arctic fox fur), behavioural (migration), functional (antifreeze proteins). Link to extreme environments.",
      "Biodiversity importance: ecosystem stability, food security, future medicines. Evaluate the impact of deforestation and peat bog destruction.",
      "Carbon and water cycles: annotate diagrams, emphasise combustion, photosynthesis, respiration, transpiration, and precipitation.",
      "Required practical: use quadrats and transects to measure distribution, calculate mean, median, and percentage cover.",
      "Trophic level efficiency: calculate biomass transfer percentages. Discuss the pyramid of biomass and food security strategies.",
    ],
    quiz: {
      title: "Ecology Mastery Quiz",
      description: "Evaluate field data, biomass transfer, and environmental strategies.",
      href: "#quiz",
    },
    download: {
      label: "Ecology Fieldwork Pack (Coming Soon)",
      href: "#ecology-pack",
    },
  },
];

const QUIZ_QUESTIONS = [
  {
    id: "q1",
    topic: "Cell Organelles",
    prompt: "Which structure is responsible for aerobic respiration in both plant and animal cells?",
    context: "Use your knowledge of organelles and their specialised functions.",
    options: ["Ribosome", "Mitochondrion", "Chloroplast", "Golgi apparatus"],
    answerIndex: 1,
    explanation:
      "Mitochondria carry out aerobic respiration releasing energy. Chloroplasts are used for photosynthesis and are only present in plants.",
  },
  {
    id: "q2",
    topic: "Microscopy",
    prompt: "A specimen measures 0.45 mm on a microscope image at × 100 magnification. What is the actual size?",
    context: "Remember: actual size = image size ÷ magnification.",
    options: ["0.0045 mm", "0.045 mm", "4.5 mm", "0.00045 mm"],
    answerIndex: 0,
    explanation:
      "Actual size = 0.45 mm ÷ 100 = 0.0045 mm (4.5 µm). Selecting 0.0045 mm shows correct unit conversion.",
  },
  {
    id: "q3",
    topic: "Stem Cells",
    prompt: "True or False: Adult stem cells can differentiate into any cell type found in the body.",
    context: "Consider the potency of different stem cell sources.",
    options: ["True", "False"],
    answerIndex: 1,
    explanation:
      "Adult stem cells are multipotent, so they can form a limited range of cell types. Only embryonic stem cells are pluripotent.",
  },
  {
    id: "q4",
    topic: "Cell Cycle",
    prompt:
      "During which stage of mitosis do chromosomes line up along the equator (middle) of the cell?",
    context: "Recall the sequence of mitosis: prophase, metaphase, anaphase, telophase.",
    options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    answerIndex: 1,
    explanation:
      "During metaphase, chromosomes align along the equatorial plane before sister chromatids separate.",
  },
  {
    id: "q5",
    topic: "Specialised Cells",
    prompt: "Which adaptation helps root hair cells absorb mineral ions efficiently?",
    context: "Think about the process of active transport in plants.",
    options: [
      "Large vacuole containing chlorophyll",
      "Many mitochondria providing ATP",
      "Thick cell wall to support pressure",
      "Presence of guard cells nearby",
    ],
    answerIndex: 1,
    explanation:
      "Root hair cells contain numerous mitochondria to release ATP required for active transport of mineral ions from soil.",
  },
];

export default function BiologyPage() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    if (!query) return CELL_SECTIONS;
    return CELL_SECTIONS.filter((section) => {
      const text = [
        section.title,
        section.subtitle,
        section.summary,
        ...(section.points ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return text.includes(query);
    });
  }, [query]);

  return (
    <>
      <Head>
        <title>GCSE Biology | GCSE Master Academy High Grade Notes</title>
        <meta
          name="description"
          content="Master GCSE Biology with Grade 9 cell biology, organisation, infection and response, bioenergetics, homeostasis, inheritance, and ecology notes plus quizzes and diagrams."
        />
        <meta
          name="keywords"
          content="GCSE Biology cell biology notes, Grade 9 biology revision, mitosis quiz, photosynthesis limiting factors, ecology required practicals"
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/biology" />
      </Head>

      <Script id="ld-json-biology" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "GCSE Biology Mastery",
          description:
            "Advanced GCSE Biology course covering cell biology, organisation, infection, bioenergetics, homeostasis, inheritance, and ecology with quizzes and downloadable resources.",
          provider: {
            "@type": "EducationalOrganization",
            name: "GCSE Master Academy",
            url: "https://www.gcsemasteracademy.com/",
          },
          hasCourseInstance: CELL_SECTIONS.map((section) => ({
            "@type": "CourseInstance",
            courseMode: "online",
            name: section.title,
            description: section.summary,
            url: `https://www.gcsemasteracademy.com/biology#${section.id}`,
          })),
        })}
      </Script>

      <header className="gma-container py-16">
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,255,127,0.18),transparent_65%)]" />
          <p className="text-xs uppercase tracking-[0.35rem] text-[#00ff7f]">GCSE Biology</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">
            Unlock Grade 9 Biology Excellence
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            High-grade notes aligned to AQA, Edexcel, and OCR specifications. Gain examiner-style
            insight, interactive diagrams, and rapid-fire quizzes covering every required topic.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Cell Biology deep dives with annotated diagrams.",
              "Organ systems, bioenergetics, and homeostasis case studies.",
              "Ecology fieldwork planners and exam-style evaluation tasks.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="gma-container space-y-6 pb-10">
        <SearchBar
          placeholder="Search Cell Biology, Homeostasis, Ecology…"
          onSearch={setQuery}
        />
        {filteredSections.length > 0 ? (
          <TopicAccordion sections={filteredSections} />
        ) : (
          <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-12 text-center text-sm text-slate-400">
            No topics found. Try searching for “mitosis”, “enzymes”, or “biodiversity”.
          </div>
        )}
      </section>

      <section className="gma-container pb-16">
        <Quiz
          title="GCSE Biology Cell Biology Quick Quiz"
          description="5 hand-crafted MCQs mixing true/false and multi-choice to stretch top-end knowledge."
          questions={QUIZ_QUESTIONS}
        />
      </section>
    </>
  );
}
