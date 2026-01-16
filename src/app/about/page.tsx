"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            {/* Navbar */}
            {/* Navbar moved to layout */}

            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-badge">About Us</div>
                        <h1>Ummeed ki Nazar, <span className="green">Nashamukt Safar</span></h1>
                        <p>Discover our journey, mission, and the compassionate team behind Drishti Nasha Mukti Evam Manochikitsa Kendra.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-page-section section">
                <div className="container">
                    <div className="about-page-grid">
                        <div className="about-page-content">
                            <div className="section-badge green">Our Mission</div>
                            <h2>Transforming Lives Through <span className="blue">Compassionate Care</span></h2>
                            <p>
                                At Drishti Nasha Mukti Evam Manochikitsa Kendra, we believe that every individual deserves
                                a chance to break free from the chains of addiction. Our mission is to provide comprehensive,
                                evidence-based treatment that addresses not just the symptoms, but the root causes of addiction.
                            </p>
                            <p>
                                We combine modern medical practices with traditional healing methods to create a holistic
                                approach that nurtures the mind, body, and soul. Our goal is to help every patient rediscover
                                their potential and rebuild their lives.
                            </p>
                        </div>
                        <div className="about-page-visual">
                            <div className="mission-card">
                                <div className="mission-icon">🎯</div>
                                <h3>Our Vision</h3>
                                <p>A society free from the burden of addiction, where every individual can live with dignity and purpose.</p>
                            </div>
                            <div className="mission-card">
                                <div className="mission-icon">💚</div>
                                <h3>Our Values</h3>
                                <p>Compassion, Integrity, Excellence, and Respect for every individual&apos;s journey to recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge green">Our Team</div>
                        <h2 className="section-title">Meet Our <span className="blue">Experts</span></h2>
                        <p className="section-subtitle">
                            Dedicated professionals committed to your recovery journey.
                        </p>
                    </div>
                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-avatar" style={{ position: 'relative', overflow: 'hidden' }}>
                                <Image
                                    src="/team/Syed_Farha_Ali_Managing Director_Psychologist.jpeg"
                                    alt="Syed Farha Ali"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3>Syed Farha Ali</h3>
                            <p className="team-role">Managing Director & Psychologist</p>
                            <p className="team-bio">Guiding force behind Drishti's compassionate care approach.</p>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar" style={{ position: 'relative', overflow: 'hidden' }}>
                                <Image
                                    src="/team/Aqsa_Ansar_Psychologist.jpeg"
                                    alt="Aqsa Ansar"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3>Aqsa Ansar</h3>
                            <p className="team-role">Psychologist</p>
                            <p className="team-bio">Expert in psychological assessment and therapy.</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar" style={{ position: 'relative', overflow: 'hidden' }}>
                                <Image
                                    src="/team/vivek_yadav_psychiatrist.jpeg"
                                    alt="Vivek Yadav"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3>Vivek Yadav</h3>
                            <p className="team-role">Psychiatrist</p>
                            <p className="team-bio">Specialist in psychiatric care and mental health recovery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="facilities-section section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Our Facilities</div>
                        <h2 className="section-title">World-Class <span className="green">Infrastructure</span></h2>
                    </div>
                    <div className="facilities-grid">
                        <div className="facility-card">
                            <div className="facility-icon">🏥</div>
                            <h3>Medical Ward</h3>
                            <p>24/7 medical supervision with modern equipment for safe detoxification.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">🧘</div>
                            <h3>Meditation Hall</h3>
                            <p>Peaceful space for yoga, meditation, and spiritual healing sessions.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">🛏️</div>
                            <h3>Comfortable Rooms</h3>
                            <p>Clean, comfortable accommodations for a restful recovery experience.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">🌳</div>
                            <h3>Garden & Recreation</h3>
                            <p>Beautiful outdoor spaces for relaxation and recreational activities.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">🍽️</div>
                            <h3>Nutritious Kitchen</h3>
                            <p>Healthy, balanced meals prepared with care to support recovery.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">💬</div>
                            <h3>Counseling Rooms</h3>
                            <p>Private spaces for individual and group therapy sessions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="approach-section section">
                <div className="container">
                    <div className="approach-content">
                        <div className="approach-text">
                            <div className="section-badge green">Our Approach</div>
                            <h2>Holistic <span className="blue">Treatment</span> Philosophy</h2>
                            <p>
                                We understand that addiction is a complex condition that affects every aspect of a person&apos;s life.
                                That&apos;s why our treatment approach addresses not just the physical dependency, but also the
                                psychological, emotional, and social factors that contribute to addiction.
                            </p>
                            <div className="approach-points">
                                <div className="approach-point">
                                    <span className="approach-check">✓</span>
                                    <span>Medical Detoxification under expert supervision</span>
                                </div>
                                <div className="approach-point">
                                    <span className="approach-check">✓</span>
                                    <span>Individual & Group Therapy sessions</span>
                                </div>
                                <div className="approach-point">
                                    <span className="approach-check">✓</span>
                                    <span>Yoga & Meditation for mental wellness</span>
                                </div>
                                <div className="approach-point">
                                    <span className="approach-check">✓</span>
                                    <span>Family Counseling & Support programs</span>
                                </div>
                                <div className="approach-point">
                                    <span className="approach-check">✓</span>
                                    <span>Aftercare & Relapse Prevention planning</span>
                                </div>
                            </div>
                        </div>
                        <div className="approach-stats">
                            <div className="approach-stat-card">
                                <div className="approach-stat-number">95%</div>
                                <div className="approach-stat-label">Success Rate</div>
                            </div>
                            <div className="approach-stat-card">
                                <div className="approach-stat-number">5000+</div>
                                <div className="approach-stat-label">Lives Transformed</div>
                            </div>
                            <div className="approach-stat-card">
                                <div className="approach-stat-number">10+</div>
                                <div className="approach-stat-label">Years Experience</div>
                            </div>
                            <div className="approach-stat-card">
                                <div className="approach-stat-number">24/7</div>
                                <div className="approach-stat-label">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Begin Your Recovery?</h2>
                        <p>
                            Take the first step towards a healthier, addiction-free life.
                            Our caring team is here to support you every step of the way.
                        </p>
                        <Link href="/#contact" className="btn btn-white">
                            📞 Call Now: +91 9755209205
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* Footer moved to layout */}

            {/* Floating Buttons */}
            <a href="tel:+919755209205" className="floating-btn floating-call" aria-label="Call Us">
                <span>📞</span>
            </a>
            <a href="https://wa.me/919755209205" target="_blank" rel="noopener noreferrer" className="floating-btn floating-whatsapp" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </>
    );
}
