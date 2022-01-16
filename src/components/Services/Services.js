import React from "react";
// scss
import "./services.scss";
// react bootstrap
import { Container } from "react-bootstrap";
// comp
import ServicesCard from "./ServicesCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Services = () => {
  return (
    <section id="services">
      <Container>
        {/* service heading and text */}
        <SectionTitle
          title={"Services"}
          text={
            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          }
        />
        {/* component */}
        <ServicesCard />
      </Container>
    </section>
  );
};

export default Services;
