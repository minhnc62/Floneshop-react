import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "./Renderer";
import styled from "styled-components";
import { lg, md, xs, theme_color } from "../../rootStyledComponent";
const Funfact_Area = styled.div`

  position: relative;
  &.pt-100 {
    padding-top: 10rem;
    @media ${xs} {
      padding-top: 60px;
    }
  }
  &.pb-100 {
    padding-bottom: 10rem;
    @media ${xs} {
      padding-bottom: 30px;
    }
  }
  .funfact-content {
    position: relative;
    z-index: 9;
    h2 {
      font-size: 48px;

      margin: 0;

      color: #010101;
      @media ${xs} {
        font-size: 32px;
      }
    }
    .timer {
      margin: 65px 0 0;

      text-align: center;
      @media ${lg} {
        margin: 44px 0 0;
      }
      @media ${xs} {
        margin: 24px 0 0;

      }
    }
  }
  .funfact-res {
    @media ${md} {
      h2 {
        font-size: 35px;
      }
      .timer {
        margin: 30px 0 0;
        span {
          font-size: 30px;

          margin: 0 9px;
          p {
            font-size: 15px;

            margin: 14px 0 0;
          }
        }
      }
    }
  }
  .funfact-btn {
    margin-top: 43px;
    @media ${xs} {
      margin-top: 23px;
    }
    a {
      line-height: 1;
      z-index: 1;
      display: inline-block;
      padding: 16px 56px;
      color: #fff;
      border: 1px solid transparent;
      background-color: #000;
      &:hover {
        border: 1px solid ${theme_color};
      }
    }
  }
  .funfact-btn-red {
    a {
      background-color: #c61a32;
      &:hover {
        border: 1px solid ${theme_color};
      }
    }
  }
  .btn-hover {
    a {
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
  }
  .funfact-btn--round-shape {
    a {
      overflow: hidden;
      border-radius: 30px;
      font-size:1.4rem
    }
  }
`;
const CountDownPromotion = () => {
  return (
    <Funfact_Area className="pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown
                  date={new Date("February 28, 2022 12:12:00")}
                  renderer={Renderer}
                />
              </div>
              <div className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
                <Link to={"/shop"}>Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link to={"/"}>
                <img src="image/deal-2.png" alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Funfact_Area>
  );
};

export default CountDownPromotion;
