import React from "react";
import "../styles/careers-job-card.css";

export default function CareersJobCard() {
  return (
    <section className="careers-job-card">
      <div className="container">
        <div className="careers__job__card__thumb">
          <h2 className="careers-job-card__title">Relationship Manager</h2>
          <div className="careers-job-card__tags">
            <span className="careers-job-card__tag">Location: India</span>
            <span className="careers-job-card__tag">
              Department: Retail Banking
            </span>
          </div>
          <h3 className="careers-job-card__subtitle">About This Job</h3>
          <p className="careers-job-card__desc">
            As a Relationship Manager at YourBank, you will be responsible for
            developing and maintaining relationships with our valued customers.
            You will proactively identify their financial needs and offer
            tailored solutions to help them achieve their goals. We are seeking
            individuals with excellent communication skills, a strong sales
            acumen, and a passion for delivering exceptional customer service.
          </p>
          <h3 className="careers-job-card__subtitle">
            Requirements & Qualifications
          </h3>
          <ul className="careers-job-card__list">
            <li className="careers-job-card__item">
              <span className="careers-job-card__icon" aria-hidden="true">
                💼
              </span>
              Bachelor's degree in Business, Finance, or a related field
            </li>
            <li className="careers-job-card__item">
              <span className="careers-job-card__icon" aria-hidden="true">
                💼
              </span>
              Minimum of 3 years of experience in sales or relationship
              management in the banking industry
            </li>
            <li className="careers-job-card__item">
              <span className="careers-job-card__icon" aria-hidden="true">
                💼
              </span>
              Proven track record of meeting and exceeding sales targets
            </li>
            <li className="careers-job-card__item">
              <span className="careers-job-card__icon" aria-hidden="true">
                💼
              </span>
              Excellent interpersonal and negotiation skills
            </li>
            <li className="careers-job-card__item">
              <span className="careers-job-card__icon" aria-hidden="true">
                💼
              </span>
              Strong knowledge of banking products and services
            </li>
          </ul>
          <button className="careers-job-card__btn">Apply Now</button>
        </div>
      </div>
    </section>
  );
}
