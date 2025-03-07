import '@/styles/mainPage.scss';
import Header from './components/Header';
import CTA from './components/CTA';
import OurModels from './components/OurModels';
import OurStory from './components/OurStory';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <CTA />
            <OurModels />
            <OurStory />
            <div style={{ height: 300 }}></div>
        </div>
    );
}
