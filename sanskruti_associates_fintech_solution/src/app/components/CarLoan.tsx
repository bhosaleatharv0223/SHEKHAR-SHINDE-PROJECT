import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Calculator,
  Car,
  CarFront,
  CheckCircle2,
  Clock,
  IndianRupee,
  TrendingUp,
  Zap,
} from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Interest Rate',
    value: 'From 8.5% p.a.',
    sub: 'Competitive rates from top banks',
  },
  {
    icon: IndianRupee,
    title: 'Loan Amount',
    value: 'Up to 100% On-road',
    sub: 'New car - up to full on-road price',
  },
  {
    icon: Clock,
    title: 'Tenure',
    value: 'Up to 7 Years',
    sub: 'Flexible repayment options',
  },
  {
    icon: Zap,
    title: 'Approval',
    value: 'Same Day',
    sub: 'Fast processing, quick disbursal',
  },
];

const loanTypes = [
  {
    icon: Car,
    color: '#2563EB',
    title: 'New Car - Salaried',
    lines: [
      'Best rates for salaried employees',
      'Min salary Rs.25,000/month',
      'Fast approval with salary slips',
    ],
  },
  {
    icon: Car,
    color: '#16A34A',
    title: 'New Car - Self Employed',
    lines: [
      'Business owners and freelancers',
      'ITR-based eligibility',
      'GST registration preferred',
    ],
  },
  {
    icon: CarFront,
    color: '#2563EB',
    title: 'Used Car - Salaried',
    lines: [
      'Pre-owned vehicle finance',
      'Car not older than 10 years',
      'RC and insurance required',
    ],
  },
  {
    icon: CarFront,
    color: '#16A34A',
    title: 'Used Car - Self Employed',
    lines: [
      'Used car for business owners',
      'ITR-based income assessment',
      'Quick documentation process',
    ],
  },
];

const features = [
  ['New Car Amount', 'Up to 100% on-road price'],
  ['Used Car Amount', 'Up to 80-85% of car value'],
  ['Interest Rate', '8.5%-15% p.a. based on profile'],
  ['Processing Fee', '0.5%-1% or flat as per lender'],
  ['Tenure', '12 to 84 months flexible'],
  ['Approval', 'Same day to 48 hours'],
];

const salariedEligibility = [
  'Age: 21 to 60 years',
  'Minimum salary: Rs.25,000/month',
  'Employment: Minimum 1 year',
  'Credit Score: 700+ preferred',
  'Employment type: Govt or Private',
];

const selfEmployedEligibility = [
  'Age: 21 to 65 years',
  'Business vintage: 2+ years',
  'ITR: Minimum 2 years filed',
  'Credit Score: 700+ preferred',
  'GST registration preferred',
];

const documentTabs = [
  {
    label: 'New Car - Salaried',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Income Documents',
        color: '#16A34A',
        docs: [
          'Salary Slips for last 3 months *',
          'Bank Statements for last 6 months *',
          'Form 16 for last 2 years *',
          'Office ID Card / Employee ID *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['Car Quotation from Dealer *'],
      },
    ],
  },
  {
    label: 'New Car - Self Employed',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Business + Income',
        color: '#16A34A',
        docs: [
          'ITR for last 2-3 years *',
          'Bank Statements last 6-12 months *',
          'GST Registration Certificate *',
          'Business Proof *',
          'Ownership / Business Address Proof *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['Car Quotation from Dealer *'],
      },
    ],
  },
  {
    label: 'Used Car - Salaried',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Income Documents',
        color: '#16A34A',
        docs: [
          'Salary Slips for last 3 months *',
          'Bank Statements for last 6 months *',
          'Form 16 for last 2 years *',
          'Office ID Card *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['RC of the Vehicle *', 'Insurance Copy of the Vehicle *'],
      },
    ],
  },
  {
    label: 'Used Car - Self Employed',
    sections: [
      {
        title: 'KYC Documents',
        color: '#2563EB',
        docs: ['PAN Card *', 'Aadhaar Card *', 'Address Proof *', 'Passport-size Photo *'],
      },
      {
        title: 'Business + Income',
        color: '#16A34A',
        docs: [
          'ITR for last 2-3 years *',
          'Bank Statements last 6-12 months *',
          'GST Registration Certificate *',
          'Business Proof *',
          'Ownership Proof *',
        ],
      },
      {
        title: 'Vehicle Documents',
        color: '#F97316',
        docs: ['RC of the Vehicle *', 'Insurance Copy of the Vehicle *'],
      },
    ],
  },
];

function CarLoanEmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('800000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [tenure, setTenure] = useState('60');

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(tenure);

    if (principal && monthlyRate && months) {
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      return Math.round(emi);
    }

    return 0;
  };

  const emi = calculateEMI();
  const totalAmount = emi * parseFloat(tenure);
  const principal = parseFloat(loanAmount) || 0;
  const totalInterest = totalAmount - principal;
  const interestShare =
    totalAmount > 0 ? Math.max(0, Math.min(100, (totalInterest / totalAmount) * 100)) : 0;

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/70">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[#1F2937]">EMI Calculator</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Calculate your monthly installment and plan your car loan better
              </p>

              <div className="space-y-6">
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} />
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" step="0.1" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" type="number" value={tenure} onChange={(event) => setTenure(event.target.value)} />
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
              <h3 className="text-xl mb-8">Your EMI Breakdown</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-4">
                <div className="text-sm text-blue-200 mb-1">Monthly EMI</div>
                <div className="text-3xl lg:text-4xl">Rs.{emi.toLocaleString('en-IN')}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Principal Amount</div>
                  <div className="text-lg">Rs.{principal.toLocaleString('en-IN')}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Total Interest</div>
                  <div className="text-lg">Rs.{Math.round(totalInterest || 0).toLocaleString('en-IN')}</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-xs text-blue-200 mb-1">Total Amount Payable</div>
                <div className="text-xl">Rs.{Math.round(totalAmount || 0).toLocaleString('en-IN')}</div>
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-[#16A34A]" style={{ width: `${100 - interestShare}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CarLoan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const goToApplication = () => {
    navigate('/car-loan/apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEligibility = () => {
    document.getElementById('car-loan-eligibility')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EFF6FF]">
      <div className="absolute inset-0 z-0">
        <img src="/src/imports/ChatGPT_Image_May_3,_2026,_08_35_36_PM.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90" />
      </div>

      <div className="relative z-10">
        <section className="relative min-h-screen overflow-hidden text-white bg-[#0F172A]">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-125 sm:scale-110"
            src="/Your_Role__You_are_a_202605172311 (1).mp4"
            autoPlay
            muted
            loop
            playsInline
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-[#0F172A]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-sm text-blue-50">New & Used Car Finance Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-5">Car Loan</h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                New or used car - fast approval, minimal paperwork, competitive rates for salaried and self-employed
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={goToApplication} className="px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg transition-colors shadow-lg">
                  Apply Now
                </button>
                <button onClick={goToEligibility} className="px-8 py-4 border-2 border-[#60A5FA] text-white hover:bg-white/10 rounded-lg transition-colors">
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#2563EB] mb-4" />
                    <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                    <h3 className="text-xl text-[#1F2937] mb-2">{item.value}</h3>
                    <p className="text-gray-600 text-sm">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl mb-8">New Car or Used Car - We Finance Both</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                Get a car loan for any new car from any authorised dealer. Finance up to 100% of the on-road price with competitive interest rates and flexible tenure up to 7 years.
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                Looking for a used car? We also finance pre-owned vehicles. Loan amount depends on car age, condition, and valuation. Quick approval for salaried and self-employed applicants.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-10">Choose Your Car Loan Type</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {loanTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:-translate-y-1 transition-all">
                    <Icon className="w-9 h-9 mb-4" style={{ color: item.color }} />
                    <h3 className="text-xl text-[#1F2937] mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.lines.map((line) => (
                        <li key={line} className="flex gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-10">Loan Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(([title, value]) => (
                <div key={title} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg">
                  <p className="text-sm text-[#2563EB] mb-2">{title}</p>
                  <p className="text-lg text-[#1F2937]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="car-loan-eligibility" className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-10">Basic Eligibility</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {[['Salaried', salariedEligibility], ['Self Employed', selfEmployedEligibility]].map(([title, items]) => (
                <div key={title as string} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/70 shadow-lg">
                  <h3 className="text-xl text-[#1F2937] mb-5">{title as string}</h3>
                  <ul className="space-y-3">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-8">Documents Required</h2>
            <div className="flex flex-wrap gap-4 border-b border-gray-300 mb-8">
              {documentTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`pb-3 transition-colors border-b-2 ${activeTab === index
                      ? 'border-[#2563EB] text-[#2563EB]'
                      : 'border-transparent text-gray-500 hover:text-[#2563EB]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {documentTabs[activeTab].sections.map((section) => (
                <div key={section.title} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg">
                  <h3 className="text-lg mb-4" style={{ color: section.color }}>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.docs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CarLoanEmiCalculator />

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#2563EB] to-[#0F172A] text-white rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
              <h2 className="text-3xl lg:text-4xl mb-3">Drive Home Your Dream Car Today</h2>
              <p className="text-blue-100 mb-8">New or used - we finance both</p>
              <button onClick={goToApplication} className="px-10 py-5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl transition-colors shadow-xl text-lg animate-pulse">
                Apply for Car Loan
              </button>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-blue-50">
                <span>100% Secure</span>
                <span>New & Used Cars</span>
                <span>Same Day Approval</span>
                <span>Best Rates Guaranteed</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
