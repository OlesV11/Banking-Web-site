import "../styles/careers-values.css";
export default function CareersValues() {
  return (
    <section className="careers-values-section">
      <div className="container careers-values__container">
        <h2 className="careers-values__title">
          Our <span className="careers-values__title-accent">Values</span>
        </h2>
        <p className="careers-values__desc">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
        <div className="careers-values__cards">
          <article className="careers-values__card">
            <div className="careers-values__card-header">
              <h3 className="careers-values__card-title">Integrity</h3>
            </div>
            <p className="careers-values__card-desc">
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </article>
          <article className="careers-values__card">
            <div className="careers-values__card-header">
              <h3 className="careers-values__card-title">
                Customer Centricity
              </h3>
            </div>
            <p className="careers-values__card-desc">
              Our customers are at the heart of everything we do. We are
              dedicated to understanding their needs, providing personalized
              solutions, and delivering exceptional service that exceeds
              expectations.
            </p>
          </article>
          <article className="careers-values__card">
            <div className="careers-values__card-header">
              <h3 className="careers-values__card-title">Collaboration</h3>
            </div>
            <p className="careers-values__card-desc">
              We foster a collaborative and inclusive work environment, where
              teamwork and diversity are celebrated. By leveraging the unique
              strengths and perspectives of our employees, we drive innovation
              and achieve greater success together.
            </p>
          </article>
          <article className="careers-values__card">
            <div className="careers-values__card-header">
              <h3 className="careers-values__card-title">Innovation</h3>
            </div>
            <p className="careers-values__card-desc">
              We embrace change and constantly seek innovative solutions to meet
              the evolving needs of our customers. We encourage our employees to
              think creatively, challenge conventions, and explore new ideas to
              drive the future of banking.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
