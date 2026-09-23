import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

function FindClinic() {
  const [closed, setClosed] = useState(true)
  const [mapView, setMapView] = useState(true)

  return (
    <>
      <Sidebar closed={closed} active="Find Clinic" />

      <div className="find-clinic-page">
        <section className="clinic-hero">
          <Navbar
            breadcrumb="Find Hospital"
            title="Find Hospital"
            icon="fa-solid fa-user-doctor"
            closed={closed}
            setClosed={setClosed}
          />

          <main className="main-find-clinic">
            <div className="clinic-intro">
              <h2>Find a Clinic</h2>
              <p>
                Search Clinics and schedule an appoinment
                with doctors through Clinic
              </p>
            </div>

            <div className="clinic-search">
              <div className="search-field">
                <i className="fa-solid fa-user-clinic"></i>
                <input type="text" placeholder="Search" />
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

        <button
          className={`view-button${mapView ? ' active' : ''}`}
          id="Mapbutton"
          onClick={() => setMapView(true)}
        >
          <i className="fa-solid fa-map-location-dot"></i>
        </button>

        <button
          className={`view-button${!mapView ? ' active' : ''}`}
          id="Listbutton"
          onClick={() => setMapView(false)}
        >
          <i className="fa-solid fa-list"></i>
        </button>

        <div className="clinic-main-content">
          <div className="clinic-left">
            <div className="clinic-filter-box">
              <input type="text" placeholder="Primary care" />
              <input type="text" placeholder="Zip Code or Neighborhood" />
            </div>

            <div className="filter-by-box">
              <h3>Filter By</h3>
              <br />

              <select defaultValue="">
                <option value="" disabled hidden>Specialty</option>
                <option value="doctor">Doctor</option>
                <option value="surgeon">Surgeon</option>
              </select>

              <select defaultValue="gender">
                <option value="gender" disabled hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select defaultValue="Condition">
                <option value="Condition" disabled hidden>Condition</option>
                <option value="Emergency"> Emergency </option>
                <option value="Family Doctor"> Family Doctor </option>
              </select>

              <select defaultValue="Languages">
                <option value="Languages" disabled hidden>Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="German">German</option>
                <option value="Pashto">Pashto</option>
              </select>

              <br />
              <br />

              <div className="providers-section">
                <h3>Providers Who Treat</h3>
                <br />
                <label><input type="checkbox" /> All Ages</label>
                <label><input type="checkbox" /> Children</label>
                <label><input type="checkbox" /> Adults</label>
              </div>

              <br />
              <br />

              <div className="view-only-section">
                <h3>View Only</h3>
                <br />
                <label><input type="checkbox" /> Online Scheduling</label>
                <label><input type="checkbox" /> Primary Care</label>
              </div>
            </div>
          </div>

          <div className="clinic-results">
            {mapView ? (
              <div className="map-content" id="MapContent">
                <img src="/images/Map.jpeg" alt="Map" />
              </div>
            ) : (
              <>
                <div className="clinic-card" id="ClinicCard1">
                  <div className="clinic-card-image">
                    <img src="/images/Clinic1.jpeg" alt="Klinik Pakar Kesihantan USIM" />
                  </div>
                  <div className="clinic-card-info">
                    <h3>Klinik Pakar Kesihantan USIM</h3>
                    <p>
                      Lot 193,194 Jalan Nilai Square 6, Bandar Baru
                      <br />
                      Nilai, 71800 Nilai, Negeri Sembilan Malaysia
                      <br />
                      https://klinikpakar.usim.edu.my
                      <br />
                      +60126504921
                      <br />
                      RQ6F+ P7 NILAI, Negeri Sembilan, Malaysia
                    </p>
                    <div className="clinic-card-buttons">
                      <button>MORE ABOUT THIS LOCATATION</button>
                      <button>FIND A DOCTOR AND SCHEDULE</button>
                    </div>
                  </div>
                </div>

                <div className="clinic-card" id="ClinicCard2">
                  <div className="clinic-card-image">
                    <img src="/images/Clinic2.jpeg" alt="Dialysis Centers" />
                  </div>
                  <div className="clinic-card-info">
                    <h3>Dialysis Centers</h3>
                    <p>
                      Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai,
                      71800 Nilai, Negeri Sembilan Malaysia
                      <br />
                      https://klinikpakar.usim.edu.my
                      <br />
                      +60126504921
                      <br />
                      RQ6F+ P7 NILAI, Negeri Sembilan, Malaysia
                    </p>
                    <div className="clinic-card-buttons">
                      <button>MORE ABOUT THIS LOCATATION</button>
                      <button>FIND A DOCTOR AND SCHEDULE</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <footer className="find-clinic-footer">
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

export default FindClinic
