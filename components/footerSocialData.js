import React from "react";

import Image from "next/image";
const FooterSocial = ({ image }) => {
  return (
    <>
      <div className="footer--item">
        <Image
          src={image}
          width={32}
          height={32}
          alt=""
          //style={{ width: "100%", height: "100%" }} // optional
        />
      </div>
    </>
  );
};

export default FooterSocial;
