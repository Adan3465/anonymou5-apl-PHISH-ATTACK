import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | GCSE Master Academy</title>
        <meta
          name="description"
          content="GCSE Master Academy privacy policy outlining how user data and analytics are handled across the learning platform."
        />
        <link rel="canonical" href="https://www.gcsemasteracademy.com/privacy" />
      </Head>
      <section className="gma-container space-y-6 py-16">
        <div className="glass-panel rounded-3xl border border-[#00ff7f]/40 bg-slate-950/80 p-10">
          <h1 className="text-3xl font-semibold text-slate-100">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-300">
            This placeholder policy outlines GCSE Master Academy&apos;s dedication to protecting learner
            data. Replace with the final legal copy before launch.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 space-y-4 text-sm text-slate-300">
          <p>
            <strong className="text-[#00ff7f]">Data Collection:</strong> Analytics, contact forms, and user
            accounts are handled in accordance with UK GDPR and ICO guidance. Detailed procedures will be finalised
            with the legal team.
          </p>
          <p>
            <strong className="text-[#00ff7f]">Cookies:</strong> Essential cookies ensure navigation and security.
            Optional analytics cookies will require user consent through a banner.
          </p>
          <p>
            <strong className="text-[#00ff7f]">User Rights:</strong> Learners can request data access, correction,
            or deletion at any time. Contact{" "}
            <a className="text-[#00ff7f]" href="mailto:hello@gcsemasteracademy.com">
              hello@gcsemasteracademy.com
            </a>{" "}
            for support.
          </p>
        </div>
      </section>
    </>
  );
}
