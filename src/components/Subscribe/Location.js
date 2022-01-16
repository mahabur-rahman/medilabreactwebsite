import React from "react";
// link
import { Link } from "react-router-dom";

const Location = ({
  logoTitle,
  addrOne,
  addrTwo,
  city,
  phnLabel,
  phnNo,
  emailLabel,
  emailAddr,
}) => {
  return (
    <div className="location_info">
      <h3>{logoTitle}</h3>
      <p>
        {addrOne} <br />
        {addrTwo} <br />
        {city} <br /> <br />
        <strong>{phnLabel}</strong> {phnNo}
        <br />
        <strong>{emailLabel}</strong>
        <Link to="/"> {emailAddr}</Link>
        <br />
      </p>
    </div>
  );
};

export default Location;
