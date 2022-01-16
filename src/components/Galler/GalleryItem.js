import React from "react";
// react bootstrap
import { Col, Image } from "react-bootstrap";
// gallery img
import gOne from "../../images/gallery-1.jpg";
import gTwo from "../../images/gallery-2.jpg";
import gThree from "../../images/gallery-3.jpg";
import gFour from "../../images/gallery-4.jpg";
import gFive from "../../images/gallery-5.jpg";
import gSix from "../../images/gallery-6.jpg";
import gSeven from "../../images/gallery-7.jpg";
import gEight from "../../images/gallery-8.jpg";
// fancybox
import Fancybox from "../AboutUs/fancybox";

const GalleryItem = () => {
  const galleryData = [
    { id: 1, imgSrc: gOne },
    { id: 2, imgSrc: gTwo },
    { id: 3, imgSrc: gThree },
    { id: 4, imgSrc: gFour },
    { id: 5, imgSrc: gFive },
    { id: 6, imgSrc: gSix },
    { id: 7, imgSrc: gSeven },
    { id: 8, imgSrc: gEight },
  ];
  return (
    <>
      {galleryData.map((gallery) => {
        const { id, imgSrc } = gallery;
        return (
          <Col xl={3} lg={3} md={4} sm={6} key={id}>
            <div className="gallery_item">
              <div className="gallery_item">
                <Fancybox>
                  <a data-fancybox="gallery" href={imgSrc}>
                    <Image src={imgSrc} alt="gallery" />
                  </a>
                </Fancybox>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default GalleryItem;
