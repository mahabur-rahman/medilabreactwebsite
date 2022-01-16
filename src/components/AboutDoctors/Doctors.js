import React from "react";
// scss
import "./doctor.scss";
// react bootstrap
import { Container, Row } from "react-bootstrap";
// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutDoctors from "./AboutDoctors";

const Doctors = () => {
  return (
    <section id="doctors">
      <Container>
        {/* section title */}
        <SectionTitle
          title={"Doctors"}
          text={
            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          }
        />
        <Row>
          <AboutDoctors />
        </Row>
      </Container>
    </section>
  );
};

export default Doctors;
