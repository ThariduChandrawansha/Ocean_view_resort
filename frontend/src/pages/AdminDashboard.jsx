import AdminSidebar from '../components/AdminSidebar';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Bell, Search, CalendarDays, TrendingUp, Users, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    // Protect Route
    useEffect(() => {
        if (!loading && (!user || (user.role !== 'ADMIN' && user.role !== 'STAFF'))) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (!user) return null;

    return (
        <div className="flex bg-slate-50 min-h-screen">
            {/* Main Content Area - Left Sidebar for Content */}
            <div className="flex-1 mr-64"> 
                {/* Dashboard Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-8 py-5 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-4 w-full max-w-lg">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                            <input 
                                type="text" 
                                placeholder="Search reservations, rooms, or guests..." 
                                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-500 hover:text-cyan-600 transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-800">{user.name}</p>
                                <p className="text-xs text-slate-500 font-medium bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full inline-block">{user.role}</p>
                            </div>
                            <div 
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/30 cursor-pointer hover:scale-105 transition-transform"
                                onClick={logout}
                                title="Logout"
                            >
                                {user.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8 space-y-8">
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl shadow-cyan-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                        <h1 className="text-3xl font-bold mb-2 relative z-10">Dashboard Overview</h1>
                        <p className="text-cyan-100 relative z-10">Welcome back! manage your resort operations seamlessly.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Total Reservations', value: '1,245', change: '+12%', icon: CalendarDays, color: 'text-blue-600', bg: 'bg-blue-50' },
                            { label: 'Revenue', value: '$45,200', change: '+8.5%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
                            { label: 'Active Guests', value: '342', change: '+4%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                            { label: 'Occupancy Rate', value: '85%', change: '-2%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wide">{stat.label}</h3>
                                <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity / Content Placeholder */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-slate-800">Recent Reservations</h3>
                                <button className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">View All</button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">GD</div>
                                            <div>
                                                <p className="font-bold text-slate-800">Guest Demo</p>
                                                <p className="text-xs text-slate-500">Suite • 3 Nights</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Pending</span>
                                    </div>
                                ))}
                                <div className="text-center py-8 text-slate-400 text-sm italic">
                                    No live data yet.
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Actions</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'Check-In Guest', color: 'bg-blue-600 hover:bg-blue-700' },
                                    { label: 'Create Invoice', color: 'bg-slate-800 hover:bg-slate-900' },
                                    { label: 'Add Room Maintenance', color: 'bg-orange-500 hover:bg-orange-600' },
                                ].map((action, i) => (
                                    <button 
                                        key={i}
                                        className={`w-full py-3 px-4 rounded-xl text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${action.color}`}
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Sidebar Component */}
            <AdminSidebar />
        </div>
    );
};

export default AdminDashboard;
