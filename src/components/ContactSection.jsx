import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message required";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // Here you would send the form data
  };

  return (
    <footer id="contact" className="w-full bg-[#f8f7f4] border-t border-[#ece8df] px-6 py-16 fade-in">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#3d3a2a] font-serif">Want to connect?</h2>
        <form className="w-full flex flex-col gap-4 mb-6" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-xl border border-[#e0ddd6] px-4 py-3 text-base font-sans bg-[#f5f3ef] focus:outline-none focus:ring-2 focus:ring-[#b6b09a] transition"
            aria-label="Name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-[#e0ddd6] px-4 py-3 text-base font-sans bg-[#f5f3ef] focus:outline-none focus:ring-2 focus:ring-[#b6b09a] transition"
            aria-label="Email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="rounded-xl border border-[#e0ddd6] px-4 py-3 text-base font-sans bg-[#f5f3ef] focus:outline-none focus:ring-2 focus:ring-[#b6b09a] transition"
            aria-label="Message"
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
          <button
            type="submit"
            className="rounded-xl bg-[#b6b09a] text-white font-semibold px-6 py-3 shadow hover:bg-[#a49c7c] transition-all duration-150"
            disabled={submitted}
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
        <div className="flex gap-6 justify-center mb-4">
          <a href="mailto:kylevu@example.com" className="hover:text-[#7c745a] transition" aria-label="Email">
            <svg width="28" height="28" fill="none" stroke="#7c745a" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 10l6 4 6-4"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7c745a] transition" aria-label="LinkedIn">
            <svg width="28" height="28" fill="none" stroke="#7c745a" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 11v5M8 8v.01M12 11v5M12 11c0-1.1.9-2 2-2s2 .9 2 2v5"/></svg>
          </a>
        </div>
        <div className="text-sm text-[#a49c7c] text-center">I usually respond within 24h</div>
      </div>
    </footer>
  );
} 