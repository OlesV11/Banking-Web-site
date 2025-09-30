import React, { useState } from "react";
import "../styles/signup-modal.css";

export default function SignUpModal({ open, onClose, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  if (!open) return null;
  return (
    <div className="signup-modal__backdrop" onClick={onClose}>
      <div
        className="signup-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="signup-modal__title">Sign Up</h2>
        <p className="signup-modal__subtitle">
          Join our community today. Create an account to unlock exclusive
          features and personalized experiences.
        </p>
        <form className="signup-modal__form">
          <div className="signup-modal__row">
            <input
              className="signup-modal__input"
              type="text"
              placeholder="Enter First Name"
            />
            <input
              className="signup-modal__input"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="signup-modal__row">
            <input
              className="signup-modal__input"
              type="email"
              placeholder="Enter your Email"
            />
            <div className="signup-modal__password-wrapper">
              <input
                className="signup-modal__input signup-modal__input--password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="signup-modal__password-toggle"
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
          <button
            type="submit"
            className="signup-modal__btn signup-modal__btn--primary"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="signup-modal__btn signup-modal__btn--secondary"
            onClick={onLogin}
          >
            Login
          </button>
        </form>
        <div className="signup-modal__divider">Or Continue with</div>
        <div className="signup-modal__socials">
          <button
            className="signup-modal__social-btn"
            aria-label="Sign up with Google"
          >
            <span className="signup-modal__icon signup-modal__icon--google">
              G
            </span>
          </button>
          <button
            className="signup-modal__social-btn"
            aria-label="Sign up with Facebook"
          >
            <span className="signup-modal__icon signup-modal__icon--facebook">
              f
            </span>
          </button>
          <button
            className="signup-modal__social-btn"
            aria-label="Sign up with Apple"
          >
            <span className="signup-modal__icon signup-modal__icon--apple">
              
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
