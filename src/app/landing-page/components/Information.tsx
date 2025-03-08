import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
    useEffect(() => {
        gsap.from('.info-column', {
            scrollTrigger: {
                trigger: '.info-column',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
            },
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section className="container-information">
            <div className="information">
                <div className="info-column info-a">
                    <Image
                        src="/images/logo-full.png"
                        alt="logo-full"
                        width={248}
                        height={52}
                        objectFit="cover"
                        className="logo-full"
                    />
                    <Image
                        src="/icons/thunder.svg"
                        alt="logo-full"
                        width={52}
                        height={52}
                        objectFit="cover"
                        className="logo-full-mobile"
                    />
                    <h3 className="info-title mark">WELTENTERS FZ LLC</h3>
                    <p className="info-subtitle">Contact Us</p>
                    <p className="info-subtitle">Privacy Policy</p>
                    <button className="btn-signin">Sign In</button>
                </div>
                <div className="info-column info-b">
                    <h3 className="info-title">FOR MODELS</h3>
                    <p className="info-subtitle">Apply Now</p>
                    <p className="info-subtitle">FAQs for Applicants</p>
                </div>
                <div className="info-column info-c">
                    <h3 className="info-title">FOR CLIENTS</h3>
                    <p className="info-subtitle">Hire a Model</p>
                    <p className="info-subtitle">Success Stories</p>
                </div>
                <div className="info-column info-d">
                    <h3 className="info-title info-title-last">SOCIAL</h3>
                    <div>
                        <Image
                            src="/images/socials/instagram.png"
                            alt="icon-full"
                            width={24}
                            height={24}
                            objectFit="cover"
                            className="social-icon"
                        />
                        <Image
                            src="/images/socials/youtube.png"
                            alt="icon-full"
                            width={24}
                            height={24}
                            objectFit="cover"
                            className="social-icon"
                        />
                        <Image
                            src="/images/socials/tiktok.png"
                            alt="icon-full"
                            width={24}
                            height={24}
                            objectFit="cover"
                            className="social-icon"
                        />
                    </div>

                    <nav className="nav">
                        <div className="nav-item dropdown-container">
                            <div className="dropdown-trigger">
                                English
                                <ChevronDown
                                    className="dropdown-icon"
                                    size={14}
                                />
                            </div>
                            <div className="dropdown">
                                <Link
                                    href="/models/profile"
                                    className="dropdown-item"
                                >
                                    Vietnamese
                                </Link>
                                <Link
                                    href="/models/jobs"
                                    className="dropdown-item"
                                >
                                    Korean
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}
