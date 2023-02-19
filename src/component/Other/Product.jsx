import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import AllButton from "../ShopingCard/AllButton";
import ProductCart from "./ProductCart";

function Product(props) {
  console.log("user dt vlue", props.userData);
  const pageSize = 6;
  const totalPage = Math.ceil(props.userData.length / pageSize);
  const currentData = props.userData.slice(
    (props.currentPage - 1) * pageSize,
    props.currentPage * pageSize
  );
  const [itemCount, setItemCount] = useState(1);
  console.log("product item count",itemCount)

  return (
    <>
      <div className="container">
        <div class="float-end">
        <div className="badge bg-info text-wrap fs-4" style={{width: "6rem"}}>
        {itemCount}
        <Link
            to={"/Carts"}
            className="fas fa-cart-plus"
            style={{ color: "red"}}
          ></Link>{" "}
        </div>
        
        </div>
        <br></br>
        <div className="container my-3 mx-3">
          <div className="row justify-content-center">
            {currentData.map((item, index) => {
              return (
                <ProductCart
                  key={index}
                  title={item.title}
                  price={item.price}
                  desc={item.description}
                  img={item.thumbnail}
                  item={item}
                  itemCount={itemCount}
                  setItemCount={setItemCount}

                  // quantity={quantity}
                />
              );
            })}
          </div>
        </div>
        <AllButton
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          pageSize={pageSize}
          totalPage={totalPage}
        />
      </div>
    </>
  );
}

export default Product;
