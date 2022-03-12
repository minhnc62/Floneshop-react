import styled from "styled-components";

import { Sidebar_Categorie } from "./ShopCategories";
import { Checkbox } from "antd";
const Sidebar_Size = styled(Sidebar_Categorie)``;

interface sizeState {
  getSortParams: any;
  sizes: any;
}

const ShopSize = ({ getSortParams, sizes }: sizeState) => {
  console.log(sizes)
  return (
    <Sidebar_Size>
      <h4 className="pro-sidebar-title">Kích thước</h4>
      <div className="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
                <Checkbox>Tất cả</Checkbox>
              </button>
            </div>
          </li>
          {sizes.map((single: string, index:any) => {
            return (
              
                <li key={index}>
                  <div className="sidebar-widget-list-left">
                    <button className="text-uppercase">
                      <Checkbox
                        onClick={() => {
                          getSortParams("size", single);
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
    </Sidebar_Size>
  );
};

export default ShopSize;
