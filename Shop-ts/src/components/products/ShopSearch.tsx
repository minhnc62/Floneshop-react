import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { theme_color } from "../../rootStyledComponent";
import { Input } from "antd";
import {
  selectProductApi,
  searchProductByTitle,
  changeTitle,
} from "../../redux/productSlice";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
const { Search } = Input;

const ShopSearch = () => {
  const dispatch = useAppDispatch();
  const { error, title } = useAppSelector(selectProductApi);

  let controller: any;
  const handleChange = (e: any) => {
    controller && controller.abort();
    controller = new AbortController();
    const { payload } = dispatch(changeTitle(e.target.value)); //Lưu lại text người dùng nhập vào

    if (payload.trim().length > 0) {
      dispatch(searchProductByTitle({ signal: controller.signal }));
    }
  };
  return (
    <Sidebar_widget>
      <h4 className="pro-sidebar-title">Search </h4>
      <Sidebsr_Search>
        {/* <form
          className="pro-sidebar-search-form"
          action=""
          onSubmit={(e) => e.preventDefault()}
          onChange={handleChange}
        >
          <input
            type="text"
            placeholder="Search here..."
            value={title}
            onChange={handleChange}
            className="title"
          />
          <button>
            <SearchOutlined />
          </button>
          {error && <span className="error"> Không có sản phẩm nào</span>}
        </form> */}
        <Search
          placeholder="Search here..."
          onSearch={title}
          onChange={handleChange}
          style={{ width: 200 }}
        />
        {/* {error && <span className="error"> Không có sản phẩm nào</span>} */}
      </Sidebsr_Search>
    </Sidebar_widget>
  );
};

export default ShopSearch;
