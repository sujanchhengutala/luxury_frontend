import React from 'react'
import { styled } from "styled-components";
import {TbShoppingCartPlus} from 'react-icons/tb'


const Product = (props) => {
  const {image, description, title, price} =props
  return (
    <Wrapper>
    <div className="card">
    <img className="product--image" src={image} alt="product image" />
    <p className='description'>{description}</p>
    <p className="title">{title}</p>
    <p className='price'>${price} USD</p>
    <p className='btn'>
        <button><TbShoppingCartPlus />  Add to Cart</button>
    </p>
    </div> 
    </Wrapper>
  )
}
const Wrapper = styled.div`
.card {
  max-width: 310px;
  height: 42rem;
  margin: 2rem 0 0 1rem;
  background-color: #fff;
  .product--image {
  width: 100%;
  height: 20rem;
  object-fit:scale-down;
}
.description{
  padding: 1rem 1rem 1rem 1rem;
  word-break: break-all;
  letter-spacing: 0.5px;
  font-size: 1%.8;
}
.title{
  color: #7D7D7D;
  font-size: 2rem;
  padding: 0 1rem 0 1rem;
  font-weight: 100;
}
.price{
  padding: 0 1rem 0 1rem;
}
.btn{
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 95%;
    height: 4rem;
    margin-top: 1rem;
    border: none;
    background-color: #B9C2D9;
    border-radius: 10px;
    display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  }
}
}

`

export default Product