import React, { useState } from "react";
// react icons
import { BiFingerprint, BiGift, BiAtom } from "react-icons/bi";
// link
import { Link } from "react-router-dom";

const AboutIconBox = () => {
  const data = [
    {
      id: 1,
      icon: <BiFingerprint />,
      heading: "Lorem Ipsum",
      url: "/",
      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 2,
      icon: <BiGift />,
      heading: "Nemo Enim",
      url: "/",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      id: 3,
      icon: <BiAtom />,
      heading: "Dine Pad",
      url: "/",
      text: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis",
    },
  ];

  const [aboutList, setAboutList] = useState(data);

  return (
    <>
      {aboutList.map((list) => {
        const { id, icon, heading, url, text } = list;
        return (
          <div className="icon_box d-flex my-4" key={id}>
            <div className="main_icon">
              <div className="icon">
                <span>{icon}</span>
              </div>
            </div>
            <div className="about_content">
              <h4 className="title">
                <Link to={url}>{heading}</Link>
              </h4>
              <p className="description">{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutIconBox;
