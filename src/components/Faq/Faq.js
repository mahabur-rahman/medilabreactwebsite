import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Container } from "react-bootstrap";
// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  return (
    <section id="faq">
      <Container>
        {/* section title */}
        <SectionTitle
          title={"Frequently Asked Questions"}
          text={
            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          }
        />
        <FaqAccordion />
      </Container>
    </section>
  );
};

export default FAQ;
