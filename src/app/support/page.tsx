'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-750 transition-colors"
      >
        <span className="text-white font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 text-emerald-400 transition-transform flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

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

const faqs = [
  {
    question: "What is LongevRO?",
    answer: "LongevRO is a bilingual (English/Arabic) wellness companion app designed to help people on GLP-1 medications like Ozempic, Wegovy, or Mounjaro track their journey. It focuses on muscle preservation and skin health during weight loss through protein tracking, exercise logging, and personalized AI coaching."
  },
  {
    question: "Is LongevRO a medical app?",
    answer: "No. LongevRO is an educational wellness app designed to help you track your journey. It does not provide medical advice, diagnose conditions, or recommend medication changes. Always consult your doctor for medical decisions."
  },
  {
    question: "Does the app tell me how much medication to take?",
    answer: "No. LongevRO does not provide dosing recommendations. All medication decisions must be made with your healthcare provider."
  },
  {
    question: "What do the scores mean?",
    answer: "The Muscle Preservation Score (MPS) and Skin Protection Score (SPS) are calculated from research-backed factors: protein intake, resistance training frequency, rate of weight loss, hydration, and skin care habits. They are educational indicators to help you track consistency, not medical measurements or diagnoses."
  },
  {
    question: "Where does the health information come from?",
    answer: "All educational content in LongevRO is based on peer-reviewed research from medical journals. You can view the specific sources cited at the bottom of AI coach messages."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. Your data is stored securely and never sold to third parties. You can delete your account and all associated data at any time from the app settings."
  },
  {
    question: "What languages does the app support?",
    answer: "LongevRO fully supports English and Arabic, including right-to-left (RTL) text for Arabic users."
  },
  {
    question: "How do I delete my account?",
    answer: "You can delete your account and all associated data from the Settings screen in the app. Alternatively, contact us using the form below and we'll process your request within 48 hours."
  }
];

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
            Find answers to common questions or reach out to our team.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-slate-400 text-lg">
              Send us a message and we'll get back to you within 48 hours.
            </p>
          </div>
          
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
