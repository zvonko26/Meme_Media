import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.9)' }}
            >
                <source src="/assets/videos/20250330_1524_Gorilla Graffiti Masterpiece_simple_compose_01jqkkjej6e398ftyja8f6zg8c.mp4" type="video/mp4" />
            </video>

            {/* Dodajem blagi overlay za bolji kontrast */}
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
};

export default Hero; 