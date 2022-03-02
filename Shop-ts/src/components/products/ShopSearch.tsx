import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { theme_color } from "../../rootStyledComponent";

export const Sidebar_widget = styled.div`
  .pro-sidebar-title {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: #333;
  }
`;
const Sidebsr_Search = styled.div`
  margin-bottom: 5rem;
  margin-top: 2.5rem;
  .pro-sidebar-search-form {
    position: relative;
    input {
      font-size: 14px;

      height: 43px;
      padding: 2px 55px 2px 18px;

      color: #000;
      border: 1px solid #e6e6e6;
      background: transparent none repeat scroll 0 0;
    }
    button {
      font-size: 20px;

      position: absolute;
      top: 50%;
      right: 4.5rem;

      padding: 0 15px;

      cursor: pointer;
      transition: all 0.3s ease 0s;
      transform: translateY(-50%);

      color: #000;
      border-width: medium medium medium 1px;
      border-style: none none none solid;
      border-color: #a1a5aa;
      border-image: none;
      background: transparent none repeat scroll 0 0;
      &:hover {
        color: ${theme_color};
      }
    }
  }
`;

const ShopSearch = () => {
  return (
    <Sidebar_widget>
      <h4 className="pro-sidebar-title">Search </h4>
      <Sidebsr_Search >
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder="Search here..." />
          <button>
          
          <SearchOutlined/>
          </button>
        </form>
      </Sidebsr_Search>
    </Sidebar_widget>
  );
};

export default ShopSearch;
