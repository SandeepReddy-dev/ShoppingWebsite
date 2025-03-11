import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [socialEmail, setSocialEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }
    setError("");
    alert("Signed Up Successfully!");
  };

  const handleSocialLogin = (platform) => {
    const enteredEmail = prompt(`Enter your email for ${platform} login:`);
    if (enteredEmail) {
      setSocialEmail(enteredEmail);
      alert(`${platform} login successful with ${enteredEmail}`);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center">Join Us</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">Or sign in with</p>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-outline-danger"
            onClick={() => handleSocialLogin("Google")}
          >
            Google
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleSocialLogin("Facebook")}
          >
            Facebook
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => handleSocialLogin("Apple")}
          >
            Apple
          </button>
        </div>
        <p className="text-center mt-3">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
