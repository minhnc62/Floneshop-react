import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme_color, xs } from "../../rootStyledComponent";
import { Button_add } from "../products/ProductModal";

interface btnState {
  src: any;
  btnName: string;
}

const BtnCart = ({ src, btnName }: btnState) => {
  return (
    <Link to={src}>
      <Btn_Product className=" btn-cart  funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
        <Link to={src}>{btnName}</Link>
      </Btn_Product>
    </Link>
  );
};

const Btn_Product = styled(Button_add)`
  margin-top: 0 !important;
  &.funfact-btn {
    a {
      color: #000000;
      font-weight: 500;
      
    }
    &:hover a{
      color:#fff;
    }
  }
  &.funfact-btn-red {
    background-color: #f2f2f2;
  }

  
`;

export default BtnCart;
