import { useState } from "react";

export default function Quiz({ title, description, questions = [] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);

  const handleSelect = (questionId, optionIndex) => {
    setSelected((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    let tally = 0;
    questions.forEach((question) => {
      if (selected[question.id] === question.answerIndex) {
        tally += 1;
      }
    });
    setScore(tally);
  };

  const resetQuiz = () => {
    setSelected({});
    setScore(null);
    setCurrent(0);
  };

  const totalQuestions = questions.length;
  const progress =
    totalQuestions > 0 ? Math.round(((current + 1) / totalQuestions) * 100) : 0;

  return (
    <section
      id="quiz"
      className="glass-panel accent-glow mt-12 rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-8 shadow-2xl"
      aria-live="polite"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">{title}</h2>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3rem] text-[#00ff7f]">Progress</p>
            {totalQuestions > 0 && (
              <p className="text-sm font-semibold text-slate-200">
                {current + 1} of {totalQuestions}
              </p>
            )}
        </div>
      </div>

      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00ff7f] via-emerald-400 to-cyan-300 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

        {totalQuestions === 0 ? (
        <p className="mt-6 text-sm text-slate-300">
          Quiz content coming soon. Stay tuned for high-grade MCQs aligned to the latest specification.
        </p>
      ) : (
        <div className="mt-8">
          {questions.map((question, index) => (
            <article
              key={question.id}
              className={index === current ? "block" : "hidden"}
              aria-hidden={index !== current}
            >
              <p className="text-xs uppercase tracking-[0.25rem] text-[#00ff7f]/80">
                {question.topic}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">{question.prompt}</h3>
              <p className="mt-2 text-sm text-slate-400">{question.context}</p>

              <div className="mt-6 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selected[question.id] === optionIndex;
                  const isCorrect = question.answerIndex === optionIndex;
                  const isDisabled = score !== null;
                  let optionClasses =
                    "w-full rounded-xl border border-slate-800/60 bg-slate-950/70 px-4 py-3 text-left text-sm text-slate-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]";

                  if (score !== null) {
                    if (isCorrect) {
                      optionClasses += " border-[#00ff7f]/40 bg-[#00ff7f]/10 text-[#00ff7f]";
                    } else if (isSelected) {
                      optionClasses += " border-red-500/30 bg-red-500/10 text-red-300";
                    }
                  } else if (isSelected) {
                    optionClasses += " border-[#00ff7f]/30 bg-[#00ff7f]/10 text-[#00ff7f]";
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      className={optionClasses}
                      onClick={() => handleSelect(question.id, optionIndex)}
                      disabled={isDisabled}
                    >
                      <span className="flex items-center justify-between">
                        <span>{option}</span>
                        {isSelected && score === null && (
                          <span className="text-xs uppercase tracking-widest text-[#00ff7f]">
                            Selected
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {score !== null && (
                <div className="mt-6 rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-[#00ff7f]">Exam Insight</p>
                  <p className="mt-2">{question.explanation}</p>
                </div>
              )}
            </article>
          ))}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-400">
              {score !== null ? (
                  <span>
                    You scored {score} / {totalQuestions}.{" "}
                    {score === totalQuestions
                      ? "Flawless mastery!"
                      : "Review the insights above and try again for full marks."}
                  </span>
              ) : (
                <span>Select the best answer and lock in your response.</span>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setCurrent((prev) => Math.max(0, prev - 1))
                }
                disabled={current === 0}
                className="rounded-lg border border-slate-800/70 bg-slate-950/70 px-5 py-2 text-sm font-semibold text-slate-200 transition enabled:hover:border-[#00ff7f]/40 enabled:hover:text-[#00ff7f] disabled:opacity-40"
              >
                Previous
              </button>
                {current < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrent((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  className="rounded-lg border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-5 py-2 text-sm font-semibold text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
                >
                  Next Question
                </button>
              ) : score === null ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-lg border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-5 py-2 text-sm font-semibold text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-lg border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-5 py-2 text-sm font-semibold text-[#00ff7f] transition hover:bg-[#00ff7f]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
                >
                  Retake Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
