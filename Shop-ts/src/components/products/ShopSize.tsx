import styled from "styled-components";

import { Sidebar_Categorie } from "./ShopCategories";
import { Checkbox } from "antd";
const Sidebar_Size = styled(Sidebar_Categorie)`


`


const ShopSize = () => {
  return (
    <Sidebar_Size >
      <h4 className="pro-sidebar-title">Size </h4>
      <div className="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
              <Checkbox>All Sizes</Checkbox>

              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button className="text-uppercase">
              <Checkbox>L</Checkbox>

              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button className="text-uppercase">
              <Checkbox>X</Checkbox>

              </button>
            </div>
          </li>
         
        </ul>
      </div>
    </Sidebar_Size>
  );
};

export default ShopSize;
