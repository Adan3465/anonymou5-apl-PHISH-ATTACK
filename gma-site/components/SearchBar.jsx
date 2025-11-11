import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ placeholder, onSearch, delay = 200, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(value.trim().toLowerCase());
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay, onSearch]);

  return (
    <label className="relative flex items-center rounded-2xl border border-slate-800/60 bg-slate-950/70 px-5 py-3 focus-within:border-[#00ff7f]/50 focus-within:ring-2 focus-within:ring-[#00ff7f]/40">
      <MagnifyingGlassIcon className="mr-3 h-5 w-5 text-[#00ff7f]" />
      <span className="sr-only">Search topics</span>
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
        aria-label="Search topics"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="ml-3 text-xs uppercase tracking-widest text-slate-400 transition hover:text-[#00ff7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff7f]"
        >
          Clear
        </button>
      )}
    </label>
  );
}
