import "../../style.css";
import { useState } from "react";

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
  event.preventDefault();

  if (emailOrPhone === "" || password === "") {
    alert("Please fill in all fields.");
  } else {
    window.location.href = "dashboard.html";
  }
};

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
        <button
           type="button"
           onClick={() => alert("Social login will be available soon.")}>
           <img src="images/photo 1.jpeg" alt="Facebook" />
           Facebook
           </button>

              <button
              type="button"
                onClick={() => alert("Social login will be available soon.")}>
               <img src="images/photo.jpeg" alt="Google" />
                Google
                </button>
                </div>

     <input
       type="text"
       placeholder="Email or Phone number"
       value={emailOrPhone}
       onChange={(event) => setEmailOrPhone(event.target.value)}
       />

     <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(event) => setPassword(event.target.value)}
     />

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
  onClick={() => alert("Sign up page will be available soon.")}
>
  SIGN UP
</button>

<footer className="footer">
  <a href="#">Google Play Store APP</a>
  <a href="#">App Store APP</a>
  <a href="#">About PatientHUB</a>
  <a href="#">About Us</a>
  <a href="#">Our Blog</a>
</footer>

</form>
</div>
</main>
</div>
  );
}

export default Login;