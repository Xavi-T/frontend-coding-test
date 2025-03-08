import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
    useEffect(() => {
        gsap.from('.story-content', {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: 'power3.out',
        });

        gsap.from('.story-image-container', {
            scrollTrigger: {
                trigger: '.story-image-container',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
            },
            duration: 1,
            x: 100,
            opacity: 0,
            ease: 'power3.out',
        });

        gsap.from('.story-overlay', {
            scrollTrigger: {
                trigger: '.story-overlay',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
        });

        gsap.from('.box-apply-mobile', {
            scrollTrigger: {
                trigger: '.box-apply-mobile',
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
            <div className="our-story">
                {/* Box bên trái */}
                <div className="story-content">
                    <h2 className="heading-text">
                        Our Success <br /> Stories
                    </h2>
                    <div className="box-apply">
                        <button className="btn btn-apply">Apply Now</button>{' '}
                        <p className="story-description">
                            to Start Your Journey!
                        </p>
                    </div>
                </div>

                <h2 className="heading-text-mobile">Our Success Stories</h2>
                {/* Box bên phải */}
                <div className="story-image-container">
                    <Image
                        src="/images/bg-story.png"
                        alt="Our Story"
                        layout="fill"
                        objectFit="cover"
                        className="story-bg"
                    />
                    <div className="story-overlay">
                        <p className="story-text">Uliana&apos;s Story</p>
                        <h2 className="story-title">
                            From Local to International
                        </h2>
                        <div className="story-navigation">
                            <button className="nav-btn">&lt;</button>
                            <button className="nav-btn">&gt;</button>
                        </div>
                    </div>
                </div>

                <div className="box-apply-mobile">
                    <button className="btn btn-apply">Apply Now</button>{' '}
                    <p className="story-description">to Start Your Journey!</p>
                </div>
            </div>
        </section>
    );
}
