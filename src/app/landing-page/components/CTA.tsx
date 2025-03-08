import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function CTA() {
    useEffect(() => {
        gsap.from('.cta-overlay', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out',
        });
        gsap.from('.heading-text', {
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.2,
        });
        gsap.from('.heading-description', {
            duration: 1,
            x: 100,
            opacity: 0,
            delay: 0.5,
        });
    }, []);

    return (
        <section className="banner-container">
            <div className="cta">
                <div className="cta-overlay">
                    <div>
                        <h6 className="heading-text">Unlock Your</h6>
                        <h6 className="heading-text">Modeling Potential</h6>
                    </div>
                    <p className="heading-description">
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </p>
                    <button className="btn btn-apply">Apply Now</button>
                </div>
                <div className="img-container">
                    <Image
                        src="/images/banner.png"
                        alt="CTA Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
    );
}
