import React from "react";
// scss
import "./banner.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col xl={12}>
            {/* banner content */}
            <div className="banner_content mt-5">
              <h1 className="banner_title mt-4">Welcome to Medilab</h1>
              <h2 className="banner_subTitle mb-4 pb-3">
                We are team of talented designers making websites with Bootstrap
              </h2>
              <a href="#about" className="get_started">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
