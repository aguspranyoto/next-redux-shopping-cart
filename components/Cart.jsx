"use client";

import { Card } from ".";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <div className="max-w-screen-xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold py-6 text-center">Cart</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card products={products} type="Remove" />
      </div>
    </div>
  );
};

export default Cart;
