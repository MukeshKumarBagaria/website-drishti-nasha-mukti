"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const galleryItems = [
        // Events
        {
            id: 1,
            type: "image",
            category: "events",
            title: "It was a great honor and privilege to welcome Padma Shri Agus Indra Udayana. Your presence inspired us and added immense value to this occasion. In an international conference in Bhopal MP",
            size: "large",
            src: "/events/event-1.jpeg"
        },
        {
            id: 2,
            type: "image",
            category: "events",
            title: "Congratulations 🎉 on the very first sensitisation program and training on screen time consequences (Addiction) in Madhya Pradesh in the auspicious presence of the State Health Minister.",
            size: "large",
            src: "/events/event-2.jpeg"
        },
        // Rehab Center Images
        { id: 13, type: "image", category: "rehab-center", title: "Rehab Centre View 1", size: "large", src: "/centre/1.jpeg" },
        { id: 14, type: "image", category: "rehab-center", title: "Rehab Centre View 2", size: "medium", src: "/centre/2.jpeg" },
        { id: 15, type: "image", category: "rehab-center", title: "Rehab Centre View 3", size: "medium", src: "/centre/3.jpeg" },
        { id: 16, type: "image", category: "rehab-center", title: "Rehab Centre View 4", size: "small", src: "/centre/4.jpeg" },
        { id: 17, type: "image", category: "rehab-center", title: "Rehab Centre View 5", size: "small", src: "/centre/5.jpeg" },
        { id: 18, type: "image", category: "rehab-center", title: "Rehab Centre View 6", size: "large", src: "/centre/6.jpeg" },
        { id: 19, type: "image", category: "rehab-center", title: "Rehab Centre View 7", size: "medium", src: "/centre/7.jpeg" },
        { id: 20, type: "image", category: "rehab-center", title: "Rehab Centre View 8", size: "small", src: "/centre/8.jpeg" },
        { id: 21, type: "image", category: "rehab-center", title: "Rehab Centre View 9", size: "medium", src: "/centre/9.jpeg" },
        { id: 22, type: "image", category: "rehab-center", title: "Rehab Centre View 10", size: "large", src: "/centre/10.jpeg" },
        { id: 23, type: "image", category: "rehab-center", title: "Rehab Centre View 11", size: "small", src: "/centre/11.jpeg" },
        { id: 24, type: "image", category: "rehab-center", title: "Rehab Centre View 12", size: "medium", src: "/centre/12.jpeg" },
    ];

    const filters = [
        { id: "all", label: "All" },
        { id: "rehab-center", label: "Rehab Center" },
        { id: "events", label: "Events" },
        { id: "facilities", label: "Facilities" },
        { id: "therapy", label: "Therapy Sessions" },
    ];

    const filteredItems = activeFilter === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % filteredItems.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    return (
        <>
            {/* Navbar */}
            {/* Navbar moved to layout */}

            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-badge green">Our Gallery</div>
                        <h1>Moments of <span className="green">Transformation</span></h1>
                        <p>Explore our vibrant collection of events, facilities, and therapy sessions that make Drishti a place of healing and hope.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section section">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="gallery-filters">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`gallery-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Bento Grid or Coming Soon */}
                    {filteredItems.length > 0 ? (
                        <div className="bento-grid">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`bento-item bento-${item.size}`}
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="bento-item-inner">
                                        <div className="bento-placeholder">
                                            {item.src ? (
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            ) : (
                                                <span className="bento-icon">
                                                    {item.category === 'events' ? '🎉' :
                                                        item.category === 'facilities' ? '🏥' :
                                                            item.category === 'rehab-center' ? '🏢' : '🧘'}
                                                </span>
                                            )}
                                        </div>
                                        <div className="bento-overlay">
                                            <span className="bento-category">{item.category}</span>
                                            <h3 className="bento-title">{item.title}</h3>
                                            <span className="bento-view">Click to view</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="coming-soon">
                            <div className="coming-soon-icon">🚀</div>
                            <h2>Coming Soon</h2>
                            <p>We are currently curating the best moments for this section. Stay tuned!</p>
                        </div>
                    )}

                    {/* Upload Notice */}
                    <div className="gallery-notice">
                        <div className="notice-icon">📸</div>
                        <p>Want to add your event photos? Contact us to share your recovery journey and inspire others!</p>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>×</button>
                    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-placeholder">
                            {filteredItems[currentImage]?.src ? (
                                <Image
                                    src={filteredItems[currentImage].src!}
                                    alt={filteredItems[currentImage].title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="90vw"
                                />
                            ) : (
                                <>
                                    <span className="lightbox-icon">
                                        {filteredItems[currentImage]?.category === 'events' ? '🎉' :
                                            filteredItems[currentImage]?.category === 'facilities' ? '🏥' :
                                                filteredItems[currentImage]?.category === 'rehab-center' ? '🏢' : '🧘'}
                                    </span>
                                    <h3>{filteredItems[currentImage]?.title}</h3>
                                    <p>Image placeholder - Add your photos here</p>
                                </>
                            )}
                        </div>
                    </div>
                    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
                    <div className="lightbox-counter">{currentImage + 1} / {filteredItems.length}</div>
                </div>
            )}

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Start Your Recovery Journey Today</h2>
                        <p>
                            Every image here represents a story of hope and transformation.
                            Your story could be next.
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
