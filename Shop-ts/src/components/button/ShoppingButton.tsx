import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme_color, xs } from "../../rootStyledComponent";

interface btnShopeState{
  title:string;
}

const ShoppingButton = ({title}:btnShopeState) =>{
    return <Btn_Shop className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
    <Link to={"/shop"}>{title}</Link>
  </Btn_Shop>
}

export const Btn_Shop = styled.div`
    &.funfact-btn {
    margin-top: 43px;
    @media ${xs} {
      margin-top: 23px;
    }
    a {
      line-height: 1;
      z-index: 1;
      display: inline-block;
      padding: 16px 56px;
      color: #fff;
      border: 1px solid transparent;
      background-color: #000;
      &:hover {
        border: 1px solid ${theme_color};
      }
    }
  }
    &.funfact-btn--round-shape {
    a {
      overflow: hidden;
      border-radius: 30px;
      font-size:1.4rem
    }
  }
    &.funfact-btn-red {
    a {
      background-color: #c61a32;
      &:hover {
        border: 1px solid ${theme_color};
      }
    }
  }
    &.btn-hover {
    a {
      position: relative;

      transition: all 0.5s ease-in-out 0s;
      &:hover {
        color: #fff;
        border: 1px solid ${theme_color};
      }
      &::before,
      &::after {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      &::after {
        right: 0;
        left: auto;
        width: 0;
        background: ${theme_color};
      }
      &:hover::after {
        right: auto;
        left: 0;
        width: 100%;
      }
    }
  }
`

export default ShoppingButton;