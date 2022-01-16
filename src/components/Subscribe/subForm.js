import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Form } from "react-bootstrap";

const SubForm = ({ title, text }) => {
  return (
    <div className="sub_form mt-4 mt-lg-0">
      <h4>{title}</h4>
      <p>{text}</p>
      <form action="" method="post">
        <input type="email" name="email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default SubForm;
