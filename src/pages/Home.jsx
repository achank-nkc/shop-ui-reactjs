import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newletters from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newletters />
      <Footer />
    </>
  );
};

export default Home;
