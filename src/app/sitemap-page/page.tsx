"use client";

import Link from "next/link";

const siteLinks = [
    {
        category: "Main Pages",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Gallery", href: "/gallery" },
            { name: "Our Team", href: "/team" },
            { name: "Freedom Calculator", href: "/freedom-calculator" },
        ],
    },
    {
        category: "Services",
        links: [
            { name: "Alcohol De-Addiction", href: "/#services" },
            { name: "Drug De-Addiction", href: "/#services" },
            { name: "Mental Health Care", href: "/#services" },
            { name: "Family Counseling", href: "/#services" },
            { name: "Aftercare Program", href: "/#services" },
        ],
    },
    {
        category: "Contact",
        links: [
            { name: "Contact Form", href: "/#contact" },
            { name: "Call: +91 9755209205", href: "tel:+919755209205" },
            { name: "WhatsApp", href: "https://wa.me/919755209205" },
        ],
    },
    {
        category: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
        ],
    },
];

export default function Sitemap() {
    return (
        <main className="sitemap-page">
            <div className="container">
                <div className="sitemap-header" data-aos="fade-up">
                    <h1>Sitemap</h1>
                    <p>Find your way around our website</p>
                </div>

                <div className="sitemap-grid" data-aos="fade-up" data-aos-delay="100">
                    {siteLinks.map((section, idx) => (
                        <div key={idx} className="sitemap-section">
                            <h2>{section.category}</h2>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="sitemap-back">
                    <Link href="/">← Back to Home</Link>
                </div>
            </div>

            <style jsx>{`
        .sitemap-page { padding: 120px 0 60px; min-height: 100vh; background: #f8fafc; }
        .sitemap-header { text-align: center; margin-bottom: 48px; }
        .sitemap-header h1 { font-size: 2.5rem; color: #1f2937; margin-bottom: 8px; }
        .sitemap-header p { color: #6b7280; }
        .sitemap-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; max-width: 1000px; margin: 0 auto; }
        .sitemap-section { background: white; padding: 28px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .sitemap-section h2 { font-size: 1.1rem; color: #10b981; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        .sitemap-section ul { list-style: none; padding: 0; margin: 0; }
        .sitemap-section li { margin-bottom: 12px; }
        .sitemap-section a { color: #4b5563; text-decoration: none; transition: color 0.2s; }
        .sitemap-section a:hover { color: #10b981; }
        .sitemap-back { text-align: center; margin-top: 48px; }
        .sitemap-back a { color: #10b981; font-weight: 500; }
      `}</style>
        </main>
    );
}
