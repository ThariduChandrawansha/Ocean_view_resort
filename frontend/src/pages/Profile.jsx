import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User, Mail, Calendar, LogOut, MapPin, Phone, Shield, Edit2, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />
            
            <main className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8 relative">
                    <div className="h-32 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
                    <div className="px-8 pb-8">
                        <div className="relative flex items-end -mt-12 mb-6">
                            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                                <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-400 border border-slate-200">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="ml-6 mb-1 flex-1">
                                <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
                                <p className="text-slate-500 flex items-center gap-2 text-sm">
                                    <Mail className="w-4 h-4" /> {user.email}
                                </p>
                            </div>
                            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
                                <Edit2 className="w-4 h-4" /> Edit Profile
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-slate-200">
                            {['Overview', 'My Bookings', 'Settings'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                                        activeTab === tab.toLowerCase()
                                            ? 'border-cyan-600 text-cyan-700'
                                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-cyan-600" /> Account Details
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Member Since</span>
                                    <span className="font-medium text-slate-800">Feb 2024</span>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Account Type</span>
                                    <span className="bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase">{user.role}</span>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Status</span>
                                    <span className="flex items-center gap-1.5 text-green-600 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active
                                    </span>
                                </li>
                            </ul>
                            
                            <button 
                                onClick={logout}
                                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                            >
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center">
                            <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                            <p className="text-slate-400 text-sm mb-4">Our concierge team is available 24/7 to assist you.</p>
                            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors border border-white/10 w-full">
                                Contact Support
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-cyan-600" /> Upcoming Stays
                                    </h3>
                                    
                                    {/* Empty State Placeholder */}
                                    <div className="text-center py-12 bg-slate-50 rounded-xl border-dashed border-2 border-slate-200">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <Calendar className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <h4 className="text-slate-800 font-medium mb-1">No upcoming trips</h4>
                                        <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
                                            You haven't booked any stays yet. Explore our luxury suites and start planning your paradise getaway.
                                        </p>
                                        <button 
                                            onClick={() => navigate('/')}
                                            className="px-6 py-2.5 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors shadow-sm shadow-cyan-200"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-cyan-600" /> Recent Activity
                                    </h3>
                                    <div className="space-y-4">
                                         <div className="flex items-start gap-4 pb-4 border-b border-slate-50">
                                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-slate-800 font-medium text-sm">Profile Updated</p>
                                                <p className="text-slate-500 text-xs">You successfully updated your profile information.</p>
                                                <p className="text-slate-400 text-[10px] mt-1">Just now</p>
                                            </div>
                                         </div>
                                         <div className="flex items-start gap-4">
                                            <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-slate-800 font-medium text-sm">Account Created</p>
                                                <p className="text-slate-500 text-xs">Welcome to Ocean View Resort! Your account is active.</p>
                                                <p className="text-slate-400 text-[10px] mt-1">Today</p>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'my bookings' && (
                             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                                 <p className="text-slate-500">Booking history feature coming soon...</p>
                             </div>
                        )}
                        
                         {activeTab === 'settings' && (
                             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                                 <p className="text-slate-500">Account settings feature coming soon...</p>
                             </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
