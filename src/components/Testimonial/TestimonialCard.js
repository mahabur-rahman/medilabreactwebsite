import React, { useState } from "react";
// react bootstrap
import { Card, Image } from "react-bootstrap";
// testimonial data
import { testimonialData } from "../../Data/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const TestimonialCard = () => {
  const [data, setData] = useState(testimonialData);
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((ele) => {
        const {
          id,
          imgSrc,
          name,
          designation,
          quoteLeft,
          quoteRight,
          comment,
        } = ele;
        return (
          <SwiperSlide key={id}>
            <div className="testimonial mb-5">
              <Card>
                <div className="d-flex slide_item">
                  <div className="slide_img">
                    <Image src={imgSrc} fluid alt={name} />
                  </div>
                  <div className="slide_content">
                    <h5 className="name">{name}</h5>
                    <h6 className="designation mb-0">{designation}</h6>
                    <p className="text mb-0">
                      <span className="quote_left">{quoteLeft}</span>
                      {comment}
                      <span className="quote_right">{quoteRight}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialCard;
