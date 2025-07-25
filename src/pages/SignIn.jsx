import React, { useEffect, useState } from "react";
import G_icon from "../assets/G_icon";
import F_icon from "../assets/F_icon";
import A_icon from "../assets/A_icon";
import I_icon from "../assets/I_icon";
import Eye_icon from "../assets/Eye_icon";
import leads_alpha_logo from "../assets/leads-alpha-logo.png";
import { handleRedirectCallback, loginWithSocial, logout } from "../services/auth0";

export default function SignIn() {

  const [user, setUser] = useState(null);

  // Handle Auth0 redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      handleRedirectCallback(code).then(data => {
        console.log("Auth Token:", data);
        // You should decode and store the ID token or user info here
        // For demo:
        setUser(data);
        window.history.replaceState({}, "", "/auth");
      });
    }
  }, []);

  if(user){
          {user && (
            <>
              <p>Logged in! <small>This is for testing!</small></p>
              <pre>{JSON.stringify(user, null, 2)}</pre>
              <button onClick={logout}>Logout</button>
            </>
          )}
  }

  return (
    <div className="auth-page">

      <div className="logo">
        <img src={leads_alpha_logo} alt="leads_alpha_logo" />
      </div>
      <div className="card">


        {/* SECTION 1: Social login */}
        <section>
          <div className="heading">
            <h1 className="title">
              <span>Hey!</span> Welcome Back
            </h1>
            <p>
              Login by submitting essential company details, after which their
              profile undergoes admin review. Upon approval, they gain full access
              to the platform’s dashboard and campaign tools.
            </p>
          </div>

          <div className="auth-buttons">
            <button className="button-46" onClick={() => loginWithSocial("google-oauth2")}><G_icon /> Continue With Google</button>
            <button className="button-46" onClick={() => loginWithSocial("facebook")}><F_icon /> Continue With Facebook</button>
            <button className="button-46" onClick={() => loginWithSocial("apple")}><A_icon /> Continue With Apple</button>
            <button className="button-46"><I_icon /> Continue With Instagram</button>
          </div>

          <div className="divider">
            <span>Or continue with</span>
          </div>
        </section>

        {/* SECTION 2: Email login */}
        <section className="login-form">
          <form>
            <label>Email Address</label>
            <input type="email" placeholder="Enter Email Address" required />

            <label>Password</label>
            <div className="password-input">
              <input type="password" placeholder="Enter Password" required />
              {/* Optional toggle icon here */}
              <span className="eye-icon"><Eye_icon /></span>
            </div>

            <div className="action-submit">
              <button className="login-btn" type="submit">Login Now</button>
            </div>
          </form>

          <p className="create-account">
            Don’t have an account? <a href="#">Create Account</a>
          </p>
        </section>
      </div>
    </div>
  );
}
