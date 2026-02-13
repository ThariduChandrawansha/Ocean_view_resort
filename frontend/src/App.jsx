import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import { Database, ShieldCheck, ShieldAlert, Loader2 } from 'lucide-react'

function App() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dbName, setDbName] = useState('')

  const checkConnection = async () => {
    setLoading(true)
    setStatus(null)
    try {
      const response = await axios.get('http://localhost:8080/api/db-check')
      setStatus(response.data.status)
      if (response.data.status === 'success') {
        setDbName(response.data.database)
      }
    } catch (error) {
      console.error('Connection check failed:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="app-container">
        <div className="status-card">
          <Database size={48} className="icon-main" style={{ marginBottom: '1rem', color: '#38bdf8' }} />
          <h1>Database Connection Test</h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            Check the connection status between the React frontend and Spring Boot backend with MongoDB.
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Loader2 className="animate-spin" /> Checking connection...
              </div>
            ) : status === 'success' ? (
              <div className="status-success">
                <ShieldCheck style={{ display: 'inline', marginRight: '0.5rem' }} />
                Connected to {dbName}!
              </div>
            ) : status === 'error' ? (
              <div className="status-error">
                <ShieldAlert style={{ display: 'inline', marginRight: '0.5rem' }} />
                Connection failed. Is the backend running?
              </div>
            ) : (
              <p>Click the button below to test connection.</p>
            )}
          </div>

          <button className="btn" onClick={checkConnection} disabled={loading}>
            Test Connection
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
