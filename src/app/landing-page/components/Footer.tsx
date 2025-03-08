import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    useEffect(() => {
        gsap.from('.footer-left', {
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out',
        });
    }, []);

    return (
        <div className="container-footer">
            <footer className="footer">
                <div className="footer-left">
                    <Image
                        src="/icons/thunder.svg"
                        alt="logo-full"
                        width={36}
                        height={36}
                        objectFit="cover"
                        className="logo-full-mobile"
                    />
                    <span>Copyright © 2024 - All rights reserved</span>
                </div>
                <div className="footer-right">
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
            </footer>
        </div>
    );
}
