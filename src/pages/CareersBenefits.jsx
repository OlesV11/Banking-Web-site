import React from "react";
import "../styles/careers-benefits.css";

export default function CareersBenefits() {
  return (
    <section className="careers-benefits-section">
      <div className="container">
        <h2 className="careers-benefits__title">
          Our <span className="careers-benefits__title__span">Benefits</span>
        </h2>
        <p className="careers-benefits__desc">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
        <div className="careers-benefits__lis">
          <ul className="careers-benefits__list">
            <li className="careers-benefits__item">
              <div className="careesr-benefits__thumb">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.625 2.625C2.14175 2.625 1.75 3.01675 1.75 3.5C1.75 3.98325 2.14175 4.375 2.625 4.375H3.5V16.625C3.5 18.558 5.067 20.125 7 20.125H8.411L7.0449 24.2233C6.89209 24.6818 7.13985 25.1773 7.5983 25.3301C8.05675 25.4829 8.55228 25.2351 8.7051 24.7767L9.089 23.625H18.911L19.2949 24.7767C19.4477 25.2351 19.9432 25.4829 20.4017 25.3301C20.8601 25.1773 21.1079 24.6818 20.9551 24.2233L19.589 20.125H21C22.933 20.125 24.5 18.558 24.5 16.625V4.375H25.375C25.8582 4.375 26.25 3.98325 26.25 3.5C26.25 3.01675 25.8582 2.625 25.375 2.625H2.625ZM9.67233 21.875L10.2557 20.125H17.7443L18.3277 21.875H9.67233ZM18.375 7.875C18.375 7.39175 17.9832 7 17.5 7C17.0168 7 16.625 7.39175 16.625 7.875V14.875C16.625 15.3583 17.0168 15.75 17.5 15.75C17.9832 15.75 18.375 15.3583 18.375 14.875V7.875ZM14.875 10.5C14.875 10.0168 14.4832 9.625 14 9.625C13.5168 9.625 13.125 10.0168 13.125 10.5V14.875C13.125 15.3583 13.5168 15.75 14 15.75C14.4832 15.75 14.875 15.3583 14.875 14.875V10.5ZM11.375 13.125C11.375 12.6418 10.9832 12.25 10.5 12.25C10.0168 12.25 9.625 12.6418 9.625 13.125V14.875C9.625 15.3583 10.0168 15.75 10.5 15.75C10.9832 15.75 11.375 15.3583 11.375 14.875V13.125Z"
                    fill="#CAFF33"
                  />
                </svg>
                <p className="careers-benefits__item-text">
                  Competitive Compensation
                </p>
              </div>
              <p className="careers-benefits__item-subsc">
                We provide a competitive salary package that recognizes the
                skills and expertise of our employees. YourBank believes in
                rewarding exceptional performance and offering opportunities for
                financial growth.
              </p>
            </li>
            <li className="careers-benefits__item">
              <div className="careesr-benefits__thumb">
                <svg
                  width="20"
                  height="28"
                  viewBox="0 0 20 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.875C4.68426 0.875 0.375 5.18426 0.375 10.5C0.375 14.0592 2.30737 17.1661 5.17602 18.8305C5.97572 19.2945 6.4765 20.0065 6.49916 20.723C6.51166 21.1182 6.78766 21.4559 7.17247 21.5469C7.58241 21.6437 8.00016 21.72 8.42452 21.7745C8.80206 21.823 9.12521 21.5206 9.12521 21.14V15.7021C8.75272 15.6609 8.3877 15.5937 8.03211 15.5021C7.56411 15.3817 7.28238 14.9046 7.40283 14.4367C7.52328 13.9687 8.00032 13.6869 8.46831 13.8074C8.95693 13.9331 9.47005 14.0002 10.0002 14.0002C10.5304 14.0002 11.0435 13.9331 11.5321 13.8074C12.0001 13.6869 12.4771 13.9687 12.5976 14.4367C12.718 14.9046 12.4363 15.3817 11.9683 15.5021C11.6127 15.5937 11.2477 15.6609 10.8752 15.7021V21.1399C10.8752 21.5206 11.1984 21.823 11.5759 21.7745C12.0001 21.72 12.4177 21.6437 12.8275 21.5469C13.2123 21.4559 13.4883 21.1182 13.5008 20.723C13.5235 20.0065 14.0243 19.2945 14.824 18.8305C17.6926 17.1661 19.625 14.0592 19.625 10.5C19.625 5.18426 15.3157 0.875 10 0.875Z"
                    fill="#CAFF33"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.51533 23.2163C6.60539 22.7415 7.06329 22.4296 7.53807 22.5197C8.33487 22.6708 9.15778 22.75 10 22.75C10.8422 22.75 11.6651 22.6708 12.4619 22.5197C12.9367 22.4296 13.3946 22.7415 13.4847 23.2163C13.5747 23.691 13.2629 24.1489 12.7881 24.239C11.8843 24.4104 10.9522 24.5 10 24.5C9.0478 24.5 8.1157 24.4104 7.21193 24.239C6.73714 24.1489 6.42527 23.691 6.51533 23.2163Z"
                    fill="#CAFF33"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.37975 26.068C7.43003 25.5873 7.86041 25.2385 8.34104 25.2887C8.88596 25.3458 9.43942 25.375 10 25.375C10.5606 25.375 11.114 25.3458 11.659 25.2887C12.1396 25.2385 12.57 25.5873 12.6203 26.068C12.6705 26.5486 12.3217 26.979 11.841 27.0292C11.2357 27.0926 10.6215 27.125 10 27.125C9.37849 27.125 8.76427 27.0926 8.15896 27.0292C7.67834 26.979 7.32947 26.5486 7.37975 26.068Z"
                    fill="#CAFF33"
                  />
                </svg>
                <p className="careers-benefits__item-text">
                  Health and Wellness
                </p>
              </div>
              <p className="careers-benefits__item-subsc">
                We prioritize the health and well-being of our employees by
                providing comprehensive medical, dental, and vision insurance
                plans. We also offer wellness programs, gym memberships, and
                resources to support a healthy lifestyle.
              </p>
            </li>
            <li className="careers-benefits__item">
              <div className="careesr-benefits__thumb">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 4.125C6.75 2.192 8.317 0.625 10.25 0.625H13.75C15.683 0.625 17.25 2.192 17.25 4.125V4.36414C18.3379 4.46373 19.417 4.59396 20.4864 4.75397C22.1828 5.00779 23.375 6.48357 23.375 8.15664V11.6954C23.375 13.1084 22.5191 14.4398 21.116 14.9063C18.2494 15.8593 15.184 16.375 12 16.375C8.81601 16.375 5.75066 15.8593 2.88398 14.9062C1.48091 14.4398 0.625 13.1083 0.625 11.6953V8.15664C0.625 6.48357 1.81723 5.0078 3.51362 4.75397C4.58304 4.59396 5.66212 4.46373 6.75 4.36414V4.125ZM15.5 4.125V4.23096C14.3423 4.16066 13.1753 4.125 12 4.125C10.8248 4.125 9.65775 4.16066 8.5 4.23096V4.125C8.5 3.1585 9.2835 2.375 10.25 2.375H13.75C14.7165 2.375 15.5 3.1585 15.5 4.125ZM12 13.75C12.4832 13.75 12.875 13.3583 12.875 12.875C12.875 12.3918 12.4832 12 12 12C11.5168 12 11.125 12.3918 11.125 12.875C11.125 13.3583 11.5168 13.75 12 13.75Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M1.5 19.4666V16.2046C1.76021 16.3473 2.0378 16.4691 2.33187 16.5669C5.37435 17.5784 8.62601 18.125 12 18.125C15.374 18.125 18.6257 17.5784 21.6681 16.5669C21.9622 16.4691 22.2398 16.3473 22.5 16.2046V19.4666C22.5 21.1605 21.2782 22.6487 19.5563 22.8773C17.0838 23.2056 14.5615 23.375 12 23.375C9.43855 23.375 6.91621 23.2056 4.44366 22.8773C2.72178 22.6487 1.5 21.1605 1.5 19.4666Z"
                    fill="#CAFF33"
                  />
                </svg>
                <p className="careers-benefits__item-text">
                  Retirement Planning
                </p>
              </div>
              <p className="careers-benefits__item-subsc">
                YourBank is committed to helping employees plan for their
                future. We offer a retirement savings plan with a generous
                employer match to help them build a secure financial foundation
                for the long term.
              </p>
            </li>
            <li className="careers-benefits__item">
              <div className="careesr-benefits__thumb">
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 8.47105V10.5625C0.75 11.7706 1.72938 12.75 2.9375 12.75H23.0625C24.2706 12.75 25.25 11.7706 25.25 10.5625V8.47105C25.25 7.63556 24.9511 6.82763 24.4074 6.19328L20.5751 1.72223C19.9101 0.946469 18.9394 0.5 17.9177 0.5H8.08233C7.06059 0.5 6.08987 0.946469 5.42493 1.72223L1.5926 6.19328C1.04887 6.82763 0.75 7.63556 0.75 8.47105ZM8.08233 2.25C7.57146 2.25 7.0861 2.47323 6.75363 2.86111L3.52744 6.625H7.22014C8.39038 6.625 9.48319 7.20985 10.1323 8.18355L10.3238 8.47073C10.6483 8.95757 11.1947 9.25 11.7799 9.25H14.2201C14.8053 9.25 15.3517 8.95757 15.6762 8.47073L15.8677 8.18355C16.5168 7.20985 17.6096 6.625 18.7799 6.625H22.4726L19.2464 2.86111C18.9139 2.47323 18.4285 2.25 17.9177 2.25H8.08233Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M2.28125 14.5C1.43556 14.5 0.75 15.1856 0.75 16.0312V18C0.75 19.933 2.317 21.5 4.25 21.5H21.75C23.683 21.5 25.25 19.933 25.25 18V16.0312C25.25 15.1856 24.5644 14.5 23.7188 14.5H18.7799C17.6096 14.5 16.5168 15.0849 15.8677 16.0585L15.6762 16.3457C15.3517 16.8326 14.8053 17.125 14.2201 17.125H11.7799C11.1947 17.125 10.6483 16.8326 10.3238 16.3457L10.1323 16.0585C9.48319 15.0849 8.39038 14.5 7.22014 14.5H2.28125Z"
                    fill="#CAFF33"
                  />
                </svg>
                <p className="careers-benefits__item-text">Work-Life Balance</p>
              </div>
              <p className="careers-benefits__item-subsc">
                We understand the importance of maintaining a healthy work-life
                balance. YourBank offers flexible work arrangements, paid time
                off, parental leave, and other programs that support employees
                in managing their personal and professional commitments.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
