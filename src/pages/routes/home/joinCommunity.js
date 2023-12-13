import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
const JoinCommunity = () => {
  return (
    <>
      <section className="justin-community">
        <Container>
          <div className="justin-community--wrapper">
            <div className="justin-community--title-header">
              <h2>
                <span>{`Join`}</span>
                {` Justin's Community`}
              </h2>
              <p>
                {`Discover a community built on the foundation of perseverance.
                Join us and connect with fellow individuals who share the spirit
                of relentless determination.`}
              </p>
            </div>
            <div className="justin-community--community-list">
              <ul>
                <li>
                  <Image
                    src="/images/home/insta.svg"
                    width={80}
                    height={80}
                    alt=""
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <p>Instagram</p>
                </li>
                <li>
                  <Image
                    src="/images/home/face.svg"
                    width={80}
                    height={80}
                    alt=""
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <p>Facebook</p>
                </li>
                <li>
                  <Image
                    src="/images/home/tiktok.svg"
                    width={80}
                    height={80}
                    alt=""
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <p>TikTok</p>
                </li>
                <li>
                  <Image
                    src="/images/home/youtob.svg"
                    width={80}
                    height={80}
                    alt=""
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <p>Youtube</p>
                </li>
                <li>
                  <Image
                    src="/images/home/twiter.svg"
                    width={80}
                    height={80}
                    alt=""
                    // style={{ width: '100%', height: '100%' }} // optional
                  />
                  <p>Twitter</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default JoinCommunity;
