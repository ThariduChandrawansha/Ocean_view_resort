import { Github, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-md text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Ocean<span className="text-cyan-500">View</span> Resort</h3>
          <p className="leading-relaxed">A sanctuary of luxury where the ocean breeze meets modern comfort. Your perfect getaway starts here.</p>
        </div>
        
        {['Quick Links', 'Services', 'Contact'].map((title, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-lg font-semibold text-white/90">{title}</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Rooms', 'Special Offers', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-200 block md:inline-block w-full">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="flex justify-center md:justify-start gap-6 mt-8 md:mt-0">
          {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
            <a key={i} href="#" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm font-medium opacity-60">
        &copy; {new Date().getFullYear()} Ocean View Resort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
