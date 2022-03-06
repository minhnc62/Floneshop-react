import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Menu, Dropdown, Input, Badge, Drawer } from "antd";
import styled from "styled-components";
import { xl, lg, md, xs, xxs } from "../../rootStyledComponent";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/cartSlice";
import { selectwishlish } from "../../redux/wishlishSlice";

const Headers = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;

  border-bottom: 0 solid #4a90e2;
  background-color: #fff;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.06);
  @media ${md} {
    height: 6rem;
  }
  @media ${xs} {
    height: 6rem;
  }
  
`;
const Logo = styled.div`
  margin-top: 3.2rem;
  padding-right: 0;
  @media ${md} {
    margin-top: 2rem;
  }
  @media ${xs} {
    margin-top: 1.5rem;
  }
`;

const MainMenu = styled.div``;
const NavUl = styled.ul`
  display: block;

  text-align: center;
  li {
    position: relative;
    display: inline-block;
    padding: 0 3rem;
  }
`;

const NavLinkPage = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 9.4rem;
  display: inline-block;
  letter-spacing: 0.8px;
  color: #555252;
  text-decoration: none;
  &:hover {
    color: #a749ff;
  }
`;

const IconGroup = styled(Row)`
  margin-top: 3.2rem;
  padding-right: 0;
  font-size: 2rem;
  justify-content: flex-end;
  @media ${md} {
    margin-top: 2rem;
  }
  @media ${xs} {
    margin-top: 1.5rem;
  }
  .icon {
    padding-right: 2rem;
    .search-active {
      border: none;
      background-color: #fff;
    }
    .search-content {
      position: absolute;
      z-index: 99;
      top: 250%;
      right: 0;
      visibility: hidden;
      min-width: 20rem;
      transition: all 0.5s ease 0s;
      transform: rotateX(90deg);
      transform-origin: center top 0;
      padding:1rem;
      opacity: 0;
      background: #ffffff none repeat scroll 0 0;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
      &.active {
        visibility: visible;
        transform: rotateX(0deg);
        opacity: 1;
      }
      @media ${xs} {
        top: 180%;
      }
      @media ${md} {
        top: 160%;
      }
      @media ${xxs} {
        left:-500%;
        padding:0;
      }
    }
  }
  .menu-icon {
    padding-right: 0;
  }
  .wishlist {
    font-size: 2rem;
  }
  .cart {
    font-size: 2rem;
  }
`;

// const DropdownSearch = styled(Dropdown)`
//   left: 98rem;
//   top: 10rem;
// `;

const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Menu.Item>
  </Menu>
);
const menuUser = (
  <Menu>
    <Menu.Item key="0">
      <Menu.Item key="0">
        <Link to={"/login"}> Đăng nhập</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={"/login"}> Đăng Ký</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link to={"/login"}> Tài khoản của tôi</Link>
      </Menu.Item>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const cart: [] = useAppSelector(selectCart);
  const wishlish: [] = useAppSelector(selectwishlish);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e: any) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  return (
    <Headers className=" header-padding-2 sticky-bar header-res-padding clearfix   ">
      <div className="container">
        <Row justify="space-between">
          <Col xs={4} md={12} lg={3} xl={4} span={8}>
            <Logo className="logo">
              <Link to={"/"}>
                <img src="image/logo.png" alt="logo" />
              </Link>
            </Logo>
          </Col>
          <Col span={16} lg={16} xl={16} xs={0}>
            <MainMenu>
              <nav>
                <NavUl>
                  <li>
                    <NavLinkPage to={"/"}>Home </NavLinkPage>
                  </li>
                  <li>
                    <NavLinkPage to={"/shop"}>Cửa Hàng</NavLinkPage>
                  </li>
                  <li>
                    <NavLinkPage to={"/about"}>Gioi Thieu</NavLinkPage>
                  </li>
                  <li>
                    <NavLinkPage to={"/contact"}>Liên Hệ</NavLinkPage>
                  </li>
                </NavUl>
              </nav>
            </MainMenu>
          </Col>
          <Col xl={4} lg={5} md={12} span={16}>
            <IconGroup className="header-right-wrap">
              <Col className="icon">
                <div className="same-style header-search ">
                  <button
                    className="search-active"
                    onClick={(e) => handleClick(e)}
                  >
                    <i>
                      <SearchOutlined />
                    </i>
                  </button>
                  <div className="search-content">
                    <form action="">
                      <Search
                        placeholder="input search text"
                        style={{ width: 300 }}
                      />
                    </form>
                  </div>
                </div>
              </Col>
              <Col className="icon">
                <Dropdown overlay={menuUser} trigger={["click"]}>
                  <UserOutlined
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  />
                </Dropdown>
              </Col>
              <Col className="icon">
                <Link to={"/wishlish"}>
                  <Badge count={wishlish.length} showZero offset={[6, 1]}>
                    <HeartOutlined className="wishlist" />
                  </Badge>
                </Link>
              </Col>
              <Col className="icon">
                <Link to={"/cart"}>
                  <Badge count={cart.length} showZero offset={[5, 1]}>
                    <ShoppingOutlined className="cart" />
                  </Badge>
                </Link>
              </Col>
              <Col lg={0} className="icon menu-icon">
                <MenuUnfoldOutlined onClick={showDrawer} />
                <Drawer
                  width={250}
                  placement="right"
                  onClose={onClose}
                  visible={visible}
                >
                  <p>
                    <Link to={"/"}>Home</Link>
                  </p>
                  <p>
                    <Link to={"/shop"}>Cửa Hàng</Link>
                  </p>
                  <p>
                    <Link to={"/about"}>Gioi Thieu</Link>
                  </p>
                  <p>
                    <Link to={"/contact"}>Liên Hệ</Link>
                  </p>
                </Drawer>
              </Col>
            </IconGroup>
          </Col>
        </Row>
      </div>
    </Headers>
  );
};

export default Header;
