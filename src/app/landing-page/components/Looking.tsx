import Image from 'next/image';

export default function Looking() {
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
