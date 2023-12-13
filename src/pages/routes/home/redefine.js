import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../../../components/sectionHeader";
import Image from "next/image";
const Redefine = () => {
  return (
    <>
      <section className="redefine-justin">
        <Container>
          <div className="redefine-justin--section-wrapper">
            <div className="justin-youTube--content-wrapper redefine-justin--content-wrapper">
              <SectionHeader
                title="Redefine Your Narrative"
                subTitle="In My World, Mistakes Are Mere Footnotes. Unshakable Perseverance Writes the Tale"
              />
              <p>
                <span>"You Are Not Your Past" </span>is a riveting chronicle of
                conquering fear, harnessing the power of perseverance, and
                achieving unparalleled success. In a world where tenacity
                prevails, my story is a classic example for the same
              </p>
              <div className="redefine-justin--label">
                IF I CAN DO IT, SO CAN YOU!
              </div>
              <button className="button justin-youTube--button">
                Pre-Order Now
              </button>
            </div>
            <div className="redefine-justin--image-wrapper">
              <Image
                src="/images/home/redefine-image.png"
                width={723}
                height={550}
                alt=""
                // style={{ width: '100%', height: '100%' }} // optional
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Redefine;
