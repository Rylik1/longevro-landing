'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Is this a medical app?",
    answer: "No. LongevRO is an educational wellness app designed to help you track your journey. It does not provide medical advice, diagnose conditions, or recommend medication changes. Always consult your doctor for medical decisions."
  },
  {
    question: "Can I use it to change my GLP-1 dose?",
    answer: "No. LongevRO does not tell you how much medication to take. All dosing decisions must be made with your healthcare provider. We only help you track what you're already doing."
  },
  {
    question: "How are the scores calculated?",
    answer: "Your Muscle Preservation Score (MPS) and Skin Protection Score (SPS) are based on research-backed factors: protein intake, resistance training frequency, rate of weight loss, hydration, and skin care habits. Scores are educational indicators, not medical measurements."
  },
  {
    question: "Where does the health information come from?",
    answer: "All educational content in LongevRO is based on peer-reviewed research from medical journals. The AI Coach displays citations (author, year, journal) at the bottom of health-related messages, with links to the original studies on PubMed."
  },
  {
    question: "Is my data private?",
    answer: "Yes. Your data is stored securely and never sold to third parties. You can delete your account and all associated data at any time from the app settings."
  },
  {
    question: "Which languages do you support?",
    answer: "Currently English and Arabic (Modern Standard Arabic and some Gulf dialects). More languages are planned based on user demand."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center bg-slate-800/50 hover:bg-slate-800 transition-colors"
      >
        <span className="text-white font-medium text-left">{question}</span>
        <svg
          className={`w-5 h-5 text-emerald-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 py-5 text-slate-300 bg-slate-900/50 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about LongevRO
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert(`Thanks! We'll notify ${email} when LongevRO launches.`);
    setEmail('');
  };

  return (
    <div className="scroll-smooth">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="LongevRO Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">LongevRO</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">
                How it works
              </a>
              <a href="#faq" className="text-slate-300 hover:text-emerald-400 transition-colors">
                FAQ
              </a>
              <Link href="/support" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Support
              </Link>
              <a
                href="#get-the-app"
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
              >
                Get the app
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
              <div className="flex flex-col p-4 gap-4">
                <a 
                  href="#features" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How it works
                </a>
                <a 
                  href="#faq" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <Link 
                  href="/support" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Support
                </Link>
                <a
                  href="#get-the-app"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get the app
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="min-h-screen bg-slate-950">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Headline & CTAs */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Keep your muscle while the weight drops.
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                The bilingual GLP-1 companion (English/Arabic) that tracks injections, weight, protein, and skin health—so you lose fat, not your physique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#get-the-app"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-center"
                >
                  Join the early access list
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 border-2 border-slate-700 text-slate-300 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors font-semibold text-center"
                >
                  Learn how it works
                </a>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-[2.5rem] p-6 flex flex-col items-center justify-center space-y-8">
                  <div className="text-center space-y-2">
                    <p className="text-slate-400 text-sm uppercase tracking-wide">App Preview</p>
                    <Image
                      src="/images/logo.png"
                      alt="LongevRO"
                      width={80}
                      height={80}
                      className="mx-auto rounded-xl"
                    />
                  </div>

                  <div className="w-full space-y-4">
                    <div className="bg-slate-800 rounded-xl p-4">
                      <p className="text-emerald-400 text-xs uppercase tracking-wide mb-1">Muscle Preservation</p>
                      <p className="text-white text-3xl font-bold">82<span className="text-sm text-slate-400">/100</span></p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4">
                      <p className="text-emerald-400 text-xs uppercase tracking-wide mb-1">Skin Protection</p>
                      <p className="text-white text-3xl font-bold">76<span className="text-sm text-slate-400">/100</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-slate-900 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why LongevRO?</h2>
              <p className="text-slate-400 text-lg">Built specifically for GLP-1 users who care about the details</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Muscle Preservation Score</h3>
                <p className="text-slate-400">
                  Track your MPS (0–100) based on protein intake, resistance training, and weight loss rate.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Skin & Face Score</h3>
                <p className="text-slate-400">
                  Monitor your Skin Protection Score with hydration, collagen tracking, and facial changes.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🩺</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GLP-1 Aware Tracking</h3>
                <p className="text-slate-400">
                  Log injections, doses, and side effects—with smart reminders and trend analysis.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Bilingual AI Coach</h3>
                <p className="text-slate-400">
                  Chat in English or Arabic with an AI that understands GLP-1 journeys and cultural context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
              <p className="text-slate-400 text-lg">Three simple steps to smarter GLP-1 results</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white">Log injections & weight</h3>
                <p className="text-slate-400">
                  Record your GLP-1 doses, weekly weigh-ins, and how you're feeling. Simple, fast, private.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white">Track protein, exercise & skin care</h3>
                <p className="text-slate-400">
                  Daily protein goals, resistance training check-ins, and skin health habits—all in one place.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white">Get AI guidance anytime</h3>
                <p className="text-slate-400">
                  Ask your AI coach questions and receive personalized insights on your muscle and skin scores, plus tips to optimize your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-900/30 to-emerald-800/30 border-y border-emerald-700/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Who is LongevRO for?</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              GLP-1 users (Ozempic, Wegovy, Mounjaro, etc.) who care about preserving muscle mass, protecting their skin and face,
              and having realistic expectations—not just seeing the number on the scale drop.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA / Email Capture Section */}
        <section id="get-the-app" className="py-20 bg-slate-950">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to preserve what matters?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Join the early access list and be the first to know when LongevRO launches.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold whitespace-nowrap"
              >
                Notify me when it launches
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
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
      </main>
    </div>
  );
}
