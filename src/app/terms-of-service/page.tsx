"use client";

import Link from "next/link";

export default function TermsOfService() {
    return (
        <main className="legal-page">
            <div className="container">
                <div className="legal-header" data-aos="fade-up">
                    <h1>Terms of Service</h1>
                    <p>Last updated: January 2025</p>
                </div>

                <div className="legal-content" data-aos="fade-up" data-aos-delay="100">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using the services of Drishti Nasha Mukti Evam Manochikitsa Kendra, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                    </section>

                    <section>
                        <h2>2. Services Provided</h2>
                        <p>We provide addiction treatment and mental health services including:</p>
                        <ul>
                            <li>Alcohol and drug de-addiction programs</li>
                            <li>Mental health counseling and therapy</li>
                            <li>Medical detoxification under supervision</li>
                            <li>Family counseling and support</li>
                            <li>Aftercare and relapse prevention programs</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Patient Responsibilities</h2>
                        <p>As a patient, you agree to:</p>
                        <ul>
                            <li>Provide accurate and complete medical history</li>
                            <li>Follow the prescribed treatment plan</li>
                            <li>Attend scheduled therapy sessions and appointments</li>
                            <li>Inform staff of any changes in your condition</li>
                            <li>Respect the rights and privacy of other patients</li>
                            <li>Refrain from bringing prohibited substances to our facility</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Payment Terms</h2>
                        <p>Payment for services is due as per the agreed treatment plan. We offer flexible payment options. Cancellation of appointments must be done 24 hours in advance. Refund policies apply as per individual treatment agreements.</p>
                    </section>

                    <section>
                        <h2>5. Discharge Policy</h2>
                        <p>Patients may be discharged if they:</p>
                        <ul>
                            <li>Complete their treatment program successfully</li>
                            <li>Request voluntary discharge (with informed consent)</li>
                            <li>Violate facility rules repeatedly</li>
                            <li>Pose a risk to themselves or others</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Limitation of Liability</h2>
                        <p>While we strive to provide the best possible care, recovery outcomes vary for each individual. We are not liable for relapse or treatment outcomes beyond our reasonable control. Our team works diligently to support your recovery journey.</p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <p>For questions about these Terms of Service:</p>
                        <ul>
                            <li>Phone: +91 9755209205</li>
                            <li>Email: drishtinashamuktikendra@gmail.com</li>
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
