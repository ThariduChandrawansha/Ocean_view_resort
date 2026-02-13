import { HelpCircle, Book, MessageSquare, Shield, CreditCard, LifeBuoy, Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Help = () => {
  const faqs = [
    { 
        q: "How do I make a reservation?", 
        a: "You can easily book a room by navigating to our 'Rooms' page, choosing your preferred room, and clicking 'Book Stay'. You'll need to create an account or sign in to complete the booking." 
    },
    { 
        q: "What is your cancellation policy?", 
        a: "Full refunds are available for cancellations made at least 48 hours before the scheduled check-in time. Late cancellations may incur a fee of one night's stay." 
    },
    { 
        q: "Check-in and Check-out times?", 
        a: "Standard check-in time is 2:00 PM, and check-out is before 11:00 AM. Early check-in or late check-out can be requested based on availability." 
    },
    { 
        q: "Do you offer airport shuttle services?", 
        a: "Yes, we provide luxury airport transfers from Bandaranaike International Airport. Please contact our concierge desk 24 hours in advance to schedule your pickup." 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Search Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-300 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/10">
            <LifeBuoy className="w-4 h-4 text-cyan-500" />
            Support Center
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-8">How can we <span className="text-cyan-500 text-gradient leading-relaxed">help you?</span></h1>
          
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or FAQs..." 
              className="w-full pl-16 pr-8 py-5 rounded-[2rem] bg-white text-slate-900 font-medium shadow-2xl focus:ring-4 focus:ring-cyan-500/20 transition-all outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: 'Booking Help', icon: Book, color: 'bg-blue-50 text-blue-600' },
                { title: 'Refunds & Returns', icon: CreditCard, color: 'bg-emerald-50 text-emerald-600' },
                { title: 'Account Settings', icon: Shield, color: 'bg-purple-50 text-purple-600' },
                { title: 'Talk to Support', icon: MessageSquare, color: 'bg-orange-50 text-orange-600' }
            ].map((cat, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all cursor-pointer group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.color}`}>
                        <cat.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">View 12 articles and guides relating to this topic.</p>
                    <div className="flex items-center gap-1 text-slate-900 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                        Explore <ChevronRight className="w-4 h-4 text-cyan-500" />
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
                <HelpCircle className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h2 className="text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-500 mt-2">Quick answers to common questions from our guests.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-cyan-200 transition-colors">
                        <button className="w-full px-8 py-6 text-left flex justify-between items-center group">
                            <span className="text-lg font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{faq.q}</span>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </button>
                        <div className="px-8 pb-6 text-slate-500 leading-relaxed">
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4">Still need assistance?</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">Our specialized support team is available 24/7 to solve any issues or answer your questions.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="px-10 py-4 bg-cyan-600 text-white rounded-2xl font-black hover:bg-cyan-500 transition-all shadow-xl shadow-cyan-900/40">
                        Chat with Support
                    </a>
                    <a href="tel:+94112345678" className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black border border-white/10 hover:bg-white/20 transition-all">
                        Call Concierge
                    </a>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
