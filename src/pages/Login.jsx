import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const emailOrPhone = form.querySelector('input[type="text"]')
    const password = form.querySelector('input[type="password"]')

    if (emailOrPhone.value === '' || password.value === '') {
      alert('Please fill in all fields.')
    } else {
      navigate('/dashboard.html')
    }
  }

  return (
    <div>
      <header className="hero">
        <h1>Welcome to PatientHUB!</h1>
        <p>We provide smart healthcare services in your hands.</p>
      </header>

      <main className="main-content">
        <div className="login-card">
          <h2>Sign in to PatientHUB</h2>

          <form onSubmit={handleSubmit}>
            <div className="social-login">
              <button type="button" onClick={() => alert('Social login will be available soon.')}>
                <img src="/images/photo 1.jpeg" alt="Facebook" />
              </button>

              <button type="button" onClick={() => alert('Social login will be available soon.')}>
                <img src="/images/photo.jpeg" alt="Google" />
              </button>
            </div>

            <input type="text" placeholder="Email or Phone number" />
            <input type="password" placeholder="Please enter your password" />

            <button type="submit" className="sign-in-button">
              SIGN IN
            </button>

            <div className="login-options">
              <a href="#">Forgot password?</a>

              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <p className="or">or</p>

            <button
              type="button"
              className="sign-up-button"
              onClick={() => alert('Sign up page will be available soon.')}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <a href="#">Google Play Store APP</a>
        <a href="#">App Store APP</a>
        <a href="#">About PatientHUB</a>
        <a href="#">About Us</a>
        <a href="#">Our Blog</a>
      </footer>
    </div>
  )
}

export default Login
