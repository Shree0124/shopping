import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./AxiosInstance";

const Edit = () => {
  let { id } = useParams();
  console.log(id);
  let [product, setProduct] = useState("");
  let [img, setImg] = useState("");
  let [desc, setDesc] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/products/${id}`);
      setImg(data.img);
      setProduct(data.product);
      setDesc(data.desc);
    };
    fetchData();
    let handleUpdate = async (e) => {
      e.preventDefault();
      let payload = { img, product, desc };
      let data = await axiosInstance.put(`/products/${id}`);
      alert("updated");
    };
  }, []);
  return (
    <>
      <h1>Edit form</h1>
      {/* <form action="">
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
          </div>
        </table>
      </form> */}
    </>
  );
};

export default Edit;
