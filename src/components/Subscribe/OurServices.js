import React from "react";
// link
import { Link } from "react-router-dom";
// icon
import { BiChevronRight } from "react-icons/bi";

const OurServices = ({ title }) => {
  const servicesData = [
    {
      id: 1,
      icon: <BiChevronRight />,
      label: "Web Design",
      url: "/",
    },
    {
      id: 2,
      icon: <BiChevronRight />,
      label: "Web Development",
      url: "/",
    },
    {
      id: 3,
      icon: <BiChevronRight />,
      label: "Product Management",
      url: "/",
    },
    {
      id: 4,
      icon: <BiChevronRight />,
      label: "Marketing",
      url: "/",
    },
    {
      id: 5,
      icon: <BiChevronRight />,
      label: "Graphic Design",
      url: "/",
    },
  ];

  return (
    <div className="our_services mt-4 mt-lg-0">
      <h6>{title}</h6>
      <ul>
        {servicesData.map((service) => {
          const { id, icon, label, url } = service;
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

export default OurServices;
