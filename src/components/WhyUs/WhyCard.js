import React from "react";
// react bootstrap
import { Col } from "react-bootstrap";

const WhyCard = ({ icon, title, text }) => {
  return (
    <Col xl={4} lg={4} md={12} className="my-3 my-lg-0">
      <div className="why_card">
        <span className="card_icon mt-5">{icon}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </Col>
  );
};

export default WhyCard;
