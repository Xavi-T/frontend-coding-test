import Image from 'next/image';

export default function OurStory() {
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
                        <p className="story-text">Uliana's Story</p>
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
