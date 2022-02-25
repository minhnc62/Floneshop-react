import { Link } from "react-router-dom";
import styled from "styled-components";
import { lg, md, theme_color, xs } from "../../rootStyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const BannerAbout_Area = styled.div`
  &.pb-70 {
    padding-bottom: 7rem;
    @media ${xs} {
      padding-bottom: 30px;
    }
    .single-banner {
      position: relative;
      overflow: hidden;
      a {
        img {
          width: 100%;

          transition: all 0.5s ease 0s;
          transform: scale(1);
        }
      }
      &:hover img {
        transform: scale(1.2);
      }
      .banner-content {
    position: absolute;
    top: 40px;
    left: 36px;

    content: "";
    @media #{$lg-layout} {
      top: 20px;
      left: 20px;
    }
    @media #{$md-layout} {
      top: 10px;
      left: 15px;
    }
    @media #{$xs-layout} {
      top: 50%;
      left: 15px;

      transform: translateY(-50%);
    }
    h3 {
      font-family: "Cormorant Garamond";
      font-size: 36px;
      font-weight: 600;

      margin: 0;

      color: #915342;
      @media #{$md-layout} {
        font-size: 27px;
      }
      @media #{$xs-layout} {
        font-size: 30px;
      }
    }
    h4 {
      font-family: "Cormorant Garamond";
      font-size: 18px;
      font-weight: 600;

      margin: 3px 0 58px;

      color: #010101;
      @media #{$lg} {
        margin: 3px 0 25px;
      }
      @media ${lg} {
        margin: 3px 0 15px;
      }
      @media ${md} {
        margin: 3px 0 8px;
      }
      @media ${xs} {
        margin: 3px 0 20px;
      }
      span {
        font-size: 20px;
        line-height: 1;

        position: relative;
        top: 2px;

        display: inline-block;

        margin: 0 0 0 2px;

        color: #935644;
      }
    }
    a {
      font-size: 14px;

      display: inline-block;

      width: 28px;
      height: 28px;

      text-align: center;

      color: #97584a;
      border: 2px solid #97584a;
      border-radius: 100%;
      i {
        line-height: 25px;
      }
      &:hover {
        color: ${theme_color};
        border: 2px solid ${theme_color};
      }
    }
    &.banner-pink {
      a {
        color: #ed59a0;
        border: 2px solid #ed59a0;
        &:hover {
          color: ${theme_color};
          border: 2px solid ${theme_color};
        }
      }
    }

    &--style2 {
      h3 {
        color: #1c1c1c;
      }
      a {
        color: #c61a32;
        border-color: #c61a32;
      }
    }
  }
    }
  }
`;

const BannerAbout = () => {
  return (
    <BannerAbout_Area className="pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className={`single-banner `}>
              <Link to={"/"}>
                <img src="image/banner/banner-1.jpg" alt=" banner" />
              </Link>
              <div className="banner-content">
                <h3>Watches</h3>
                <h4>
                Starting at <span>$99.00</span>
                </h4>
                <Link to={"/"}>
                <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className={`single-banner `}>
              <Link to={"/"}>
                <img src="image/banner/banner-2.jpg" alt=" banner" />
              </Link>
              <div className="banner-content">
                <h3>Watches</h3>
                <h4>
                Starting at <span>$99.00</span>
                </h4>
                <Link to={"/"}>
                <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className={`single-banner `}>
              <Link to={"/"}>
                <img src="image/banner/banner-3.jpg" alt=" banner" />
              </Link>
              <div className="banner-content">
                <h3>Watches</h3>
                <h4>
                Starting at <span>$99.00</span>
                </h4>
                <Link to={"/"}>
                <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerAbout_Area>
  );
};
export default BannerAbout;
