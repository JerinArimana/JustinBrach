import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-header--title">{title}</h2>
        <span className="section-header--subTitle">{subTitle}</span>
      </div>
    </>
  );
};

export default SectionHeader;
