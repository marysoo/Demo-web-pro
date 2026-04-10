import React from 'react';
import { MessageCircle, Globe, Smartphone, Wrench, Zap, CheckCircle, TrendingUp, Mail, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              We Help Nigerian Businesses Get More <span className="text-green-400">Customers Online</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Fast, mobile-friendly websites that bring daily WhatsApp inquiries to your business.
            </p>
            <a 
              href="https://wa.me/2347039352602" 
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Website Redesign</h3>
              <p className="text-slate-600 leading-relaxed">
                Upgrade your old website for faster loading speeds, better results, and a modern look.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just build websites; we build lead-generation machines tailored for the Nigerian market.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="text-yellow-400" />, title: "Fast Delivery", desc: "Get your website live in just 2–3 days." },
                  { icon: <Smartphone className="text-blue-400" />, title: "Mobile Optimized", desc: "Looks perfect on all devices, where your customers are." },
                  { icon: <TrendingUp className="text-green-400" />, title: "Proven Strategies", desc: "Designed to maximize WhatsApp inquiries and calls." },
                  { icon: <CheckCircle className="text-purple-400" />, title: "Affordable & Professional", desc: "Premium quality without the premium price tag." }
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
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-blue-500 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
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
                  <a href="mailto:info@naijabusinesssites.com" className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors">
                    <Mail className="text-slate-400" />
                    <span>info@naijabusinesssites.com</span>
                  </a>
                  <a href="tel:+2347039352602" className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors">
                    <Phone className="text-slate-400" />
                    <span>+234 703 935 2602</span>
                  </a>
                  <a href="https://wa.me/2347039352602" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl mt-4 transition-colors">
                    <MessageCircle />
                    Message Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="text-green-500" size={24} />
            <span className="text-xl font-bold text-white tracking-tight">Naija Business Sites</span>
          </div>
          <p>© {new Date().getFullYear()} Naija Business Sites. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
