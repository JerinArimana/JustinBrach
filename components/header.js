import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Button from "react-bootstrap/Button";
const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <div className="header--header-wrapper">
            <div className="header--header-brand">
              <span>Justin Brach</span>
            </div>
            <div className="header--contact-button">
              <button className="button button-btn">
                <Image
                  src="/images/header/contact-header.svg"
                  width={19}
                  height={19}
                  alt=""
                  // style={{ width: '100%', height: '100%' }} // optional
                />
                Connect
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
