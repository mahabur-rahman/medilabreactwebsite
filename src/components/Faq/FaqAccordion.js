import React, { useState } from "react";
// react bootstrap
import { Row, Col, Accordion } from "react-bootstrap";
// data
import { faqData } from "../../Data/Data";

const FaqAccordion = () => {
  const [data, setData] = useState(faqData);
  return (
    <Row>
      <Col xl={10} className="mx-auto">
        <Accordion className="main_accordion">
          {data.map((faq) => {
            const { icon, eventKey, label, text } = faq;
            return (
              <Accordion.Item
                eventKey={eventKey}
                className="accordion_item"
                key={eventKey}
              >
                <Accordion.Header>
                  <span className="q_icon">{icon}</span>
                  <h3 className="q_title">{label}</h3>
                </Accordion.Header>
                <Accordion.Body className="ans_text">{text}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Col>
    </Row>
  );
};

export default FaqAccordion;
