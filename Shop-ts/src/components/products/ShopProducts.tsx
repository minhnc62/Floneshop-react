import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getProducts, selectProductApi } from "../../redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productState } from "../../redux/productSlice";
import { Spin } from "antd";

import { lg, md, xs } from "../../rootStyledComponent";
import CardItem from "./CardItem";
import ListCard from "./ListCard";
import { ControlOutlined } from "@ant-design/icons";

export const Loading = styled(Spin)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface shopProductState {
  layout: string;
  productFilter:any;
  
}
const ShopProducts = ({ layout, productFilter}: shopProductState) => {
  
  const { loading, error, title } = useAppSelector(selectProductApi);

  

  if (loading) {
    return <Loading size="large" />;
  }

  

  return (
    <Shop_Bottom_Area>
      <div className={`row ${layout ? layout : ""}`}>
        {productFilter
        .filter((obj:productState)=>obj.title.toLocaleLowerCase().includes(title))
        .map((p: productState) => (
          <div className=" col-xl-3 col-sm-6 " key={p.id}>
            <div className="product-wrap">
              <CardItem
               p={p}
                id={p.id}
                title={p.title}
                image={p.image}
                discount={p.discount}
                newProduct={p.new}
                price={p.price}
                color={p.color}
                size={p.size}
                description={p.description}
              />
            </div>
            <div className="shop-list-wrap mb-30">
              <ListCard
              p={p}
                id={p.id}
                title={p.title}
                image={p.image}
                discount={p.discount}
                newProduct={p.new}
                price={p.price}
                description={p.description}
              />
            </div>
          </div>
        ))}
      </div>
    </Shop_Bottom_Area>
  );
};

const Shop_Bottom_Area = styled.div`
  .card {
    margin-bottom: 3rem;
  }
  margin-top: 3rem;
  .col-xl-3 {
    transition: 0.5s;
  }
  .grid {
    &.two-column {
      .col-xl-3 {
        flex: 1 0 33.3333%;

        max-width: 33.3333%;

        transition: 0.5s;
        @media ${xs} {
          flex: 1 0 50%;

          max-width: 50%;
        }
        .shop-list-wrap {
          display: none;
        }
      }
    }
  }
  .three-column {
    .col-xl-3 {
      flex: 1 0 25%;

      max-width: 25%;

      transition: 0.5s;

      @media ${lg} {
        flex: 1 0 25%;

        max-width: 25%;
      }
      @media ${md} {
        flex: 1 0 33.3333%;

        max-width: 33.3333%;
      }
      @media ${xs} {
        flex: 1 0 50%;

        max-width: 50%;
      }
      .shop-list-wrap {
        display: none;
      }
    }
  }
  .list {
    .product-wrap {
      display: none;
    }

    .col-xl-3 {
      flex: 1 0 100%;

      max-width: 100%;

      transition: 0.5s;
    }
  }
`;

export default ShopProducts;
