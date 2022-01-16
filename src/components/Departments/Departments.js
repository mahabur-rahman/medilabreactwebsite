import React from "react";
// scss
import "./department.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import DepTabs from "./DepTabs";

const Departments = () => {
  return (
    <section id="departments">
      <Container>
        {/* title */}
        <SectionTitle
          title={"Departments"}
          text={
            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          }
        />

        {/* tabs component */}
        <DepTabs />
      </Container>
    </section>
  );
};

export default Departments;
