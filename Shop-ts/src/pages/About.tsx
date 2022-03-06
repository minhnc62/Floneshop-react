import SectionTitle from "../components/section-title/SectionTitle";
import styled from "styled-components";
import BannerAbout from "../components/banner/BannerAbout";
import FunFact from "../components/FunFact";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = styled.div`
  margin-top: 20rem;
  .container{
      margin-bottom:3rem;
  }
`;

export default () => {

  useEffect(() => {
    window.scrollTo(0,0)
}, [])
  return (
    <About>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/cart"}>Giới thiệu</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <SectionTitle />
      <BannerAbout />
      <FunFact />
    </About>
  );
};
