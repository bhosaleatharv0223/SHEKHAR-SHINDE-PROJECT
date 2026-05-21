import { motion } from "motion/react";
import { Home as HomeIcon, Users, TrendingUp, Award, Building2, Zap, DollarSign, Headphones, Phone, MessageCircle, Star, ChevronRight, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const services = [
  { icon: 'SA', name: 'Home Loan', desc: 'Affordable housing loans with best rates' },
  { icon: 'SA', name: 'Loan Against Property', desc: 'Unlock your property value' },
  { icon: 'SA', name: 'Personal & Personal & Business Loan', desc: 'Funding support for personal and business needs' },
  { icon: 'SA', name: 'Car Loan', desc: 'Drive your dream car with easy EMIs' },
  { icon: 'SA', name: 'CC / OD', desc: 'Working capital support through CC and OD facilities' },
  { icon: 'SA', name: 'Machinery Loan', desc: 'Finance industrial equipment' },
];

const whyChooseUs = [
  { icon: Building2, title: 'Multiple Banks', desc: 'Access to 20+ banks and NBFCs', color: '#2563EB' },
  { icon: Zap, title: 'Fast Approval', desc: 'Loan approval in 48 hours', color: '#16A34A' },
  { icon: DollarSign, title: 'Best Rates', desc: 'Lowest interest rates guaranteed', color: '#2563EB' },
  { icon: Headphones, title: 'Expert Team', desc: 'Dedicated loan experts', color: '#16A34A' },
];

const team = [
  { name: 'Shekhar Shinde', designation: 'President', phone: '7758 96 9798', email: 'sanskruti.sss1108@gmail.com' },
];

const branches = [
  {
    name: 'Baramati',
    tag: 'HEAD OFFICE',
    address: 'Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133',
  },
  { name: 'Pune', tag: 'BRANCH', address: 'Pune, Maharashtra' },
  { name: 'Mumbai', tag: 'BRANCH', address: 'Mumbai, Maharashtra' },
  { name: 'Kolhapur', tag: 'BRANCH', address: 'Kolhapur, Maharashtra' },
];

const testimonials = [
  { name: 'Shekhar Shinde', loanType: 'Home Loan', text: 'Sanskruti Associates helped me get the best home loan deal. The process was smooth and transparent. Highly recommended!', rating: 5 },
  { name: 'Shekhar Shinde', loanType: 'Personal & Personal & Business Loan', text: 'Got my Personal & Personal & Business Loan approved in just 2 days! The team was very professional and supportive throughout.', rating: 5 },
  { name: 'Shekhar Shinde', loanType: 'Personal & Business Loan', text: 'Excellent service! They helped me compare multiple banks and saved lakhs in interest. Thank you team!', rating: 5 },
];

export function AboutUs() {
  const shimmerStyle = `
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `;

  return (
    <div className="min-h-screen" style={{ background: '#EFF6FF' }}>
      <style>{shimmerStyle}</style>
      
      {/* Premium Hero Banner */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        {/* Layer 1 - Background Image/Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/about-bg.jpg"
            alt="background"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.removeAttribute('style');
            }}
          />
          <div 
            style={{ 
              display: 'none',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #0f172a 70%, #16a34a 100%)'
            }}
            className="w-full h-full"
          />
        </div>

        {/* Layer 2 - Dark Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,138,0.75) 50%, rgba(15,23,42,0.88) 100%)'
          }}
        />

        {/* Layer 3 - Animated Particles/Glow */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full z-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full z-10"
          style={{
            background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)',
            animation: 'pulse 5s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-10"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)'
          }}
        />

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 w-full">
          
          {/* Step 1 - Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2
            }}
            className="mb-8 relative"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              {/* Rotating ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  borderTopColor: '#16a34a',
                  borderRightColor: 'transparent',
                  borderBottomColor: '#2563eb',
                  borderLeftColor: 'transparent'
                }}
              />
              
              {/* Second ring (opposite direction) */}
              <motion.div
                className="absolute inset-2 rounded-full border border-blue-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  borderTopColor: 'transparent',
                  borderRightColor: '#2563eb',
                  borderBottomColor: 'transparent',
                  borderLeftColor: '#16a34a'
                }}
              />
              
              {/* Logo image center */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div 
                  className="w-full h-full flex items-center justify-center rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.9) 0%, rgba(34, 197, 94, 0.7) 100%)'
                  }}
                >
                  <div className="text-white font-bold text-lg flex flex-col items-center">
                    <div className="text-xs">💰</div>
                    <div>SA</div>
                  </div>
                </div>
              </div>
              
              {/* Pulsing glow behind logo */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(22,163,74,0.4) 0%, transparent 70%)'
                }}
              />
            </div>
          </motion.div>

          {/* Step 2 - Shimmer Badge above title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-6"
          >
            <span 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white/90"
              style={{
                background: 'rgba(22,163,74,0.15)',
                border: '1px solid rgba(22,163,74,0.35)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Est. Since 2014 · Baramati, Maharashtra
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Step 3 - Main Brand Name (Letter by letter) */}
          <div className="flex flex-wrap justify-center mb-4">
            {"Sanskruti Associates".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 1.0 + i * 0.04,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                  letter === ' ' ? 'mx-2' : ''
                }`}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Step 5 - Tagline with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="mt-4 mb-8"
          >
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest text-white/70"
              style={{ letterSpacing: '0.15em' }}
            >
              Always With You
            </p>
            
            {/* Animated underline below tagline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.4, duration: 1.0 }}
              className="h-px mt-3 mx-auto max-w-xs"
              style={{
                background: 'linear-gradient(90deg, transparent, #16a34a, #2563eb, transparent)'
              }}
            />
          </motion.div>

          {/* Step 6 - 3 trust badges animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {/* Badge 1 */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-green-400">✓</span>
              <span className="text-white/80 text-sm">10+ Years Experience</span>
            </div>
            
            {/* Badge 2 */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-blue-400">✓</span>
              <span className="text-white/80 text-sm">500+ Happy Customers</span>
            </div>
            
            {/* Badge 3 */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-green-400">✓</span>
              <span className="text-white/80 text-sm">20+ Bank Partners</span>
            </div>
          </motion.div>

          {/* Step 7 - Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Intro Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sanskruti Associates is a leading loan brokerage firm based in Maharashtra, helping individuals and businesses get the best loan deals from 20+ top banks and NBFCs. We specialize in providing personalized financial solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to simplify the loan process and ensure every client gets the most competitive interest rates, fastest approvals, and exceptional customer service. With over 10 years of experience, we've helped thousands achieve their financial goals.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center justify-center mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-6xl">
                  SA
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl text-[#2563EB] mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl text-[#16A34A] mb-1">20+</div>
                  <div className="text-sm text-gray-600">Bank Partners</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl text-[#2563EB] mb-1">₹50Cr+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl text-[#16A34A] mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>       
 {/* Stats Counter Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">500+</div>
              <div className="text-sm text-gray-600">Customers</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">20+</div>
              <div className="text-sm text-gray-600">Bank Partners</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">₹50Cr+</div>
              <div className="text-sm text-gray-600">Disbursed</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#1F2937] mb-2">10+</div>
              <div className="text-sm text-gray-600">Loan Products</div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Our Loan Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl text-[#1F2937] mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Why Choose Sanskruti Associates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#16A34A] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl text-[#1F2937] mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
                <p className="text-sm text-gray-700 mb-4">{member.phone}</p>
                <p className="text-sm text-gray-700 mb-4">{member.email}</p>
                <a href="https://wa.me/917758969798" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Branches Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">Our Branches</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl text-[#1F2937]">{branch.name}</h3>
                  <span className="text-xs text-[#2563EB] bg-blue-50 px-2 py-1 rounded-full">{branch.tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{branch.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-[#1F2937] mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.loanType}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Banner */}
      <section
        className="py-16 lg:py-24 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl mb-4">Ready to Get Your Loan?</h2>
          <p className="text-xl text-blue-100 mb-8">Talk to our expert today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2563EB] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors shadow-lg">
              Apply Now
            </button>
            <a href="tel:+917758969798" className="bg-[#16A34A] hover:bg-[#15803D] text-white px-10 py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl text-white mb-4">Sanskruti Associates</div>
              <p className="text-sm mb-6 leading-relaxed">
                Your trusted partner for all loan solutions. We help you find the best deals from multiple banks with expert guidance.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">EMI Calculator</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Apply Now</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Loan Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Home Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Personal & Personal & Business Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Personal & Business Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Car Loan</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Machinery Loan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span>Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <a href="tel:+917758969798" className="hover:text-[#2563EB] transition-colors">+91 7758 96 9798</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <a href="mailto:sanskruti.sss1108@gmail.com" className="hover:text-[#2563EB] transition-colors">sanskruti.sss1108@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© 2026 Sanskruti Associates. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}