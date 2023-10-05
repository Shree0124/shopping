import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cart = (props) => {
  let data = props.detail;

  let [product, setProduct] = useState([
    {
      pic: "",
      item: "",
      rate: "",
    },
  ]);
  useEffect(() => {
    setProduct({
      pic: data.pic,
      item: data.item,
      rate: data.rate,
    });
  }, []);

  return (
    <div>
      <div>
        {/* <img src={product.pic} alt="" height={100} width={100} />
        <h1>product:{product.item}</h1>
        <h1>price:{product.rate}</h1> */}
      </div>
    </div>
  );
};

export default Cart;
