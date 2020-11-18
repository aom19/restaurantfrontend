import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyles";
import Hero from "./components/HeroSection";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/Data";
import Feature from "./components/Feature/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Hero />
      <Products heading="Choose your favorite" data={productData} />

      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
