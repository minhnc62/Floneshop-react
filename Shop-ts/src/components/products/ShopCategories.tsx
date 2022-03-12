import styled from "styled-components";
import { Sidebar_widget } from "./ShopSearch";
import { Checkbox } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productState, selectProductApi } from "../../redux/productSlice";
import { useEffect, useState } from "react";
export const Sidebar_Categorie = styled(Sidebar_widget)`
  .sidebar-widget-list {
    margin-top: 3rem;
    ul {
      li {
        position: relative;

        align-items: center;

        padding: 0 0 15px;
        &:last-child {
          padding: 0 0 0;
        }

        .sidebar-widget-list-left {
          .checkmark {
            position: absolute;
            left: 0;

            width: 15px;
            height: 15px;

            border: 2px solid #888888;
            border-radius: 3px;
            background-color: #fff;
          }
        }
        button {
          position: relative;

          display: block;

          width: 100%;
          padding: 0;
          padding-left: 30px;

          text-align: left;
          text-transform: capitalize;

          border: none;
          background: none;
        }
      }
    }
  }
`;
interface categoriState {
  getSortParams: any;
  categories: any;
}
const ShopCategories = ({ getSortParams, categories }: categoriState) => {
  
  return (
    <Sidebar_Categorie>
      <h4 className="pro-sidebar-title">Loại </h4>
      <div className="sidebar-widget-list ">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
                {/* <span className="checkmark" /> All Categories */}
                <Checkbox
                  onClick={() => {
                    getSortParams("category", "");
                  }}
                >
                  Tất cả
                </Checkbox>
              </button>
            </div>
          </li>

          {categories.map((single: string, index:any) => {
            return (
            
                <li key={index}>
                  <div className="sidebar-widget-list-left">
                    <button>
                    <Checkbox
                      onClick={() => {
                        getSortParams("category", single);
                      }}
                    >
                      {single}
                    </Checkbox>
                    </button>
                    
                  </div>
                </li>
          
            );
          })}
          {/* <button>
                
                <Checkbox
                  onClick={() => {
                    getSortParams("category", "nam");
                  }}
                >
                  Nam
                </Checkbox>
              </button> */}

          {/* <li>
            <div className="sidebar-widget-list-left">
              
              <button>
               
                <Checkbox
                  onClick={() => {
                    getSortParams("category", "nữ");
                  }}
                >
                  Nữ
                </Checkbox>
              </button>
            </div>
            
          </li> */}
        </ul>
      </div>
    </Sidebar_Categorie>
  );
};

export default ShopCategories;
function categori(categori: any) {
  throw new Error("Function not implemented.");
}
