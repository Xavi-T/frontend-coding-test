import '@/styles/mainPage.scss';
import Header from './components/Header';
import CTA from './components/CTA';
import OurModels from './components/OurModels';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <CTA />
            <OurModels />
        </div>
    );
}
