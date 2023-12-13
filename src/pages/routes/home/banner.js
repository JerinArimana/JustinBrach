import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
const MainBanner = () => {
  return (
    <>
      <section className="justin-banner">
        {/* <div className="ima">
          <Image
            src="/images/home/banner.png"
            width={1916}
            height={857}
            alt=""
            //style={{ width: "100%", height: "100%" }} // optional
          />
        </div> */}

        <Container>
          <div className="justin-banner--wrapper">
            <div className="justin-banner--title-head">
              <p>JUSTIN brach</p>
              <span>You Are Not Your Past</span>
            </div>
            <div className="justin-banner--introduction-warapper">
              <div className="justin-banner--content">
                <h1>Author, Speaker, Entreprenuer</h1>
                <p>
                  Inspiration is contagious. As an entrepreneur and CEO, I
                  strive to ignite resilience and growth in others.
                </p>
                <button className="justin-banner--banner-btn button button-btn ">
                  Get Inspired
                </button>
              </div>
              <div className="justin-banner--image-wrapper">
                <Image
                  src="/images/home/image 1.png"
                  width={1262}
                  height={842}
                  alt=""
                  // style={{ width: '100%', height: '100%' }} // optional
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MainBanner;
