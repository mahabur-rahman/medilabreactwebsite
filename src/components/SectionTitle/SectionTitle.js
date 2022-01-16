import React from "react";
// scss
import "./sectionTitle.scss";

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <div className="repeat_title">
        <h2 className="main_title">{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default SectionTitle;
