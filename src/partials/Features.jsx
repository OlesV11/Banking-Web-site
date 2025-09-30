import "../styles/features.css";
export default function Features() {
  return (
    <section className="features">
      <div className="container features__container">
        <h2 className="features__title">
          Our <span className="features__title-accent">Features</span>
        </h2>
        <p className="features__desc">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
        <div className="features__wrapper">
          <nav className="features__nav" aria-label="Feature categories">
            <ul className="features__tabs">
              <li className="features__tab-item">
                <button
                  type="button"
                  className="features__tab-btn features__tab-btn--active"
                >
                  Online Banking
                </button>
              </li>
              <li className="features__tab-item">
                <button type="button" className="features__tab-btn">
                  Financial Tools
                </button>
              </li>
              <li className="features__tab-item">
                <button type="button" className="features__tab-btn">
                  Customer Support
                </button>
              </li>
            </ul>
          </nav>
          <div className="features__cards">
            <article className="features__card">
              <div className="features__card-header">
                <h3 className="features__card-title">24/7 Account Access</h3>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="features__card-icon"
                >
                  <path
                    d="M1.50005 14L14.5 0.999958M14.5 0.999958V13.48M14.5 0.999958L2.02005 0.999958"
                    stroke="#CAFF33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="features__card-desc">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </article>
            <article className="features__card">
              <div className="features__card-header">
                <h3 className="features__card-title">Mobile Banking App</h3>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="features__card-icon"
                >
                  <path
                    d="M1.50005 14L14.5 0.999958M14.5 0.999958V13.48M14.5 0.999958L2.02005 0.999958"
                    stroke="#CAFF33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="features__card-desc">
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </p>
            </article>
            <article className="features__card">
              <div className="features__card-header">
                <h3 className="features__card-title">Secure Transactions</h3>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="features__card-icon"
                >
                  <path
                    d="M1.50005 14L14.5 0.999958M14.5 0.999958V13.48M14.5 0.999958L2.02005 0.999958"
                    stroke="#CAFF33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="features__card-desc">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </p>
            </article>
            <article className="features__card">
              <div className="features__card-header">
                <h3 className="features__card-title">Bill Pay and Transfers</h3>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="features__card-icon"
                >
                  <path
                    d="M1.50005 14L14.5 0.999958M14.5 0.999958V13.48M14.5 0.999958L2.02005 0.999958"
                    stroke="#CAFF33"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="features__card-desc">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
