import { useAppSelector, useAppDispatch } from "../redux/hooks";

import styled from "styled-components";
import ShopProducts from "../components/products/ShopProducts";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import ShopSidebar from "../components/products/ShopSidebar";
import ShopTopBar from "../components/products/ShopTopBar";
import { useEffect, useState } from "react";
import { productState, selectProductApi } from "../redux/productSlice";
import { getSortedProducts } from "../helper/product";



const Shop_Area = styled.div`
  margin-top: 15rem;
  padding-bottom: 10rem;
`;

const Shop = () => {
  const {products} = useAppSelector(selectProductApi) 
  const [layout, setLayout] = useState('grid three-column');
  const [sortType, setSortType] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [filterSortType, setFilterSortType] = useState('');
  const [filterSortValue, setFilterSortValue] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const getLayout = (layout:string) => {
    setLayout(layout);
}



const getSortParams = (sortType:string, sortValue:string) => {
  setSortType(sortType);
  setSortValue(sortValue);
}
const getFilterSortParams = (sortType:string, sortValue:string) => {
  setFilterSortType(sortType);
  setFilterSortValue(sortValue);
}

useEffect(() => {
  let sortedProducts = getSortedProducts(products, sortType, sortValue);
  const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
  sortedProducts = filterSortedProducts;
  setSortedProducts(sortedProducts);
  
}, [ products, sortType, sortValue, filterSortType, filterSortValue ]);


  return (
    <Shop_Area>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/shop"}>Cửa Hàng</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="row">
          <div className="col-lg-3  d-lg-block  d-none">
            <ShopSidebar products={products} getSortParams={getSortParams}/>
           
          </div>
          <div className="col-lg-9  ">
            <ShopTopBar getLayout={getLayout}  getFilterSortParams={getFilterSortParams} products={products} getSortParams={getSortParams}/>
          <ShopProducts layout={layout}  productFilter = {sortedProducts} />
          
          </div>
          
        </div>
      </div>
    </Shop_Area>
  );
};

export default Shop;
