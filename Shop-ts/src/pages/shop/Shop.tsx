import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  selectProductApi,
  searchProductByTitle,
  changeTitle,
} from "../../redux/productSlice";
import styled from "styled-components";
import ShopProducts from "../../components/products/ShopProducts";
import { useNavigate, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import ShopSidebar from "../../components/products/ShopSidebar";
import ShopTopBar from "../../components/products/ShopTopBar";
import { useState } from "react";
export const Loading = styled.p`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shop_Area = styled.div`
  margin-top: 15rem;
  padding-bottom: 10rem;
`;

const Shop = () => {
  // const dispatch = useAppDispatch();
  // const { error, title } = useAppSelector(selectProductApi);
  // const navigate = useNavigate();

  // let controller: any;
  // const handleChange = (e: any) => {
  //   controller && controller.abort();
  //   controller = new AbortController();
  //   const { payload } = dispatch(changeTitle(e.target.value)); //Lưu lại text người dùng nhập vào

  //   if (payload.trim().length > 0) {
  //     dispatch(searchProductByTitle({ signal: controller.signal }));
  //     navigate("/shop");
  //   }
  // };
  const [layout, setLayout] = useState('grid three-column');
  const getLayout = (layout:string) => {
    setLayout(layout)
}

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
          <div className="col-lg-3 order-2 order-lg-1">
            <ShopSidebar />
            {/* <div className="site-card-wrapper">
        <form
          action=""
          className="search"
          onSubmit={(e) => e.preventDefault()}
          onChange={handleChange}
        >
          <input
            value={title}
            onChange={handleChange}
            type="text "
            className="title"
          />

          {error && <span className="error"> {error}</span>}
        </form>
        <div className="col-lg-9 order-1 order-lg-2"></div>
        <ShopProducts />
      </div> */}
          </div>
          <div className="col-lg-9 order-1 order-lg-2">
            <ShopTopBar getLayout={getLayout}/>
          <ShopProducts layout={layout}/>
          </div>
          
        </div>
      </div>
    </Shop_Area>
  );
};

export default Shop;
