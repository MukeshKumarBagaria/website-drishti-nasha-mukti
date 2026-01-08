"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [counters, setCounters] = useState({ patients: 0, years: 0, doctors: 0, success: 0 });
  const statsRef = useRef<HTMLElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateCounters = () => {
    const targets = { patients: 5000, years: 10, doctors: 25, success: 95 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        patients: Math.floor(targets.patients * progress),
        years: Math.floor(targets.years * progress),
        doctors: Math.floor(targets.doctors * progress),
        success: Math.floor(targets.success * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Enhanced Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-inner">
            <a href="#" className="navbar-logo">
              <Image src="/logo.jpeg" alt="Drishti Logo" width={45} height={45} style={{ borderRadius: "10px" }} />
              <span className="navbar-logo-text">Drishti <span>Nasha Mukti</span></span>
            </a>
            <ul className="navbar-menu">
              <li><Link href="/about" className="navbar-link">About</Link></li>
              <li><a href="#services" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
              <li><Link href="/gallery" className="navbar-link">Gallery</Link></li>
              <li><a href="#contact" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
              <li><button className="navbar-cta" onClick={() => scrollToSection("contact")}>Get Help Now</button></li>
            </ul>
            <button className="mobile-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Since 2025 • Trusted Recovery Center
              </div>
              <h1 className="hero-title">
                Begin Your Journey to a <span className="hero-title-green">Nasha Mukt</span> Life
              </h1>
              <p className="hero-description">
                Ummeed ki Nazar, Nashamukt Safar — At Drishti Nasha Mukti Evam Manochikitsa Kendra, we provide compassionate,
                evidence-based treatment for addiction recovery and mental wellness.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-green" onClick={() => scrollToSection("contact")}>
                  Start Recovery Today
                  <span>→</span>
                </button>
                <button className="btn btn-white" onClick={() => scrollToSection("about")}>
                  Learn More
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">5000+</div>
                  <div className="hero-stat-label">Lives Transformed</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">95%</div>
                  <div className="hero-stat-label">Success Rate</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Support Available</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-container">
                <div className="hero-image-ring"></div>
                <div className="hero-image-ring"></div>
                <div className="hero-image-ring"></div>
                <Image
                  src="/logo.jpeg"
                  alt="Drishti Nasha Mukti Kendra"
                  fill
                  className="hero-image"
                  style={{ objectFit: "contain" }}
                  priority
                />
                {/* Floating Cards */}
                <div className="hero-card hero-card-1">
                  <div className="hero-card-icon green">🏥</div>
                  <div className="hero-card-text">
                    <h4>24/7 Care</h4>
                    <p>Round-the-clock support</p>
                  </div>
                </div>
                <div className="hero-card hero-card-2">
                  <div className="hero-card-icon blue">👨‍⚕️</div>
                  <div className="hero-card-text">
                    <h4>Expert Doctors</h4>
                    <p>Certified specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image-wrapper">
              <div className="about-image-box">
                <span className="about-image-icon">🏥</span>
              </div>
              <div className="about-accent-card">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
            <div className="about-text">
              <div className="section-badge">About Us</div>
              <h2>Reclaim Your Life with <span className="blue">Drishti</span></h2>
              <p>
                Drishti Nasha Mukti Evam Manochikitsa Kendra is a premier rehabilitation center dedicated to helping
                individuals overcome addiction and mental health challenges through a holistic approach.
              </p>
              <p>
                With experienced psychiatrists, psychologists, and counselors, we provide personalized
                treatment plans. Our serene environment ensures a safe and supportive recovery journey.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">🏥</div>
                  <div className="about-feature-text">
                    <h4>Medical Detox</h4>
                    <p>Safe withdrawal process</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🧠</div>
                  <div className="about-feature-text">
                    <h4>Therapy Sessions</h4>
                    <p>Individual & group</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🧘</div>
                  <div className="about-feature-text">
                    <h4>Yoga & Meditation</h4>
                    <p>Holistic healing</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">👨‍👩‍👧</div>
                  <div className="about-feature-text">
                    <h4>Family Support</h4>
                    <p>Inclusive recovery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge green">Our Services</div>
            <h2 className="section-title">Treatment <span className="green">Programs</span></h2>
            <p className="section-subtitle">
              Comprehensive addiction treatment and mental health services for lasting recovery.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><span>🍺</span></div>
              <h3>Alcohol De-Addiction</h3>
              <p>Comprehensive treatment for alcohol dependency including medical detox and long-term support.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon"><span>💊</span></div>
              <h3>Drug De-Addiction</h3>
              <p>Specialized treatment for drug abuse including opioids and prescription drug addiction.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon"><span>🧠</span></div>
              <h3>Mental Health Care</h3>
              <p>Treatment for depression, anxiety, bipolar disorder with personalized care plans.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon"><span>🎮</span></div>
              <h3>Behavioral Addictions</h3>
              <p>Help for gaming, social media, gambling and other behavioral dependencies.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon"><span>👨‍👩‍👧‍👦</span></div>
              <h3>Family Counseling</h3>
              <p>Support for families affected by addiction to rebuild relationships.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon"><span>🔄</span></div>
              <h3>Aftercare Program</h3>
              <p>Continued support with follow-up sessions and relapse prevention.</p>
              <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics section" ref={statsRef}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>Our Impact</div>
            <h2 className="section-title">Transforming <span style={{ color: "var(--green-400)" }}>Lives</span></h2>
            <p className="section-subtitle">
              Numbers that reflect our commitment to building a healthier community.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{counters.patients.toLocaleString()}+</div>
              <div className="stat-label">Patients Treated</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍⚕️</div>
              <div className="stat-number">{counters.doctors}+</div>
              <div className="stat-label">Expert Doctors</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-number">{counters.success}%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Success Stories</div>
            <h2 className="section-title">Recovery <span className="green">Stories</span></h2>
            <p className="section-subtitle">
              Real stories from people who transformed their lives with our help.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                Drishti gave me a second chance at life. The staff was incredibly supportive, and
                the holistic approach helped me address not just my addiction but the underlying
                issues. I have been sober for 2 years now!
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RK</div>
                <div className="testimonial-info">
                  <h4>Rajesh Kumar</h4>
                  <p>Recovered from Alcohol Addiction</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                I was struggling with depression and substance abuse. The doctors here understood
                my dual diagnosis and created a treatment plan that worked. Today, I am living
                my best life with my family.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">PS</div>
                <div className="testimonial-info">
                  <h4>Priya Sharma</h4>
                  <p>Overcame Depression &amp; Addiction</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                As a family, we were lost. The family counseling sessions at Drishti helped us
                understand addiction and support my brother&apos;s recovery. We are closer than ever
                now. Thank you, Drishti!
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AM</div>
                <div className="testimonial-info">
                  <h4>Amit Mehta</h4>
                  <p>Family Member</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Take the First Step Towards Recovery</h2>
            <p>
              You are not alone in this journey. Our team of experts is here to guide you
              every step of the way. Call us today for a free, confidential consultation.
            </p>
            <button className="btn btn-white" onClick={() => scrollToSection("contact")}>
              📞 Call Now: +91 9755209205
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="section-badge green">Contact Us</div>
              <h2>Get in <span className="blue">Touch</span></h2>
              <p>
                Ready to start your recovery journey? Contact us today for a free consultation.
                Our caring team is available 24/7 to answer your questions.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon"><span>📍</span></div>
                  <div className="contact-item-text">
                    <h4>Visit Us</h4>
                    <p> B-1, Hill Grest Colony, Chuna Bhatti, Bhopal, Madhya Pradesh 462016</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><span>📞</span></div>
                  <div className="contact-item-text">
                    <h4>Call Us (24/7)</h4>
                    <p>+91 9755209205 | +91 9755369205</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><span>✉️</span></div>
                  <div className="contact-item-text">
                    <h4>Email Us</h4>
                    <p>drishtinashamuktikendra@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><span>⏰</span></div>
                  <div className="contact-item-text">
                    <h4>Working Hours</h4>
                    <p>24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" className="form-input" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-input" placeholder="Phone Number" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select className="form-input" required defaultValue="">
                    <option value="" disabled>Select a Service</option>
                    <option value="alcohol">Alcohol De-Addiction</option>
                    <option value="drug">Drug De-Addiction</option>
                    <option value="mental">Mental Health Care</option>
                    <option value="behavioral">Behavioral Addictions</option>
                    <option value="family">Family Counseling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-textarea" placeholder="Your Message" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-blue" style={{ width: "100%" }}>
                  Send Message <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="navbar-logo">
                <Image src="/logo.jpeg" alt="Drishti Logo" width={60} height={60} style={{ borderRadius: "12px" }} />
              </a>
              <p>
                Drishti Nasha Mukti Evam Manochikitsa Kendra is dedicated to helping individuals
                overcome addiction through compassionate care.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="YouTube">▶️</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Our Services</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Success Stories</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Alcohol De-Addiction</a></li>
                <li><a href="#services">Drug De-Addiction</a></li>
                <li><a href="#services">Mental Health Care</a></li>
                <li><a href="#services">Family Counseling</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="footer-links">
                <li><a href="tel:+919755209205">+91 9755209205</a></li>
                <li><a href="mailto:drishtinashamuktikendra@gmail.com">drishtinashamuktikendra@gmail.com</a></li>
                <li><a href="#">New Delhi, India</a></li>
                <li><a href="#">24/7 Helpline</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Drishti Nasha Mukti Evam Manochikitsa Kendra. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

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
