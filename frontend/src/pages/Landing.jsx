import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
            <Header />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 container mx-auto px-6 z-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50 to-transparent -z-10 opacity-60 pointer-events-none"></div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-in slide-in-from-left-8 duration-700 fade-in-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold tracking-wide uppercase shadow-sm">
                            The Ultimate Getaway
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Discover Your <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Paradise</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-light max-w-xl leading-relaxed">
                            Experience world-class luxury, pristine beaches, and unforgettable moments at Ocean View Resort.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                onClick={() => navigate('/rooms')}
                                className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-bold overflow-hidden shadow-xl shadow-cyan-900/20 transition-all hover:shadow-2xl hover:bg-slate-800 hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Book Your Stay 
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </button>
                            <button 
                                onClick={() => navigate('/login')}
                                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-cyan-300 hover:text-cyan-700 hover:shadow-lg transition-all"
                            >
                                Member Sign In
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-6 pt-8 text-sm font-medium text-slate-500">
                             <div className="flex -space-x-3">
                                 <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                 <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                                 <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                                 <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-800 text-white flex items-center justify-center text-xs">+2k</div>
                             </div>
                             <p>Join 10,000+ happy guests this year</p>
                        </div>
                    </div>
                    
                    <div className="relative h-[500px] lg:h-[600px] hidden lg:block perspective-1000 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 to-blue-600 rounded-[2rem] rotate-3 opacity-20 blur-2xl group-hover:rotate-6 transition-transform duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                            alt="Luxury Pool" 
                            className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500"
                        />
                        
                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 max-w-xs animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">5-Star Rated</p>
                                    <p className="text-xs text-slate-500">Based on 2,000+ reviews</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 italic">"The most beautiful resort I've ever visited. Truly magical!"</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Landing;
