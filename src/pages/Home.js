import React from "react";
// import Header from '../component.js/Header'
import styled from "styled-components";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiTrophy } from "react-icons/pi";
import { TbStars } from "react-icons/tb";
import Body from "../component.js/Body";
import Quotes from "../component.js/Quotes";
import Content from "../component.js/Content";
import NewItem from "../component.js/NewItem";
import Luxury from "../component.js/Luxury";
import Form from "../component.js/Form";

const Text = { a: "what's", b: "new?", c: "recent", d: "restock" };
const Home = () => {
  return (
    <Container>
      <div className="whole_body">
        <div className="grid grid-three-column ship_info container">
          <div className="ship container">
            <span>
              <LiaShippingFastSolid />
            </span>
            <p> Free Canada-wide shipping on orders over $300 </p>{" "}
          </div>
          <div className="ship container">
            <span>
              <PiTrophy />
            </span>{" "}
            <p> Free Canada-wide shipping on orders over $300</p>
          </div>
          <div className="ship container">
            <span>
              <TbStars />
            </span>{" "}
            <p>Free Canada-wide shipping on orders over $300</p>
          </div>
        </div>
      </div>

      <div className="body_info">
        <div className="card_des">
          <p>Limited live sales</p>
          <h2>XX%</h2>
          <h3>
            <p>Discount on</p>
            <p>Curated items</p>
          </h3>

          <button>Sign Up Now!</button>
        </div>
      </div>
      <Body />
      <Quotes />
      <Content />
      <NewItem fText = {Text.a} sText={Text.b}/>
      <NewItem fText = {Text.c} sText={Text.d}/>
      <Luxury />
      <Form />
    </Container>
  );
};

const Container = styled.div`
  height: 420rem;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
  .whole_body {
    height: 5rem;
    width: 100vw;
    background-color: #b9c2d94d;
  }
  .ship_info {
    display: flex;

    /* background-color: #B9C2D94D; */
    /* border: 1px solid black; */
    .ship {
      /* margin: 0 4rem 0 4rem; */
      /* border: 1px solid black; */
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      /* justify-content: center; */

      span {
        font-size: 2rem;
        padding: 1rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  .body_info {
    height: 50rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("./images/Group 6.png");
    display: flex;
    justify-content: center;
    align-items: center;
    .card_des {
      width: 28rem;
      height: 33rem;
      z-index: 999;
      background-color: #787878f2;
      p {
        padding: 4rem 0 0 4rem;
        color: ${({ theme }) => theme.colors.footer_bg};
        font-size: 2rem;
        text-transform: capitalize;
      }
      h2 {
        color: ${({ theme }) => theme.colors.footer_bg};
        padding: 1rem 0 0 4rem;
        font-size: 4rem;
      }
      h3 {
        p {
          padding: 0 0 0 4rem;
          font-size: 2.5rem;
          font-weight: 400;
          text-transform: uppercase;
          font-family: "Bebas Neue";
        }
      }
      button {
        margin: 4rem;
        height: 4rem;
        width: 12rem;
        background: ${({ theme }) => theme.colors.btn};
        border-radius: 10px;
        border: none;
        font-size: 1.5rem;
      }
    }
  }
`;

export default Home;
