import React from "react";
// scss
import "./subscribe.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// comp
import Location from "./Location";
import UsefulLinks from "./UsefulLinks";
import OurServices from "./OurServices";
import SubForm from "./subForm";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <Container>
        <Row>
          <Col xl={3} lg={3} md={6} sm={12}>
            <Location
              logoTitle={"Medilab"}
              addrOne={"A108 Adam Street "}
              addrTwo={"New York, NY 535022 "}
              city={"United States "}
              phnLabel={"Phone:"}
              phnNo={" +1 5589 55488 55"}
              emailLabel={"Phone:"}
              emailAddr={" info@example.com"}
            />
          </Col>
          <Col xl={2} lg={2} md={6} sm={12}>
            <UsefulLinks title={"Useful Links"} />
          </Col>
          <Col xl={3} lg={3} md={6} sm={12}>
            <OurServices title={"Our Services"} />
          </Col>
          <Col xl={4} lg={4} md={6} sm={12}>
            <SubForm
              title={"Join Our Newsletter"}
              text={
                "Tamen quem nulla quae legam multos aute sint culpa legam noster magna"
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
