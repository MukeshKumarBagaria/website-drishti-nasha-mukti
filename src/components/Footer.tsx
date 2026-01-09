"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const scrollToSection = (id: string) => {
        // Basic smooth scroll if on homepage, otherwise link navigation handles it
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = `/#${id}`;
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link href="/" className="navbar-logo">
                            <Image
                                src="/logo.jpeg"
                                alt="Drishti Logo"
                                width={60}
                                height={60}
                                style={{ borderRadius: "12px" }}
                            />
                        </Link>
                        <p>
                            Drishti Nasha Mukti Evam Manochikitsa Kendra is dedicated to helping individuals
                            overcome addiction through compassionate care.
                        </p>
                        <div className="footer-social">
                            {/* Add social links here if needed */}
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="YouTube">▶️</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <a href="/#services" onClick={(e) => {
                                    // Only prevent default if we sort of handle it, but simple href is safer for cross-page
                                    // Letting default behavior happen for simplicity unless same page
                                }}>Our Services</a>
                            </li>
                            <li>
                                <Link href="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <a href="/#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="/#services">Alcohol De-Addiction</a>
                            </li>
                            <li>
                                <a href="/#services">Drug De-Addiction</a>
                            </li>
                            <li>
                                <a href="/#services">Mental Health Care</a>
                            </li>
                            <li>
                                <a href="/#services">Family Counseling</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact Info</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="tel:+919755209205">+91 9755209205</a>
                            </li>
                            <li>
                                <a href="mailto:drishtinashamuktikendra@gmail.com">
                                    drishtinashamuktikendra@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">New Delhi, India</a>
                            </li>
                            <li>
                                <a href="#">24/7 Helpline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        © 2025 Drishti Nasha Mukti Evam Manochikitsa Kendra. All rights
                        reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/sitemap-page">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
