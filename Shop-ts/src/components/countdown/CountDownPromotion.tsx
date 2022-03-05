import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "./Renderer";
import styled from "styled-components";
import { lg, md, xs, theme_color } from "../../rootStyledComponent";
import ShoppingButton from "../button/ShoppingButton";
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
  
`;
const CountDownPromotion = () => {
  return (
    <Funfact_Area className="pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Ưu đãi trong ngày</h2>
              <div className="timer">
                <Countdown
                  date={new Date("March 7, 2022 12:12:00")}
                  renderer={Renderer}
                />
              </div>
              
              <ShoppingButton title="Mua ngay"/>
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
