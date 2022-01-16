import React from "react";
// scss
import "./aboutUs.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// comp
import AboutIconBox from "./AboutIconBox";
// fancy box for popup video
import Fancybox from "./fancybox.js";

const AboutUs = () => {
  const aboutTitle = "Enim quis est voluptatibus aliquid consequatur fugiat";
  const video = "https://www.youtube.com/watch?v=u6BOC7CDUTQ";
  const text =
    "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur Suscipit aut voluptate.";

  return (
    <section id="aboutUs">
      <Container fluid>
        <Row>
          <Col
            xl={5}
            lg={12}
            className="aboutMain_img d-flex justify-content-center align-items-center position-relative"
          >
            <div className="aboutUs_img">
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href={video}
                  className="play_btn"
                ></a>
              </Fancybox>
            </div>
          </Col>
          <Col
            xl={7}
            lg={12}
            className="icon_boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
          >
            <h3 className="about_title">{aboutTitle}</h3>
            <p className="about_text mb-5">{text}</p>

            {/* icon box */}
            <AboutIconBox />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
