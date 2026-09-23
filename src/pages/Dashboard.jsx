import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [closed, setClosed] = useState(false)
  const navigate = useNavigate()

  const moreDetails = () => navigate('/')

  return (
    <>
      <Sidebar closed={closed} active="Dashboard" />

      <Navbar
        breadcrumb="Dashboard"
        title="Dashboard"
        icon="fa-solid fa-house"
        closed={closed}
        setClosed={setClosed}
      />

      <main className="main-dashboard">
        <h2>Welcome To PatientHUB!</h2>

        <div className="dashboard-row">
          <section className="dashboard-card">
            <span className="card-info">!</span>
            <h3>Promotion by Clinics</h3>
            <div className="promotion-content">
              <div className="chart-side">
                <img src="/images/promotion.jpeg" alt="Promotion by Clinics" />
                <button className="more-details" onClick={moreDetails}>MORE DETAILS</button>
              </div>
              <div className="promotion-list">
                <p><span className="color-dot pink"></span>Klinik Lee Healthcare<strong>19%</strong></p>
                <p><span className="color-dot blue"></span>Klinik Bandar Baru Nilai<strong>4%</strong></p>
                <p><span className="color-dot mixed"></span>Klinik Mediviron Giant Nilai<strong>10%</strong></p>
                <p><span className="color-dot green"></span>KLINIK NILAI IMPIAN<strong>21%</strong></p>
                <p><span className="color-dot light-blue"></span>Klinik Mediviron<strong>2%</strong></p>
              </div>
            </div>
          </section>

          <section className="dashboard-card">
            <span className="card-info">!</span>
            <h3>Promotion by Pharmacies</h3>
            <div className="promotion-content">
              <div className="chart-side">
                <img src="/images/promotion by.jpeg" alt="Promotion by Pharmacies" />
                <button className="more-details" onClick={moreDetails}>MORE DETAILS</button>
              </div>
              <div className="promotion-list">
                <p><span className="color-dot pink"></span>ALPRO PHARMACY NILAI<strong>15%</strong></p>
                <p><span className="color-dot blue"></span>ALPRO PHARMACY PEKAN NILAI<strong>12%</strong></p>
                <p><span className="color-dot mixed"></span>OK PHARMACY<strong>5%</strong></p>
                <p><span className="color-dot green"></span>PHARMART PHARMACY NILAI<strong>9%</strong></p>
                <p><span className="color-dot light-blue"></span>Health Lane Family Pharmacy<strong>14%</strong></p>
              </div>
            </div>
          </section>
        </div>

        <div className="dashboard-row">
          <section className="dashboard-card">
            <span className="card-info">!</span>
            <h3>Smart Market Usage by app</h3>
            <div className="promotion-content">
              <div className="chart-side">
                <img src="/images/smart.jpeg" alt="Smart Market Usage" />
                <button className="more-details" onClick={moreDetails}>MORE DETAILS</button>
              </div>
              <div className="promotion-list">
                <p><span className="color-dot pink"></span>Food Panda<strong>25%</strong></p>
                <p><span className="color-dot blue"></span>Grab Food<strong>3%</strong></p>
                <p><span className="color-dot mixed"></span>Zomato<strong>12%</strong></p>
                <p><span className="color-dot green"></span>Lazada<strong>7%</strong></p>
                <p><span className="color-dot light-blue"></span>Uber Eats<strong>10%</strong></p>
              </div>
            </div>
          </section>

          <section className="dashboard-card health-card">
            <span className="card-info">!</span>
            <h3>Health Index</h3>
            <div className="health-image">
              <img src="/images/health.jpeg" alt="Health Index" />
            </div>
          </section>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>2026, made with <span>♥</span> by PIHUB for a better web.</p>
        <div className="footer-links">
          <strong>PatientHUB</strong>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </div>
      </footer>
    </>
  )
}

export default Dashboard
