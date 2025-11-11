import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function TopicAccordion({ sections = [] }) {
  const [openId, setOpenId] = useState(sections[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const isOpen = openId === section.id;
        return (
          <div
            key={section.id}
            className="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/70"
          >
            <button
              type="button"
              onClick={() => toggle(section.id)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-slate-900/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
              aria-expanded={isOpen}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]/80">
                  {section.tagline || "Advanced Mastery"}
                </p>
                <h3 className="text-lg font-semibold text-slate-100">{section.title}</h3>
                {section.subtitle && (
                  <p className="mt-1 text-sm text-slate-400">{section.subtitle}</p>
                )}
              </div>
              <ChevronDownIcon
                className={`h-6 w-6 text-[#00ff7f] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-[max-height] duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-6 border-t border-slate-800/70 px-6 py-6 sm:grid sm:grid-cols-5 sm:gap-10 sm:space-y-0">
                <div className="space-y-4 sm:col-span-3">
                  {section.summary && (
                    <p className="text-sm text-slate-300">{section.summary}</p>
                  )}
                  {Array.isArray(section.points) && (
                    <ul className="space-y-2 text-sm text-slate-300">
                      {section.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1.5 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#00ff7f]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.enrichment && (
                    <div className="rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 p-4 text-sm text-slate-200">
                      <h4 className="text-sm font-semibold text-[#00ff7f]">Exam Excellence</h4>
                      <p className="mt-1 text-slate-200">{section.enrichment}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 sm:col-span-2">
                  {section.diagram && (
                    <figure className="overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/60">
                      <Image
                        src={section.diagram.src}
                        alt={section.diagram.alt}
                        width={480}
                        height={320}
                        className="h-48 w-full object-cover"
                      />
                      {section.diagram.caption && (
                        <figcaption className="px-4 py-3 text-xs text-slate-400">
                          {section.diagram.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
                    <div className="flex items-center gap-3">
                      <PlayCircleIcon className="h-6 w-6 text-[#00ff7f]" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          {section.quiz?.title || "Take the mastery quiz"}
                        </p>
                        <p className="text-xs text-slate-400">
                          {section.quiz?.description ||
                            "Answer 5 exam-style MCQs and unlock tailored feedback."}
                        </p>
                      </div>
                    </div>
                    <a
                      href={section.quiz?.href || "#quiz"}
                      className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-4 py-2 text-sm font-semibold text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
                    >
                      Launch Quick Quiz
                    </a>
                  </div>

                  {section.download && (
                    <a
                      href={section.download.href}
                      {...(section.download.href?.endsWith(".pdf") ? { download: true } : {})}
                      className="inline-flex w-full items-center justify-center rounded-lg border border-slate-800/70 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#00ff7f]/40 hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
                    >
                      {section.download.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
