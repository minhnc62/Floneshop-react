import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getProducts,
  selectProductApi,
  searchProductByTitle,
  changeTitle,
} from "../../redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productState } from "../../redux/productSlice";
import { Spin, Card, Row, Col } from "antd";
import { add } from "../../redux/cartSlice";
import { lg, md, xs } from "../../rootStyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"

export const Loading = styled(Spin)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const { Meta } = Card;

interface shopProductState {
  layout: string;
}
const ShopProducts = ({ layout }: shopProductState) => {
  const dispatch = useAppDispatch();
  const { loading, error, products } = useAppSelector(selectProductApi);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <Loading size="large" />;
  } else if (error) {
    return <p>Error: {error}</p>;
  }

  const handleAddToCart = (p: any) => {
    dispatch(add(p));
  };

  return (
    <Shop_Bottom_Area>
      <div className={`row ${layout ? layout : ""}`}>
        {products.map((p: productState) => (
          <div className=" col-xl-4 col-sm-6 " key={p.id}>
            <Card className="card"
              bordered={false}
              hoverable
              cover={
                <Product_Card>
                  <Link to={"/products/" + p.id}>
                    <Image_Product className="default-img " src={p.image} />
                    <Image_Product className="hover-img" src="image/product.jpg" />
                  </Link>
                  <div className="product-img-badges">
                    <span>-10%</span>
                  </div>
                  <div className="product-action">
                    <Link title="Select options" to={"/products/" + p.id}>
                      <FontAwesomeIcon icon={faGear}/>
                    </Link>
                  </div>
                </Product_Card>
              }
            >
              <Meta title={p.title} />
              <button onClick={() => handleAddToCart(p)}>add</button>
            </Card>
          </div>
        ))}
      </div>
    </Shop_Bottom_Area>
  );
};


const Shop_Bottom_Area = styled.div`
.card{
  margin-bottom:3rem
}
  margin-top: 3rem;
  .col-xl-4 {
    transition: 0.5s;
  }
  .grid {
    .shop-list-wrap {
      display: none;
    }

    &.two-column {
      .col-xl-4 {
        flex: 1 0 50%;

        max-width: 50%;

        transition: 0.5s;
      }
    }
  }
  .three-column {
    .col-xl-4 {
      flex: 1 0 33.3333%;

      max-width: 33.3333%;

      transition: 0.5s;

      @media ${lg} {
        flex: 1 0 33.3333%;

        max-width: 33.3333%;
      }
      @media ${md} {
        flex: 1 0 50%;

        max-width: 50%;
      }
      @media ${xs} {
        flex: 1 0 100%;

        max-width: 100%;
      }
    }
  }
  .list {
    .product-wrap {
      display: none;
    }

    .col-xl-4 {
      flex: 1 0 100%;

      max-width: 100%;

      transition: 0.5s;
    }
  }
`;
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
  .product-img-badges{
    position: absolute;
    top: 12px;
    right: 12px;
    span{
      color: #c61a32;
      font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
    position: static;
    display: block;
    padding: .3rem 1.1rem;
    border-radius: .3rem;
    }
  }
`;
const Image_Product = styled.img`
  width: 100%;
  height:35rem;
  transition: all 0.5s ease-in-out;
  &.hover-img {
    width:100%;
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

export default ShopProducts;
