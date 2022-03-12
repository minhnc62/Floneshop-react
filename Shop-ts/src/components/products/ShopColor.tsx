import styled from "styled-components";

import { Sidebar_Categorie } from "./ShopCategories";
import { Checkbox } from "antd";
const Sidebar_Color = styled(Sidebar_Categorie)``;
interface colorState {
  getSortParams: any;
  colors: any;
}

const ShopColor = ({ getSortParams, colors }: colorState) => {
  return (
    <Sidebar_Color>
      <h4 className="pro-sidebar-title">Màu </h4>
      <div className="sidebar-widget-list ">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
                <Checkbox>Tất cả</Checkbox>
              </button>
            </div>
          </li>
          {colors.map((single: string,index:any) => {
            return (
              
                <li key={index}>
                  <div className="sidebar-widget-list-left">
                    <button>
                      <Checkbox
                        onClick={() => {
                          getSortParams("color", single);
                        }}
                      >
                        {single}
                      </Checkbox>
                    </button>
                  </div>
                </li>
              
            );
          })}
        </ul>
      </div>
    </Sidebar_Color>
  );
};

export default ShopColor;
