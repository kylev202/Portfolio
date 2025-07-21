import React from "react";

const cards = [
  {
    label: "Skills & Work",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#7c745a" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="3"/><path d="M16 3v4M8 3v4"/></svg>
    ),
    link: "skills"
  },
  {
    label: "Research Project",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#7c745a" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20V10M12 10l6 6M12 10l-6 6"/><circle cx="12" cy="6" r="2"/></svg>
    ),
    link: "research"
  },
  {
    label: "Oral Presentations",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#7c745a" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M12 16v4M8 20h8"/></svg>
    ),
    link: "presentation"
  }
];

export default function ContentGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <a
            key={card.label}
            href={card.link}
            className="group bg-[#f5f3ef] rounded-3xl shadow-md p-8 flex flex-col items-center justify-center transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#b6b09a]"
            tabIndex={0}
            aria-label={card.label}
          >
            <div className="mb-4 group-hover:opacity-90 transition-opacity">{card.icon}</div>
            <span className="text-lg md:text-xl font-semibold text-[#4b4637] font-serif group-hover:text-[#7c745a] transition-colors">{card.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
} 