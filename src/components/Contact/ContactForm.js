import React, { useState } from "react";
// react bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
// data
import { addressData } from "../../Data/Data";

const ContactForm = () => {
  const [data, setData] = useState(addressData);
  return (
    <>
      <Row>
        <Col xl={4} lg={4} md={12}>
          {data.map((address) => {
            const { id, icon, label, text } = address;
            return (
              <div className="address d-flex" key={id}>
                <div className="info_icon mx-1 mx-sm-0">
                  <span>{icon}</span>
                </div>
                <div className="info_content mx-3">
                  <h5>{label}</h5>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col xl={8} lg={8} md={12}>
          <div className="address_form mt-5 mx-2 mx-sm-0">
            <Form>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridSubject">
                  <Form.Control type="text" name="date" placeholder="Subject" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-4" controlId="exampleFormMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Message"
                  />
                </Form.Group>
              </Row>

              <div className="text-center">
                <Button type="submit" className="submit_btn mt-1">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
