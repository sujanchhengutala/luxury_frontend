import React from "react";
import { data, responsive } from "./data";
import { styled } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Curosel = () => {
  const product = data.map((curElem) => {
    return (
      <div className="card">
        <img
          className="product--image"
          src={curElem.image}
          alt="product image"
        />
        <p className="description">{curElem.description}</p>
        <p className="title">{curElem.title}</p>
        <p className="price">{curElem.price} USD</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    );
  });
  return (
    <Container className="container">
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </Container>
  );
};
const Container = styled.div`
  z-index: 999;
  height: 38rem;
  width: 60rem;

  .card {
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
    max-width: 320px;
    height: 40rem;
    margin: 2rem 0 0 1rem;
    .product--image {
      width: 100%;
      height: 16em;
      object-fit: cover;
    }
    description {
      padding: 2rem 0 2rem 0;
    }
    .price {
      color: grey;
      font-size: 22px;
    }
    p {
      button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
      }
    }

    .card button:hover {
      opacity: 0.7;
    }
  }
  .react-multiple-carousel__arrow {
    position: absolute;
    top: 20rem;
  }
`;

export default Curosel;
