import "../styles/hero.css";
export default function Hero({ onOpenLogin }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-title">
              Welcome to YourBank
              <br />
              Empowering Your <span className="accent">Financial Journey</span>
            </h1>
            <p className="hero-desc">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers’ needs.
            </p>
            <button className="hero-cta" onClick={onOpenLogin}>Open Account</button>
          </div>
          <div className="hero-card">
            <div className="card-balance">
              <span className="card-balance__icon">🟢</span>
              <span className="card-balance__amount">$5000,00</span>
              <span className="card-balance__label">Monthly Income</span>
            </div>
            <div className="card-transactions">
              <div className="card-transactions__title">Your Transactions</div>
              <div className="card-transactions__item">
                <span className="dot green"></span> Joel Kenley{" "}
                <span className="amount">- $68.00</span>
              </div>
              <div className="card-transactions__item">
                <span className="dot"></span> Mark Smith{" "}
                <span className="amount">- $68.00</span>
              </div>
              <div className="card-transactions__item inactive">
                <span className="dot"></span> Laren Ray{" "}
                <span className="amount">- $68.00</span>
              </div>
            </div>
            <div className="card-exchange">
              <div className="card-exchange__title">Money Exchange</div>
              <div className="card-exchange__row">
                <span className="flag">🇮🇳</span> INR{" "}
                <span className="exchange-amount">5,000</span>
                <span className="flag">🇺🇸</span> USD{" "}
                <span className="exchange-amount">12.00</span>
              </div>
              <button className="exchange-btn">Exchange</button>
            </div>
            <div className="card-currencies">
              Supported Currency:
              <span className="currency">₹</span>
              <span className="currency">$</span>
              <span className="currency">€</span>
              <span className="currency">£</span>
              <span className="currency">¥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
