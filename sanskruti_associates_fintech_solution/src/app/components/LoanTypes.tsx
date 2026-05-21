import { Home, User, Briefcase, Car, Building2, CreditCard, Settings2, Factory, BookOpen, GraduationCap, Truck } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useNavigation } from './AppRouter';

const loanTypes = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get your dream home with attractive interest rates starting from 8.5%',
  },
  {
    icon: Home,
    title: 'Loan Against Property',
    description: 'Use your property as collateral. Get up to ₹10 Crore at 9% p.a.',
  },
  {
    icon: Briefcase,
    title: 'Personal Loan',
    description: 'Quick funds for your personal needs with no collateral required',
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Grow your business with flexible repayment options and quick approval',
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    description: 'Finance your dream education in India or abroad. Starts from 8.4% p.a.',
  },
  {
    icon: Building2,
    title: 'Hospital Finance',
    description: 'Finance hospital expansion, medical equipment, or health facility upgrades',
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'New or used car loan for salaried and self-employed. Fast approval.',
  },
  {
    icon: CreditCard,
    title: 'CC / OD Facility',
    description: 'Flexible working capital finance. Pay interest only on amount utilized. ₹1 Lakh to ₹10 Crore limit.',
  },
  {
    icon: Settings2,
    title: 'Machinery Loan',
    description: 'Finance new or used machinery for business growth. Quick approval.',
  },
  {
    icon: Factory,
    title: 'Industry Finance',
    description: 'Smart financing solutions for MSMEs and industrial businesses',
  },
  {
    icon: BookOpen,
    title: 'School Finance',
    description: 'Pay school fees, admission, books, hostel and transport. From 6.85% p.a.',
  },
  {
    icon: Truck,
    title: 'Vehicle Finance',
    description: 'Commercial, agricultural & construction vehicles. Fast approval & low rates.',
  },
  {
    icon: Building2,
    title: 'Construction Loan',
    description: 'Finance construction projects, equipment & infrastructure. Flexible terms.',
  },
];

export function LoanTypes() {
  const { navigateTo } = useNavigation();
  const navigate = useNavigate();

  const handleApply = (loanTitle: string) => {
    if (loanTitle === 'Home Loan') {
      navigate('/home-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Loan Against Property') {
      navigate('/lap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Machinery Loan') {
      navigate('/machinery-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Personal Loan') {
      navigate('/personal-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Business Loan') {
      navigate('/business-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Education Loan') {
      navigate('/education-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Hospital Finance') {
      navigate('/hospital-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Industry Finance') {
      navigate('/industry-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Car Loan') {
      navigate('/car-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'School Finance') {
      navigate('/school-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Vehicle Finance') {
      navigate('/vehicle-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'Construction Loan') {
      navigate('/construction-loan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (loanTitle === 'CC / OD Facility') {
      navigate('/cc-od-finance');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateTo('loan-application');
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.5, filter: 'blur(2px)' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(219, 234, 254, 0.75) 50%, rgba(255, 255, 255, 0.85) 100%)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">Loan Solutions for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your financial goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#1F2937] mb-3">{loan.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{loan.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <button onClick={() => handleApply(loan.title)} className="text-[#2563EB] hover:text-[#1E40AF] transition-colors flex items-center gap-2">
                    View More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button onClick={() => handleApply(loan.title)} className="rounded-lg border border-[#2563EB] px-4 py-2 text-[#2563EB] transition-colors hover:bg-blue-50">
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
