import React from "react";
import Image from "next/image";
const OrderYourBookData = ({ image }) => {
  return (
    <>
      <div className="justin-order-your-book--item">
        <Image
          src={image}
          width={153}
          height={100}
          alt=""
          //style={{ width: "100%", height: "100%" }} // optional
        />
      </div>
    </>
  );
};

export default OrderYourBookData;
