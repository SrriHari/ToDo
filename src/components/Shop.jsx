import React, { createContext, useState } from "react";
import { Product } from "./Product";

export let mysrri = createContext();
export const Shop = () => {
  let [product, setProduct] = useState({
    name: "iPhone",
    size: "8GB",
    desc: "ios",
  });

  return (
    <mysrri.Provider value={{ product }}>
      <Product />
    </mysrri.Provider>
  );
};
