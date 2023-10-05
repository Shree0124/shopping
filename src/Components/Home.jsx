import React, { useEffect, useState } from "react";
import axiosInstance from "./AxiosInstance";
import "./home.css";
import Cart from "./Cart";
const Home = () => {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/products");
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, []);
  let [detail, setDetail] = useState({
    pic: "",
    item: "",
    rate: "",
  });
  let { pic, item, rate } = detail;
  // console.log(detail);

  return (
    <>
      <div className="block">
        {product.map((x) => {
          return (
            <>
              <div className="box">
                <div id="pic">
                  <img src={x.img} alt="" height={280} width={190} />
                </div>
                <div id="desc">
                  <h1>{x.product}</h1>
                  <h4>{x.desc}</h4>
                  <h2> Price:{x.price}</h2>
                  <button
                    id="cbtn"
                    onClick={() => {
                      setDetail({
                        pic: x.img,
                        item: x.product,
                        rate: x.price,
                      });
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        {/* <Cart detail={{ pic, item, rate }} /> */}
      </div>
    </>
  );
};

export default Home;
