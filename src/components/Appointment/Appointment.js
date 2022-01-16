import React from "react";
// scss
import "./appointment.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import AppointmentForm from "./AppinmentForm";

const Appointment = () => {
  return (
    <section id="appointment">
      <Container>
        {/* section title */}
        <SectionTitle
          title={"Make an Appointment"}
          text={
            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          }
        />
        {/* appointment form */}
        <AppointmentForm />
      </Container>
    </section>
  );
};

export default Appointment;
