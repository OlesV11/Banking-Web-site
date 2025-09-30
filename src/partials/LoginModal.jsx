import React, { useState } from "react";
import "../styles/login-modal.css";

export default function LoginModal({ open, onClose, onSignUp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  if (!open) return null;
  return (
    <div className="login-modal__backdrop" onClick={onClose}>
      <div
        className="login-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="login-modal__title">Login</h2>
        <p className="login-modal__subtitle">
          Welcome back! Please log in to access your account.
        </p>
        <form className="login-modal__form">
          <div className="login-modal__row">
            <input
              className="login-modal__input"
              type="email"
              placeholder="Enter your Email"
            />
            <div className="login-modal__password-wrapper">
              <input
                className="login-modal__input login-modal__input--password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="login-modal__password-toggle"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C3 7 8 4 12 4C16 4 21 7 23 12C21 17 16 20 12 20C8 20 3 17 1 12Z"
                      stroke="#caff33"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#caff33"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C3 7 8 4 12 4C16 4 21 7 23 12C21 17 16 20 12 20C8 20 3 17 1 12Z"
                      stroke="#caff33"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#caff33"
                      strokeWidth="2"
                    />
                    <line
                      x1="4"
                      y1="20"
                      x2="20"
                      y2="4"
                      stroke="#caff33"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="login-modal__forgot">
            <a href="#" className="login-modal__forgot-link">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="login-modal__btn login-modal__btn--primary"
          >
            Login
          </button>
          <button
            type="button"
            className="login-modal__btn login-modal__btn--secondary"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        </form>
        <div className="login-modal__divider">Or Continue with</div>
        <div className="login-modal__socials">
          <button
            className="login-modal__social-btn"
            aria-label="Login with Google"
          >
            <span className="login-modal__icon login-modal__icon--google">
              G
            </span>
          </button>
          <button
            className="login-modal__social-btn"
            aria-label="Login with Facebook"
          >
            <span className="login-modal__icon login-modal__icon--facebook">
              f
            </span>
          </button>
          <button
            className="login-modal__social-btn"
            aria-label="Login with Apple"
          >
            <span className="login-modal__icon login-modal__icon--apple">
              
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
