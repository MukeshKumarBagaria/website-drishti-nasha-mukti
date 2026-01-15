"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/centre/4.jpeg",
        title: "Begin Your Journey to",
        titleHighlight: "Freedom",
        subtitle: "Compassionate care and evidence-based treatment for a healthier, addiction-free tomorrow.",
    },
    {
        id: 2,
        image: "/centre/10.jpeg",
        title: "Holistic Healing for",
        titleHighlight: "Mind & Body",
        subtitle: "Expert medical detox, therapy, and yoga sessions in a serene, supportive environment.",
    },
    {
        id: 3,
        image: "/centre/6.jpeg",
        title: "Reclaim Your",
        titleHighlight: "Life Today",
        subtitle: "Join a community dedicated to your lasting recovery and mental wellness.",
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + 2;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="hero-slider-v2">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide-v2 ${index === currentSlide ? "active" : ""}`}
                >
                    <div className="hero-slide-bg">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority={index === 0}
                            quality={90}
                        />
                    </div>
                    <div className="hero-overlay-v2"></div>
                </div>
            ))}

            {/* Floating Decorative Elements */}
            <div className="hero-decor hero-decor-1"></div>
            <div className="hero-decor hero-decor-2"></div>
            <div className="hero-decor hero-decor-3"></div>

            {/* Content */}
            <div className="container hero-container-v2">
                <div className="hero-content-v2">
                    {/* Trust Badge */}
                    <div className="hero-trust-badge">
                        <span className="trust-dot"></span>
                        <span>Government Registered • 24/7 Support Available</span>
                    </div>

                    {/* Title */}
                    <h1 className="hero-title-v2">
                        {slides[currentSlide].title}{" "}
                        <span className="hero-title-highlight">
                            {slides[currentSlide].titleHighlight}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle-v2">
                        {slides[currentSlide].subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta-group">
                        <a href="tel:+919755209205" className="hero-cta hero-cta-primary">
                            <span className="cta-icon">📞</span>
                            <span className="cta-content">
                                <span className="cta-label">Call Now - Free Consultation</span>
                                <span className="cta-number">+91 9755209205</span>
                            </span>
                        </a>
                        <a
                            href="https://wa.me/919755209205?text=Hi%2C%20I%20need%20help%20with%20addiction%20treatment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cta hero-cta-secondary"
                        >
                            <span className="cta-icon">💬</span>
                            <span className="cta-content">
                                <span className="cta-label">WhatsApp Us</span>
                                <span className="cta-number">Quick Response</span>
                            </span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Lives Transformed</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Expert Support</span>
                        </div>
                    </div>
                </div>

                {/* Floating Card */}
                <div className="hero-floating-card">
                    <div className="floating-card-icon">🏥</div>
                    <div className="floating-card-content">
                        <h4>Professional Care</h4>
                        <p>Medical supervision & therapy</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button className="hero-nav hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
                ‹
            </button>
            <button className="hero-nav hero-nav-next" onClick={nextSlide} aria-label="Next slide">
                ›
            </button>

            {/* Dots with Progress */}
            <div className="hero-dots-v2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot-v2 ${index === currentSlide ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentSlide && (
                            <span
                                className="dot-progress"
                                style={{ width: `${progress}%` }}
                            ></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}
