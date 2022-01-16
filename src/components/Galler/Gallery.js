import React from "react";
// scss
import "./gallery.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section id="gallery">
      <Container fluid>
        <Row>
          <Col xl={10} className="mx-auto">
            <SectionTitle
              title={"Gallery"}
              text={
                "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
              }
            />
          </Col>
        </Row>
        <Row className="gy-0 mt-3">
          <GalleryItem />
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
