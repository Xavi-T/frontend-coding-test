import '@/styles/mainPage.scss';
import Header from './components/Header';
import CTA from './components/CTA';
import OurModels from './components/OurModels';
import OurStory from './components/OurStory';
import WhyChooseUs from './components/WhyChooseUs';
import Looking from './components/Looking';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <CTA />
            <OurModels />
            <OurStory />
            <WhyChooseUs />
            <Looking />
            <div style={{ height: 300 }}></div>
        </div>
    );
}
