import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import SectionHeader from "../../../../components/sectionHeader";
const YouTube = () => {
  return (
    <>
      <section className="justin-youTube">
        <Container>
          <div className="justin-youTube--wrapper">
            <div className="justin-youTube--content-wrapper">
              <SectionHeader title="YouTube" subTitle="You are JUST-IN time!" />
              <p>
                Step into the world of JUST-IN, your go-to source for all things
                inspiring and innovative! Tune in as we deliver news, stories,
                and insights that are just in time for your entrepreneurial
                journey.{" "}
              </p>
              <button className="button justin-youTube--button">
                Subscribe now and stay tuned!
              </button>
            </div>
            <div className="justin-youTube--image-wrapper">
              <div className="justin-youTube--image-item">
                <Image
                  src="/images/home/youtube.png"
                  width={506}
                  height={603}
                  alt=""
                  // style={{ width: '100%', height: '100%' }} // optional
                />
                <div className="justin-youTube--voice-play">
                  <Image
                    src="/images/home/voice.png"
                    width={287}
                    height={74}
                    alt=""
                    className="voice"
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <Image
                    src="/images/home/youtube-icon.png"
                    width={103}
                    height={72}
                    alt=""
                    className="icon-ytb"
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default YouTube;
