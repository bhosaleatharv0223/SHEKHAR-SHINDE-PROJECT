import { CheckCircle2 } from 'lucide-react';
import { useNavigation } from './AppRouter';
import { useEffect, useState } from 'react';

export function Hero() {
  const { navigateTo } = useNavigation();
  const [activeVideo, setActiveVideo] = useState(0);
  const scrollToLoans = () => {
    document.getElementById('loan-services-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const backgroundVideos = [
    { src: '/hero-video.mp4', title: 'Coin video' },
    { src: '/Indian_couple_holding_documents_%E2%80%A6_202605182300.mp4', title: 'Indian couple video' },
    { src: '/Indian_businessman_communicating%E2%80%A6_202605191320.mp4', title: 'Indian businessman video' },
    { src: '/Your_Role__You_are_a_202605191349.mp4', title: 'Extra finance video' },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % backgroundVideos.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [backgroundVideos.length]);

  return (
    <section className="relative bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundVideos.map((video, index) => (
          <video
            key={video.src}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover scale-[1.1] transition-opacity duration-1000 ease-linear ${
              index === activeVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ objectPosition: 'center center' }}
          />
        ))}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.65) 0%, rgba(37, 99, 235, 0.45) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-20">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
              <span className="text-sm">Trusted by 1000+ customers</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Get the Best Loan Deals from Multiple Banks
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Fast approval, competitive interest rates, and expert guidance. Compare loan offers from top banks and choose the best deal tailored for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToLoans} className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-lg transition-colors shadow-lg">
                Apply Now
              </button>
              <button onClick={() => navigateTo('emi-calculator')} className="bg-white hover:bg-gray-100 text-[#2563EB] px-8 py-4 rounded-lg transition-colors shadow-lg">
                Check EMI
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl">1000+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl">₹500Cr+</div>
                <div className="text-sm text-blue-200">Loans Disbursed</div>
              </div>
              <div>
                <div className="text-3xl">200+</div>
                <div className="text-sm text-blue-200">Bank Partners</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
