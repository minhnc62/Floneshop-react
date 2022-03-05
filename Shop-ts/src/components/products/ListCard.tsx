import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme_color } from "../../rootStyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BtnProduct from "../button/BtnProduct";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addWishlish } from "../../redux/wishlishSlice";


interface cardState {
  p:any,
  id: number;
  title: string;
  price: number;
  image: any;
  discount: number;
  newProduct: boolean;
  description: string;
}

const ListCard = ({
  p,
  id,
  title,
  price,
  image,
  discount,
  newProduct,
  description,
}: cardState) => {
  const dispatch = useAppDispatch()
    
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-xl-4 col-md-5 col-sm-6">
          <Product_Card>
            <Link to={"/products/" + id}>
              <Image_Product className="default-img " src={image[0]} />
              <Image_Product className="hover-img" src={image[1]} />
            </Link>
            {discount || newProduct ? (
              <div className="product-img-badges">
                {discount ? <span className="discount">-{discount}%</span> : ""}
                {newProduct ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}
          </Product_Card>
        </div>
        <div className="col-xl-8 col-md-7 col-sm-6">
          <Card_Body className="card-body">
            <Link to={"/products/" + id}>
              <h2 className="card-title">{title}</h2>
            </Link>

            <Product_Price>
              {discount > 0 ? (
                <>
                  <span>
                    {(price - price * (discount / 100)).toFixed(3)} đ{" "}
                  </span>
                  <span className="cross"> &#8211; </span>
                  <span className="old">{price.toFixed(3)} đ</span>
                </>
              ) : (
                <span> {price.toFixed(3)} đ</span>
              )}
            </Product_Price>
            <p className="card-text">{description}</p>
            <div className="shop-list-actions d-flex align-items-center">
              <BtnProduct id={id}/>

              <div className="shop-list-wishlist " >
                <button onClick={()=> dispatch(addWishlish(p))}>
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </button>
              </div>
            </div>
          </Card_Body>
        </div>
      </div>
      
    </div>
  );
};

const Product_Card = styled.div`
  position: relative;
  overflow: hidden;
  &:hover .hover-img {
    visibility: visible;

    transform: translate(-0%, 0);
    opacity: 1;
  }
  &:hover .default-img {
    visibility: hidden;
    transform: translateX(-100%);
  }
  .product-img-badges {
    position: absolute;
    top: 12px;
    right: 12px;
    .discount {
      background-color: #fa6bff;
    }
    .purple {
      background-color: ${theme_color};
    }
    span {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1;
      margin-bottom: 1rem;
      position: static;
      display: block;
      padding: 0.3rem 1.1rem;
      border-radius: 0.3rem;
    }
  }
  .product-action {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    width: 100%;
    transform: translateY(-50%);
    a,
    button {
      font-size: 16px;
      line-height: 42px;

      display: inline-block;

      width: 42px;
      height: 42px;
      margin: 0 3px;

      transition: all 0.4s ease-in-out;
      transform: scaleX(0);
      text-align: center;

      color: #fff;
      border: none;
      border-radius: 50px;
      background: none;
      background-color: ${theme_color};
      &:hover,
      &.active {
        background-color: #fa6bff;
      }
    }
  }
  &:hover .product-action a {
    transform: scaleX(1);
  }
  &:hover .product-action button {
    transform: scaleX(1);
  }
`;

const Image_Product = styled.img`
  width: 100%;
  
  transition: all 0.5s ease-in-out;
  &.hover-img {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    width: 100%;
    transition: all 0.5s ease-in-out;
    transform: translateX(100%);

    opacity: 0;
  }
`;

const Card_Body = styled.div`
.card-text{
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin: 1.5rem 0 3rem;
    color: #aaaaaa;
  }
  .shop-list-wishlist{
      margin-left:2rem;
    font-size: 2rem;
    padding: 0;
    color:#4b4b4b;
    button{
        border: none;
        background: none;
        
        &:hover{
        color:${theme_color}
        }
    }
  }
`;
 const Product_Price = styled.div`
  margin:1.5rem 0;
  span {
    font-size: 2rem;
    font-weight: 500;
    position: relative;
    
    color: #c61a32;
  }
  .cross {
    color: #000;
  }
  .old {
    text-decoration: line-through;
    color: #8e8e8e;
  }
  
`;

export default ListCard;
