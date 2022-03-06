import { Link } from "react-router-dom";
import styled from "styled-components";
import { lg, md, sm, theme_color, xl, xs, xxs } from "../rootStyledComponent";
import { Carousel } from "antd";
import ShoppingButton from "./button/ShoppingButton";

const Slider_Content = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: start;
  flex-direction: column;
  height: 60rem;
  width: 100%;
  background-image: url("image/slider/slider-1.png");
  background-size: cover;
  background-position: 50%;
  &.content-one {
    background-image: url("image/slider/slider-2.png");
  }
  @media ${xs} {
    background-position: 65%;
  }
  @media ${xxs} {
    filter: brightness(90%);

    background-position: 72%;
    text-align: center;
    padding-left: 0;
    align-items: center;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 500;

    position: relative;

    margin-bottom: 0;
    margin-left: 13.5rem;

    color: #000000;
    @media ${xs} {
      margin-left: 0;
    }
    @media ${sm} {
      margin-left: 6rem;
    }
    &::before {
      position: absolute;
      top: 1.4rem;
      left: -13.5rem;

      width: 12rem;
      height: 2px;

      content: "";

      background-color: #000000;
      @media ${xs} {
        display: none;
      }
      @media ${sm} {
        left: 8rem;
        display: block;
        width: 6rem;
      }
    }

    &.no-style {
      margin-left: 0;
      @media ${sm} {
        margin-left: 0;
      }
      &:before {
        display: none;
      }
    }
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  h1 {
    font-size: 5rem;
    line-height: 7rem;
    margin: 0.6rem 0 3.8rem;
    color: #010101;
  }
`;

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <Slider_Content>
          <div className="container">
            <h3 className="animated no-style">Ưu đãi này ngay hôm nay</h3>
            <h1 className="animated">
              Bộ sưu tập mới <br /> Giảm 20%
            </h1>
            <ShoppingButton title="Mua ngay" />
          </div>
        </Slider_Content>
      </div>

      <div>
        <Slider_Content className="content-one">
          <div className="container">
            <h3 className="animated no-style">Ưu đãi này ngay hôm nay</h3>
            <h1 className="animated">
              Bộ sưu tập mới <br /> Giảm 20%
            </h1>
            <ShoppingButton title="Mua ngay" />
          </div>
        </Slider_Content>
      </div>
    </Carousel>
  );
};
export default Slider;
