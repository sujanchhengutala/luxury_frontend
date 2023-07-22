import React from "react";
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="grid grid-three-column footer-f">
          <div className="social">
            <img src="./images/footer_logo.png" alt="logo" />
            <div className="social-icon">
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <AiFillTwitterSquare />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
              <span>
                <IoLogoYoutube />
              </span>
            </div>
          </div>
          <div className="contact">
            <h3>Contact us</h3>
          </div>
          <div className="terms_condition">
            <h3>terms & policies</h3>
          </div>
        </div>
      </div>
      <div className="copyRights">
        <p>&copy; 2023, luxury with luv Powered by shopify</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 30rem;
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  .footer-f {
    height: 22rem;

    .social {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      img {
        width: 10vw;
        height: 6rem;
      }
      .social-icon {
        display: flex;

        position: relative;
        top: -2rem;
        width: 50%;
        gap: 2rem;

        span {
          font-size: 2rem;
        }
      }
    }
    .contact {
      height: 15rem;
      padding: 2rem;
      h3 {
        text-transform: uppercase;
        font-size: 2rem;
      }
    }
    .terms_condition {
      height: 15rem;
      padding: 2rem;

      h3 {
        text-transform: uppercase;
      }
    }
  }
  .copyRights {
    background-color: ${({ theme }) => theme.colors.bg};
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;
export default Footer;
