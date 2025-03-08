import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Looking() {
    useEffect(() => {
        gsap.from('.looking-bg', {
            duration: 1,
            scale: 1.2,
            opacity: 0,
            ease: 'power3.out',
        });

        gsap.from('.looking-content', {
            scrollTrigger: {
                trigger: '.looking-content',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section className="container">
            <div className="looking">
                <Image
                    src="/images/looking-bg.png"
                    alt="Looking for Models"
                    layout="fill"
                    objectFit="cover"
                    className="looking-bg"
                />
                <div className="looking-content">
                    <h2 className="looking-title">Looking for Models?</h2>
                    <p className="looking-description">
                        Find the Perfect Model for Your Brand
                    </p>
                    <button className="btn contact-btn">
                        Contact Our Team
                    </button>
                </div>
            </div>
        </section>
    );
}
