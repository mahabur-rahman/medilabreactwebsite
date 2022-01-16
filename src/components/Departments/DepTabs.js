import React, { useState } from "react";
// react bootstrap
import { Row, Col, Nav, Tab, Image } from "react-bootstrap";
// data
import { tabContentData } from "../../Data/Data";

const DepTabs = () => {
  const [data, setData] = useState(tabContentData);

  return (
    <div className="department_tab mt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav className="flex-column">
              {data.map((link) => {
                const { id, label, eventKey } = link;
                return (
                  <Nav.Item key={id}>
                    <Nav.Link eventKey={eventKey} className="nav_link">
                      {label}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {data.map((elem) => {
                const { id, eventKey, title, imgSrc, subText, para } = elem;
                return (
                  <Tab.Pane eventKey={eventKey} key={id}>
                    <Row>
                      <Col xl={8}>
                        <div className="tab_content">
                          <h3 className="main_title mt-3 mt-sm-0">{title}</h3>
                          <p className="sub_text">{subText}</p>
                          <p className="para">{para}</p>
                        </div>
                      </Col>
                      <Col xl={4}>
                        <div className="tab_img mt-3 mt-xl-0">
                          <Image src={imgSrc} fluid alt={title} />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default DepTabs;
