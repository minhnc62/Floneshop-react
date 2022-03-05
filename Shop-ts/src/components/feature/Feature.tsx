import styled from "styled-components";
import { lg, md, sm, xl, xs } from "../../rootStyledComponent";

const Support_Area = styled.div`
  background-image: url("image/shape.png");
  &.pt-50 {
    padding-top: 5rem;
  }
  &.pb-40 {
    padding-bottom: 4rem;
  }
  .container-fluid {
    padding-right: 70px;
    padding-left: 70px;
    @media ${xl} {
      padding-right: 15px;
      padding-left: 15px;
    }
    @media ${lg} {
      padding-right: 30px;
      padding-left: 30px;
    }
    @media ${md} {
      padding-right: 40px;
      padding-left: 40px;
    }
    @media ${xs} {
      padding-right: 15px;
      padding-left: 15px;
    }
    @media ${sm} {
      padding-right: 30px;
      padding-left: 30px;
    }
    .support-wrap-3 {
      position: relative;

      overflow: hidden;

      padding: 30px 10px 24px;
      .support-icon-2 {
        position: absolute;
        right: 0;
        bottom: 0;

        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
          
        }
      }
      .support-content-3 {
        p {
          font-size: 16px;

          margin: 4px 0 0;

          text-transform: uppercase;

          color: #000000;
          @media ${xs} {
            font-size: 15px;
          }
          @media ${sm} {
            font-size: 14px;
          }
        }
      }
      
    }
    .color-1 {
      background-color: rgb(204, 251, 233);
      &:hover .support-icon-2 img {
        animation: 500ms ease-in-out 0s normal none 1 running tada;
      }
    }
    .color-2 {
      background-color: rgb(242, 251, 204);
      &:hover .support-icon-2 img {
        animation: 500ms ease-in-out 0s normal none 1 running tada;
      }
    }
    .color-3 {
      background-color: rgb(221, 251, 204);
      &:hover .support-icon-2 img {
        animation: 500ms ease-in-out 0s normal none 1 running tada;
      }
      .support-content-3 {
        img {
          padding-bottom: 0.7rem;
        }
      }
    }
    .mb-10 {
    }
  }

  .padding-10-row-col {
    .row {
      margin-right: -5px;
      margin-left: -5px;
      div[class^="col-"] {
        padding-right: 5px;
        padding-left: 5px;
      }
    }
  }
`;

const Feature = () => {
  return (
    <Support_Area className=" pt-50 pb-40 ">
      <div className="container-fluid padding-10-row-col">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="support-wrap-3 text-center mb-10 color-1">
              <div className="support-icon-2">
                <img
                  className="animated"
                  src="image/support-5.png"
                  alt="icon"
                />
              </div>
              <div className="support-content-3">
                <img src="image/support-8.png" alt="logo" />
                <p>Giao hàng miễn phí cho các đơn đặt hàng</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="support-wrap-3 text-center mb-10 color-2">
              <div className="support-icon-2">
                <img
                  className="animated"
                  src="image/support-6.png"
                  alt="icon"
                />
              </div>
              <div className="support-content-3">
                <img src="image/support-9.png" alt="logo" />
                <p>Đảm bảo trả lại dưới 7 ngày</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="support-wrap-3 text-center mb-10 color-3">
              <div className="support-icon-2">
                <img
                  className="animated"
                  src="image/support-7.png"
                  alt="icon"
                />
              </div>
              <div className="support-content-3">
                <img src="image/support-10.png" alt="logo" />
                <p>Trên mỗi đơn đặt hàng trên 500.000 đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Support_Area>
  );
};

export default Feature;
