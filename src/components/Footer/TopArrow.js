import React, { useState, useEffect } from "react";
// icon
import { BsArrowUpShort } from "react-icons/bs";

const TopArrow = () => {
  const [arrow, setArrow] = useState(false);

  const showUp = () => {
    if (window.scrollY >= 200) {
      setArrow(true);
    } else {
      setArrow(false);
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", showUp);
    return () => window.removeEventListener("scroll", showUp);
  }, []);

  return (
    <>
      <div className={arrow ? "topArrow" : "arrow"}>
        <a href="#banner">
          <BsArrowUpShort className="back_icon" />
        </a>
      </div>
    </>
  );
};

export default TopArrow;
