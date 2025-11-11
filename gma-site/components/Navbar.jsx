import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const gcseSubjects = [
  { href: "/biology", label: "GCSE Biology" },
  { href: "/chemistry", label: "GCSE Chemistry" },
  { href: "/physics", label: "GCSE Physics" },
  { href: "/combined-science", label: "GCSE Combined Science" },
  { href: "/history", label: "GCSE History" },
  { href: "/re", label: "GCSE Religious Education" },
];

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/a-level-science", label: "A-Level Science" },
  { href: "/cybersecurity", label: "Cyber Security" },
  { href: "/it", label: "IT & Software Engineering" },
  { href: "/ethical-hacking", label: "Ethical Hacking" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (href) => router.pathname === href;

  const renderLink = (link, className = "") => (
    <Link
      key={link.href}
      href={link.href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f] ${
        isActive(link.href) ? "text-[#00ff7f]" : "text-slate-200"
      } ${className}`}
      onClick={() => setMobileOpen(false)}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-lg">
      <nav className="gma-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-widest text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10 text-[#00ff7f] shadow-[0_0_25px_rgba(0,255,127,0.45)]">
            GMA
          </span>
          <span className="text-lg uppercase">GCSE Master Academy</span>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {mainLinks.map((link) => renderLink(link))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <AcademicCapIcon className="h-5 w-5" />
              GCSE Subjects
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-[#00ff7f]" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-800/80 bg-slate-950/95 p-2 shadow-2xl">
                {gcseSubjects.map((subject) => (
                  <Link
                    key={subject.href}
                    href={subject.href}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f] ${
                      isActive(subject.href) ? "text-[#00ff7f]" : "text-slate-200"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {subject.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 transition hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f] lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-full mt-3 rounded-2xl border border-slate-800/70 bg-slate-950/95 p-4 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-2">
              {mainLinks.map((link) => renderLink(link, "w-full text-left"))}
              <div className="pt-3">
                <p className="px-3 pb-2 text-xs uppercase tracking-widest text-slate-400">
                  GCSE Subjects
                </p>
                <div className="flex flex-col gap-1">
                  {gcseSubjects.map((subject) => renderLink(subject, "w-full text-left"))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
