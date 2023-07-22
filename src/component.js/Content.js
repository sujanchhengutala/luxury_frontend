import React from "react";
import { styled } from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

const Content = () => {
  return (
    <Wrapper>
      <div className="grid grid-three-column cards">
        <div className="card">
          <img src="./images/repair.png" alt="jsjsjs" />
          <p className="pp">
            <h4 className="title">SOME THINGS NEVER CHANGE</h4>
            <p className="description">E&L will always be essential.</p>
            <button className="button">
              I WANT SOME <BsArrowRightShort className="icon" />
            </button>
          </p>
        </div>
        <div className="card">
          <img src="./images/girl.png" alt="jsjsjs" />
          <p className="pp">
            <h4 className="title">OH, SHOOT!</h4>
            <p className="description">
              Didn't we mention we have a huge GBB restock?
            </p>
            <button className="button">
              I WANT SOME <BsArrowRightShort className="icon" />
            </button>
          </p>
        </div>
        <div className="card">
          <img src="./images/necklace.png" alt="jsjsjs" />
          <p className="pp">
            <h4 className="title">UNDERPERFORMING?</h4>
            <p className="description">
              You're probably missing a Raven Elite Gen 2.
            </p>
            <button className="button">
              I WANT SOME <BsArrowRightShort className="icon" />
            </button>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 40rem;
  background-color: #fff;
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
    .card {
      height: 39rem;
      width: 33.33%;
      background-color: #e1e4ea;
      object-fit: cover;
      img {
        width: 100%;
        overflow: hidden;
      }
      .pp {
        padding: 2rem;
        h4 {
          font-size: 2rem;
          font-weight: 600;
          font-family: "Roboto";
        }
        .description {
          font-weight: 300;
        }
        .button {
          margin: 1rem 0 1rem 0;
          width: 18rem;
          height: 4rem;
          background-color: #fff;
          border-radius: 10px;
          border: none;
          font-weight: 500;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;

export default Content;
