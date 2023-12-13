import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FooterSocial from "./footerSocialData";
const Footer = () => {
  const footerSocial = [
    {
      id: "s1",
      image: "/images/home/Vector-2.png",
    },
    {
      id: "s2",
      image: "/images/home/Vector.png",
    },
    {
      id: "s3",
      image: "/images/home/Vector-1.png",
    },
    {
      id: "s4",
      image: "/images/home/Group 99900935.png",
    },
    {
      id: "s5",
      image: "/images/home/Group 99906352.png",
    },
  ];
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer--wrapper">
            <div className="footer--subscribe">
              <p>Subscribe to my Newsletter</p>
              <InputGroup>
                <Form.Control type="email" placeholder="Email" />
                <Button variant="outline-secondary">Sign Up</Button>
              </InputGroup>
            </div>
            <div className="footer--list-itam-wrapper">
              <p>© 2023. All Rights reserved</p>
              <ul>
                {footerSocial.map((data) => (
                  <li key={data.id}>
                    <FooterSocial id={data.id} image={data.image} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
