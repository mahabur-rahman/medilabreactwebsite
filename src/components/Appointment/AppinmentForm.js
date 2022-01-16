import React from "react";
// react bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

const AppointmentForm = () => {
  return (
    <div className="appointment_form mt-5">
      <Form>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            controlId="formGridText"
          >
            <Form.Control type="text" name="name" placeholder="Your Name" />
          </Form.Group>

          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            className="my-3 my-md-0"
            controlId="formGridEmail"
          >
            <Form.Control type="email" name="email" placeholder="Your Email" />
          </Form.Group>

          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            controlId="formGridPhone"
          >
            <Form.Control type="text" name="phone" placeholder="Your phone" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            controlId="formGridDate"
          >
            <Form.Control
              type="text"
              name="date"
              placeholder="Appointment Date"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            className="my-3 my-md-0"
            controlId="formGridDepartment"
          >
            <Form.Select
              defaultValue="Select Department"
              name="department"
              className="formSelect"
            >
              <option value="selected">Select Department</option>
              <option value="department-1">Department 1</option>
              <option value="department-2">Department 2</option>
              <option value="department-3">Department 3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            as={Col}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            controlId="formGridDoctor"
          >
            <Form.Select
              defaultValue="Select Doctor"
              name="doctor"
              className="formSelect"
            >
              <option value="selected">Select Doctor</option>
              <option name="doctor-1">Doctor 1</option>
              <option name="doctor-2">Doctor 2</option>
              <option name="doctor-3">Doctor 3</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleFormMessage">
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              placeholder="Message (Optional)"
            />
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button type="submit" className="submit_btn mt-2">
            Make an Appointment
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
