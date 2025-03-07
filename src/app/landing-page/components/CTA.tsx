import Image from 'next/image';

export default function CTA() {
    return (
        <div className="banner-container">
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
        </div>
    );
}
