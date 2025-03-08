import Image from 'next/image';

export default function WhyChooseUs() {
    return (
        <section className="banner-container why-choose-container">
            <div className="cta">
                <div className="why-choose-overlay">
                    <div>
                        <h6 className="heading-text">Why Choose</h6>
                    </div>
                    <Image
                        src="/images/logo-full.png"
                        alt="logo-full"
                        width={303}
                        height={80}
                        objectFit="cover"
                        className="logo-full"
                    />
                    <div className="row-tick">
                        <Image
                            src="/icons/tick.svg"
                            alt="tick"
                            width={20}
                            height={20}
                            objectFit="cover"
                        />
                        <p className="text-description">
                            Access global opportunities
                        </p>
                    </div>
                    <div className="row-tick">
                        <Image
                            src="/icons/tick.svg"
                            alt="tick"
                            width={20}
                            height={20}
                            objectFit="cover"
                        />
                        <p className="text-description">
                            Join a supportive and professional team
                        </p>
                    </div>
                    <div className="row-tick">
                        <Image
                            src="/icons/tick.svg"
                            alt="tick"
                            width={20}
                            height={20}
                            objectFit="cover"
                        />
                        <p className="text-description">
                            Get featured in high-profile events and campaigns
                        </p>
                    </div>
                </div>
                <div className="img-container-why-choose">
                    <Image
                        src="/images/why-choose-us.png"
                        alt="Why-choose-us"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
    );
}
