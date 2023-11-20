"use client";

import { useEffect, useState } from "react";
import { Card } from ".";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const cartProdutcs = useSelector((state) => state.cart);

  useEffect(() => {
    // api
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold py-6 text-center">
        Product Dashboard {}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card products={products} />
      </div>
    </div>
  );
};

export default Products;
