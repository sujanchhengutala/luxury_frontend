import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

import { FaInstagramSquare } from "react-icons/fa";

import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
  return (
    <Nav>
      <div className="headder">
        <div className="logo">
          <img src="./images/Logo.png" alt="logo" />
        </div>
        <div className="searchContainer">
          <input type="text" className="searchInput" placeholder="Search" />
          <button className="searchBtn">
            <CiSearch className="icons" />
          </button>
        </div>
        <div className="flag">
          <img src="./images/canada.png" alt="logo" />
        </div>
        <p>
          0 items{" "}
          <span>
            <HiMiniShoppingCart />
          </span>
        </p>
        <p>
          Account{" "}
          <span>
            <BiSolidUserCircle />
          </span>
        </p>
        <p>
          Wishlist{" "}
          <span>
            <BsHeart />
          </span>
        </p>

        <div className="social_link">
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
      <div className="lists">
        <ul>
          <li>Home</li>
          <li>All Products</li>
          <li>Towel Warmers</li>
          <li>Bathroom Accessories</li>
          <li>Shower Essentials</li>
          <li>Thermostatics</li>
          <li>Bathub</li>
          <li>Contact</li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 15rem;

  border: 1px solid #eaecec;
  /* position: fixed; */
  /* position: fixed;
  top: 0;
  width: 100%; */

  background-color: white;
  .headder {
    height: 60%;
    width: 95%;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      height: 5rem;
      width: 20rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .searchContainer {
      display: flex;
      position: relative;
      width: 45rem;
      height: 4rem;
      border: 1px solid #eaecec;
      margin: 0;
      pad: 0;
      outline: none;
      .searchInput {
        width: 85%;
        height: 99%;
        outline: none;
        border: none;
      }
      .searchBtn {
        height: 100%;
        width: 15%;

        background-color: #ffff;
        text-align: center;
        outline: none;
        border: 1px solid #eaecec;
        border-left: none;
        & {
          cursor: pointer;
        }

        .icons {
          height: 3rem;
          width: 4rem;
          position: relative;
          outline: none;
          top: 0.3rem;
          left: 1rem;
        }
      }
    }
    .flag {
      height: 5rem;
      width: 4rem;
      & {
        cursor: pointer;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    p {
      display: flex;
      font-size: 1.5;
      span {
        padding: 0 1rem;
        position: relative;
        font-size: 2rem;
      }
    }

    .social_link {
      display: flex;
      flex-direction: row;
      span {
        font-size: 2.5rem;
        padding: 0 1rem;
        & {
          cursor: pointer;
        }
      }
    }
  }
  .lists {
    height: 40%;
    width: 95%;
    margin: 1.5rem auto;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 1.5rem;
        padding: 0 2rem;
        & {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Header;
