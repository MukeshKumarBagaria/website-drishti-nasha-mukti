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
                            <a
                                href="https://www.facebook.com/people/Drishti-Nasha-Mukti-Kendra/pfbid021T31c98nNxRLeVfBgeUQWjGunpt8p6Kfd6ZxwGUMKipFXMMmj8GGwy1JES9egdjnl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/drishti38167/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
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
                                <a href="tel:+919755209205">+91 9755209205</a> <br />
                                <a href="tel:+919755369205">+91 9755369205</a>
                            </li>
                            <li>
                                <a href="mailto:drishtinashamuktikendra@gmail.com">
                                    drishtinashamuktikendra@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">Hill Crist Society, B 1, near Gangotri Heights, Chuna Bhatti, Bhopal, Madhya Pradesh 462016</a>
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
