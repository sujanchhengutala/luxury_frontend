import React from "react";
import { styled } from "styled-components";

const Luxury = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">The luxurywithlove blog</h2>
        <div className="grid grid-two-column carrds">
          <div className="card">
            <img
              className="image"
              src="./images/Rectangle.png"
              alt="rectangle"
            />
            <h2>BLOG POST</h2>
            <p>Give your customers a summary of your blog post</p>
          </div>
          <div className="card">
            <img
              className="image"
              src="./images/Rectangle.png"
              alt="rectangle"
            />
            <h2>BLOG POST</h2>
            <p>Give your customers a summary of your blog post</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 53rem;
  background-color: #f5f5f5;
  .container {
    .title {
      text-align: center;
      padding: 2rem;
      font-size: 3rem;
    }
    .carrds {
      height: 32rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .card {
        margin: 8rem 0 0 0;
        height: 40rem;
        background-color: #eaeaea;
        width: 55rem;
        img {
          height: 30rem;
          width: 100%;
        }
        h2,
        p {
          text-align: center;
        }
      }
    }
  }
`;
export default Luxury;
