import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Product from "./Components/Product.jsx";
import Carousel from "./Components/Carousel.jsx";
import SellingProducts from "./Components/SellingProducts.jsx";
import Discount from "./Components/Discount.jsx";
import ProductGrid from "./Components/ProductGrid.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Product />
      <Carousel />
      <SellingProducts />
      <Discount/>
      <ProductGrid/>
      <Footer/>
    </div>
  );
};

export default App;
