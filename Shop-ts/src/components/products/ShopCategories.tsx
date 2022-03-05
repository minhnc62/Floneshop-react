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
}
const ShopCategories = ({ getSortParams }: categoriState) => {
  const { products } = useAppSelector(selectProductApi);

  return (
    <Sidebar_Categorie>
      <h4 className="pro-sidebar-title">Categories </h4>
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
                  All Categories
                </Checkbox>
              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              {/* {products.map((product: productState) => {
                product.categori &&
                  product.categori.map((single: string) => {
                    return <Checkbox
                    onClick={() => {
                      getSortParams("category", single);
                      
                    }}
                  >
                    men
                  </Checkbox>;
                  });
              })} */}
              <button>
                {/* <span className="checkmark" /> All Categories */}
                <Checkbox
                  onClick={() => {
                    getSortParams("category", "");
                  }}
                >
                  Men
                </Checkbox>
              </button>
            </div>
            
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              
              <button>
               
                <Checkbox
                  onClick={() => {
                    getSortParams("category", "");
                  }}
                >
                  Women
                </Checkbox>
              </button>
            </div>
            
          </li>
        </ul>
      </div>
    </Sidebar_Categorie>
  );
};

export default ShopCategories;
function categori(categori: any) {
  throw new Error("Function not implemented.");
}

