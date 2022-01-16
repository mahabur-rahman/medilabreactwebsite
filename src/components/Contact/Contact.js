import React from "react";
// scss
import "./contact.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import Map from "./Map";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <Container fluid>
        <Row>
          <Col xl={10} className="mx-auto">
            <SectionTitle
              title={"Contact"}
              text={
                "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
              }
            />
          </Col>
        </Row>
        {/* google map */}
        <Row className="mt-3">
          <Map />
        </Row>
      </Container>

      <Container>
        {/* contact form */}
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
