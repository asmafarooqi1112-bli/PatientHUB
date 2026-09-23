import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

const services = [
  ['fa-solid fa-user-doctor', 'Primary Care and Internal MD', 'Our doctors partner with you to help you reach your wellness.'],
  ['fa-solid fa-truck-medical', 'Emergency Care', 'We provide emergency care for adults and children.'],
  ['fa-solid fa-x-ray', 'Imaging Services', 'From X-ray to MR scan, we offer.....'],
  ['fa-solid fa-hospital', 'Urgent Care', 'We offer urgent care for non....'],
]

const specialties = [
  'Anesthesiology',
  'Dermatology',
  'Emergency medicine',
  'Neurology',
  'Consultation',
  'Ophthalmology',
]

function FindDoctor() {
  const [closed, setClosed] = useState(true)

  return (
    <>
      <Sidebar closed={closed} active="Find Doctor" />

      <div className="find-doctor-page">
        <section className="doctor-hero">
          <Navbar
            breadcrumb="Find Doctor"
            title="Find a Doctor"
            icon="fa-solid fa-user-doctor"
            closed={closed}
            setClosed={setClosed}
          />

          <main className="main-find-doctor">
            <div className="doctor-intro">
              <h2>Find a Doctor</h2>
              <p>Search Doctors and schedule an appointment</p>
            </div>

            <div className="doctor-search">
              <div className="search-field">
                <i className="fa-solid fa-user-doctor"></i>
                <input type="text" placeholder="Search a doctor by name, speciality" />
              </div>

              <div className="search-field">
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="Zip Code or Neighborhood" />
              </div>

              <button type="button">CURRENT</button>
              <button type="button">SEARCH</button>
            </div>
          </main>
        </section>
      </div>

      <div className="main-content">
        <h1>Special Services</h1>

        <div className="cards-container">
          {services.map(([icon, title, description]) => (
            <div className="cards" key={title}>
              <i className={icon}></i>
              <div className="card-info">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <button className="card-arrow" type="button">
                <Link className="card-arrow" to="/find-clinic.html">
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="specialty-section">
        <h1>Find Doctors By Specialty</h1>
        <p>Select a Specialty to View all Doctors and schedule an Appointment</p>

        <div className="specialty-cards">
          {specialties.map((specialty) => (
            <div className="specialty-card" key={specialty}>
              <p>{specialty}</p>
              <button className="card-arrow" type="button">
                <Link className="card-arrow" to="/find-clinic.html">
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="find-doctor-footer">
        <p>2026, made with <span>♥</span> by PIHUB for a better web.</p>
        <div className="footer-links">
          <strong>PatientHUB</strong>
          <Link to="/">About Us</Link>
          <Link to="/">Blog</Link>
        </div>
      </footer>
    </>
  )
}

export default FindDoctor
