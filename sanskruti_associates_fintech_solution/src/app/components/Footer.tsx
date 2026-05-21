import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#1F2937] text-gray-300 overflow-hidden">
      <style>{`
        /* Animated gradient background */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .footer-gradient {
          background: linear-gradient(
            135deg,
            #1F2937 0%,
            #1a2332 25%,
            #1F2937 50%,
            #1a2332 75%,
            #1F2937 100%
          );
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        /* Fade in up animation for columns */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-col-1 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.1s forwards;
        }

        .fade-in-col-2 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .fade-in-col-3 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .fade-in-col-4 {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        /* Premium link hover effect */
        .footer-link {
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #4A90E2;
          transform: translateX(4px);
        }

        /* Social icon hover effect */
        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(74, 144, 226, 0.6);
          background: #4A90E2 !important;
        }

        /* Contact icon pulse on hover */
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .contact-icon:hover {
          animation: iconPulse 0.6s ease-in-out;
        }

        /* Glowing divider line */
        .glow-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 144, 226, 0.5) 20%,
            rgba(74, 144, 226, 0.8) 50%,
            rgba(74, 144, 226, 0.5) 80%,
            transparent
          );
          box-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
        }

        /* Shimmer effect on background */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 144, 226, 0.03),
            transparent
          );
          animation: shimmer 20s ease-in-out infinite;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-gradient,
          .shimmer-overlay,
          .contact-icon:hover {
            animation: none !important;
          }

          .fade-in-col-1,
          .fade-in-col-2,
          .fade-in-col-3,
          .fade-in-col-4 {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Shimmer overlay */}
      <div className="shimmer-overlay"></div>

      {/* Main footer content with full viewport height */}
      <div className="footer-gradient relative" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: '100vh' }}>
          <div className="w-full py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Column 1: Company Info */}
              <div className={inView ? 'fade-in-col-1' : ''}>
                <div className="text-2xl text-white mb-4 font-bold">Sanskruti Associates</div>
                <p className="text-sm mb-6 leading-relaxed">
                  Your trusted partner for all loan solutions. We help you find the best deals from multiple banks with expert guidance.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="social-icon w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Column 2: Loan Services */}
              <div className={inView ? 'fade-in-col-2' : ''}>
                <h4 className="text-white mb-4 font-semibold">Loan Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="footer-link">
                      Home Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Loan Against Property
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Personal Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Business Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Educational Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Hospital Finance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Car Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      CC / OD
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Machinery Loan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Industry Finance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      School Finance
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Quick Links */}
              <div className={inView ? 'fade-in-col-3' : ''}>
                <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="footer-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      EMI Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Compare Loans
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Check Eligibility
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div className={inView ? 'fade-in-col-4' : ''}>
                <h4 className="text-white mb-4 font-semibold">Contact Info</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                    <span>Baramati Dist-Pune 413133</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="contact-icon w-5 h-5 text-[#4A90E2] flex-shrink-0" />
                    <a href="tel:+917758969798" className="footer-link">
                      +91 7758 96 9798
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="contact-icon w-5 h-5 text-[#4A90E2] flex-shrink-0" />
                    <a href="mailto:sanskruti.sss1108@gmail.com" className="footer-link">
                      sanskruti.sss1108@gmail.com
                    </a>
                  </li>
                  <li className="text-gray-400 text-xs mt-4">
                    Branches: Baramati | Pune | Mumbai | Kolhapur | Sasawad | Tembhurni
                  </li>
                </ul>
              </div>
            </div>

            {/* Glowing divider */}
            <div className="glow-divider mb-8"></div>

            {/* Copyright bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div>© 2026 Sanskruti Associates. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
                <a href="#" className="footer-link">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
