import { useState, useEffect } from 'react';
import { 
  Shield, CheckCircle, MessageCircle, Phone, Mail, MapPin, 
  Instagram, Menu, X, ArrowRight, Star, ShieldCheck, Zap, 
  ThumbsUp
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "601154232191";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const services = [
    {
      title: "Road Tax Renewal",
      description: "Fast, hassle-free road tax renewal bundled with insurance, delivered to you.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      link: "https://wa.link/1srjmp"
    },
    {
      title: "Motor Insurance",
      description: "Protects your car or motorcycle against accidents, theft, fire, and third-party liability.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      link: "https://wa.link/tim7v8"
    },
    {
      title: "Property Insurance",
      description: "Covers your home or building from fire, damage, disasters, and unexpected losses.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      link: "https://wa.link/1f6rra"
    },
    {
      title: "Personal Accident (PA)",
      description: "Offers financial compensation for accidental injury, disability, or unexpected death anywhere.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      link: "https://wa.link/8z7k3j"
    },
    {
      title: "Life Insurance",
      description: "Provides financial security for your family in the event of illness or death.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      link: "https://wa.link/i0nc5s"
    },
    {
      title: "Travel & Marine Cargo",
      description: "Comprehensive coverage for your travels and business logistics.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      link: whatsappLink
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Send Your Details",
      description: "Share your vehicle info or insurance needs through Whatsapp, fast and easy."
    },
    {
      step: "02",
      title: "Get Best Quotations",
      description: "Receive quotations directly from us from top insurance providers."
    },
    {
      step: "03",
      title: "Receive Your Policy",
      description: "Confirm your choice and get your policy issued the same day, fully registered."
    }
  ];

  const features = [
    {
      title: "Fully Licensed & Trusted",
      description: "Licensed under MTA and PIAM, ensuring every policy issued is legitimate and protected.",
      icon: <ShieldCheck className="w-10 h-10 text-indigo-400" />
    },
    {
      title: "Competitive & Transparent",
      description: "We compare multiple providers, giving you honest recommendations without hidden fees.",
      icon: <ThumbsUp className="w-10 h-10 text-indigo-400" />
    },
    {
      title: "Fast Whatsapp Service",
      description: "Quotation, consultation, and policy issuance handled quickly through simple Whatsapp messages.",
      icon: <Zap className="w-10 h-10 text-indigo-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Need help? Chat with us!
        </span>
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className={`font-bold text-2xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                ASH <span className={isScrolled ? 'text-indigo-600' : 'text-indigo-600 lg:text-cyan-400'}>Consultancy</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium transition-colors hover:text-indigo-500 ${isScrolled ? 'text-slate-600' : 'text-slate-600 lg:text-white/90'}`}>Home</a>
              <a href="#about" className={`font-medium transition-colors hover:text-indigo-500 ${isScrolled ? 'text-slate-600' : 'text-slate-600 lg:text-white/90'}`}>About</a>
              <a href="#services" className={`font-medium transition-colors hover:text-indigo-500 ${isScrolled ? 'text-slate-600' : 'text-slate-600 lg:text-white/90'}`}>Services</a>
              <a href="#contact" className={`font-medium transition-colors hover:text-indigo-500 ${isScrolled ? 'text-slate-600' : 'text-slate-600 lg:text-white/90'}`}>Contact</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Get Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="#home" className="block px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="block px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="block px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-3 py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Get Quote Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" 
            alt="Insurance Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 lg:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-cyan-300 font-medium text-sm border border-white/20">
                <ShieldCheck className="w-4 h-4" />
                Trusted Insurance Agency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                Your Protection, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Made Simple.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Fast quotations, affordable premiums, and trusted insurance coverage, all handled easily through Whatsapp. We make insurance clear, affordable, and effortless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a 
                  href="#services"
                  className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-indigo-900/50 border-8 border-white/10 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Family feeling protected" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5 animate-bounce-slow">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Licensed Under</p>
                  <p className="font-bold text-slate-900 text-xl">MTA & PIAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              We Provide Best Insurance Policy for Any Purpose
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              ASH Consultancy is an independent, licensed insurance agency operating since December 2024. We're committed to simplifying insurance and delivering affordable protection to everyday Malaysians.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 font-semibold text-slate-800 flex items-center gap-3 hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                Malaysia Takaful Association (MTA)
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 font-semibold text-slate-800 flex items-center gap-3 hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                Persatuan Insurans Am Malaysia (PIAM)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              We're Covering All the Insurance Services
            </h2>
            <p className="text-xl text-slate-600">
              Whether it's your car, your home, your family, or your business, our team helps you choose the right coverage with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-8 text-lg flex-grow">{service.description}</p>
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors duration-300 w-full"
                  >
                    Get Free Quotation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Get Covered in Just 3 Easy Steps
            </h2>
            <p className="text-xl text-slate-600">
              No paperwork, no confusion. Just share your details, choose your plan, and receive your policy, all handled digitally for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-gradient-to-r from-indigo-100 via-cyan-100 to-indigo-100 -z-10 rounded-full"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/10 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-500">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-cyan-500">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-lg text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Why Insure With ASH Consultancy?
            </h2>
            <p className="text-xl text-slate-400">
              We help you choose the right insurance with honest guidance, transparent quotations, trusted partners, and fast digital service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300">
                <div className="w-20 h-20 mx-auto bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              From car owners to growing companies, customers choose us for our clarity, responsiveness, and personalised insurance guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-indigo-900/5 border border-indigo-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-1 text-amber-400 mb-6">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-slate-700 text-xl mb-8 font-medium leading-relaxed">
                "I needed to renew my car insurance and road tax urgently, and ASH Consultancy handled everything through Whatsapp. Super fast and professional. I got my policy within the same day!"
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Mrs. Nadia</h4>
                  <p className="text-indigo-600 font-medium">Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-indigo-900/5 border border-indigo-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-1 text-amber-400 mb-6">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-slate-700 text-xl mb-8 font-medium leading-relaxed">
                "Very transparent with their pricing. They compared a few quotations for my property insurance and explained the differences clearly. Highly recommended for their honest service."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  H
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Mr. Hafiz</h4>
                  <p className="text-indigo-600 font-medium">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Didn't Find What You're Looking For?</h2>
          <p className="text-2xl text-indigo-100 mb-12 font-light">
            If you require a specific insurance service not listed on our website, just reach out. We'll help guide you or prepare a custom quotation.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-indigo-900/50"
          >
            <MessageCircle className="w-7 h-7" />
            Contact Us Anytime
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">ASH <span className="text-indigo-500">Consultancy</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                ASH CONSULTANCY 202403265727 (JR0168829-M)<br />
                A member of MTA & PIAM
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ashconsultancy24/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 text-white hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-8">Our Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Road Tax Renewal</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Motor Insurance</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Property Insurance</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Personal Accident (PA)</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Life Insurance</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-xl mb-8">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="mt-2">No. 31, Jalan Setia Indah U13/11R, Setia Alam, 40170 Shah Alam, Selangor</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <a href="tel:+601154232191" className="hover:text-indigo-400 transition-colors text-lg">+60 11-5423 2191</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <a href="mailto:ash.consultancy24@hotmail.com" className="hover:text-indigo-400 transition-colors text-lg">ash.consultancy24@hotmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} ASH Consultancy. All rights reserved.
            </p>
            <div className="flex gap-8 text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
