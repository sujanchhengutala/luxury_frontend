import React from "react";
import { styled } from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data, responsive } from "./data";
import Product from "./Product";
import {BsArrowRightCircle} from "react-icons/bs";
import {BsArrowLeftCircle} from "react-icons/bs";

const Body = () => {

  const product = data.map((curElem)=>{
    return(
      <Product image = {curElem.image}  description={curElem.description} title={curElem.title} price = {curElem.price} />
    )}
)

  return (
    <Wrapper>
      <div className="containers container">
        <h3>What folks can’t get enough of</h3>
        <div className="grid grid-five-column card">
          <div>
            <h4>Rings</h4>
            <img src="./images/1.png" alt="first" />
          </div>
          <div>
            <h4>Braclets</h4>
            <img src="./images/2.png" alt="second" />
          </div>
          <div>
            <h4>Necklaces</h4>
            <img src="./images/5.png" alt="second" />
          </div>

          <div>
            <h4>Necklaces</h4>
            <img src="./images/3.png" alt="third" />
          </div>
          <div>
            <h4>jewelry sets</h4>
            <img src="./images/4.png" alt="third" />
          </div>
        </div>
      </div>
      <div className="item-collection">
        <div className="container">
          <div className="item-text">
            <h3>the best of</h3>
            <h3>the best</h3>
            <h3>
              <FaArrowRightLong />
            </h3>
          </div>
          <div className="item-data">
            <Carousel showDots={false} arrows = {false} responsive={responsive}>
              {product}
            </Carousel>
            <div className="arrows">
              <BsArrowLeftCircle />
              <BsArrowRightCircle/>
            </div>
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 95rem;
  /* border: 1px solid black; */

  .containers {
    height: 37rem;
    /* border: 1px solid black; */
    background-color: #fff;
    h3 {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 500;
      padding: 3rem 0 0 1rem;
    }
    .card {
      border-radius: 1rem;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: hidden;
      padding: 0;
      margin: 0;
      h4 {
        text-align: center;
        position: relative;
        top: 50%;
        color: #fff;
        font-size: 2rem;
        font-weight: 100;
      }
      img {
        height: 18rem;
        width: 18rem;
      }
    }
  }
  .item-collection {
    /* border: 1px solid black; */
    height: 58rem;
    background-color: #f5f5f5;
    .container {
      display: flex;
      .item-text {
        width: 20vw;
        /* border: 1px solid black; */
        height: 51rem;
        h3 {
          padding: 0 0 0 4rem;
          font-size: 4rem;
          position: relative;
          top: 5rem;
        }
      }
      .item-data {
        width: 70vw;
        /* border: 1px solid black; */
        height: 47rem;
        margin: 6rem 0 0 3rem;
        .arrows{
          font-size: 3rem;
          padding: 2rem;
          display: flex;
          gap: 3rem;
          position: relative;
          left: -0.9rem;
          font-weight: 100;
          
        }
      }
    }
  }
`;

export default Body;
