import React from "react";
// scss
import "./footer.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// icons
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
// link
import { Link } from "react-router-dom";
// comp
import TopArrow from "./TopArrow";

const Footer = () => {
  const socialIcons = [
    { id: 1, icon: <FaTwitter />, url: "/" },
    { id: 2, icon: <FaFacebookF />, url: "/" },
    { id: 3, icon: <FaInstagram />, url: "/" },
    { id: 4, icon: <FaSkype />, url: "/" },
    { id: 5, icon: <FaLinkedinIn />, url: "/" },
  ];

  return (
    <footer id="footer" className="py-4">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="d-flex align-items-center justify-content-between">
              {/* copyright part */}

              <div className="left_part">
                <div className="copyright">
                  &copy; Copyright
                  <strong>
                    <span> Medilab</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits">
                  Designed by <Link to="/">BootstrapMade</Link>
                </div>
              </div>

              <div className="right_part mt-3 mt-sm-0">
                {/* social icon */}
                <div className="social_links">
                  {socialIcons.map((d) => {
                    const { id, icon, url } = d;
                    return (
                      <Link key={id} to={url} className="social_icon">
                        {icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* back to top button */}
      <TopArrow />
    </footer>
  );
};

export default Footer;
