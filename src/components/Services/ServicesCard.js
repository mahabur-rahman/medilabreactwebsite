import React, { useState } from "react";
// react bootstrap
import { Row, Col, Card } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// card data
import { servicesCardData } from "../../Data/Data";

const ServicesCard = () => {
  const [data, setData] = useState(servicesCardData);

  return (
    <div className="services_card">
      <Row className="gy-3 mt-3">
        {data.map((elem) => {
          const { id, icon, label, text, url } = elem;
          return (
            <Col xl={4} lg={4} md={6} key={id} className="card_height">
              <Card>
                <span className="card_icon">{icon}</span>
                <Card.Body>
                  <Card.Title className="card_title">
                    <Link to={url}>{label}</Link>
                  </Card.Title>
                  <Card.Text className="card_text mb-0">{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ServicesCard;
