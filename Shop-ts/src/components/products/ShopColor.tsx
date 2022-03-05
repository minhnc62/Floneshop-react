import styled from "styled-components";

import { Sidebar_Categorie } from "./ShopCategories";
import { Checkbox } from "antd";
const Sidebar_Color = styled(Sidebar_Categorie)`


`

const ShopColor = () => {
  return (
    <Sidebar_Color >
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list ">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
              <Checkbox>All Colors</Checkbox>
              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
              <Checkbox>Trắng</Checkbox>
              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
              <Checkbox>Đen</Checkbox>
              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
              <Checkbox>Nâu</Checkbox>
              </button>
            </div>
          </li>
         
        </ul>
      </div>
    </Sidebar_Color>
  );
};

export default ShopColor;
