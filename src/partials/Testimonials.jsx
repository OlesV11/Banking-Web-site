import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/testimonials.css";

const TESTIMONIALS = [
  //  individuals
  {
    text: "YourBank допомогли мені накопичити на першу машину. Дуже зручно користуватись мобільним додатком!",
    author: "Oleh V",
    type: "individuals",
  },
  {
    text: "Я ціную швидку підтримку YourBank. Всі питання вирішуються за хвилини!",
    author: "Natalia S",
    type: "individuals",
  },
  // business
  {
    text: "Завдяки YourBank ми змогли розширити наш бізнес у нові регіони. Чудові умови кредитування!",
    author: "Petro K",
    type: "business",
  },
  {
    text: "Мені подобається, що YourBank пропонує сучасні інструменти для аналізу фінансів компанії.",
    author: "Svitlana M",
    type: "business",
  },
  {
    text: "Thanks to YourBank, I was able to quickly refinance my home and save money each month. The process was smooth and the staff was very supportive.",
    author: "Anna P",
    type: "individuals",
  },
  {
    text: "YourBank's business analytics tools helped me understand my cash flow and plan for the future. Highly recommend for any entrepreneur!",
    author: "Dmytro L",
    type: "business",
  },
  {
    text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
    author: "Sara T",
    type: "individuals",
  },
  {
    text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    author: "John D",
    type: "individuals",
  },
  {
    text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
    author: "Emily G",
    type: "individuals",
  },
  {
    text: "As a small business owner, I appreciate YourBank's commitment to supporting local businesses. Their flexible loan options and knowledgeable staff have helped my company grow.",
    author: "Michael B",
    type: "business",
  },
  {
    text: "Switching to YourBank was the best decision for my business. Their online tools make managing payroll and expenses simple and efficient.",
    author: "Olga K",
    type: "business",
  },
  {
    text: "YourBank's customer support is top-notch. Whenever I have a question, their team is quick to respond and always helpful.",
    author: "Ivan S",
    type: "business",
  },
];

const TABS = [
  { label: "For Individuals", value: "individuals" },
  { label: "For Businesses", value: "business" },
];

export default function Testimonials() {
  function getVisibleTestimonials(type) {
    return TESTIMONIALS.filter((t) => t.type === type);
  }

  const [tab, setTab] = useState("individuals");
  const [swiper, setSwiper] = useState(null);
  const visibleTestimonials = getVisibleTestimonials(tab);

  const handleTab = (val) => {
    setTab(val);
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <h2 className="testimonials__title">
          Our <span className="testimonials__title-accent">Testimonials</span>
        </h2>
        <p className="testimonials__desc">
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey
        </p>
        <div className="testimonials__tabs">
          {TABS.map((t) => (
            <button
              key={t.value}
              className={
                "testimonials__tab-btn" +
                (tab === t.value ? " testimonials__tab-btn--active" : "")
              }
              onClick={() => handleTab(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="testimonials__slider">
          <button
            className="testimonials__arrow testimonials__arrow--left"
            onClick={() => swiper && swiper.slidePrev()}
            aria-label="Previous testimonial"
            style={{ marginRight: 24 }}
          >
            <span>&#8592;</span>
          </button>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            onSwiper={setSwiper}
            className="testimonials__slides"
            breakpoints={{
              0: { slidesPerView: 1 },
              900: { slidesPerView: 3 },
            }}
          >
            {visibleTestimonials.map((item) => (
              <SwiperSlide key={item.author}>
                <div className="testimonials__card">
                  <div className="testimonials__quote">
                    <svg
                      width="38"
                      height="28"
                      viewBox="0 0 38 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 0.5C8.80558 0.5 5 4.30558 5 9V13.5C5 17.0899 7.91015 20 11.5 20H13.5V27.5H5"
                        stroke="#CAFF33"
                        strokeWidth="2"
                      />
                      <path
                        d="M33.5 0.5C28.8056 0.5 25 4.30558 25 9V13.5C25 17.0899 27.9101 20 31.5 20H33.5V27.5H25"
                        stroke="#CAFF33"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="testimonials__text">{item.text}</div>
                  <div className="testimonials__author">{item.author}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="testimonials__arrow testimonials__arrow--right"
            onClick={() => swiper && swiper.slideNext()}
            aria-label="Next testimonial"
            style={{ marginLeft: 24 }}
          >
            <span>&#8594;</span>
          </button>
        </div>
        {/* <div className="start__card">
          <h2 className="start__title">
            Start your financial journey with{" "}
            <span className="start__title__color">YourBank today!</span>
          </h2>
          <p className="start__subscr">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
          <button className="start__btn" type="button">
            Open Account
          </button>
        </div> */}
      </div>
    </section>
  );
}
