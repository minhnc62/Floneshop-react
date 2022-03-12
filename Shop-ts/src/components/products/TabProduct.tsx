import styled from "styled-components";
import { Tabs } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProducts, productState, selectProductApi } from "../../redux/productSlice";
import CardItem from "./CardItem";
import ShoppingButton from "../button/ShoppingButton";
import { useEffect } from "react";
const TabProduct_Area = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  h2 {
    text-align: center;
    font-size: 4.6rem;
    line-height: 3.8rem;
    color: #010101;
    padding-bottom: 3rem;
  }
  .btn-shop{
      text-align:center;
  }
 
`;
const Product_Wrap = styled.div`
    margin-bottom:1rem;
`
const { TabPane } = Tabs;
const TabProduct = () => {

  const dispatch = useAppDispatch()
  const { products } = useAppSelector(selectProductApi);

  useEffect(() => {
    dispatch(getProducts());
  }, []);



    const newProductMen = products.slice(0,4);
    const newProductWomen = products.slice(5,9);
    const newProductSale = products.slice(10,14);

    

  

  return (
    <TabProduct_Area>
      <div className="container">
        <h2 className="tab-title">Sản phẩm nổi bật</h2>
        <div>
          <Tabs defaultActiveKey="1" centered  animated size="large" type="card">
            <TabPane tab="Nam" key="1">
                <div className="row">
                {newProductMen.map((p:productState)=>{
                  return(
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
                  </div>);
                  
              })}
                </div>
              
            </TabPane>
            <TabPane tab="Nữ" key="2">
            <div className="row">
                {newProductWomen.map((p:productState)=>{
                  return(<div className=" col-xl-3 col-sm-6 col-12" key={p.id}>
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
                  </div>);
                  
              })}
                </div>
            </TabPane>
            <TabPane tab="Giảm giá" key="3">
            <div className="row">
                {newProductSale.map((p:productState)=>{
                  return(<div className=" col-xl-3 col-sm-6 col-12" key={p.id}>
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
                  </div>);
                  
              })}
                </div>
            </TabPane>
          </Tabs>
          <div className="btn-shop">
              <ShoppingButton title="Xem thêm"/>
          </div>
        </div>
      </div>
    </TabProduct_Area>
  );
};

export default TabProduct;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

