"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/centre/4.jpeg",
        title: "Begin Your Journey to a Nasha Mukt Life",
        subtitle: "Compassionate care and evidence-based treatment for a healthier tomorrow.",
        cta: "Start Recovery Today"
    },
    {
        id: 2,
        image: "/centre/10.jpeg",
        title: "Holistic Healing for Mind and Body",
        subtitle: "Expert medical detox, therapy, and yoga sessions in a serene environment.",
        cta: "Explore Our Services"
    },
    {
        id: 3,
        image: "/centre/WhatsApp Image 2026-01-09 at 13.05.59.jpeg",
        title: "Reclaim Your Life with Support",
        subtitle: "Join a community dedicated to your lasting recovery and mental wellness.",
        cta: "Contact Us Now"
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                >
                    <div className="hero-slide-image">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority={index === 0}
                        />
                        <div className="hero-overlay"></div>
                    </div>
                    <div className="container">
                        <div className="hero-slide-content">
                            <h1 className="hero-title">{slide.title}</h1>
                            <p className="hero-subtitle">{slide.subtitle}</p>
                            <div className="hero-buttons">
                                <a
                                    href="tel:+919755209205"
                                    className="btn btn-green"
                                >
                                    📞 +91 9755209205
                                </a>
                                <a
                                    href="tel:+919755369205"
                                    className="btn btn-white"
                                >
                                    📞 +91 9755369205
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`hero-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}
