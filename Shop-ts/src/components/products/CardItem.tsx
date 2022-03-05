import styled from "styled-components";
import { Link } from "react-router-dom";
import { add } from "../../redux/cartSlice";
import { Card } from "antd";
import { lg, md, theme_color, xs, xxs } from "../../rootStyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { addWishlish, selectwishlish } from "../../redux/wishlishSlice";
interface cardState {
  p:any,
  id: number;
  title: string;
  price: number;
  image: any;
  color: any;
  size: any;
  discount: number;
  newProduct: boolean;
  description: string;
}

const { Meta } = Card;
const CardItem = ({
  p,
  id,
  title,
  price,
  image,
  discount,
  newProduct,
  description,
  color, size
}: cardState) => {
 

  const [modalShow, setModalShow] = useState(false);
  const dispatch = useAppDispatch()
  

  return (
    <Card
      className="card"
      bordered={false}
      hoverable
      cover={
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

          <div className="product-action">
            <Link title="Select options" to={"/products/" + id}>
              <FontAwesomeIcon icon={faGear} />
            </Link>

            <button onClick={() => setModalShow(true)} title="Quick View">
              <FontAwesomeIcon icon={faEye} />{" "}
            </button>
            <button title="Added to wishlist" onClick={()=> dispatch(addWishlish(p))}>
              <FontAwesomeIcon icon={faHeart} />{" "}
            </button>
          </div>
        </Product_Card>
      }
    >
      <Link to={"/products/" + id}>
        <Meta title={title} />
      </Link>

      <Product_Price>
        {discount > 0 ? (
          <>
            <span>{(price - price * (discount / 100)).toFixed(3)} đ </span>
            <span className="cross"> &#8211; </span>
            <span className="old">{price.toFixed(3)} đ</span>
          </>
        ) : (
          <span> {price.toFixed(3)} đ</span>
        )}
      </Product_Price>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        title={title}
        price={price}
        image={image}
        color={color}
        size={size}
        discount={discount}
        description={description}
        
      />
    </Card>
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
const Product_Price = styled.div`
  margin-top: 0.8rem;
  span {
    font-size: 1.7rem;
    font-weight: 500;
    position: relative;

    color: #c61a32;
  }
  .cross {
    color: #000;
    @media ${xxs} {
      display: none;
    }
  }
  .old {
    text-decoration: line-through;
    color: #8e8e8e;
  }
`;

export default CardItem;
