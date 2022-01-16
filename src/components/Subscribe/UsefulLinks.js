import React from "react";
// link
import { Link } from "react-router-dom";
// icon
import { BiChevronRight } from "react-icons/bi";

const UsefulLinks = ({ title }) => {
  const linkData = [
    {
      id: 1,
      icon: <BiChevronRight />,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      icon: <BiChevronRight />,
      label: "About us",
      url: "/",
    },
    {
      id: 3,
      icon: <BiChevronRight />,
      label: "Services",
      url: "/",
    },
    {
      id: 4,
      icon: <BiChevronRight />,
      label: "Terms of service",
      url: "/",
    },
    {
      id: 5,
      icon: <BiChevronRight />,
      label: "Privacy policy",
      url: "/",
    },
  ];

  return (
    <div className="useful_links mt-4 mt-md-0">
      <h6>{title}</h6>
      <ul>
        {linkData.map((link) => {
          const { id, icon, label, url } = link;
          return (
            <li key={id}>
              <span>{icon}</span>
              <Link to={url}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsefulLinks;
