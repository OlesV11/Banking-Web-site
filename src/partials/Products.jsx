import "../styles/products.css";
export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__thumb">
          <div className="products__intro">
            <h2 className="products__title">
              Our <span className="products__title__span">Products</span>
            </h2>
            <p className="products__desc">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations
            </p>
          </div>
          <div className="products__tabs">
            <p className="products__tab">For Individuals</p>
            <p className="products__tab__seco">For Businesses</p>
          </div>
        </div>
        <div className="products__list-wrap">
          <ul className="products__list">
            <li className="products__item">
              <div className="products__icon__decor">
                <span className="products__icon">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#caff33"
                      d="M14.631 19.935c-0.898 0-1.425-0.506-1.425-1.413v-1.050c-3.774-0.259-7.534-1.037-11.436-2.529v-2.139c4.801 2.127 9.614 2.879 14.851 2.879 5.25 0 10.063-0.752 14.864-2.879v2.139c-3.902 1.491-7.663 2.269-11.436 2.529v1.050c0 0.908-0.526 1.413-1.425 1.413h-3.992zM5.736 28.558h21.782c2.657 0 3.966-1.297 3.966-3.955v-12.617c0-2.658-1.309-3.955-3.966-3.955h-21.782c-2.644 0-3.966 1.297-3.966 3.955v12.617c0 2.658 1.322 3.955 3.966 3.955zM10.113 9.16h1.99v-2.295c0-0.986 0.578-1.543 1.579-1.543h5.891c1.001 0 1.566 0.558 1.566 1.543v2.269h1.989v-2.127c0-2.438-1.271-3.579-3.594-3.579h-5.827c-2.195 0-3.594 1.141-3.594 3.579v2.152z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="products__item-title">Checking Accounts</h3>
              <p className="products__item-desc">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
            </li>
            <li className="products__item">
              <div className="products__icon__decor">
                <span className="products__icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#caff33"
                      d="M4.5 4c-1.381 0-2.5 1.119-2.5 2.5v1c0 1.381 1.119 2.5 2.5 2.5h23c1.381 0 2.5-1.119 2.5-2.5v-1c0-1.381-1.119-2.5-2.5-2.5h-23z"
                    />
                    <path
                      fill="#caff33"
                      d="M4.116 12l0.72 12.235c0.124 2.114 1.875 3.765 3.993 3.765h14.343c2.118 0 3.869-1.651 3.993-3.765l0.72-12.235h-23.768zM16 14c0.552 0 1 0.448 1 1v6.586l2.293-2.293c0.39-0.39 1.024-0.39 1.414 0s0.39 1.024 0 1.414l-4 4c-0.39 0.39-1.024 0.39-1.414 0l-4-4c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0l2.293 2.293v-6.586c0-0.552 0.448-1 1-1z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="products__item-title">Savings Accounts</h3>
              <p className="products__item-desc">
                Build your savings with our competitive interest rates and
                flexible savings account options. Whether you're saving for a
                specific goal or want to grow your wealth over time, we have the
                right account for you.
              </p>
            </li>
            <li className="products__item">
              <div className="products__icon__decor">
                <span className="products__icon">
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.333 8.75C12.8833 8.75 11.708 9.92525 11.708 11.375C11.708 12.8247 12.8833 14 14.333 14C15.7828 14 16.958 12.8247 16.958 11.375C16.958 9.92525 15.7828 8.75 14.333 8.75Z"
                      fill="#CAFF33"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.08301 5.6875C2.08301 4.47938 3.06238 3.5 4.27051 3.5H24.3955C25.6036 3.5 26.583 4.47938 26.583 5.6875V17.0625C26.583 18.2706 25.6036 19.25 24.3955 19.25H4.27051C3.06238 19.25 2.08301 18.2706 2.08301 17.0625V5.6875ZM9.95801 11.375C9.95801 8.95875 11.9168 7 14.333 7C16.7493 7 18.708 8.95875 18.708 11.375C18.708 13.7912 16.7493 15.75 14.333 15.75C11.9168 15.75 9.95801 13.7912 9.95801 11.375ZM22.208 10.5C21.7248 10.5 21.333 10.8918 21.333 11.375V11.3837C21.333 11.867 21.7248 12.2587 22.208 12.2587H22.2168C22.7 12.2587 23.0918 11.867 23.0918 11.3837V11.375C23.0918 10.8918 22.7 10.5 22.2168 10.5H22.208ZM5.58301 11.375C5.58301 10.8918 5.97476 10.5 6.45801 10.5H6.46676C6.95001 10.5 7.34176 10.8918 7.34176 11.375V11.3837C7.34176 11.867 6.95001 12.2587 6.46676 12.2587H6.45801C5.97476 12.2587 5.58301 11.867 5.58301 11.3837V11.375Z"
                      fill="#CAFF33"
                    />
                    <path
                      d="M2.95801 21C2.47476 21 2.08301 21.3918 2.08301 21.875C2.08301 22.3582 2.47476 22.75 2.95801 22.75C9.25806 22.75 15.3599 23.5926 21.1577 25.1707C22.5468 25.5488 23.958 24.5196 23.958 23.0476V21.875C23.958 21.3918 23.5663 21 23.083 21H2.95801Z"
                      fill="#CAFF33"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="products__item-title">Loans and Mortgages</h3>
              <p className="products__item-desc">
                Realize your dreams with our flexible loan and mortgage options.
                From personal loans to home mortgages, our experienced loan
                officers are here to guide you through the application process
                and help you secure the funds you need.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
