import LocationMap from "../components/contact/LocationMap";
import styled from "styled-components";
import { lg, md, theme_color, xs } from "../rootStyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEarthAsia,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Contact_Area = styled.div`
margin-top:10rem;
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
  .container .contact-map {
    margin-top:2rem;
    position: relative;
    margin-bottom: 3rem;
    height: 56rem;
    @media ${xs} {
      height: 40rem;
    }
  }
`;

const Custom = styled.div`
  
  margin-right: -5px;
  margin-left: -5px;
  & div[class^="col-"] {
    padding-right: 5px;
    padding-left: 5px;
    @media ${md} {
      padding-right: 15px;
      padding-left: 15px;
    }
    @media ${xs} {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .contact-info-wrap {
    padding: 12rem 7rem 0 9rem;
    
    @media ${lg} {
      padding: 12rem 2rem 0 4rem;
    }
    
    @media ${xs} {
      margin-top: 2rem;
      margin-bottom: 3rem;
      padding: 5rem 2rem 0 3rem;
    }
    .single-contact-info {
      display: flex;
      align-items: center;

      margin-bottom: 4rem;
      .contact-icon {
        margin-right: 2rem;
        font-size: 1.8rem;
        line-height: 4rem;
        display: inline-block;

        width: 4rem;
        height: 4rem;
        transition: all 0.3s ease 0s;
        text-align: center;
        color: #252525;
        border: 1px solid #252525;
        border-radius: 100%;
      }
      .contact-info-dec {
        p {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 9px;
          color: #4d4d4d;
          a {
            color: #404040;
          }
          &:last-child {
            margin: 0;
          }
        }
      }
      &:hover .contact-icon {
        color: #fff;
        background-color: ${theme_color};
      }
    }
  }
`;

const Contact_Social = styled.div`
  margin-top: 5.8rem;
  h3 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 0 0 1.6rem;
    color: #4d4d4d;
  }
  ul {
    padding-left: 0;
    li {
      display: inline-block;

      margin: 0 1rem;
      a {
        font-size: 1.6rem;

        color: #4d4d4d;
        &:hover {
          color: ${theme_color};
        }
      }
    }
  }
`;

const Contact_Form = styled.div`
  padding: 5rem 110px 5rem 110px;

  background-color: #f3f3f3;
  @media ${lg} {
    padding: 5rem 5rem 5rem 5rem;
  }
  @media ${md} {
    padding: 5rem 3rem 5rem 3rem;
  }
  @media ${xs} {
    padding: 5rem 3rem 5rem 3rem;
  }
  .contact-title {
    margin-bottom: 3rem;
    h2 {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 1;
      margin-bottom: 3.6rem;
      color: #464646;
    }
  }
  .contact-form-style {
    .row {
      & div[class^="col-"] {
        padding-right: 15px;
        padding-left: 15px;
      }
    }
    input,
    textarea {
      height: 4rem;
      margin-bottom: 3rem;
      padding: 0.2rem 1.4rem;
        width:100%;
        font-size:1.4rem;
      color: #000;
      border: 1px solid #c1c1c1;
      background: transparent;
      &:focus {
    outline: 0;
}
    }
    textarea {
      height: 17.5rem;
      margin-bottom: 0;
      padding: 2rem 1.4rem;
    }
    button {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1;

      margin-top: 3.8rem;
      padding: 1.5rem 5.2rem;

      text-transform: uppercase;

      color: #fff;
      border: none;
      background-color: #404040;
      &:hover {
        background-color: ${theme_color};
      }
    }
  }
`;

export default () => {

  useEffect(() => {
    window.scrollTo(0,0)
}, [])
  return (
    <Contact_Area className=" pt-100 pb-100">
      <div className="container">
      <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/cart"}>Liên Hệ</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact-map ">
          <LocationMap />
        </div>
        <Custom className="row  ">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info-wrap">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPhone}
                  ></FontAwesomeIcon>
                </div>
                <div className="contact-info-dec">
                  <p>Số điện thoại</p>
                  <p>+ 01668487831</p>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="contact-icon">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faEarthAsia}
                  ></FontAwesomeIcon>
                </div>
                <div className="contact-info-dec">
                  <p>
                    <a href="mailto:urname@email.com">Email</a>
                  </p>
                  <p>
                    <a href="//urwebsitenaem.com">urwebsitenaem.com</a>
                  </p>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="contact-icon">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLocationDot}
                  ></FontAwesomeIcon>
                </div>
                <div className="contact-info-dec">
                  <p>Địa chỉ </p>
                  <p>48 Tố Hữu</p>
                </div>
              </div>
              <Contact_Social className="text-center">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a href="//facebook.com">
                      <FacebookOutlined />
                    </a>
                  </li>

                  <li>
                    <a href="//thumblr.com">
                      <InstagramOutlined />
                    </a>
                  </li>
                  <li>
                    <a href="//vimeo.com">
                      <YoutubeOutlined />
                    </a>
                  </li>
                  <li>
                    <a href="//twitter.com">
                      <TwitterOutlined />
                    </a>
                  </li>
                </ul>
              </Contact_Social>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <Contact_Form>
              <div className="contact-title">
                <h2>Get In Touch</h2>
              </div>
              <form className="contact-form-style">
                <div className="row">
                  <div className="col-lg-6">
                    <input name="name" placeholder="Name*" type="text" />
                  </div>
                  <div className="col-lg-6">
                    <input name="email" placeholder="Email*" type="email" />
                  </div>
                  <div className="col-lg-12">
                    <input name="subject" placeholder="Subject*" type="text" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      defaultValue={""}
                    />
                    <button className="submit" type="submit">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-messege" />
            </Contact_Form>
          </div>
        </Custom>
      </div>
    </Contact_Area>
  );
};
