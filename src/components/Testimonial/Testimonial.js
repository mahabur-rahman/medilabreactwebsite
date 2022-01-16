import React from "react";
// scss
import "./testimonial.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// comp
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <Container>
        <Row>
          <Col xl={11} className="mx-auto">
            <TestimonialCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
