import React from "react";
import Header from "../components/header"
import Banner from "../components/banner";
import Accordion from "../components/accordion";
import Tabs from "../components/tabs";
import Carousel from '../components/carousel'
import Footer from "../components/footer";

const homepage = () => {
  return (
    <div style={{backgroundColor:"#0A0A0A"}}>
      <Header />
      <Banner />
      <Accordion />
      <Tabs />
      <Carousel />
      <Footer />
    </div>

  );
};
export default homepage;
