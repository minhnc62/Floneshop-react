import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectProductById,
  getProductsById,
  productState,
} from "../redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb, Spin } from "antd";
import ProductDetailItem from "../components/products/ProductDetailItem";
import CardItem from "../components/products/CardItem";
const Loading = styled(Spin)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product_Wrap = styled.div`
  margin-bottom: 1rem;
`;
const Product_Delail = styled.div`
  margin-top: 15rem;

  .product {
    margin-top: 3rem;
  }
`;

const Related_Products = styled.div`
  margin-top: 10rem;

  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 600;
    position: relative;
    display: inline-block;
    margin: 0;
    &:before {
      position: absolute;
      top: 1.7rem;
      left: -10rem;
      width: 8rem;
      height: 2px;
      content: "";
      background-color: #000;
    }
    &:after {
      position: absolute;
      top: 1.7rem;
      right: -10rem;
      width: 8rem;
      height: 2px;
      content: "";
      background-color: #000;
    }
  }
  .related-product-list{
    margin-top:4rem;
    margin-bottom:10rem;
  }

`;
const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { loading, error, singleProduct, products } =
    useAppSelector(selectProductById);

  useEffect(() => {
    if (singleProduct && singleProduct.id == id) return;
    dispatch(getProductsById(id));
  }, [id]);

  if (loading) {
    return <Loading size="large" />;
  }
  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  if (!singleProduct) {
    return <p>product not found ....</p>;
  }

  const newProductMen = products.slice(0, 4);

  return (
    <Product_Delail>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/shop"}>Cửa Hàng</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{singleProduct.title}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="product">
          <ProductDetailItem
            id={singleProduct.id}
            title={singleProduct.title}
            price={singleProduct.price}
            image={singleProduct.image}
            color={singleProduct.color}
            size={singleProduct.size}
            discount={singleProduct.discount}
            description={singleProduct.description}
          />
        </div>

        <Related_Products>
          <h2>Related Products</h2>
          <div className="related-product-list">
            <div className="row">
              {newProductMen.map((p: productState) => {
                return (
                  <div className=" col-xl-3 col-sm-6 col-12" key={p.id}>
                    <Product_Wrap className="product-wrap">
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
                    </Product_Wrap>
                  </div>
                );
              })}
            </div>
          </div>
        </Related_Products>
      </div>
    </Product_Delail>
  );
};
export default ProductDetail;
