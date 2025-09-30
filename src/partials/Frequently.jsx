import React, { useState } from "react";
import "../styles/frequently.css";

const FAQS = [
  {
    q: "How do I open an account with YourBank?",
    a: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
  },
  {
    q: "What documents do I need to provide to apply for a loan?",
    a: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
  },
  {
    q: "How can I access my accounts online?",
    a: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
  },
  {
    q: "Are my transactions and personal information secure?",
    a: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
  },
];

export default function Frequently() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="frequently">
      <div className="container">
        <h2 className="frequently__title">
          <span className="frequently__title-accent">Frequently</span> Asked
          Questions
        </h2>
        <div className="frequently__grid">
          {FAQS.map((item, idx) => (
            <div className="frequently__card" key={item.q}>
              <div className="frequently__question">{item.q}</div>
              <div
                className={
                  "frequently__answer" +
                  (idx === FAQS.length - 1 && !showAll
                    ? " frequently__answer--fade"
                    : "")
                }
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
        <button
          className="frequently__show-btn"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? "Hide" : "Load All FAQ’s"}{" "}
          <span style={{ fontSize: "1.2em" }}>{showAll ? "▲" : "▼"}</span>
        </button>
      </div>
    </section>
  );
}
