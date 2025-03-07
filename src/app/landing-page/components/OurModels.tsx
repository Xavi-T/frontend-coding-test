import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const models = [
    {
        id: 1,
        name: 'SIMON D.',
        age: 22,
        image: '/images/models/model-1.png',
        national: 'Dubai',
    },
    {
        id: 2,
        name: 'CHRISTINE V.',
        age: 25,
        image: '/images/models/model-2.png',
        national: 'Burj Khalifa',
    },
    {
        id: 3,
        name: 'DARON M.',
        age: 23,
        image: '/images/models/model-3.png',
        national: 'Dubai',
    },
    {
        id: 4,
        name: 'VERONICA BR.',
        age: 26,
        image: '/images/models/model-4.png',
        national: 'Dubai',
    },
    {
        id: 5,
        name: 'SIMON D.',
        age: 22,
        image: '/images/models/model-1.png',
        national: 'Dubai',
    },
    {
        id: 6,
        name: 'CHRISTINE V.',
        age: 25,
        image: '/images/models/model-2.png',
        national: 'Burj Khalifa',
    },
    {
        id: 7,
        name: 'DARON M.',
        age: 23,
        image: '/images/models/model-3.png',
        national: 'Dubai',
    },
    {
        id: 8,
        name: 'VERONICA BR.',
        age: 26,
        image: '/images/models/model-4.png',
        national: 'Dubai',
    },
];

export default function OurModels() {
    return (
        <section className="container">
            <div className="our-models">
                <div className="our-models-header">
                    <h2 className="heading-text">Meet Our Models</h2>
                    <button className="btn view-all">
                        View All <ArrowRight size={20} />
                    </button>
                    <ArrowRight className="btn-view-all-mobile" size={32} />
                </div>

                <div className="models-list">
                    {models.map((model) => (
                        <div key={model.id} className="model-card">
                            <Image
                                src={model.image}
                                alt={model.name}
                                width={200}
                                height={300}
                                className="model-image"
                            />
                            <div className="model-info">
                                <h3 className="model-name">{model.name}</h3>
                                <p className="model-national">
                                    {model.national}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
