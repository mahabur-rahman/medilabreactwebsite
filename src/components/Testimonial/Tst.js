import React from "react";
// custom scss
import "./testimonial.scss";
// react bootstrap
import { Col, Card, Image } from "react-bootstrap";
// icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
// img
import slideImgOne from "../../images/testimonials-1.jpg";

const TestimonialCard = () => {
  return (
    <div className="testimonial">
      <Col xl={6}>
        <Card>
          <div className="d-flex slide_item">
            <div className="slide_img">
              <Image src={slideImgOne} fluid alt={"Slide"} />
            </div>
            <div className="slide_content">
              <h5 className="name">Saul Goodman</h5>
              <h6 className="designation mb-0">Ceo & Founder</h6>
              <p className="text mb-0">
                <span className="quote_left">
                  <RiDoubleQuotesL />
                </span>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <span className="quote_right">
                  <RiDoubleQuotesR />
                </span>
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default TestimonialCard;
