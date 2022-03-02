import "./header.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Menu, Dropdown, Input, Badge, Drawer, Button } from "antd";
import styled from "styled-components";
import { xl, lg, md, xs } from "../../rootStyledComponent";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/cartSlice";

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
    height:6rem;
  }
  @media ${xs} {
    height:6rem;
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

// const ContainerFluid = styled.div`
//   padding: 0 5rem;
//   @media ${md} {
//     padding: 0 3rem;
//   }
//   @media ${xs} {
//     padding: 0 1rem;
//   }
// `;

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

  const cart:[] = useAppSelector(selectCart);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Headers className=" header-padding-2 sticky-bar header-res-padding clearfix   ">
      <div className="container-fluid">
        <Row justify="space-between" >
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
                <Dropdown overlay={menu} trigger={["click"]}>
                  <SearchOutlined
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  />
                </Dropdown>
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
                  <Badge count={0} showZero offset={[6, 1]}>
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
              <Col lg={0}  className="icon">
                <MenuUnfoldOutlined onClick={showDrawer} />
                <Drawer
                  width={250}
                  placement="right"
                  onClose={onClose}
                  visible={visible}
                >
                  <p><Link to={'/'}>Home</Link></p>
                  <p><Link to={'/shop'}>Cửa Hàng</Link></p>
                  <p><Link to={'/about'}>Gioi Thieu</Link></p>
                  <p><Link to={'/contact'}>Liên Hệ</Link></p>

                  
                  
                  
                  
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
