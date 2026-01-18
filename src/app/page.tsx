"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar moved to layout */}

      {/* Hero Section */}
      <HeroSlider />

      {/* About Section - New Premium Design */}
      <section className="about-new section" id="about">
        <div className="container">
          <div className="about-new-header">
            <div className="section-badge green">About Us</div>
            <h2 className="about-new-title">
              Your Journey to <span className="gradient-text">Recovery</span> Starts Here
            </h2>
            <p className="about-new-subtitle">
              Drishti Nasha Mukti Evam Manochikitsa Kendra is a premier rehabilitation center
              dedicated to helping individuals overcome addiction through a holistic approach.
            </p>
          </div>

          <div className="about-new-grid">
            {/* Main Feature Card */}
            <div className="about-main-card">
              <div className="about-main-card-content">
                <div className="about-main-icon">
                  <span>🎯</span>
                </div>
                <h3>Our Mission</h3>
                <p>
                  We believe every individual deserves a chance to break free from addiction.
                  Our mission is to provide compassionate, evidence-based treatment that addresses
                  the root causes and empowers lasting transformation.
                </p>
                <div className="about-main-stats">
                  <div className="about-stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="about-feature-card blue-card">
              <div className="about-feature-card-icon">🏥</div>
              <h4>Medical Detox</h4>
              <p>Safe, supervised withdrawal with 24/7 medical care and personalized treatment plans.</p>
            </div>

            <div className="about-feature-card green-card">
              <div className="about-feature-card-icon">🧠</div>
              <h4>Expert Therapy</h4>
              <p>Individual and group sessions with certified psychiatrists and psychologists.</p>
            </div>

            <div className="about-feature-card purple-card">
              <div className="about-feature-card-icon">🧘</div>
              <h4>Holistic Healing</h4>
              <p>Yoga, meditation, and mindfulness practices for complete mind-body recovery.</p>
            </div>

            <div className="about-feature-card orange-card">
              <div className="about-feature-card-icon">👨‍👩‍👧</div>
              <h4>Family Support</h4>
              <p>Comprehensive counseling to help families understand and support recovery.</p>
            </div>
          </div>

          <div className="about-cta-wrapper">
            <Link href="/#contact" className="btn btn-blue">
              Start Your Recovery Journey <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      < section className="services section" id="services" >
        <div className="container">
          <div className="section-header">
            <div className="section-badge green">Our Services</div>
            <h2 className="section-title">Treatment <span className="green">Programs</span></h2>
            <p className="section-subtitle">
              Comprehensive addiction treatment and mental health services for lasting recovery.
            </p>
          </div>
          <div className="services-grid">
            {[
              { title: "12 Step", icon: "👣" },
              { title: "AA & NA Meetings", icon: "🤝" },
              { title: "Alcoholism Treatment", icon: "🍷" },
              { title: "Depression", icon: "🌦️" },
              { title: "Detoxification", icon: "💧" },
              { title: "Drug Addiction Treatment", icon: "💊" },
              { title: "Family Counseling", icon: "👨‍👩‍👧‍👦" },
              { title: "Gambling Addiction", icon: "🎲" },
              { title: "Mental Health Treatment", icon: "🧠" },
              { title: "Nasha Mukti Kendra", icon: "🏥" },
              { title: "Occupational Therapy", icon: "💼" },
              { title: "Out Patient", icon: "🚶" },
              { title: "Prevention", icon: "🛡️" },
              { title: "Psychotherapy", icon: "🛋️" },
              { title: "Relapse Prevention", icon: "🛑" },
              { title: "Residential Rehabilitation", icon: "🏠" },
              { title: "Smoking Cessation", icon: "🚬" },
              { title: "Substance Abuse Counselling", icon: "💬" },
              { title: "Yoga and Meditation", icon: "🧘" },
              { title: "Youth Deaddiction", icon: "🧢" },
            ].map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="service-icon"><span>{service.icon}</span></div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section >



      {/* Testimonials Section */}
      < section className="testimonials section" id="testimonials" >
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Success Stories</div>
            <h2 className="section-title">Recovery <span className="green">Stories</span></h2>
            <p className="section-subtitle">
              Real stories from people who transformed their lives with our help.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="0">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                मैं 8 साल से शराब की लत में फंसा था। मेरे परिवार ने उम्मीद छोड़ दी थी। दृष्टि नशा मुक्ति केंद्र ने मुझे नई जिंदगी दी। यहां के डॉक्टर्स और काउंसलर्स ने बहुत प्यार से मेरा इलाज किया। आज मैं 3 साल से नशा मुक्त हूं और अपने बच्चों के साथ खुशी से रह रहा हूं। धन्यवाद दृष्टि टीम!
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">VK</div>
                <div className="testimonial-info">
                  <h4>विकास कुमार</h4>
                  <p>शराब की लत से मुक्त • 3 साल नशा मुक्त</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                I was addicted to drugs for over 10 years and had tried multiple rehab centers before. Drishti was different - the medical detox was safe and comfortable, the counseling sessions helped me understand my triggers, and the yoga and meditation gave me inner peace. The 24/7 support from the staff made all the difference. I've been clean for 2 years now and have rebuilt my career and relationships. Forever grateful!
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AS</div>
                <div className="testimonial-info">
                  <h4>Arjun Singh</h4>
                  <p>Recovered from Drug Addiction • 2 Years Clean</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-content">
                My son was struggling with tobacco and alcohol addiction along with severe depression. We were desperate and didn't know where to turn. Drishti's team not only treated his addiction but also addressed his mental health issues with proper medication and therapy. The family counseling sessions helped us understand how to support him better. Today, he is healthy, working, and living a normal life. This center truly saved our family.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RM</div>
                <div className="testimonial-info">
                  <h4>Rajesh Malhotra</h4>
                  <p>Father of Recovered Patient</p>
                  <div className="testimonial-rating">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section - Premium Design */}
      <section className="cta-premium">
        <div className="cta-decor cta-decor-1"></div>
        <div className="cta-decor cta-decor-2"></div>
        <div className="cta-decor cta-decor-3"></div>
        <div className="container">
          <div className="cta-premium-content">
            <div className="cta-badge">
              <span className="cta-badge-icon">💚</span>
              <span>Free Confidential Consultation</span>
            </div>
            <h2>Take the First Step Towards <span>Recovery</span></h2>
            <p>
              You are not alone in this journey. Our compassionate team of experts
              is here to guide you every step of the way, 24/7.
            </p>
            <div className="cta-buttons">
              <a href="tel:+919755209205" className="cta-btn cta-btn-primary">
                <span className="cta-btn-icon">📞</span>
                <span className="cta-btn-text">
                  <span className="cta-btn-label">Call Now</span>
                  <span className="cta-btn-number">+91 9755209205</span>
                </span>
              </a>
              <a
                href="https://wa.me/919755209205?text=Hi%2C%20I%20need%20help%20with%20addiction%20treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-secondary"
              >
                <span className="cta-btn-icon">💬</span>
                <span className="cta-btn-text">
                  <span className="cta-btn-label">WhatsApp Us</span>
                  <span className="cta-btn-number">Quick Response</span>
                </span>
              </a>
            </div>
            <div className="cta-trust">
              <span>✓ Government Registered</span>
              <span>✓ 24/7 Support</span>
              <span>✓ Confidential Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      < section className="contact section" id="contact" >
        <div className="container">
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section >

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

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="form-input"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            className="form-input"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="form-input"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="form-group">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="form-input"
          required
        >
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
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Your Message"
          rows={4}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-blue" style={{ width: "100%" }} disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"} <span>→</span>
      </button>
      {status === "success" && (
        <p style={{ marginTop: "1rem", color: "green", fontWeight: "bold" }}>
          Message sent successfully! We will contact you soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "1rem", color: "red", fontWeight: "bold" }}>
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
