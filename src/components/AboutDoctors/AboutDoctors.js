import React from "react";
// react bootstrap
import { Row, Col, Card, Image } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// data
import { doctorsData } from "../../Data/Data";

const AboutDoctors = () => {
  return (
    <div className="about_doctors mt-3">
      <Row className="gy-4">
        {doctorsData.map((doctor) => {
          const { imgScr, name, designation, text, icons } = doctor;
          return (
            <Col xl={6} lg={6} md={12} key={name}>
              <Card>
                <div className="main_div d-flex align-items-center">
                  <div className="doctor_img">
                    <Image fluid src={imgScr} alt={name} />
                  </div>
                  <div className="card_content">
                    <Card.Body>
                      <Card.Title className="card_title">{name}</Card.Title>
                      <Card.Title className="designation">
                        {designation}
                      </Card.Title>
                      <Card.Text className="card_text">{text}</Card.Text>
                      <div className="social_icon mt-3">
                        {/* icon list */}
                        <ul className="list-inline">
                          {icons?.map((icon) => {
                            return (
                              <li
                                className="list-inline-item icon_list"
                                key={Math.random()}
                              >
                                <Link to="/">{icon}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AboutDoctors;
