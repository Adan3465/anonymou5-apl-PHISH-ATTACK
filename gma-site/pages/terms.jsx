import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | GCSE Master Academy</title>
        <meta
          name="description"
          content="GCSE Master Academy provisional terms and conditions covering platform usage, intellectual property, and liability."
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/terms" />
      </Head>
      <section className="gma-container space-y-6 py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <h1 className="text-3xl font-semibold text-slate-100">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-slate-300">
            These draft terms outline suggested clauses for GCSE Master Academy. Replace with the final legal wording
            before publishing the platform.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 space-y-4 text-sm text-slate-300">
          <p>
            <strong className="text-[#00ff7f]">Usage:</strong> Learner accounts are for personal academic use only.
            Redistribution or resale of materials is prohibited without written permission.
          </p>
          <p>
            <strong className="text-[#00ff7f]">Intellectual Property:</strong> All site content, branding, and
            downloadable resources remain the intellectual property of GCSE Master Academy.
          </p>
          <p>
            <strong className="text-[#00ff7f]">Liability:</strong> While every effort is made to ensure accuracy,
            examination boards may update specification requirements. Users should verify updates with official
            board publications.
          </p>
          <p>
            <strong className="text-[#00ff7f]">Contact:</strong> For contract or licensing queries, email{" "}
            <a className="text-[#00ff7f]" href="mailto:legal@gcsemasteracademy.com">
              legal@gcsemasteracademy.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
