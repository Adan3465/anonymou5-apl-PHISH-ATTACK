import Link from "next/link";

export default function Card({ title, description, href, icon: Icon, badge }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/70 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-[#00ff7f]/40 hover:shadow-[0_35px_60px_-15px_rgba(0,255,127,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
    >
      <div>
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 text-[#00ff7f] transition duration-300 group-hover:scale-105">
              <Icon className="h-6 w-6" />
            </div>
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 text-[#00ff7f] text-lg font-semibold">
              GMA
            </div>
          )}
          <div>
            {badge && (
              <span className="mb-1 inline-flex items-center rounded-full bg-[#00ff7f]/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#00ff7f]">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-400">{description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm font-semibold text-[#00ff7f]">
        <span>Explore</span>
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
