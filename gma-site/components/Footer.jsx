import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.youtube.com", label: "YouTube" },
  { href: "https://www.instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95">
      <div className="gma-container grid gap-12 py-14 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10 text-[#00ff7f]">
              <AcademicCapIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold uppercase tracking-widest text-slate-200">
                GCSE Master Academy
              </p>
              <p className="text-sm text-slate-400">Unlock Your Future. Learn. Revise. Achieve.</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Premium revision experiences and guided pathways for ambitious learners aiming for Grade 9s and elite STEM careers.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00ff7f]">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/careers" className="transition hover:text-[#00ff7f]">
                Careers Hub
              </Link>
            </li>
            <li>
              <Link href="/a-level-science" className="transition hover:text-[#00ff7f]">
                A-Level Fast Track
              </Link>
            </li>
            <li>
              <Link href="/cybersecurity" className="transition hover:text-[#00ff7f]">
                Cyber Security Lab
              </Link>
            </li>
            <li>
              <Link href="/ethical-hacking" className="transition hover:text-[#00ff7f]">
                Ethical Hacking Bootcamp
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00ff7f]">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-[#00ff7f]" />
              <a href="mailto:hello@gcsemasteracademy.com" className="transition hover:text-[#00ff7f]">
                hello@gcsemasteracademy.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-[#00ff7f]" />
              <a href="tel:+441234567890" className="transition hover:text-[#00ff7f]">
                +44 (0)1234 567 890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-[#00ff7f]" />
              <span>Innovation Campus, London, UK</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00ff7f]">
            Connect
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Follow our daily revision sprints, live masterclasses, and STEM career drops.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-[#00ff7f] hover:text-[#00ff7f]"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/70 bg-slate-950/80">
        <div className="gma-container flex flex-col gap-2 py-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GCSE Master Academy. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/privacy" className="transition hover:text-[#00ff7f]">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-[#00ff7f]">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-[#00ff7f]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
