import HeroImage from '@/../public/assets/landing/hero.jpg';
import Header from '@/components/layout/Header';

export default function Hero() {
    return (
        <div className="h-[600px] bg-cover bg-no-repeat rounded-xl overflow-hidden" style={{ backgroundImage: `url(${HeroImage.src})` }}>
            <div className="flex flex-col justify-between  gap-5 p-5 bg-gradient-to-b from-black/70 to-transparent h-full">
                <Header />
            </div>
        </div>
    );
}
