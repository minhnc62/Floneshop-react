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
import { Tabs } from "antd";
const { TabPane } = Tabs;
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
  .tab-product{
    margin-top:3rem;
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
  .related-product-list {
    margin-top: 4rem;
    margin-bottom: 10rem;
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

        <div className="tab-product">
          <Tabs defaultActiveKey="1" centered animated size="large">
            <TabPane tab="Thông tin" key="1">
              <Product_Anotherinfo_Wrapper >
                <ul>
                  <li className="d-flex">
                    <span className="anotherinfo col-1"> Weight</span>
                    <span className="anotherinfo-item">400g</span>
                  </li>
                  <li className="d-flex">
                    <span className="anotherinfo col-1"> Dimensions</span>
                    <span className="anotherinfo-item">10 x 10 x 15 cm</span>
                  </li>
                  <li className="d-flex">
                    <span className="anotherinfo col-1"> Materials</span>
                    <span className="anotherinfo-item"> 60% cotton, 40% polyester</span>
                  </li>
                  <li className="d-flex">
                    <span className="anotherinfo col-1"> Other Info</span>
                    <span className="anotherinfo-item"> American heirloom jean shorts pug seitan letterpress</span>
                  </li>
                </ul>
              </Product_Anotherinfo_Wrapper>
            </TabPane>
            <TabPane tab="Miêu tả" key="2">
              <Description>
              <span className="description-product">{singleProduct.description}{singleProduct.description}</span>
              </Description>
              
            </TabPane>
            <TabPane tab="Nhận xét" key="3">
              Nhận xét
            </TabPane>
          </Tabs>
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


const Product_Anotherinfo_Wrapper = styled.div`
.anotherinfo{
  font-size:1.4rem;
  font-weight:500;
  margin-bottom:1.5rem;
}
.anotherinfo-item{
  margin-left:2rem;
}
  
`
const Description = styled.div`
  .description-product{
    font-size:1.4rem;
    line-height:2.4rem;
  }
`
export default ProductDetail;
