import React from "react";
// react bootstrap
import { Col, Card } from "react-bootstrap";
// count up 👍
import CountUp from "react-countup";

const CounterBoxCard = ({ icon, number, designation }) => {
  return (
    <>
      <Col xl={3} lg={3} md={6}>
        <div className="counter_box my-4 my-lg-0">
          <Card className="text-center">
            <span className="card_icon">{icon}</span>
            <Card.Body>
              <Card.Title className="card_num">
                <CountUp end={number} duration={7} />
              </Card.Title>
              <Card.Title className="designation text-capitalize mb-0">
                {designation}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default CounterBoxCard;
