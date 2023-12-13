import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () => {
  return (
    <>
      <section className="justin-about">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={5}>
              <div className="justin-about--about-image">
                <Image
                  src="/images/home/about.png"
                  width={673}
                  height={907}
                  alt=""
                  // style={{ width: '100%', height: '100%' }} // optional
                />
              </div>
            </Col>
            <Col sm={12} md={12} lg={7}>
              <div className="justin-about--content">
                <h2>About</h2>
                <p>
                  I am the CEO of three companies dedicated to making a
                  difference: Solar Quote, SubcontractorHub, and ExpansionJS.
                  Our focus is on providing solutions for consumers and
                  contractors that create efficient processes, aiming to
                  collapse timelines and reduce costs. I firmly believe in the
                  power of persevering through all obstacles to achieve success.
                </p>
                <p>
                  {" "}
                  My goal is to positively impact the lives of one billion
                  people. Being passionate about health and wellbeing, I have
                  authored the book "You Are Not Your Past," and developed an
                  app, MustMotivate. These platforms bring together tools for
                  awareness, metrics for health, and resources to build
                  communities focused on wellbeing.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
