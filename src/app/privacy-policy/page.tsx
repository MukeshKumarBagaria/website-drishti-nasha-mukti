"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <div className="container">
                <div className="legal-header" data-aos="fade-up">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 2025</p>
                </div>

                <div className="legal-content" data-aos="fade-up" data-aos-delay="100">
                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>At Drishti Nasha Mukti Evam Manochikitsa Kendra, we collect information you provide directly to us, including:</p>
                        <ul>
                            <li>Name, phone number, and email address when you contact us</li>
                            <li>Medical history and health information for treatment purposes</li>
                            <li>Payment information for services rendered</li>
                            <li>Any other information you choose to provide</li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our addiction treatment services</li>
                            <li>Communicate with you about appointments, treatment, and follow-up care</li>
                            <li>Respond to your inquiries and requests</li>
                            <li>Send you important notices and updates about our services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Information Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All medical records are stored securely and access is restricted to authorized personnel only.</p>
                    </section>

                    <section>
                        <h2>4. Confidentiality of Treatment</h2>
                        <p>We are committed to maintaining the strictest confidentiality regarding your treatment. Your medical information will not be disclosed to any third party without your explicit written consent, except as required by law.</p>
                    </section>

                    <section>
                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data (subject to legal requirements)</li>
                            <li>Withdraw consent for marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul>
                            <li>Phone: +91 9755209205</li>
                            <li>Email: drishtinashamuktikendra@gmail.com</li>
                            <li>Address: B-1, Hill Grest Colony, Chuna Bhatti, Bhopal, MP 462016</li>
                        </ul>
                    </section>
                </div>

                <div className="legal-back">
                    <Link href="/">← Back to Home</Link>
                </div>
            </div>

            <style jsx>{`
        .legal-page { padding: 120px 0 60px; min-height: 100vh; background: #f8fafc; }
        .legal-header { text-align: center; margin-bottom: 40px; }
        .legal-header h1 { font-size: 2.5rem; color: #1f2937; margin-bottom: 8px; }
        .legal-header p { color: #6b7280; }
        .legal-content { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .legal-content section { margin-bottom: 32px; }
        .legal-content h2 { font-size: 1.25rem; color: #1f2937; margin-bottom: 12px; }
        .legal-content p { color: #4b5563; line-height: 1.7; margin-bottom: 12px; }
        .legal-content ul { padding-left: 24px; color: #4b5563; }
        .legal-content li { margin-bottom: 8px; line-height: 1.6; }
        .legal-back { text-align: center; margin-top: 32px; }
        .legal-back a { color: #10b981; font-weight: 500; }
      `}</style>
        </main>
    );
}
