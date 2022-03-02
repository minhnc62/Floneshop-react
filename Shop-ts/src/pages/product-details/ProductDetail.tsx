import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProductById, getProductsById } from "../../redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb, Spin } from "antd";
 const Loading = styled(Spin)`
  
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
`;
const Product_Delail = styled.div`
  margin-top: 20rem;
`;
const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { loading, error, singleProduct } = useAppSelector(selectProductById);

  useEffect(() => {
    if (singleProduct && singleProduct.id == id) return;
    dispatch(getProductsById(id));
  }, [id]);

  if (loading) {
    return (
      <Loading size="large" />
    );
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!singleProduct) {
    return <p>product not found ....</p>;
  }
  return (
    <Product_Delail>
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
        <h2 className="product-title">{singleProduct.title}</h2>
        <img src={singleProduct.image} />
      </div>
    </Product_Delail>
  );
};
export default ProductDetail;
