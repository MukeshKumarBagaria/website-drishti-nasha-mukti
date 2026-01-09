"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false); // Close mobile menu on click
        if (pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // If not on home page, navigate to home with hash
            window.location.href = `/#${id}`;
        }
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-inner">
                    <Link href="/" className="navbar-logo">
                        <Image
                            src="/logo.jpeg"
                            alt="Drishti Logo"
                            width={45}
                            height={45}
                            style={{ borderRadius: "10px" }}
                        />
                        <span className="navbar-logo-text">
                            Drishti <span>Nasha Mukti</span>
                        </span>
                    </Link>
                    <ul className={`navbar-menu ${isMobileMenuOpen ? "mobile-visible" : ""}`}>
                        <li>
                            <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`navbar-link ${pathname === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#services"
                                className="navbar-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("services");
                                }}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <Link href="/gallery" className={`navbar-link ${pathname === '/gallery' ? 'active' : ''}`}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className={`navbar-link ${pathname === '/team' ? 'active' : ''}`}>
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/freedom-calculator" className={`navbar-link ${pathname === '/freedom-calculator' ? 'active' : ''}`}>
                                Calculator
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                className="navbar-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("contact");
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <button
                                className="navbar-cta"
                                onClick={() => scrollToSection("contact")}
                            >
                                Get Help Now
                            </button>
                        </li>
                    </ul>
                    <button
                        className="mobile-menu-btn"
                        aria-label="Menu"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Styles */}
            <style jsx>{`
        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 24px;
            gap: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            align-items: stretch;
            text-align: center;
          }
          
          .navbar-menu.mobile-visible {
            display: flex;
            animation: slideDown 0.3s ease forwards;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </nav>
    );
}
