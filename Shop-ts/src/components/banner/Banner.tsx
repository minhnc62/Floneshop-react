import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { lg, md, sm, xs, xxs } from "../../rootStyledComponent";

const Banner_area = styled.div`
  .no-gutters {
    margin-left: 0;
    margin-right: 0;
    & > .col,
    & > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
      margin: 0;
    }
    .single-banner-2 {
      position: relative;
      overflow: hidden;
      a {
        img {
          width: 100%;
          transition: all 0.5s ease 0s;
          transform: scale(1);
        }
      }
      &:hover a img {
        transform: scale(1.1);
      }
      .banner-content-2 {
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
        text-align: left;
        /* @media ${sm} {
          left: 9rem;
          text-align:center
        } */
        /* @media ${xxs} {
          left: 9rem;
          text-align:center
        } */
        h3 {
          font-family: "Cormorant Garamond";
          font-size: 3.6rem;
          font-weight: 500;
          color: #1c1c1c;
        }
        h4 {
          font-family: "Cormorant Garamond";
          font-size: 1.6rem;
          font-weight: 500;
          margin: 22px 0 4rem;
          color: #010101;
          @media ${lg} {
            margin: 22px 0 34px;
          }
          @media ${md} {
            margin: 15px 0 25px;
          }
          @media ${xs} {
            margin: 10px 0 20px;
          }
        }
        a {
          font-size: 14px;
          display: inline-block;
          width: 28px;
          height: 28px;
          text-align: center;
          color: #1c1c1c;
          border: 2px solid #97584a;
          border-radius: 100%;
          &:hover {
            border: 2px solid #1c1c1c;
          }
        }
      }
    }
    .align_right {
      .banner-content-2 {
        position: absolute;
        top: 50%;
        right: 4rem;
        left: auto;
        transform: translateY(-50%);
        text-align: right;
        /* @media ${sm} {
          left: 2rem;
          text-align: center;
        } */
        /* @media ${xxs} {
          left: 2rem;
          text-align: center;
        } */
        h3 {
          font-family: "Cormorant Garamond";
          font-size: 3.6rem;
          font-weight: 500;
          color: #1c1c1c;
        }
        h4 {
          font-family: "Cormorant Garamond";
          font-size: 1.6rem;
          font-weight: 500;
          margin: 22px 0 4rem;
          color: #010101;
          @media ${lg} {
            margin: 22px 0 34px;
          }
          @media ${md} {
            margin: 15px 0 25px;
          }
          @media ${xs} {
            margin: 10px 0 20px;
          }
        }
        a {
          font-size: 14px;
          display: inline-block;
          width: 28px;
          height: 28px;
          text-align: center;
          color: #1c1c1c;
          border: 2px solid #97584a;
          border-radius: 100%;
          &:hover {
            border: 2px solid #1c1c1c;
          }
        }
      }
    }
  }
`;
const Banner = () => {
  return (
    <Banner_area>
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6">
          <div className="single-banner-2 align_right">
            <Link to={"/shop"}>
              <img src="image/banner/banner-4.jpg" alt="banner" />
            </Link>
            <div className="banner-content-2  ">
              <h3>Thời trang nam</h3>
              <h4>Chọn sản phẩm của bạn</h4>
              <Link to={"/shop"}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-banner-2 ">
            <Link to={"/shop"}>
              <img src="image/banner/banner-5.jpg" alt="banner" />
            </Link>
            <div className="banner-content-2 ">
              <h3>Thời trang nữ</h3>
              <h4>Chọn sản phẩm của bạn</h4>
              <Link to={"/shop"}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Banner_area>
  );
};
export default Banner;
