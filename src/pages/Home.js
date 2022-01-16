import React, { useEffect, useState } from "react";
// comp
import Topbar from "../components/Topbar/Topbar";
import Header from "../components/Header/header";
import Banner from "../components/Banner/Banner";
import WhyUs from "../components/WhyUs/WhyUs";
import AboutUs from "../components/AboutUs/AboutUs";
import CounterBox from "../components/CounterBox/CounterBox";
import Services from "../components/Services/Services";
import Appointment from "../components/Appointment/Appointment";
import Departments from "../components/Departments/Departments";
import Doctors from "../components/AboutDoctors/Doctors";
import FAQ from "../components/Faq/Faq";
import Testimonial from "../components/Testimonial/Testimonial";
import Gallery from "../components/Galler/Gallery";
import Contact from "../components/Contact/Contact";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", hideTopBar);
    return () => window.removeEventListener("scroll", hideTopBar);
  }, [hide]);

  const hideTopBar = () => {
    if (window.pageYOffset > 100) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  // console.log(hide);
  return (
    <>
      <div className={`${hide ? "nav_fixed transition" : "transition"}`}>
        <Topbar />
        <Header />
      </div>
      <Banner />
      <WhyUs />
      <AboutUs />
      <CounterBox />
      <Services />
      <Appointment />
      <Departments />
      <Doctors />
      <FAQ />
      <Testimonial />
      <Gallery />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
