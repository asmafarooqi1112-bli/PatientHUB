import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import FindDoctor from './pages/FindDoctor.jsx'
import FindClinic from './pages/FindClinic.jsx'

function PageStyles() {
  const location = useLocation()

  useEffect(() => {
    const styles = {
      '/': '/styles/style.css',
      '/dashboard.html': '/styles/dashboard.css',
      '/find-doctor.html': '/styles/find-doctor.css',
      '/find-clinic.html': '/styles/find-clinic.css',
    }

    const href = styles[location.pathname] || '/styles/style.css'
    const existing = document.getElementById('page-style')

    if (existing) existing.remove()

    const link = document.createElement('link')
    link.id = 'page-style'
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)

    return () => {
      link.remove()
    }
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <PageStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard.html" element={<Dashboard />} />
        <Route path="/find-doctor.html" element={<FindDoctor />} />
        <Route path="/find-clinic.html" element={<FindClinic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
