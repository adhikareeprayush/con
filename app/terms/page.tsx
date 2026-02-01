import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        subtitle="Terms of Service"
        title="Terms and Conditions"
        description="Please read these terms carefully before using our services."
      />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-8">
              <div className="text-sm text-gray-500">
                Last Updated: January 31, 2026
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  By accessing and using the services provided by Convolution
                  Labs, you accept and agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use
                  our services.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  2. Service Description
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Convolution Labs provides digital solutions including web
                  development, mobile applications, design services, and digital
                  marketing. The specific scope of services will be defined in
                  individual service agreements or contracts.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in unauthorized or illegal activities</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  All content, features, and functionality of our services are
                  owned by Convolution Labs and are protected by international
                  copyright, trademark, and other intellectual property laws.
                  Client work deliverables are subject to individual contract
                  terms.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  5. Payment Terms
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2 ml-4">
                  <li>Payment terms will be specified in service agreements</li>
                  <li>All fees are non-refundable unless stated otherwise</li>
                  <li>Late payments may incur additional charges</li>
                  <li>
                    We reserve the right to suspend services for non-payment
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  To the maximum extent permitted by law, Convolution Labs shall
                  not be liable for any indirect, incidental, special, or
                  consequential damages arising out of or related to your use of
                  our services.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  7. Warranty Disclaimer
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Our services are provided &quot;as is&quot; without warranties
                  of any kind, either express or implied. We do not warrant that
                  our services will be uninterrupted, error-free, or secure.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  8. Termination
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We reserve the right to terminate or suspend your access to
                  our services at any time, with or without notice, for conduct
                  that we believe violates these Terms of Service or is harmful
                  to other users or our business.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  9. Governing Law
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the State of California, without
                  regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes by posting the
                  updated terms on our website.
                </p>
              </div>

              <div>
                <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  For questions about these Terms of Service, please contact us
                  at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@convolutionlabs.com
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Address:</strong> 123 Innovation Street, Tech
                    Valley, CA 94000
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
