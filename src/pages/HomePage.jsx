import { useState } from "react";
import Categories from "../components/Categories"
import Heading from "../components/Heading";
import Products from "../components/Products";
import Slider from "../components/Slider";

function HomePage() {
  const [productCategory, setProductCategory] = useState('all');
  return (
      <>
        <Slider />
        <Heading text="High-range of products" />
        <Categories setProductCategory={setProductCategory} />
        <Products category={productCategory} />
      </>
    
  )
}

export default HomePage