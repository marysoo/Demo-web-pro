import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Globe, Smartphone, Wrench, Zap, CheckCircle, TrendingUp, Mail, Phone, Bot, Send, Sparkles, User, RefreshCw, 
  Megaphone, Video, Share2, Target, BarChart3, Play, Tv, Flame, Heart, MessageSquare, ExternalLink,
  ShoppingCart, Home, Building2, Layers, GraduationCap, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, CreditCard, Filter, X, Menu,
  ChevronLeft, ChevronRight, Star, Quote, Award
} from 'lucide-react';

export default function App() {
  // Mobile Navbar Drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Telegram Bot Simulator state
  const [activeTab, setActiveTab] = useState<'lead' | 'shop' | 'support'>('lead');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: '👋 Welcome to Global Business Sites Bot! How can we help your business grow today?', time: 'Just now' }
  ]);

  // Social Media Ads Platform Selector state
  const [adPlatform, setAdPlatform] = useState<'facebook' | 'youtube' | 'tiktok'>('facebook');

  // Website Categories Selector state
  const [webCategory, setWebCategory] = useState<'woocommerce' | 'shopify' | 'realestate' | 'wordpress' | 'corporate' | 'education'>('woocommerce');

  // Temporary Notification Toast state
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    message: string;
    actionText?: string;
  } | null>(null);

  // Client Success Stories Carousel state
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const testimonials = [
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Founder & Head Designer',
      company: 'Aura Velvet Apparel',
      location: '🇬🇧 London, United Kingdom',
      flag: '🇬🇧',
      avatarBg: 'bg-gradient-to-tr from-purple-600 to-pink-500',
      initials: 'ER',
      stars: 5,
      service: 'Shopify E-Commerce + Meta Ads',
      industry: 'Fashion & Retail',
      metric: '+210% Sales Boost in 30 Days',
      quote: "Our international sales quadrupled after launching the new Shopify store. The multi-currency setup and automated checkout pixel tracking brought us over £45,000 in new orders during month one!",
      verified: true
    },
    {
      id: 'david',
      name: 'David Vance',
      role: 'Managing Director',
      company: 'Vance & Co Real Estate',
      location: '🇨🇦 Toronto, Canada',
      flag: '🇨🇦',
      avatarBg: 'bg-gradient-to-tr from-blue-600 to-cyan-500',
      initials: 'DV',
      stars: 5,
      service: 'Real Estate MLS Portal + YouTube Ads',
      industry: 'Real Estate & Property',
      metric: '14 Units Sold • $1.2M Closed',
      quote: "The interactive property listing portal with instant WhatsApp booking allowed us to pre-sell 14 luxury units before our official open house event. Unbelievable ROI on our video ad campaigns!",
      verified: true
    },
    {
      id: 'aisha',
      name: 'Aisha Bello',
      role: 'CEO & Founder',
      company: 'Naija Glam Boutique',
      location: '🇳🇬 Lagos & 🇬🇧 London',
      flag: '🇳🇬',
      avatarBg: 'bg-gradient-to-tr from-emerald-600 to-teal-500',
      initials: 'AB',
      stars: 5,
      service: 'WooCommerce + Paystack Gateway',
      industry: 'Luxury Beauty & Fashion',
      metric: '10,000+ Active Monthly Buyers',
      quote: "They configured our WooCommerce store with dual Paystack and Stripe payment links. My clients in the UK pay in Pounds while local clients pay in Naira effortlessly. Zero checkout drops!",
      verified: true
    },
    {
      id: 'marcus',
      name: 'Marcus Sterling',
      role: 'Director of Growth',
      company: 'Apex Digital Academy',
      location: '🇺🇸 Austin, Texas, USA',
      flag: '🇺🇸',
      avatarBg: 'bg-gradient-to-tr from-amber-500 to-orange-600',
      initials: 'MS',
      stars: 5,
      service: 'Telegram Lead Bot + Facebook Video Ads',
      industry: 'EdTech & Digital Courses',
      metric: '3,500+ Qualified Leads • 4.2x ROAS',
      quote: "Their automated Telegram bot handles lead qualification 24/7. Coupled with their high-converting Facebook video ads, we enrolled over 3,500 students into our masterclass with a 4.2x ROAS.",
      verified: true
    },
    {
      id: 'tariq',
      name: 'Tariq Al-Mansoor',
      role: 'VP of Operations',
      company: 'Gulf Stream Logistics',
      location: '🇦🇪 Dubai, UAE',
      flag: '🇦🇪',
      avatarBg: 'bg-gradient-to-tr from-slate-700 to-slate-900',
      initials: 'TA',
      stars: 5,
      service: 'Corporate Enterprise Portal',
      industry: 'Global Freight & Logistics',
      metric: '85+ Corporate RFQs Monthly',
      quote: "The corporate portal built for our freight enterprise established immediate authority. Prospective corporate clients can request instant freight quotes, giving us a huge competitive edge in Dubai.",
      verified: true
    }
  ];

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const triggerToast = (title: string, message: string, actionText: string = 'Request Received!') => {
    setToast({ show: true, title, message, actionText });
    setTimeout(() => {
      setToast(prev => (prev?.title === title ? { ...prev, show: false } : prev));
    }, 5000);
  };

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, title: string, message: string, href?: string) => {
    triggerToast(title, message);
    if (href) {
      e.preventDefault();
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }, 500);
    }
  };

  const handleSimulateCommand = (cmd: string, reply: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: cmd, time },
      { sender: 'bot', text: reply, time }
    ]);
  };

  const resetChat = (initialGreeting: string) => {
    setChatMessages([
      { sender: 'bot', text: initialGreeting, time: 'Just now' }
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Top Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Globe size={22} className="text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight block leading-tight">
                Global Business <span className="text-emerald-400">Sites</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">Worldwide Growth</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#website-categories" className="hover:text-emerald-400 transition-colors">Websites</a>
            <a href="#social-ads" className="hover:text-emerald-400 transition-colors">Social Ads</a>
            <a href="#telegram-bots" className="hover:text-emerald-400 transition-colors">Telegram Bots</a>
            <a href="#client-stories" className="hover:text-emerald-400 transition-colors">Testimonials</a>
            <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Us</a>
          </div>

          {/* Right Action & Mobile Button */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/2347039352602" 
              onClick={(e) => handleOrderClick(e, 'WhatsApp Consultation Initialized', 'Connecting you directly with a Global Business Sites advisor...', 'https://wa.me/2347039352602')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-green-500/20 transform hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4"
            >
              <div className="flex flex-col space-y-3 font-semibold text-sm text-slate-300">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Our Services</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
                <a 
                  href="#website-categories" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Website Categories</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
                <a 
                  href="#social-ads" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Social Media Ads</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
                <a 
                  href="#telegram-bots" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Custom Telegram Bots</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
                <a 
                  href="#client-stories" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Client Success Stories</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2 hover:text-emerald-400 border-b border-slate-900 flex items-center justify-between"
                >
                  <span>Why Choose Us</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href="https://wa.me/2347039352602" 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleOrderClick(e, 'WhatsApp Consultation Initialized', 'Connecting you directly with a Global Business Sites advisor...', 'https://wa.me/2347039352602');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/10 backdrop-blur-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Sparkles size={16} className="text-amber-400" />
                <span>Global Digital Scale Engine • Websites, Bots & Paid Ads</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white"
              >
                We Help Businesses Worldwide Scale & Get More{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                  Customers Online
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
              >
                Fast, mobile-friendly websites, custom Telegram bots, and high-converting{' '}
                <strong className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">
                  Facebook, YouTube & TikTok Ads
                </strong>{' '}
                that drive global reach, inquiries, and revenue.
              </motion.p>

              {/* Responsive CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2"
              >
                <a 
                  href="https://wa.me/2347039352602" 
                  onClick={(e) => handleOrderClick(e, 'Consultation Request Processing', 'Connecting you directly with a Global Business Sites representative on WhatsApp...', 'https://wa.me/2347039352602')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-2xl text-base transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-green-500/25 group"
                >
                  <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                  <span>Chat on WhatsApp Now</span>
                  <ArrowRight size={18} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href="#website-categories" 
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 font-semibold px-4 py-3.5 rounded-xl text-xs sm:text-sm transition-all hover:border-emerald-500/50"
                  >
                    <Globe size={16} />
                    <span>Websites</span>
                  </a>
                  <a 
                    href="#social-ads" 
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-purple-400 border border-slate-700/80 font-semibold px-4 py-3.5 rounded-xl text-xs sm:text-sm transition-all hover:border-purple-500/50"
                  >
                    <Megaphone size={16} />
                    <span>Social Ads</span>
                  </a>
                  <a 
                    href="#telegram-bots" 
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-700/80 font-semibold px-4 py-3.5 rounded-xl text-xs sm:text-sm transition-all hover:border-sky-500/50"
                  >
                    <Bot size={16} />
                    <span>Telegram Bots</span>
                  </a>
                </div>
              </motion.div>

              {/* Micro Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                    <Zap size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">2–3 Days</div>
                    <div className="text-[10px] text-slate-400">Fast Delivery</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                    <Globe size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Global Reach</div>
                    <div className="text-[10px] text-slate-400">50+ Countries</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">4.2x ROAS</div>
                    <div className="text-[10px] text-slate-400">Avg Return on Ads</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg border border-sky-500/20">
                    <Bot size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Bots</div>
                    <div className="text-[10px] text-slate-400">Automated Sales</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Showcase Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500"></div>

                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-400 font-mono ml-2">global-growth-engine.v2</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> LIVE SYSTEM
                  </span>
                </div>

                {/* Interactive Feature Stats Grid */}
                <div className="py-6 space-y-4">
                  {/* Metric Card 1 */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
                        <BarChart3 size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Global Ad Conversions</div>
                        <div className="text-lg font-black text-white">$1,240,000+ Revenue</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-900 px-2 py-1 rounded-lg">
                      +340% YoY
                    </span>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30">
                        <Bot size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Telegram Bot Automation</div>
                        <div className="text-sm font-bold text-white">24/7 Auto Instant Reply</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950 border border-sky-900 px-2 py-1 rounded-lg">
                      Active
                    </span>
                  </div>

                  {/* Metric Card 3 */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30">
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Mobile Page Speed</div>
                        <div className="text-sm font-bold text-white">99 / 100 Google Score</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-900 px-2 py-1 rounded-lg">
                      Ultra-Fast
                    </span>
                  </div>
                </div>

                {/* Country Flag Badges */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Active Global Markets:</span>
                  <div className="flex items-center gap-1.5 text-base">
                    <span title="United States">🇺🇸</span>
                    <span title="United Kingdom">🇬🇧</span>
                    <span title="Canada">🇨🇦</span>
                    <span title="United Arab Emirates">🇦🇪</span>
                    <span title="Nigeria">🇳🇬</span>
                    <span title="Germany">🇩🇪</span>
                    <span title="Australia">🇦🇺</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg mb-4">End-to-end digital solutions designed for conversion, traffic, and automated growth.</p>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Website</h3>
              <p className="text-slate-600 leading-relaxed">
                Clean design, mobile-friendly, and ready to convert visitors into paying customers.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Megaphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Ads Creation</h3>
              <p className="text-slate-600 leading-relaxed">
                Targeted Facebook, YouTube, and TikTok ad campaigns engineered to flood your WhatsApp with inquiries.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Telegram Bot Creation</h3>
              <p className="text-slate-600 leading-relaxed">
                Automate FAQs, lead capture, orders, and customer broadcasts on Telegram 24/7.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Website Redesign</h3>
              <p className="text-slate-600 leading-relaxed">
                Upgrade your old website for faster loading speeds, better results, and a modern look.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Monthly Maintenance</h3>
              <p className="text-slate-600 leading-relaxed">
                Keep your site online, secure, updated, and continuously optimized for visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Categories Section */}
      <section id="website-categories" className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <Globe size={16} />
              <span>Tailored Solutions by Industry & Tech Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Categories We Build for Global Businesses</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From multi-currency WooCommerce and high-converting Shopify stores to Real Estate portals, custom WordPress builds, and educational platforms — we create websites optimized for your specific industry.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm gap-2 max-w-full overflow-x-auto">
              <button 
                onClick={() => setWebCategory('woocommerce')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'woocommerce' 
                    ? 'bg-purple-600 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <ShoppingCart size={18} />
                <span>WooCommerce Store</span>
              </button>

              <button 
                onClick={() => setWebCategory('shopify')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'shopify' 
                    ? 'bg-emerald-600 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <ShoppingBag size={18} />
                <span>Shopify E-Commerce</span>
              </button>

              <button 
                onClick={() => setWebCategory('realestate')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'realestate' 
                    ? 'bg-blue-600 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Home size={18} />
                <span>Real Estate Portal</span>
              </button>

              <button 
                onClick={() => setWebCategory('wordpress')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'wordpress' 
                    ? 'bg-sky-600 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Layers size={18} />
                <span>WordPress Custom</span>
              </button>

              <button 
                onClick={() => setWebCategory('corporate')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'corporate' 
                    ? 'bg-slate-800 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Building2 size={18} />
                <span>Corporate & Business</span>
              </button>

              <button 
                onClick={() => setWebCategory('education')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  webCategory === 'education' 
                    ? 'bg-amber-600 text-white shadow-md scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <GraduationCap size={18} />
                <span>School & Portal</span>
              </button>
            </div>
          </div>

          {/* Active Category Display & Live Preview */}
          <div className="grid lg:grid-cols-12 gap-10 items-center bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {/* Details Column */}
            <div className="lg:col-span-6 space-y-6">
              {webCategory === 'woocommerce' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    WordPress + WooCommerce Specialist
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">WooCommerce E-Commerce Stores</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ideal for global merchants, fashion boutiques, gadget vendors, and wholesalers who want full ownership of their online store without monthly subscription fees.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Global Payment Gateway Integrations:</strong>
                        <p className="text-xs text-slate-500">Accept Stripe, PayPal, Paystack, credit/debit cards, USSD, and instant digital receipts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Worldwide & Regional Shipping Rates:</strong>
                        <p className="text-xs text-slate-500">Set country-by-country, zone, or regional delivery fees with automatic shipping calculator.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Automated WhatsApp Order Alert:</strong>
                        <p className="text-xs text-slate-500">Direct buyers to complete order payment or confirm details on your WhatsApp line.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {webCategory === 'shopify' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    Shopify Certified Development
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Shopify E-Commerce Setup</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Designed for fast-scaling brands selling to clients worldwide. Blazing-fast page load speeds, slick checkout, and seamless inventory management.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-emerald-100 text-emerald-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Multi-Currency & Auto Converter:</strong>
                        <p className="text-xs text-slate-500">Display products in Dollars ($), Euros (€), Pounds (£), Naira (₦), or local currencies dynamically.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-emerald-100 text-emerald-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Shopify App Ecosystem & Pixels:</strong>
                        <p className="text-xs text-slate-500">Facebook Pixel, TikTok Pixel, abandoned cart recovery, and discount timers configured.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-emerald-100 text-emerald-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">High-Converting Mobile Layout:</strong>
                        <p className="text-xs text-slate-500">Thumb-friendly navigation, sticky buy buttons, and 1-click checkout options.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {webCategory === 'realestate' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    Real Estate & Property Portals
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Real Estate Agency & Developer Sites</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Purpose-built property listing portals for estate agents, realtors, and property developers serving international buyers and luxury markets worldwide.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-blue-100 text-blue-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Interactive Property Filters:</strong>
                        <p className="text-xs text-slate-500">Filter by location, price range ($ / € / £ / ₦), property type (Duplex, Villa, Land, Apartment), bedrooms & amenities.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-blue-100 text-blue-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">HD Photo Gallery & Video Tours:</strong>
                        <p className="text-xs text-slate-500">Showcase property interiors, floor plans, neighborhood info, and YouTube walk-through videos.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-blue-100 text-blue-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Agent Direct WhatsApp Booking:</strong>
                        <p className="text-xs text-slate-500">Clients click a button to book physical or virtual property inspections directly with your sales team.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {webCategory === 'wordpress' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    Custom WordPress CMS
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Custom WordPress Websites</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The world's most popular Content Management System. Perfect for blogs, news magazines, consulting firms, NGOs, personal portfolios, and business sites requiring frequent content updates.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-sky-100 text-sky-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Easy Drag-and-Drop Admin Control:</strong>
                        <p className="text-xs text-slate-500">Edit text, upload news/photos, create new pages effortlessly without writing code.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-sky-100 text-sky-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Rank High on Google Globally (SEO):</strong>
                        <p className="text-xs text-slate-500">Built-in Yoast/RankMath SEO configuration to rank your business for global and regional search terms.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-sky-100 text-sky-700 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Anti-Hack Security & Speed Caching:</strong>
                        <p className="text-xs text-slate-500">Hardened against malware attacks, SSL setup, and ultra-fast page caching for low mobile data usage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {webCategory === 'corporate' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    Corporate & Professional Services
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Corporate Business Portfolios</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Establish authority and build instant trust for logistics companies, law firms, engineering practices, financial consultants, medical clinics, and B2B providers worldwide.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-slate-200 text-slate-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Professional Brand Layout:</strong>
                        <p className="text-xs text-slate-500">High-impact hero headers, service breakdowns, team credentials, and corporate certificates.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-slate-200 text-slate-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Interactive Quote & Estimate Forms:</strong>
                        <p className="text-xs text-slate-500">Let prospective corporate clients submit RFQs (Request For Quotation) directly to your official email.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-slate-200 text-slate-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Corporate Domain & Official Email Setup:</strong>
                        <p className="text-xs text-slate-500">Full setup of customized emails (e.g. contact@yourcompany.com).</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {webCategory === 'education' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                    Schools, Colleges & Academies
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">School Websites & Student Portals</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Complete digital web systems for nursery, primary, secondary schools, academies, and training institutes globally.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-amber-100 text-amber-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Online Student Admission Application:</strong>
                        <p className="text-xs text-slate-500">Parents can fill admission forms online, upload passport photos, and submit documents easily.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-amber-100 text-amber-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Term Result Checker Portal:</strong>
                        <p className="text-xs text-slate-500">Allow parents & students to log in and check report cards/term results securely using scratch pins.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-amber-100 text-amber-800 rounded-full"><CheckCircle size={16} /></div>
                      <div>
                        <strong className="text-slate-900 text-sm">Tuition & Fees Online Payment:</strong>
                        <p className="text-xs text-slate-500">Integrated online payment portal for tuition fee payments with instant digital receipts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <a 
                  href={`https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20a%20${webCategory.toUpperCase()}%20website%20for%20my%20business`}
                  onClick={(e) => handleOrderClick(
                    e, 
                    `${webCategory === 'woocommerce' ? 'WooCommerce Store' : webCategory === 'shopify' ? 'Shopify Store' : webCategory === 'realestate' ? 'Real Estate Portal' : webCategory === 'wordpress' ? 'WordPress Site' : webCategory === 'corporate' ? 'Corporate Website' : 'School Portal'} Order Received!`, 
                    `Your request for a custom ${webCategory.toUpperCase()} website build is being handled. Connecting you to WhatsApp...`, 
                    `https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20a%20${webCategory.toUpperCase()}%20website%20for%20my%20business`
                  )}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:scale-105 text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Order {webCategory === 'woocommerce' ? 'WooCommerce Store' : webCategory === 'shopify' ? 'Shopify Store' : webCategory === 'realestate' ? 'Real Estate Portal' : webCategory === 'wordpress' ? 'WordPress Site' : webCategory === 'corporate' ? 'Corporate Website' : 'School Portal'}</span>
                </a>
              </div>
            </div>

            {/* Live Card Preview Column */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-2xl relative">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Sample Preview
                  </span>
                  <span className="bg-slate-800 px-2.5 py-1 rounded text-[11px] font-semibold text-slate-300">
                    {webCategory === 'woocommerce' && 'WooCommerce + Paystack'}
                    {webCategory === 'shopify' && 'Shopify Theme'}
                    {webCategory === 'realestate' && 'Real Estate MLS'}
                    {webCategory === 'wordpress' && 'WordPress CMS'}
                    {webCategory === 'corporate' && 'Corporate Enterprise'}
                    {webCategory === 'education' && 'School Portal V2'}
                  </span>
                </div>

                {/* WooCommerce Live Mockup */}
                {webCategory === 'woocommerce' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="text-purple-400" size={18} />
                        <span className="font-bold text-sm">Global Fashion Hub</span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Cart: 1 item ($65.00)</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex gap-4 items-center">
                      <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center font-black text-2xl text-white shrink-0">
                        👗
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded uppercase font-bold">Best Seller</span>
                        <h4 className="font-bold text-sm text-white">Luxury Designer Wear - Global Collection</h4>
                        <div className="text-emerald-400 font-extrabold text-base">$65.00 <span className="line-through text-slate-500 text-xs font-normal">$85.00</span></div>
                        <p className="text-[10px] text-slate-400">In Stock • Express Worldwide Shipping</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs space-y-2">
                      <div className="flex justify-between text-slate-300">
                        <span>Payment Gateway:</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1"><CreditCard size={12} /> Stripe / PayPal / Paystack (USD / EUR / GBP)</span>
                      </div>
                      <a 
                        href="https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20build%20a%20WooCommerce%20store"
                        onClick={(e) => handleOrderClick(e, 'Sample Store Order Initialized', 'Simulating global payment gateway checkout connection for WooCommerce...', 'https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20build%20a%20WooCommerce%20store')}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-xs"
                      >
                        <ShoppingCart size={14} />
                        <span>Pay $65.00 via Stripe / Card / PayPal</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Shopify Live Mockup */}
                {webCategory === 'shopify' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="text-emerald-400" size={18} />
                        <span className="font-bold text-sm">Glow Aesthetics Store</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">USD ($)</span>
                        <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded">EUR (€)</span>
                      </div>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-3">
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center space-y-1">
                        <div className="w-12 h-12 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto text-xl">✨</div>
                        <div className="font-bold text-xs text-white">Vitamin C Serum</div>
                        <div className="text-emerald-400 font-bold text-xs">$29.00</div>
                        <button className="w-full bg-slate-800 text-slate-200 text-[10px] py-1 rounded hover:bg-emerald-600 hover:text-white transition-colors">Add to Cart</button>
                      </div>

                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center space-y-1">
                        <div className="w-12 h-12 bg-pink-900/40 rounded-full flex items-center justify-center mx-auto text-xl">🧴</div>
                        <div className="font-bold text-xs text-white">Hydrating Sunscreen</div>
                        <div className="text-emerald-400 font-bold text-xs">$35.00</div>
                        <button className="w-full bg-slate-800 text-slate-200 text-[10px] py-1 rounded hover:bg-emerald-600 hover:text-white transition-colors">Add to Cart</button>
                      </div>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-lg text-xs flex items-center justify-between border border-slate-800">
                      <span className="text-slate-400">Features Integrated:</span>
                      <span className="text-emerald-400 font-bold text-[11px]">Meta Pixel • Currency Converter • Express Checkout</span>
                    </div>
                  </div>
                )}

                {/* Real Estate Live Mockup */}
                {webCategory === 'realestate' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5"><Home className="text-blue-400" size={16} /> Apex Prime International Realty</span>
                      <span className="bg-blue-950 text-blue-300 border border-blue-800 text-[10px] px-2 py-0.5 rounded font-bold">Global Listings</span>
                    </div>

                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-900 p-6 text-center relative">
                        <span className="absolute top-3 left-3 bg-green-500 text-white font-extrabold text-[9px] px-2 py-0.5 rounded uppercase">For Sale</span>
                        <div className="text-2xl font-black text-white mb-1">$450,000</div>
                        <div className="font-bold text-xs text-blue-200">Luxury 4-Bedroom Coastal Villa</div>
                        <div className="text-[10px] text-slate-400">📍 Prime International Waterfront Location</div>
                      </div>

                      <div className="p-3 bg-slate-950 flex justify-around text-[10px] text-slate-300 border-t border-slate-800">
                        <span>🛏️ 4 Bedrooms</span>
                        <span>🛁 5 Baths</span>
                        <span>🏊 Swimming Pool</span>
                        <span>⚡ Smart Energy</span>
                      </div>
                    </div>

                    <a 
                      href="https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20build%20a%20Real%20Estate%20Website"
                      onClick={(e) => handleOrderClick(e, 'Inspection Booking Logged', 'Connecting you with property inspection desk on WhatsApp...', 'https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20build%20a%20Real%20Estate%20Website')}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-xs"
                    >
                      <MessageCircle size={14} />
                      <span>Book Inspection via WhatsApp</span>
                    </a>
                  </div>
                )}

                {/* WordPress Live Mockup */}
                {webCategory === 'wordpress' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5"><Layers className="text-sky-400" size={16} /> WordPress CMS Dashboard</span>
                      <span className="bg-sky-950 text-sky-300 border border-sky-800 text-[10px] px-2 py-0.5 rounded font-bold">Yoast SEO Ready</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300 font-medium">Site Status:</span>
                        <span className="text-emerald-400 font-bold">100% Mobile Optimized • SSL Secured</span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-slate-400 text-[10px]">Recent News & Articles Published:</span>
                        <div className="bg-slate-950 p-2 rounded border border-slate-800 text-slate-200 text-[11px] font-medium">
                          📰 "How Global Businesses Double Sales Using Modern Web Applications"
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
                        <span>Google Search Ranking: <strong className="text-sky-400">Global Page 1 Optimized</strong></span>
                        <span>Admin Access: <strong className="text-white">Included</strong></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Corporate Live Mockup */}
                {webCategory === 'corporate' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5"><Building2 className="text-slate-300" size={16} /> Pinnacle Global Logistics Ltd</span>
                      <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-bold">Corporate B2B</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-2">
                      <h4 className="font-bold text-white text-sm">Professional Corporate Solutions</h4>
                      <p className="text-slate-400 text-xs max-w-xs mx-auto">Custom domain email, official company profile, staff portal & online inquiry routing.</p>
                      
                      <div className="pt-2 flex justify-center gap-2">
                        <span className="bg-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300 font-mono">info@yourcompany.com</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education Live Mockup */}
                {webCategory === 'education' && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5"><GraduationCap className="text-amber-400" size={16} /> Heritage International School</span>
                      <span className="bg-amber-950 text-amber-300 border border-amber-800 text-[10px] px-2 py-0.5 rounded font-bold">Admissions Open</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                      <div className="bg-amber-950/40 border border-amber-800/50 p-2.5 rounded-lg text-amber-200 text-center font-bold">
                        🎓 2026/2027 Academic Session Admission Form Online
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-medium text-slate-200">
                          📑 Term Result Checker Portal
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-medium text-slate-200">
                          💳 Pay Tuition Online (Paystack)
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Ads Creation Showcase Section */}
      <section id="social-ads" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-700/50 text-purple-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <Megaphone size={16} />
              <span>Targeted Paid Traffic & Sales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Worldwide Targeted Social Media Ads Creation</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We write the ad copy, design eye-catching visuals/video ads, set up precise global location & audience targeting, and run high-converting campaigns on <strong>Facebook, YouTube, and TikTok</strong>.
            </p>
          </div>

          {/* Platform Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-800 rounded-2xl border border-slate-700/80 gap-2 max-w-full overflow-x-auto">
              <button 
                onClick={() => setAdPlatform('facebook')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  adPlatform === 'facebook' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center font-black text-xs">f</div>
                <span>Facebook & Instagram Ads</span>
              </button>

              <button 
                onClick={() => setAdPlatform('youtube')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  adPlatform === 'youtube' 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Video size={18} />
                <span>YouTube Video Ads</span>
              </button>

              <button 
                onClick={() => setAdPlatform('tiktok')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  adPlatform === 'tiktok' 
                    ? 'bg-slate-950 text-white border border-pink-500/50 shadow-lg shadow-pink-500/20 scale-105' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Flame size={18} className="text-pink-400" />
                <span>TikTok Viral Ads</span>
              </button>
            </div>
          </div>

          {/* Platform Content & Live Mockup */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Platform Details & Strategy */}
            <div className="lg:col-span-6 space-y-6">
              {adPlatform === 'facebook' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-2xl">
                      <Target size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Facebook & Instagram Ad Campaigns</h3>
                      <p className="text-blue-400 text-sm font-medium">Reach decision-makers, buyers & clients worldwide</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Facebook & Instagram connect your business to active global buyers. We create targeted feed and story ads with direct "Click to WhatsApp" buttons so interested prospects message you instantly.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-blue-400 font-bold mb-1 text-sm">
                        <Target size={16} /> Worldwide & Interest Targeting
                      </div>
                      <p className="text-xs text-slate-400">Targeted selection by country, region, interest, and demographics tailored to active global buyers.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-green-400 font-bold mb-1 text-sm">
                        <MessageCircle size={16} /> Click-to-WhatsApp Ads
                      </div>
                      <p className="text-xs text-slate-400">Skip complicated forms — prospects click the ad and start chatting with you on WhatsApp right away.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-purple-400 font-bold mb-1 text-sm">
                        <Sparkles size={16} /> Professional Ad Creative
                      </div>
                      <p className="text-xs text-slate-400">Persuasive headline writing plus custom high-resolution promotional graphics.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-yellow-400 font-bold mb-1 text-sm">
                        <BarChart3 size={16} /> Budget Optimization
                      </div>
                      <p className="text-xs text-slate-400">Work with your customized daily budget. Maximum results without wasting money on unqualified clicks.</p>
                    </div>
                  </div>
                </div>
              )}

              {adPlatform === 'youtube' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-600/20 text-red-400 border border-red-500/30 rounded-2xl">
                      <Tv size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">YouTube Video Ad Campaigns</h3>
                      <p className="text-red-400 text-sm font-medium">Build immense trust & brand authority with high-impact video ads</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Millions of global users watch YouTube daily. Video ads build maximum trust for services, real estate, education, e-commerce, and high-ticket offers before competitors even reach them.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-red-400 font-bold mb-1 text-sm">
                        <Play size={16} /> In-Stream & Discovery Ads
                      </div>
                      <p className="text-xs text-slate-400">Play video ads before popular YouTube videos or show up at the top of YouTube search results globally.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-amber-400 font-bold mb-1 text-sm">
                        <Video size={16} /> Engaging Scripting & Editing
                      </div>
                      <p className="text-xs text-slate-400">We craft 15-30 second high-hook video scripts that grab attention within the first 5 seconds.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-sky-400 font-bold mb-1 text-sm">
                        <Target size={16} /> Specific Topic Targeting
                      </div>
                      <p className="text-xs text-slate-400">Target people watching tech, real estate, music, fashion, or business videos worldwide.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-green-400 font-bold mb-1 text-sm">
                        <ExternalLink size={16} /> Direct Site & WhatsApp Traffic
                      </div>
                      <p className="text-xs text-slate-400">Drive viewers directly to your landing page or WhatsApp sales channel with prominent CTA banners.</p>
                    </div>
                  </div>
                </div>
              )}

              {adPlatform === 'tiktok' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-pink-600/20 text-pink-400 border border-pink-500/30 rounded-2xl">
                      <Flame size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">TikTok Viral Ad Campaigns</h3>
                      <p className="text-pink-400 text-sm font-medium">Fast viral growth, impulse buyer traffic & youth market dominance</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    TikTok is the fastest growing global video platform. It is ideal for fashion, cosmetics, gadgets, food, lifestyle products, and quick impulse buys that go viral fast.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-pink-400 font-bold mb-1 text-sm">
                        <Flame size={16} /> Trend & Sound-Driven Creatives
                      </div>
                      <p className="text-xs text-slate-400">Short, snappy video ads made to feel organic and blend naturally with trending TikTok video feeds.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1 text-sm">
                        <TrendingUp size={16} /> High Volume Impulse Orders
                      </div>
                      <p className="text-xs text-slate-400">Convert casual scrollers into instant buyers with prominent interactive shop buttons & promos.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1 text-sm">
                        <User size={16} /> Youth & Global Demographics
                      </div>
                      <p className="text-xs text-slate-400">Target engaged 18–35 year-olds across major international markets.</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-2 text-amber-400 font-bold mb-1 text-sm">
                        <MessageCircle size={16} /> Instant WhatsApp & DM Leads
                      </div>
                      <p className="text-xs text-slate-400">Direct buyers directly to your WhatsApp line or order form for seamless payment and delivery.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <a 
                  href={`https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20run%20${adPlatform.toUpperCase()}%20Ads%20for%20my%20business`}
                  onClick={(e) => handleOrderClick(
                    e, 
                    `${adPlatform.toUpperCase()} Campaign Request Received!`, 
                    `Your request for ${adPlatform === 'facebook' ? 'Facebook & Instagram' : adPlatform === 'youtube' ? 'YouTube Video' : 'TikTok Viral'} Ads setup is being handled. Opening WhatsApp...`, 
                    `https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20run%20${adPlatform.toUpperCase()}%20Ads%20for%20my%20business`
                  )}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>Start {adPlatform === 'facebook' ? 'Facebook' : adPlatform === 'youtube' ? 'YouTube' : 'TikTok'} Ads Campaign</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Mockup Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-2xl relative">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                  <span>Live Ad Preview Mockup</span>
                  <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full text-[10px]">
                    ● Active Strategy
                  </span>
                </div>

                {/* Facebook Mockup */}
                {adPlatform === 'facebook' && (
                  <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden text-slate-200 text-xs">
                    {/* FB Header */}
                    <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          GB
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">Global Business Sites</div>
                          <div className="text-[10px] text-slate-400">Sponsored • 🌐 Worldwide Audience</div>
                        </div>
                      </div>
                      <span className="text-blue-400 font-medium text-[11px] bg-blue-950/60 px-2 py-1 rounded-md">Facebook Ad</span>
                    </div>

                    {/* FB Body Text */}
                    <div className="p-3.5 space-y-2 text-slate-300 leading-relaxed">
                      <p className="font-medium text-white">🚀 Tired of losing customers to competitors who have websites?</p>
                      <p>Get a fast, mobile-friendly business website + automated Telegram bot delivered in just 2-3 days! Boost your daily WhatsApp inquiries today. 👇</p>
                    </div>

                    {/* FB Visual Creative Image */}
                    <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 p-8 text-center border-y border-slate-800">
                      <div className="inline-block bg-green-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-lg">
                        Special Promo • 30% OFF
                      </div>
                      <h4 className="text-xl font-black text-white mb-2 leading-tight">GROW YOUR BUSINESS WORLDWIDE ONLINE</h4>
                      <p className="text-slate-300 text-xs max-w-xs mx-auto mb-4">Websites • Telegram Bots • Social Media Ads</p>
                      
                      <div className="inline-flex items-center gap-2 bg-slate-950/80 border border-slate-700 text-emerald-400 font-bold px-4 py-2 rounded-xl text-xs">
                        <CheckCircle size={14} /> 100% Mobile Optimized & Fast
                      </div>
                    </div>

                    {/* FB Action Bar */}
                    <div className="p-3.5 bg-slate-950/80 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">WA.ME/2347039352602</div>
                        <div className="font-bold text-white text-sm">Get Daily Customers on WhatsApp</div>
                      </div>
                      <a 
                        href="https://wa.me/2347039352602?text=Hello,%20I%20saw%20your%20Facebook%20Ad%20and%20want%20to%20get%20more%20customers"
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shrink-0 transition-colors shadow-md text-xs"
                      >
                        <MessageCircle size={16} />
                        <span>Send Message</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* YouTube Mockup */}
                {adPlatform === 'youtube' && (
                  <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden text-slate-200 text-xs">
                    {/* Video Player Frame */}
                    <div className="relative bg-slate-950 aspect-video flex flex-col justify-between p-4 border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950">
                      {/* Top Overlay Badge */}
                      <div className="flex items-center justify-between">
                        <span className="bg-yellow-500 text-black font-extrabold text-[10px] px-2 py-0.5 rounded">AD • 0:15</span>
                        <span className="text-[10px] text-slate-400 bg-black/60 px-2 py-1 rounded">Targeted Worldwide Audience</span>
                      </div>

                      {/* Center Play Graphic */}
                      <div className="self-center my-2 text-center">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg shadow-red-600/40 transform hover:scale-110 transition-transform cursor-pointer">
                          <Play size={28} className="ml-1" />
                        </div>
                        <p className="font-bold text-white text-sm">"Stop losing customers!"</p>
                        <p className="text-[10px] text-slate-400">High-converting video ad playing on YouTube</p>
                      </div>

                      {/* Bottom In-Video Banner CTA */}
                      <div className="bg-slate-900/90 border border-slate-700 p-2.5 rounded-xl flex items-center justify-between backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">YT</div>
                          <div>
                            <div className="font-bold text-white text-xs">Global Business Sites</div>
                            <div className="text-[10px] text-slate-400">globalbusinesssites.com</div>
                          </div>
                        </div>
                        <a 
                          href="https://wa.me/2347039352602?text=Hello,%20I%20saw%20your%20YouTube%20Ad"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-red-600 hover:bg-red-500 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition-colors"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>

                    {/* YouTube Video Info Below */}
                    <div className="p-4 space-y-2">
                      <div className="font-bold text-white text-sm">YouTube In-Stream & Discovery Video Campaign</div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        We write engaging video ad scripts, create striking video visuals, and run target campaigns directly to global YouTube viewers interested in your services.
                      </p>
                    </div>
                  </div>
                )}

                {/* TikTok Mockup */}
                {adPlatform === 'tiktok' && (
                  <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden text-slate-200 text-xs">
                    {/* Vertical Phone Screen Mock */}
                    <div className="relative bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 p-6 aspect-[9/12] flex flex-col justify-between border-b border-slate-800">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between text-[11px] text-slate-300 font-bold">
                        <span className="flex items-center gap-1"><Flame size={14} className="text-pink-500" /> TikTok Sponsored</span>
                        <span className="bg-pink-600/30 border border-pink-500/40 text-pink-300 px-2 py-0.5 rounded-full text-[10px]">Viral Ad Format</span>
                      </div>

                      {/* Center Hook Text */}
                      <div className="my-auto text-center space-y-2">
                        <div className="inline-block bg-pink-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                          🔥 Trending Worldwide
                        </div>
                        <h4 className="text-2xl font-black text-white leading-tight drop-shadow-md">
                          HOW TO GET MORE CLIENTS WORLDWIDE 🌍
                        </h4>
                        <p className="text-slate-300 text-xs bg-slate-900/80 p-2 rounded-xl border border-slate-800 max-w-xs mx-auto">
                          "If you sell products or services, stop depending only on word-of-mouth..."
                        </p>
                      </div>

                      {/* Right Floating Actions (TikTok Style) */}
                      <div className="absolute right-3 bottom-20 flex flex-col items-center gap-3 text-slate-300">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-pink-500"><Heart size={16} /></div>
                          <span className="text-[9px] text-slate-400 mt-0.5">14.2k</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-sky-400"><MessageSquare size={16} /></div>
                          <span className="text-[9px] text-slate-400 mt-0.5">850</span>
                        </div>
                      </div>

                      {/* Bottom TikTok CTA Button */}
                      <div className="bg-pink-600 hover:bg-pink-500 p-3 rounded-2xl flex items-center justify-between transition-colors shadow-lg shadow-pink-600/30">
                        <div>
                          <div className="font-bold text-white text-xs">Global Business Sites</div>
                          <div className="text-[10px] text-pink-100">Order Website, Bot or TikTok Ads</div>
                        </div>
                        <a 
                          href="https://wa.me/2347039352602?text=Hello,%20I%20saw%20your%20TikTok%20Ad"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white text-pink-600 font-extrabold px-3 py-1.5 rounded-xl text-xs shadow"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <div className="font-bold text-white text-sm">TikTok Viral Video Ad Strategy</div>
                      <p className="text-slate-400 text-xs">
                        High energy, trendy short video ads that hook global scrollers and convert them into instant WhatsApp buyers.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Bot Showcase Section */}
      <section id="telegram-bots" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <Bot size={16} />
              <span>Automate Your Sales & Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Telegram Bots for Global Businesses</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Telegram is fast becoming a major global sales channel. We build smart, custom Telegram bots that work for your business while you sleep.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Features list */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl shrink-0">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">24/7 Automated Support</h3>
                  <p className="text-slate-600 text-sm">Instantly reply to frequently asked questions about pricing, location, working hours, and services without delaying clients.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Lead Generation & Auto-Forwarding</h3>
                  <p className="text-slate-600 text-sm">Capture customer contact details, budget, and requirements, then send alerts straight to your personal WhatsApp or Admin group.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Interactive Catalog & Instant Orders</h3>
                  <p className="text-slate-600 text-sm">Allow users to browse product lists, view prices, calculate totals, and request callback or invoice directly inside Telegram.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                  <Send size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Broadcast Messages to Clients</h3>
                  <p className="text-slate-600 text-sm">Send promotional updates, news, and discount alerts to all your subscribers at once with a single click.</p>
                </div>
              </div>
            </div>

            {/* Interactive Bot Preview Widget */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 text-white">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                      <Bot size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">GlobalBiz Assistant Bot</h4>
                      <p className="text-xs text-sky-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                        bot • online
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => resetChat(
                      activeTab === 'lead' ? '👋 Welcome! Looking to get a website, custom bot, or social media ads for your business?' :
                      activeTab === 'shop' ? '🛍️ Welcome to our Catalog Bot! What products are you interested in?' :
                      '❓ Welcome to Customer Care! How can we help you today?'
                    )}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Reset Chat"
                  >
                    <RefreshCw size={16} />
                  </button>
                </div>

                {/* Preset Selector */}
                <div className="flex gap-2 mb-4 bg-slate-800 p-1.5 rounded-xl">
                  <button 
                    onClick={() => {
                      setActiveTab('lead');
                      resetChat('👋 Welcome! Looking to get a website, custom bot, or social media ads for your business?');
                    }}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'lead' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Lead Capture
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('shop');
                      resetChat('🛍️ Welcome to our Catalog Bot! What products are you interested in?');
                    }}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'shop' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    E-commerce
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('support');
                      resetChat('❓ Welcome to Customer Care! How can we help you today?');
                    }}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'support' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    FAQ Support
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="h-64 overflow-y-auto space-y-3 p-3 bg-slate-950/60 rounded-2xl mb-4 border border-slate-800/80">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user' 
                          ? 'bg-sky-600 text-white rounded-br-none' 
                          : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700/50'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Quick Action Buttons */}
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Try Clicking a Bot Command:</p>
                  
                  {activeTab === 'lead' && (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => handleSimulateCommand('🌐 Get Website Pricing', 'Our standard Business Website package starts at $199 including domain, hosting, and mobile optimization! Ready to start?')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        <span>🌐 Get Website Pricing</span>
                      </button>
                      <button 
                        onClick={() => handleSimulateCommand('📢 Social Media Ads', 'We run targeted Facebook, YouTube, and TikTok ads tailored for global customers. Chat with us to boost your sales!')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        <span>📢 Social Media Ads</span>
                      </button>
                      <button 
                        onClick={() => handleSimulateCommand('🤖 Order Telegram Bot', 'Custom Telegram bots start at $149. Delivered in 2-3 days with full setup! Call or WhatsApp us to get started.')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors col-span-2"
                      >
                        <span>🤖 Order Telegram Bot</span>
                      </button>
                    </div>
                  )}

                  {activeTab === 'shop' && (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => handleSimulateCommand('📦 View Product List', '1. Premium Website ($199)\n2. Telegram Sales Bot ($149)\n3. Social Media Ads Campaign ($99)\n4. Full Growth Combo ($349 - Save $98!)')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        📦 View Product List
                      </button>
                      <button 
                        onClick={() => handleSimulateCommand('🛒 Calculate Combo Discount', 'Full Growth Combo selected! Includes website + Telegram bot + social media ads setup. Special total: $349.')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        🛒 Calculate Discount
                      </button>
                    </div>
                  )}

                  {activeTab === 'support' && (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => handleSimulateCommand('⏱️ What is the delivery time?', 'Websites and Telegram bots are delivered within 2–3 working days! Ad campaigns go live in 24 hours.')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        ⏱️ Delivery Time?
                      </button>
                      <button 
                        onClick={() => handleSimulateCommand('📍 Where is your office?', 'We serve global clients worldwide remotely with fast, 24/7 delivery!')}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-left text-sky-300 transition-colors"
                      >
                        📍 Office Location?
                      </button>
                    </div>
                  )}

                  <a 
                    href="https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20create%20a%20Telegram%20Bot%20for%20my%20business" 
                    onClick={(e) => handleOrderClick(
                      e, 
                      'Telegram Bot Order Received!', 
                      'Your custom Telegram bot build request is being handled. Connecting to WhatsApp...', 
                      'https://wa.me/2347039352602?text=Hello,%20I%20want%20to%20create%20a%20Telegram%20Bot%20for%20my%20business'
                    )}
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl text-xs transition-colors"
                  >
                    <Bot size={16} />
                    Order a Custom Bot for Your Business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section id="client-stories" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <Award size={16} className="text-emerald-400" />
              <span>Verified Global Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Client Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">Stories</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              See how our fast websites, smart Telegram bots, and targeted ad campaigns generate real leads and revenue for business owners across the globe.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Top Carousel Navigation Header */}
            <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Story</span>
                <span className="bg-slate-800 text-emerald-400 font-bold px-3 py-1 rounded-lg text-xs border border-slate-700">
                  {activeStoryIndex + 1} of {testimonials.length}
                </span>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeStoryIndex 
                        ? 'w-8 bg-emerald-400' 
                        : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevStory}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextStory}
                  className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-600/30 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Active Testimonial Spotlight Card */}
            {(() => {
              const current = testimonials[activeStoryIndex];
              return (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
                  {/* Top Subtle Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500"></div>

                  <Quote size={120} className="text-slate-800/40 absolute right-6 bottom-4 pointer-events-none select-none" />

                  <div className="relative z-10 space-y-8">
                    {/* Header Row: Client Info & Flag */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${current.avatarBg} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg border border-white/20`}>
                          {current.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-white">{current.name}</h3>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                              <CheckCircle2 size={12} /> Verified
                            </span>
                          </div>
                          <p className="text-slate-400 text-xs mt-0.5">{current.role} • <strong className="text-slate-200">{current.company}</strong></p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs font-medium text-slate-300">
                        <Globe size={14} className="text-indigo-400" />
                        <span>{current.location}</span>
                      </div>
                    </div>

                    {/* Star Rating & Quote */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(current.stars)].map((_, i) => (
                          <Star key={i} size={18} className="fill-amber-400" />
                        ))}
                        <span className="text-xs font-bold text-slate-400 ml-2">5.0 / 5.0 Rating</span>
                      </div>

                      <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed italic">
                        "{current.quote}"
                      </p>
                    </div>

                    {/* Impact Metric & Service Badge Row */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      <div className="bg-emerald-950/50 border border-emerald-800/60 p-4 rounded-2xl flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
                          <TrendingUp size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Key Impact Metric</span>
                          <p className="text-sm font-extrabold text-white">{current.metric}</p>
                        </div>
                      </div>

                      <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30 shrink-0">
                          <Layers size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Solution Delivered</span>
                          <p className="text-sm font-bold text-slate-200">{current.service}</p>
                        </div>
                      </div>
                    </div>

                    {/* Direct Action Button */}
                    <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Sparkles size={14} className="text-amber-400" /> Ready for similar growth for your business?
                      </span>
                      <a
                        href={`https://wa.me/2347039352602?text=Hello,%20I%20saw%20${encodeURIComponent(current.name)}'s%20success%20story%20and%20I%20want%20a%20similar%20solution%20for%20my%20business.`}
                        onClick={(e) => handleOrderClick(
                          e, 
                          'Consultation Request Logged', 
                          `Starting consultation based on ${current.name}'s success model (${current.service}). Connecting to WhatsApp...`,
                          `https://wa.me/2347039352602?text=Hello,%20I%20saw%20${encodeURIComponent(current.name)}'s%20success%20story%20and%20I%20want%20a%20similar%20solution%20for%20my%20business.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-green-500/20 transform hover:scale-105"
                      >
                        <MessageCircle size={16} />
                        Get Similar Results on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Horizontal Thumbnails Carousel Row for Quick Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStoryIndex(index)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 ${
                    index === activeStoryIndex
                      ? 'bg-slate-900 border-emerald-500 ring-2 ring-emerald-500/30 text-white shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{item.flag}</span>
                    <span className="text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
                      <Star size={10} className="fill-amber-400" /> 5.0
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-xs truncate text-white">{item.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{item.company}</div>
                  </div>

                  <div className="text-[9px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/80 truncate">
                    {item.metric.split('•')[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just build websites; we build complete sales systems — fast web applications, automated Telegram bots, and Facebook/YouTube/TikTok ad campaigns tailored specifically for global businesses and high-growth brands.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="text-yellow-400" />, title: "Fast Delivery", desc: "Get your website or Telegram bot live in just 2–3 days." },
                  { icon: <Megaphone className="text-purple-400" />, title: "High-Converting Paid Ads", desc: "Targeted Facebook, YouTube, and TikTok ads that drive real sales revenue." },
                  { icon: <Bot className="text-sky-400" />, title: "24/7 Bot Automation", desc: "Keep receiving leads and answering clients even when offline." },
                  { icon: <Smartphone className="text-blue-400" />, title: "Mobile & Chat Optimized", desc: "Looks perfect on smartphones and popular messaging apps." },
                  { icon: <CheckCircle className="text-emerald-400" />, title: "Affordable & Professional", desc: "Premium quality without the premium price tag." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-slate-800 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{feature.title}</h4>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500 via-purple-500 to-sky-500 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ready to grow?</h3>
                    <p className="text-slate-400">Let's discuss your project</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a href="mailto:info@globalbusinesssites.com" className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors">
                    <Mail className="text-slate-400" />
                    <span>info@globalbusinesssites.com</span>
                  </a>
                  <a href="tel:+2347039352602" className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors">
                    <Phone className="text-slate-400" />
                    <span>+234 703 935 2602</span>
                  </a>
                  <a 
                    href="https://wa.me/2347039352602" 
                    onClick={(e) => handleOrderClick(e, 'WhatsApp Consultation Started', 'Connecting you to our customer support team on WhatsApp...', 'https://wa.me/2347039352602')}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl mt-4 transition-colors"
                  >
                    <MessageCircle />
                    Message Us on WhatsApp
                  </a>
                  <a 
                    href="https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20Social%20Media%20Ads%20(Facebook,%20YouTube,%20TikTok)" 
                    onClick={(e) => handleOrderClick(e, 'Social Media Ads Inquiry Received', 'Processing your ad campaign request. Connecting to WhatsApp...', 'https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20Social%20Media%20Ads%20(Facebook,%20YouTube,%20TikTok)')}
                    className="flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl transition-colors"
                  >
                    <Megaphone />
                    Request Social Media Ads Campaign
                  </a>
                  <a 
                    href="https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20a%20Telegram%20Bot" 
                    onClick={(e) => handleOrderClick(e, 'Telegram Bot Inquiry Received', 'Preparing consultation details for custom Telegram bot...', 'https://wa.me/2347039352602?text=Hello,%20I%20am%20interested%20in%20a%20Telegram%20Bot')}
                    className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl transition-colors"
                  >
                    <Bot />
                    Request Telegram Bot Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary Success Notification Toast */}
      {toast?.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 sm:px-0 animate-fadeIn transition-all duration-300">
          <div className="bg-slate-900 text-white p-5 rounded-2xl border border-emerald-500/60 shadow-2xl shadow-emerald-500/20 flex items-start gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 w-full animate-pulse"></div>
            
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-xl shrink-0 mt-0.5">
              <CheckCircle2 size={22} />
            </div>

            <div className="flex-1 pr-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/80">
                  {toast.actionText || 'Request Received!'}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Sparkles size={10} className="text-amber-400" /> Handling...
                </span>
              </div>
              <h4 className="font-bold text-white text-sm leading-snug">{toast.title}</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">{toast.message}</p>
            </div>

            <button 
              onClick={() => setToast(prev => prev ? { ...prev, show: false } : null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors absolute top-3 right-3"
              aria-label="Close Notification"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="text-green-500" size={24} />
            <span className="text-xl font-bold text-white tracking-tight">Global Business Sites</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Websites • Telegram Bots • Facebook, YouTube & TikTok Ads Creation</p>
          <p>© {new Date().getFullYear()} Global Business Sites. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}


