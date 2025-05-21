import React, { useContext } from "react";
import { mysrri } from "./Shop";

export const Card = () => {
  let {
    product: { name },
    product,
  } = useContext(mysrri);
  // console.log(product);

  return (
    <section>
      <h1>{name}</h1>
      <h1>{product.size}</h1>
      <h1>{product.desc}</h1>
    </section>
  );
};
