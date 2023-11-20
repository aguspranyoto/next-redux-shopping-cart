"use client";

import { useEffect, useState } from "react";
import { Card } from ".";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/store/productSlice";
import StatusCode from "@/utils/StatusCode";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch fetchProducts
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <div
          role="alert"
          className="alert alert-error w-3/5 mx-auto flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">
            Something went wrong! Try again later
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold py-6 text-center">Product Dashboard</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card products={products} type="Add" />
      </div>
    </div>
  );
};

export default Products;
