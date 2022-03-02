import styled from "styled-components";
import { Sidebar_widget } from "./ShopSearch";
import { Checkbox } from "antd";
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

const ShopCategories = () => {
  return (
    <Sidebar_Categorie>
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list ">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
                {/* <span className="checkmark" /> All Categories */}
                <Checkbox>All Categories</Checkbox>
              </button>
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <button>
                {/* <span className="checkmark" /> men */}
                <Checkbox>men</Checkbox>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </Sidebar_Categorie>
  );
};

export default ShopCategories;
