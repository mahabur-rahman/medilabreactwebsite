import React from "react";
// scss
import "./couter.scss";
// react bootstrap
import { Container, Row } from "react-bootstrap";
// comp
import CounterBoxCard from "./CounterBoxCard";
// icons
import { FaUserMd, FaRegHospital, FaFlask, FaAward } from "react-icons/fa";

const CounterBox = () => {
  const cardData = [
    { id: 1, icon: <FaUserMd />, number: "85", designation: "Doctors" },
    {
      id: 2,
      icon: <FaRegHospital />,
      number: "18",
      designation: "Departments",
    },
    { id: 3, icon: <FaFlask />, number: "12", designation: "Research Labs" },
    { id: 4, icon: <FaAward />, number: "150", designation: "Awards" },
  ];
  return (
    <>
      <section id="counterBox">
        <Container>
          <Row>
            {cardData.map((card) => {
              return <CounterBoxCard key={`${card.id}`} {...card} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CounterBox;
