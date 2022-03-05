import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faTableCells,
  faTableList,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { sm, theme_color, xs } from "../../rootStyledComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProductApi } from "../../redux/productSlice";
import { useState } from "react";
import { Drawer } from "antd";
import ShopSidebar from "./ShopSidebar";

const Shop_Top_Bar = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${xs} {
    display: block;
  }
  @media ${sm} {
    display: flex;
  }
  .select-shoing-wrap {
    display: flex;
    @media ${xs} {
      display: block;
    }
    @media ${sm} {
      display: flex;
    }
    .shop-select {
      margin-right: 50px;
      select {
        font-size: 14px;

        min-width: 143px;
        padding: 5px;

        color: #606060;
        border: 1px solid #e6e6e6;
      }
    }
  }
  .shop-tab {
    button {
      font-size: 18px;

      margin-left: 20px;
      padding: 0;

      color: #606060;
      border: none;
      background: none;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${theme_color};
      }
    }
  }
`;

interface topBarState {
  getLayout: any;
  getFilterSortParams: any;
  products:any;
  getSortParams:any;
}
const ShopTopBar = ({ getLayout, getFilterSortParams,products,getSortParams}: topBarState) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const setActiveLayout = (e: any) => {
    const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
    gridSwitchBtn.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <Shop_Top_Bar>
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={(e: any) => {
              getFilterSortParams("filterSort", e.target.value);
            }}
          >
            <option value="default">Mặc định</option>
            <option value="priceHighToLow">Giá từ cao đến thấp</option>
            <option value="priceLowToHigh">Giá từ thấp đến cao</option>
          </select>
        </div>
      </div>

      <div className="shop-tab d-flex">
        <button
          onClick={(e) => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <FontAwesomeIcon icon={faTableCellsLarge} />
        </button>
        <button
          onClick={(e) => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <FontAwesomeIcon icon={faTableCells} />
        </button>
        <button
          onClick={(e) => {
            getLayout("list");
            setActiveLayout(e);
          }}
        >
          <FontAwesomeIcon icon={faTableList} />
        </button>
        <button onClick={showDrawer} className=" d-md-block d-lg-none " >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Drawer
        width={300}
          title="Lọc sản phẩm"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <ShopSidebar products={products} getSortParams={getSortParams}/>
        </Drawer>
      </div>
    </Shop_Top_Bar>
  );
};

export default ShopTopBar;
