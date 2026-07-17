export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-display font-bold text-teal mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-10 text-ink/80 leading-8">

        <section>
          <p>
            Welcome to <strong>Serenity</strong>. We are deeply committed to
            protecting your privacy and safeguarding your personal information.
            Because Serenity is a mental health and well-being platform, we
            recognize that the information you share with us is highly personal
            and sensitive.
          </p>

          <p className="mt-4">
            This Privacy Policy explains how we collect, use, disclose, and
            protect your information in compliance with applicable data
            protection laws, including Kenya's Data Protection Act (2019).
          </p>

          <p className="mt-4">
            Please read this policy carefully. If you do not agree with these
            terms, please discontinue use of the Serenity platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            1. Special Notice Regarding Mental Health Data
          </h2>

          <p>
            Information relating to your physical or mental health is classified
            as <strong>Sensitive Personal Data</strong>. We apply strict
            confidentiality and security measures to protect this information.
          </p>

          <p className="mt-4">
            Serenity will never sell, rent, or trade your mental health data,
            assessment results, or personal reflections for marketing or
            advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            2. Information We Collect
          </h2>

          <p className="mb-4">
            Depending on how you use Serenity, we may collect:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Personal Data:</strong> Your name, email address, phone
              number, or other information you voluntarily provide.
            </li>

            <li>
              <strong>Sensitive Mental Health Information:</strong> Emotional
              well-being information, assessment responses, or booking details
              that you choose to share. This information is processed only with
              your explicit consent.
            </li>

            <li>
              <strong>Technical Data:</strong> IP address, browser type,
              operating system, pages visited, and access times.
            </li>

            <li>
              <strong>Cookies:</strong> We use cookies to improve website
              performance and your browsing experience.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            3. How We Use Your Information
          </h2>

          <ul className="list-disc list-inside space-y-3">
            <li>Operate, maintain, and improve Serenity.</li>
            <li>Provide personalized mental health resources.</li>
            <li>Respond to customer support requests.</li>
            <li>Protect against fraud and security threats.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            4. Disclosure of Your Information
          </h2>

          <p className="mb-4">
            We only share your information under limited circumstances:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>With Your Consent:</strong> When you request to be
              connected with a therapist or counselor.
            </li>

            <li>
              <strong>Emergency Situations:</strong> If disclosure is necessary
              to prevent imminent harm to you or another person.
            </li>

            <li>
              <strong>Legal Requirements:</strong> When required by law or court
              order.
            </li>

            <li>
              <strong>Trusted Service Providers:</strong> Website hosting,
              analytics, or infrastructure providers operating under strict
              confidentiality agreements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            5. Data Security
          </h2>

          <p>
            We implement administrative, technical, and physical safeguards to
            protect your information from unauthorized access, disclosure, or
            misuse. While we strive to maintain the highest security standards,
            no internet transmission or electronic storage method can be
            guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            6. Your Rights
          </h2>

          <p className="mb-4">
            Under Kenya's Data Protection Act (2019), you have the right to:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Be informed about how your data is used.</li>
            <li>Access the personal information we hold.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Withdraw consent or object to data processing.</li>
          </ul>

          <p className="mt-4">
            To exercise any of these rights, please contact us using the details
            below.
          </p>
        </section>

        <section className="bg-gold/10 border-l-4 border-gold rounded-xl2 p-6">
          <h2 className="text-2xl font-semibold text-teal mb-4">
            7. Medical & Crisis Disclaimer
          </h2>

          <p>
            Serenity provides educational information and supportive resources
            only. Our content, assessments, and tools do not replace
            professional medical advice, diagnosis, or treatment.
          </p>

          <p className="mt-4 font-medium">
            If you are experiencing a mental health crisis, contemplating
            self-harm, or facing a medical emergency, seek immediate assistance.
          </p>

          <p className="mt-4">
            <strong>Kenya Red Cross Mental Health Hotline:</strong> 1190
            (Available 24/7)
          </p>
        </section>

        <section className="bg-sage-light/20 rounded-xl2 p-6">
          <h2 className="text-2xl font-semibold text-teal mb-4">
            8. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact us:
          </p>

          <div className="mt-6 space-y-2">
            <p><strong>Serenity</strong></p>
            <p>Email: privacy@serenity.co.ke</p>
            <p>Phone: +254 702 334 410</p>
          </div>
        </section>

      </div>
    </main>
  );
}