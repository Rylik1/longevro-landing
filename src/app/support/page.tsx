'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert('Error submitting form'));
  };
  
  if (submitted) {
    return (
      <div className="bg-slate-800 rounded-xl p-8 border border-emerald-500 text-center">
        <svg className="w-16 h-16 text-emerald-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-300">Thank you! We've received your message and will respond within 48 hours.</p>
      </div>
    );
  }
  
  return (
    <form 
      name="support" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="support" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>
      
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          placeholder="Your name"
        />
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          placeholder="your@email.com"
        />
      </div>
      
      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="">Select a topic</option>
          <option value="general">General Question</option>
          <option value="technical">Technical Issue</option>
          <option value="account">Account / Data Request</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
          placeholder="How can we help?"
        />
      </div>
      
      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="LongevRO Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">LongevRO</span>
            </Link>
            <Link
              href="/"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Can We Help?
          </h1>
          <p className="text-slate-400 text-lg">
            Send us a message and we'll respond within 48 hours.
          </p>
        </div>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
        <div className="container mx-auto px-6 text-center space-y-2">
          <p className="text-slate-400">
            © {new Date().getFullYear()} LongevRO
          </p>
          <p className="text-slate-500 text-sm">
            Built in London & Dubai
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/support"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
