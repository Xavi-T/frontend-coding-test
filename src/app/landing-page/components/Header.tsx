import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    useEffect(() => {
        gsap.from('.header', {
            duration: 1,
            y: -100,
            opacity: 0,
            ease: 'bounce',
        });
        gsap.from('.nav-item', {
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.2,
        });
    }, []);

    return (
        <div className="container">
            <header className="header">
                <div className="header-layer-content">
                    {/* Mobile Header */}
                    <ArrowLeft
                        className="icon back-icon mobile-icon"
                        size={24}
                    />
                    <Menu className="icon menu-icon mobile-icon" size={24} />

                    {/* Desktop Header */}
                    <div className="logo-welte">
                        <Image
                            src="/images/logo-welte.png"
                            alt="logo-welte"
                            width={142}
                            height={48}
                        />
                    </div>
                    <button className="btn btn-start">Start You</button>
                </div>
                <div className="header-layer-menu">
                    {/* Mobile Navigation */}
                    <div className="logo-welte-mobile">
                        <Image
                            src="/images/logo-welte.png"
                            alt="logo-welte"
                            width={142}
                            height={48}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav">
                        <Link href="/" className="nav-item">
                            Home
                        </Link>
                        <div className="nav-item dropdown-container">
                            <div className="dropdown-trigger">
                                For Models
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
                                    Profile
                                </Link>
                                <Link
                                    href="/models/jobs"
                                    className="dropdown-item"
                                >
                                    Jobs
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown-container">
                            <div className="dropdown-trigger">
                                For Clients
                                <ChevronDown
                                    className="dropdown-icon"
                                    size={14}
                                />
                            </div>
                            <div className="dropdown">
                                <Link
                                    href="/clients/hire"
                                    className="dropdown-item"
                                >
                                    Hire
                                </Link>
                                <Link
                                    href="/clients/services"
                                    className="dropdown-item"
                                >
                                    Services
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
