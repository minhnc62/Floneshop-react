import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";
import {sm, xl, xxs, lg, md, xs , theme_color} from "../../rootStyledComponent";

const FooterArea = styled.div`
  position: relative;
  background-color: #f6f6f8;
  padding-bottom: 7rem;
  padding-top: 10rem;
`;

const Container = styled.div`
  .container-fluid{
    padding:0 1rem!important;
    .copyright {
      font-size:1.4rem;
    margin-bottom: 3rem;
  }
  }
  
`;
const FooterLogo = styled.div`
  
  margin-bottom: 1.2rem;
`;

const FooterWidget = styled.div`
  margin-left: 3rem;
  margin-bottom: 3rem;
  @media ${lg} {
    margin-left: 0;
  }
  @media ${md} {
    margin-left: 0;
  }
  @media ${xs} {
    margin-left: 1rem;
  }
  
  

  .footer-title h3 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1;
    margin: 0 0 1.6rem;
    color: #313131;
  }
  .footer-list li {
    font-size:1.4rem;
    margin: 0 0 1.1rem;
    &:hover {
      color: #a749ff;
    }
  }
  .footer-list a {
    letter-spacing: 0.3px;
    color: #5d5d5d;
  }
  &.ml-70 {
    margin-left: 7rem;
    @media ${md} {
    margin-left: -130px;
  }
  @media ${xs} {
    margin-left: 1rem;
  }
  @media ${sm} {
    margin-left: -90px;
  }
  @media ${lg} {
    margin-left: 1rem;
  }
  }

  .subscribe-style p {
    font-size:1.4rem;
    margin: 0 0 2rem;
    color: #7a7a7a;
  }
`;

const SubscribeForm = styled.div`
  input {
    font-size: 1.4rem;
    padding: .2rem 1rem .2rem 0;
    color: #333;
    border: none;
    border-bottom: .2rem solid #ebebeb;
    background: transparent;
    width:100%;
    &:focus{
        outline: none;
    }
  }
  .mc-news {
    display: none;
  }
  .clear {
    button {
      font-size: 1.4rem;
      line-height: 1;

      width: auto;
      height: auto;
      margin: 1.3rem 0 0;
      padding: 0 0 1px;

      text-transform: uppercase;

      color: #313131;
      border: none;
      border-bottom: 2px solid #9b9b9c;
      background: none;
      &:hover {
        color: ${theme_color};
        border-bottom: 2px solid ${theme_color};
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterArea className="Footer">
      <Container>
        <div  className="container-fluid">
        <Row>
          <Col lg={4} sm={8} span={24}>
            <div className="copyright ">
              <FooterLogo>
                <Link to={"/"}>
                  <img src="image/logo.png" alt="logo" />
                </Link>
              </FooterLogo>
              <p>All Rights Reserved</p>
            </div>
          </Col>
          <Col lg={4} sm={8} span={24}>
            <FooterWidget>
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Store location</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Orders tracking</Link>
                  </li>
                </ul>
              </div>
            </FooterWidget>
          </Col>
          <Col lg={4} sm={8} span={24}>
            <FooterWidget>
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"#/"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={"#/"}>Support Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Size guide</Link>
                  </li>
                  <li>
                    <Link to={"/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </FooterWidget>
          </Col>
          <Col lg={4} sm={12} span={24}>
            <FooterWidget>
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"/about"}>Facebook</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Twitter</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Instagram</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Youtube</Link>
                  </li>
                </ul>
              </div>
            </FooterWidget>
          </Col>
          <Col lg={8} sm={12} span={24}>
            <FooterWidget className="ml-70">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="subscribe-style">
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <SubscribeForm>
                  <div className="mc-form">
                    <div>
                      <input
                        id="mc-form-email"
                        className="email"
                        type="email"
                        placeholder="Enter your email address..."
                      />
                    </div>
                    <div className="clear">
                      <button className="button">SUBSCRIBE</button>
                    </div>
                  </div>
                </SubscribeForm>
              </div>
            </FooterWidget>
          </Col>
        </Row>
        </div>
        
      </Container>
    </FooterArea>
  );
};

export default Footer;
