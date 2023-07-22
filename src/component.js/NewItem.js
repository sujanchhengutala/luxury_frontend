import React from 'react'
import { styled } from 'styled-components'
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { wNew, responsive } from "./data";
import Product from "./Product";
import {BsArrowRightCircle} from "react-icons/bs";
import {BsArrowLeftCircle} from "react-icons/bs";

const NewItem = (props) => {
    console.log(props)

    const product = wNew.map((curElem)=>{
        return(
          <Product image = {curElem.image}  description={curElem.description} title={curElem.title} price = {curElem.price} />
        )}
    )
  return (
    <Wrapper>
        <div className="item-collection">
        <div className="container">
          <div className="item-text">
            <h3>{props.fText}</h3>
            <h3>{props.sText}?</h3>
            {/* <h3>
              <FaArrowRightLong />
            </h3> */}
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
  )
}

const Wrapper = styled.div`
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
`
export default NewItem