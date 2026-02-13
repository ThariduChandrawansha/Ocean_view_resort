import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import AdminDashboard from './pages/AdminDashboard'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

function Landing() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="status-card" style={{padding: '3rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Experience Luxury
          </h1>
          <p style={{fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem'}}>
            Welcome to Ocean View Resort, where paradise meets comfort.
          </p>
          <a href="/login" className="btn btn-primary" style={{textDecoration: 'none', display: 'inline-block'}}>
            Book Your Stay
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Protected Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Default Catch */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
