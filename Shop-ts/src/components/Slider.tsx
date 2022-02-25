import { Link } from "react-router-dom";
import styled from "styled-components";
import { lg, md, sm, theme_color, xl, xs } from "../rootStyledComponent";
import { Carousel } from "antd";

const Slider_Content = styled.div`
  height: 50rem;
  width: 100%;
  //margin-top: -6px;
  @media ${xs} {
    text-align: center;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;

    position: relative;

    margin-bottom: 0;
    margin-left: 135px;

    color: #000000;
    @media ${xs} {
      margin-left: 0;
    }
    @media ${sm} {
      margin-left: 60px;
    }
    &::before {
      position: absolute;
      top: 14px;
      left: -135px;

      width: 120px;
      height: 2px;

      content: "";

      background-color: #000000;
      @media ${xs} {
        display: none;
      }
      @media ${sm} {
        left: 80px;
        display: block;
        width: 60px;
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
    margin: 6px 0 37px;
    color: #010101;

  }
  .slider-btn {
    a {
      font-size: 16px;
      line-height: 1;
      display: inline-block;
      padding: 19px 50px 21px;
      text-transform: uppercase;
      color: #010101;
      border: 1px solid #333;
      background-color: #eeeff1;
      @media ${xs} {
        padding: 14px 30px 16px;
      }
      &:hover {
        color: #fff;
        border: 1px solid ${theme_color};
      }
    }
  }
  .btn-hover {
    a,
    button {
      position: relative;

      transition: all 0.5s ease-in-out 0s;
      &:hover {
        color: #fff;
        border: 1px solid ${theme_color};
      }
      &::before,
      &::after {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 100%;

        content: "";
        transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      &::after {
        right: 0;
        left: auto;

        width: 0;

        background: ${theme_color};
      }
      &:hover::after {
        right: auto;
        left: 0;

        width: 100%;
      }
    }
    .rounden-btn {
      overflow: hidden;

      border-radius: 50px;
      &:before,
      &:after {
        border-radius: 50px;
      }
    }
  }
`;

const contentStyle_One:any = {
  paddingLeft:'5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    textAlign: 'start',
  background: 'url("image/slider/slider-12.jpg")',
};
const contentStyle_Two:any = {
  display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft:'5rem',
    textAlign: 'start',
  background: 'url("image/slider/slider-12-2.jpg")',
};

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <Slider_Content style={contentStyle_One}>
          <h3 className="animated no-style">ancgeadgs</h3>
          <h1 className="animated">
            New Collection <br /> Sale 20%
          </h1>
          <div className="slider-btn btn-hover">
            <Link className="animated rounden-btn" to={"/"}>
              SHOP NOW
            </Link>
          </div>
        </Slider_Content>
      </div>

      <div>
        <Slider_Content style={contentStyle_Two}>
          <h3 className="animated no-style">ancgeadgs</h3>
          <h1 className="animated">
            New Collection <br /> Sale 20%
          </h1>
          <div className="slider-btn btn-hover">
            <Link className="animated rounden-btn" to={"/"}>
              SHOP NOW
            </Link>
          </div>
        </Slider_Content>
        
      </div>
    </Carousel>
  );
};
export default Slider;
