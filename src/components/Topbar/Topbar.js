import React, { useState } from "react";
// scss
import "./topbar.scss";
// react bootstrap
import { Container } from "react-bootstrap";
// icons
import {
  BsEnvelope,
  BsPhone,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
// link
import { Link } from "react-router-dom";

const Topbar = () => {
  const socialData = [
    { id: 1, icon: <BsTwitter />, url: "/" },
    { id: 2, icon: <BsFacebook />, url: "/" },
    { id: 3, icon: <BsInstagram />, url: "/" },
    { id: 4, icon: <BsLinkedin />, url: "/" },
  ];
  const [data, setData] = useState(socialData);
  return (
    <>
      <section id="topbar">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            {/* contact info */}
            <div className="contact_info d-flex align-items-center">
              <div className="email">
                <span className="icon">
                  <BsEnvelope />
                </span>
                <Link to="/" className="mail_link">
                  contact@example.com
                </Link>
              </div>
              <div className="phone">
                <span>
                  <BsPhone />
                </span>
                <span className="phn_no"> +1 5589 55488 55 </span>
              </div>
            </div>
            {/* social icon */}
            <div className="social">
              {data.map((elem) => {
                const { id, icon, url } = elem;
                return (
                  <Link key={id} to={url} className="social_icon">
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Topbar;
