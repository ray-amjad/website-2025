import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Company — Ray Amjad",
  description: "Company details for RAY AMJAD LTD.",
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-800">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Company</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This website is operated by{" "}
            <strong className="text-gray-900 dark:text-white">RAY AMJAD LTD</strong>, a company registered in England and Wales.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">Registration</h3>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Company name:</strong> RAY AMJAD LTD
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Company number:</strong>{" "}
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/14506459"
                className="text-blue-600 dark:text-white hover:underline underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                14506459
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Jurisdiction:</strong> England and Wales
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">Registered address</h3>
          <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            77 Fields New Road<br />
            Chadderton, Oldham<br />
            England, OL9 8BT<br />
            United Kingdom
          </address>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            This is our statutory registered office (England &amp; Wales). For postal correspondence please use our mailing address below.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">Mailing address</h3>
          <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Lytchett House, 13 Freeland Park<br />
            Wareham Road<br />
            Poole, Dorset<br />
            BH16 6FA<br />
            United Kingdom
          </address>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For any enquiries, email{" "}
            <a
              href="mailto:r@rayamjad.com"
              className="text-blue-600 dark:text-white hover:underline underline"
            >
              r@rayamjad.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
