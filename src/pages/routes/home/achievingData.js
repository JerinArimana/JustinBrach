import React from "react";
import Image from "next/image";
const AchievingData = ({ image, title }) => {
  return (
    <>
      <div className="justin-achiving--data-item">
        <div className="justin-achiving--image">
          <Image
            src={image}
            width={343}
            height={406}
            alt=""
            //style={{ width: "100%", height: "100%" }} // optional
          />
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default AchievingData;
