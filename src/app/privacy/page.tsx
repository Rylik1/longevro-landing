import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
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
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated: November 29, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              LongevRO is a bilingual GLP-1 companion app (English/Arabic) focused on helping users preserve muscle mass and protect their skin while using GLP-1 medications. This website is the marketing site for that app. We are committed to protecting your privacy and being transparent about how we collect and use your information.
            </p>
          </section>

          {/* What data we collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              What data we collect on this website
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When you visit this website, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>
                <strong className="text-white">Email address:</strong> When you join our "early access list" by submitting your email address through the form on this site.
              </li>
              <li>
                <strong className="text-white">Basic technical information:</strong> Automatically collected by our hosting and analytics services, including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Timestamps of visits</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* How we use your information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              How we use your information
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>To contact you about early access opportunities, product updates, and important changes to LongevRO</li>
              <li>To understand how visitors use our website and improve our design and content</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">We do not sell personal data to third parties.</strong> Your information is used solely for LongevRO-related communication and website improvement.
            </p>
          </section>

          {/* Legal / medical disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Legal / Medical Disclaimer
            </h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">LongevRO does not provide medical advice, diagnosis, or treatment.</strong> All content on this website and in the LongevRO app is for educational and lifestyle support purposes only.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Users must always follow their own doctor's guidance for GLP-1 medication and health decisions. Never make changes to your medication or treatment plan without consulting your healthcare provider.
            </p>
          </section>

          {/* Third-party services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Third-party services
            </h2>
            <p className="text-slate-300 leading-relaxed">
              This website is hosted on Netlify and may use analytics or logging services provided by Netlify or other third-party services to understand website usage and improve performance.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Email addresses collected through the early access form may be stored in a third-party mailing list provider (such as an email marketing service). This information is used only for LongevRO-related communication and is not shared with other parties for their own marketing purposes.
            </p>
          </section>

          {/* Data retention & security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Data retention & security
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Email addresses are kept only as long as reasonably necessary for early access communications and product updates. We use reasonable technical measures to protect your data, including encryption and secure hosting practices.
            </p>
            <p className="text-slate-300 leading-relaxed">
              However, no system is 100% secure. While we strive to protect your information, we cannot guarantee absolute security of data transmitted over the internet.
            </p>
          </section>

          {/* Your rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Your rights
            </h2>
            <p className="text-slate-300 leading-relaxed">
              You can request deletion of your email address from our mailing list at any time by contacting us through our{" "}
              <a href="/support" className="text-emerald-400 hover:underline">
                support page
              </a>
              . We will process your request promptly.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This applies especially to users in the UK, EU, and similar jurisdictions with data protection regulations. You have the right to access, correct, or delete your personal information, and to object to or restrict certain processing activities.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy, or you want us to delete your information, please contact us through our{" "}
              <a href="/support" className="text-emerald-400 hover:underline">
                support page
              </a>
              .
            </p>
          </section>
        </div>
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


