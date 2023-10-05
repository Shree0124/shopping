import React, { useState } from "react";
import axiosInstance from "./AxiosInstance";
import { Link } from "react-router-dom";

const Admin = () => {
  let [product, setProduct] = useState("");
  let [img, setImg] = useState("");
  let [desc, setDesc] = useState("");
  let [price, setPrice] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { product, img, desc, price };
    let data = await axiosInstance.post("/products", payload);
    console.log(data);
    alert("Submitted");
  };
  return (
    <div id="main">
      <form action="" onSubmit={handleSubmit}>
        <table>
          <div>
            <tr>
              <td>
                {" "}
                <label htmlFor="" id="img">
                  img :
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="img"
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" id="product">
                  Product:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="product"
                  onChange={(e) => {
                    setProduct(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" id="desc">
                  Description:
                </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="desc"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Price:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </td>
            </tr>
          </div>
        </table>
        <div>
          <button>submit</button>
          <button>
            <Link to={"edit/"}>Edit</Link>
          </button>
          <button>
            <Link>Delete</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
